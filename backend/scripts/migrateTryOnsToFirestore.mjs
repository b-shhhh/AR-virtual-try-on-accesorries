import { readFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { FieldValue, Timestamp } from "firebase-admin/firestore";
import { getFirestoreDb } from "../config/firebaseAdmin.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const STORE_FILE = join(__dirname, "../data/store.json");

function toFirestoreTimestamp(value) {
  if (!value) {
    return FieldValue.serverTimestamp();
  }

  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? FieldValue.serverTimestamp() : Timestamp.fromDate(date);
}

async function hasAlreadyMigrated(db, localId) {
  if (!localId) {
    return false;
  }

  const snapshot = await db
    .collection("tryOns")
    .where("migratedFromLocalId", "==", localId)
    .limit(1)
    .get();

  return !snapshot.empty;
}

async function migrateTryOns() {
  const raw = await readFile(STORE_FILE, "utf8");
  const store = JSON.parse(raw);
  const tryOns = Array.isArray(store.tryOns) ? store.tryOns : [];
  const db = await getFirestoreDb();

  let migrated = 0;
  let skipped = 0;

  for (const tryOn of tryOns) {
    if (await hasAlreadyMigrated(db, tryOn.id)) {
      skipped += 1;
      continue;
    }

    const { id, timestamp, createdAt, ...data } = tryOn;
    const firestoreTimestamp = toFirestoreTimestamp(createdAt ?? timestamp);

    await db.collection("tryOns").add({
      ...data,
      migratedFromLocalId: id ?? null,
      timestamp: firestoreTimestamp,
      createdAt: firestoreTimestamp,
      migratedAt: FieldValue.serverTimestamp()
    });

    migrated += 1;
  }

  console.log(`Try-on migration complete. Migrated: ${migrated}. Skipped existing: ${skipped}.`);
}

migrateTryOns().catch((error) => {
  console.error("Try-on migration failed:", error);
  process.exit(1);
});

