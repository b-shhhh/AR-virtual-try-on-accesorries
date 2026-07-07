import { Store } from "../models/Store.js";
import { Product } from "../models/Product.js";

export class WishlistService {
  static async getWishlist(userId) {
    const wishlistIds = await Store.getWishlist(userId);
    const products = await Product.getAll();
    
    const wishlistItems = wishlistIds
      .map((id) => products.find((p) => p.id === id))
      .filter(Boolean);

    return {
      userId,
      count: wishlistItems.length,
      items: wishlistItems
    };
  }

  static async addToWishlist(userId, productId) {
    const product = await Product.getById(productId);
    if (!product) {
      return null;
    }

    const updatedWishlist = await Store.addToWishlist(userId, productId);
    return {
      userId,
      productId,
      added: true,
      wishlistCount: updatedWishlist.length
    };
  }

  static async removeFromWishlist(userId, productId) {
    const updatedWishlist = await Store.removeFromWishlist(userId, productId);
    return {
      userId,
      productId,
      removed: true,
      wishlistCount: updatedWishlist.length
    };
  }

  static async isInWishlist(userId, productId) {
    const wishlist = await Store.getWishlist(userId);
    return wishlist.includes(productId);
  }
}
