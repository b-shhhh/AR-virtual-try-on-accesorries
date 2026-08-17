// backend/scripts/exportTryOns.mjs

import { writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { getFirestoreDb } from "../config/firebaseAdmin.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUTPUT_PATH = join(__dirname, "../data/tryOns-export.json");

function average(values) {
  if (values.length === 0) {
    return null;
  }
  const total = values.reduce((sum, value) => sum + value, 0);
  return Number((total / values.length).toFixed(2));
}

function median(values) {
  if (values.length === 0) {
    return null;
  }
  const sorted = [...values].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 !== 0
    ? sorted[mid]
    : Number(((sorted[mid - 1] + sorted[mid]) / 2).toFixed(2));
}

function countBy(documents, field) {
  const counts = {};
  for (const doc of documents) {
    const key = doc[field] ?? "(missing)";
    counts[key] = (counts[key] ?? 0) + 1;
  }
  return counts;
}

async function exportTryOns() {
  const db = await getFirestoreDb();
  const snapshot = await db.collection("tryOns").get();

  const documents = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data()
  }));

  await writeFile(OUTPUT_PATH, `${JSON.stringify(documents, null, 2)}\n`, "utf8");

  const fpsValues = documents
    .map((entry) => entry.fps)
    .filter((value) => typeof value === "number" && Number.isFinite(value));

  const faceRatioValues = documents
    .map((entry) => entry.faceRatio)
    .filter((value) => typeof value === "number" && Number.isFinite(value));

  const trackingFpsValues = documents
    .filter((entry) => entry.trackingStatus === "Tracking")
    .map((entry) => entry.fps)
    .filter((value) => typeof value === "number" && Number.isFinite(value));

  const uniqueSessionIds = new Set(
    documents.map((entry) => entry.sessionId).filter(Boolean)
  );

  console.log(`\nExported ${documents.length} try-on session(s) to ${OUTPUT_PATH}\n`);
  console.log("--- Summary ---");
  console.log(`Total documents:              ${documents.length}`);
  console.log(`Unique sessionIds:            ${uniqueSessionIds.size}`);
  console.log(`Documents with fps:            ${fpsValues.length}`);
  console.log(`Documents with faceRatio:      ${faceRatioValues.length}`);
  console.log(`Average FPS (all):             ${average(fpsValues) ?? "N/A"}`);
  console.log(`Median FPS (all):              ${median(fpsValues) ?? "N/A"}`);
  console.log(`Min FPS:                       ${fpsValues.length ? Math.min(...fpsValues) : "N/A"}`);
  console.log(`Max FPS:                       ${fpsValues.length ? Math.max(...fpsValues) : "N/A"}`);
  console.log(`FPS values > 40:               ${fpsValues.filter((v) => v > 40).length}`);
  console.log(`Average FPS (Tracking only):   ${average(trackingFpsValues) ?? "N/A"}`);
  console.log(`Average Face Ratio:            ${average(faceRatioValues) ?? "N/A"}`);
  console.log("\ntrackingStatus breakdown:");
  console.log(countBy(documents, "trackingStatus"));
  console.log("---------------\n");
}

exportTryOns()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("Failed to export try-on sessions:", error);
    process.exit(1);
  });