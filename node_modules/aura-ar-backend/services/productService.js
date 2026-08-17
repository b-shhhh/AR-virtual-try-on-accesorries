import { Product } from "../models/Product.js";

export class ProductService {
  static async getAllProducts() {
    return await Product.getAll();
  }

  static async getProductById(productId) {
    const product = await Product.getById(productId);
    if (!product) {
      return null;
    }
    return product;
  }

  static async searchProducts(query) {
    if (!query || query.trim() === "") {
      return await Product.getAll();
    }
    return await Product.search(query);
  }

  static async getProductsByCategory(category) {
    const products = await Product.getAll();
    return products.filter(
      (p) => p.category?.toLowerCase() === category.toLowerCase()
    );
  }

  static async getProductStats() {
    const products = await Product.getAll();
    const categories = [...new Set(products.map((p) => p.category))];

    return {
      total: products.length,
      categories: categories.length,
      categoryList: categories,
      priceRange: {
        min: Math.min(...products.map((p) => p.price || 0)),
        max: Math.max(...products.map((p) => p.price || 0))
      }
    };
  }
}
