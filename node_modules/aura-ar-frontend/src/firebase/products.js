import { collection, getDocs, query } from "firebase/firestore";
import { fallbackProducts } from "../data/productCatalog";
import { db, firebaseEnabled } from "./app";

export async function getProducts() {
  try {
    if (!firebaseEnabled || !db) {
      return fallbackProducts;
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
