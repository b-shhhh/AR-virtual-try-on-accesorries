import { initializeApp } from "firebase/app";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { createProductCatalog } from "../src/data/productCatalog.js";
import { firebaseConfig } from "../src/firebase/config.js";

function hasRealFirebaseConfig(config) {
  return Boolean(
    config.apiKey &&
      config.authDomain &&
      config.projectId &&
      config.appId &&
      config.apiKey !== "your-api-key"
  );
}

if (!hasRealFirebaseConfig(firebaseConfig)) {
  console.error("Add your real Firebase web config in src/firebase/config.js first.");
  process.exit(1);
}

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const products = createProductCatalog(100);

for (const product of products) {
  await setDoc(doc(db, "products", product.id), product);
}

console.log(`Seeded ${products.length} products into Firestore.`);
