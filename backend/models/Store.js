import { readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DATA_DIR = join(__dirname, "../data");
const STORE_FILE = join(DATA_DIR, "store.json");

const DEFAULT_STORE = {
  wishlist: {},
  tryOns: [],
  susResponses: []
};

export class Store {
  static async readStore() {
    try {
      const raw = await readFile(STORE_FILE, "utf8");
      return JSON.parse(raw);
    } catch {
      return DEFAULT_STORE;
    }
  }

  static async writeStore(data) {
    await writeFile(STORE_FILE, `${JSON.stringify(data, null, 2)}\n`, "utf8");
  }

  static async getWishlist(userId) {
    const store = await this.readStore();
    return store.wishlist[userId] ?? [];
  }

  static async addToWishlist(userId, productId) {
    const store = await this.readStore();
    if (!store.wishlist[userId]) {
      store.wishlist[userId] = [];
    }
    if (!store.wishlist[userId].includes(productId)) {
      store.wishlist[userId].push(productId);
    }
    await this.writeStore(store);
    return store.wishlist[userId];
  }

  static async removeFromWishlist(userId, productId) {
    const store = await this.readStore();
    if (!store.wishlist[userId]) {
      return [];
    }
    store.wishlist[userId] = store.wishlist[userId].filter((id) => id !== productId);
    await this.writeStore(store);
    return store.wishlist[userId];
  }

  static async addTryOn(tryOnData) {
    const store = await this.readStore();
    const tryOn = {
      id: `tryon-${Date.now()}`,
      timestamp: new Date().toISOString(),
      ...tryOnData
    };
    store.tryOns.push(tryOn);
    await this.writeStore(store);
    return tryOn;
  }

  static async getTryOns(userId) {
    const store = await this.readStore();
    return store.tryOns.filter((item) => item.userId === userId);
  }

  static async addSusResponse(susData) {
    const store = await this.readStore();
    const response = {
      id: `sus-${Date.now()}`,
      timestamp: new Date().toISOString(),
      ...susData
    };
    store.susResponses.push(response);
    await this.writeStore(store);
    return response;
  }

  static async getSusResponses(userId) {
    const store = await this.readStore();
    return store.susResponses.filter((item) => item.userId === userId);
  }
}
