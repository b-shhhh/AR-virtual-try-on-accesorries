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
        arSupported: model.arSupported,
        createdAt: serverTimestamp()
      };

      await setDoc(doc(db, "products", model.id), productData);
      console.log(`✓ Added: ${model.name}`);
    } catch (error) {
      console.error(`✗ Error adding ${model.name}:`, error.message);
    }
  }

  console.log(`\nDone! ${models.length} products added to Firestore.`);
}

// Run if called directly
if (typeof window !== 'undefined' && window.location) {
  // Browser environment - can be called from console
  window.seedFirestoreProducts = seedFirestoreProducts;
}