// Run this in browser console to seed Firestore
// Or import and call seedFirestore() from your app

import { getFirestore, setDoc, doc, serverTimestamp } from "firebase/firestore";
import { app } from "./app";
import { getModelCatalog } from "../data/modelsCatalog";

export async function seedFirestore() {
  const db = getFirestore(app);
  const models = getModelCatalog();

  console.log(`Seeding ${models.length} products to Firestore...`);

  for (const model of models) {
    try {
      const productData = {
        id: model.id,
        name: model.name,
        category: model.category,
        price: model.price,
        currency: "NPR",
        description: model.description,
        modelUrl: `/3d models/${model.modelFile}`,
        thumbnailUrl: `https://source.unsplash.com/800x800/?${model.category},jewelry,product`,
        tryOnImageUrl: `/3d models/${model.modelFile}`,
        arSupported: true,
        createdAt: serverTimestamp()
      };

      await setDoc(doc(db, "products", model.id), productData);
      console.log(`✓ Added: ${model.name}`);
    } catch (error) {
      console.error(`✗ Error: ${model.name}`, error);
    }
  }

  console.log(`Done! ${models.length} products added.`);
}