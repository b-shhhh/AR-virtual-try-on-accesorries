// Clear and re-seed Firestore with current products
// Run: node clear-and-seed.mjs

import { initializeApp } from "firebase/app";
import { getFirestore, setDoc, doc, serverTimestamp, getDocs, collection, deleteDoc } from "firebase/firestore";
import { accessories } from "./src/data/accessories.js";

const firebaseConfig = {
  apiKey: "AIzaSyDp8gzj1MprdEMoNO-MtsxYW4vsJ0n9HNk",
  authDomain: "ar-virtual-jewelry-try-on.firebaseapp.com",
  projectId: "ar-virtual-jewelry-try-on",
  storageBucket: "ar-virtual-jewelry-try-on.firebasestorage.app",
  messagingSenderId: "821485998234",
  appId: "1:821485998234:web:fd422bf60bf4da989a0f23"
};

async function clearAndSeedFirestore() {
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  // Step 1: Get all existing products
  console.log("Fetching existing products from Firestore...");
  const productsSnapshot = await getDocs(collection(db, "products"));
  const existingIds = productsSnapshot.docs.map(doc => doc.id);
  console.log(`Found ${existingIds.length} existing products in Firestore`);

  // Step 2: Delete all existing products
  console.log("\nDeleting old products...");
  for (const doc of productsSnapshot.docs) {
    await deleteDoc(doc.ref);
    console.log(`✗ Deleted: ${doc.id}`);
  }
  console.log(`\nDeleted ${existingIds.length} old products`);

  // Step 3: Seed with current products
  console.log(`\nSeeding ${accessories.length} current products to Firestore...`);
  
  for (const accessory of accessories) {
    try {
      // Determine placement based on category
      const placement = accessory.category === "sunglasses" ? "eyes" : "ears";
      
      // Default values for missing fields
      const price = accessory.price ?? 1499;
      const description = accessory.description ?? `${accessory.name} - AR try-on compatible.`;
      const arSupported = accessory.arSupported ?? true;
      
      const productData = {
        id: accessory.id,
        name: accessory.name,
        category: accessory.category,
        price: price,
        currency: "NPR",
        description: description,
        modelUrl: accessory.modelUrl,
        thumbnailUrl: accessory.thumbnailUrl,
        tryOnImageUrl: accessory.tryOnImageUrl,
        arSupported: arSupported,
        placement: placement,
        createdAt: serverTimestamp()
      };

      await setDoc(doc(db, "products", accessory.id), productData);
      console.log(`✓ Added: ${accessory.name}`);
    } catch (error) {
      console.error(`✗ Error: ${accessory.name}`, error.message);
    }
  }

  console.log(`\nDone! ${accessories.length} products added to Firestore.`);
}

clearAndSeedFirestore().catch(console.error);