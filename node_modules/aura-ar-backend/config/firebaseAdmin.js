import { existsSync } from "node:fs";
import { readFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { cert, getApps, initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DEFAULT_SERVICE_ACCOUNT_PATH = join(__dirname, "../serviceAccountKey.json");

function getServiceAccountPath() {
  const configuredPath =
    process.env.FIREBASE_SERVICE_ACCOUNT_PATH || process.env.GOOGLE_APPLICATION_CREDENTIALS;

  return configuredPath ? resolve(configuredPath) : DEFAULT_SERVICE_ACCOUNT_PATH;
}

async function getFirebaseApp() {
  const existingApp = getApps()[0];

  if (existingApp) {
    return existingApp;
  }

  const serviceAccountPath = getServiceAccountPath();

  if (!existsSync(serviceAccountPath)) {
    throw new Error(
      `Firebase service account file not found at ${serviceAccountPath}. Set FIREBASE_SERVICE_ACCOUNT_PATH or place serviceAccountKey.json in backend/.`
    );
  }

  const serviceAccount = JSON.parse(await readFile(serviceAccountPath, "utf8"));

  return initializeApp({
    credential: cert(serviceAccount)
  });
}

export async function getFirestoreDb() {
  await getFirebaseApp();
  return getFirestore();
}

