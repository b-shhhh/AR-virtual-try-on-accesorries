import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getFirestore, collection, addDoc, setDoc, doc } from "firebase/firestore";
import { firebaseEnabled, app } from "./app";
import { getModelCatalog } from "../data/modelsCatalog";

async function uploadModelsToFirebase() {
  if (!firebaseEnabled || !app) {
    console.error("Firebase is not configured. Please update your config in src/firebase/config.js");
    return;
  }

  const storage = getStorage(app);
  const db = getFirestore(app);
  const models = getModelCatalog();

  console.log(`Found ${models.length} models to upload...`);

  for (const model of models) {
    try {
      // For now, we'll create a product entry with a placeholder model URL
      // The actual model file upload would need to be done via a backend script
      // or through Firebase CLI
      
      const productData = {
        id: model.id,
        name: model.name,
        category: model.category,
        price: model.price,
        currency: "NPR",
        description: model.description,
        modelUrl: `https://firebasestorage.googleapis.com/v0/b/YOUR_PROJECT_ID.appspot.com/o/models%2F${model.modelFile}?alt=media`,
        thumbnailUrl: `https://source.unsplash.com/800x800/?${model.category},jewelry,product`,
        tryOnImageUrl: `https://firebasestorage.googleapis.com/v0/b/YOUR_PROJECT_ID.appspot.com/o/tryon%2F${model.id}.svg?alt=media`,
        arSupported: model.arSupported,
        createdAt: new Date().toISOString()
      };

      // Add to Firestore products collection
      await setDoc(doc(db, "products", model.id), productData);
      console.log(`Added product: ${model.name}`);
    } catch (error) {
      console.error(`Error adding product ${model.name}:`, error);
    }
  }

  console.log("All products added to Firestore!");
}

// Run the upload
uploadModelsToFirebase();

export { uploadModelsToFirebase };