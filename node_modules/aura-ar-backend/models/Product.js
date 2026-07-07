import { readFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PRODUCTS_FILE = join(__dirname, "../database/models-products.json");

export class Product {
  static async getAll() {
    try {
      const raw = await readFile(PRODUCTS_FILE, "utf8");
      return JSON.parse(raw);
    } catch {
      return [];
    }
  }

  static async getById(productId) {
    const products = await this.getAll();
    return products.find((p) => p.id === productId);
  }

  static async search(query) {
    const products = await this.getAll();
    const lowerQuery = query.toLowerCase();
    return products.filter(
      (p) =>
        p.name?.toLowerCase().includes(lowerQuery) ||
        p.description?.toLowerCase().includes(lowerQuery) ||
        p.category?.toLowerCase().includes(lowerQuery)
    );
  }
}
