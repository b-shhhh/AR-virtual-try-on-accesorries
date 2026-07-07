import { collection, getDocs, query, getDoc, doc } from "firebase/firestore";
import { fallbackProducts } from "../data/productCatalog";
import { getModelCatalog } from "../data/modelsCatalog";
import { db, firebaseEnabled } from "./app";

export async function getProducts() {
  try {
    if (!firebaseEnabled || !db) {
      // Use models catalog as fallback
      return getModelCatalog().map(model => ({
        id: model.id,
        name: model.name,
        category: model.category,
        price: model.price,
        currency: "NPR",
        description: model.description,
        modelUrl: `/3d models/${model.modelFile}`,
        thumbnailUrl: `https://source.unsplash.com/800x800/?${model.category},jewelry,product`,
        tryOnImageUrl: `/3d models/${model.modelFile}`,
        arSupported: model.arSupported
      }));
    }

    const productsSnapshot = await getDocs(query(collection(db, "products")));
    const products = productsSnapshot.docs.map((productDoc) => ({
      id: productDoc.id,
      ...productDoc.data()
    }));

    return products.length > 0 ? products : fallbackProducts;
  } catch {
    return fallbackProducts;
  }
}

export async function getProductById(productId) {
  try {
    if (!firebaseEnabled || !db) {
      const model = getModelCatalog().find(m => m.id === productId);
      if (model) {
        return {
          id: model.id,
          name: model.name,
          category: model.category,
          price: model.price,
          currency: "NPR",
          description: model.description,
          modelUrl: `/3d models/${model.modelFile}`,
          thumbnailUrl: `https://source.unsplash.com/800x800/?${model.category},jewelry,product`,
          tryOnImageUrl: `/3d models/${model.modelFile}`,
          arSupported: model.arSupported
        };
      }
      return null;
    }

    const productDoc = await getDoc(doc(db, "products", productId));
    if (productDoc.exists()) {
      return {
        id: productDoc.id,
        ...productDoc.data()
      };
    }
    return null;
  } catch {
    return null;
  }
}

export async function getProductsByCategory(category) {
  const products = await getProducts();
  return products.filter(p => p.category === category);
}
