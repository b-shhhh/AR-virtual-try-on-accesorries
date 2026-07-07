import { getFirestore, collection, setDoc, doc, serverTimestamp } from "firebase/firestore";
import { firebaseEnabled, app } from "./app";
import { getModelCatalog } from "../data/modelsCatalog";

export async function seedFirestoreProducts() {
  if (!firebaseEnabled || !app) {
    console.error("Firebase is not configured. Please update your config in src/firebase/config.js");
    return;
  }

  const db = getFirestore(app);
  const models = getModelCatalog();

  console.log(`Seeding ${models.length} products to Firestore...`);

  for (const model of models) {
