import { Store } from "../models/Store.js";

export class UserService {
  static async getUserStats(userId) {
    const wishlist = await Store.getWishlist(userId);
    const tryOns = await Store.getTryOns(userId);
    const susResponses = await Store.getSusResponses(userId);

    return {
      userId,
      stats: {
        wishlistCount: wishlist.length,
        tryOnCount: tryOns.length,
        susResponseCount: susResponses.length,
        totalInteractions: wishlist.length + tryOns.length + susResponses.length
      },
      data: {
        wishlist,
        recentTryOns: tryOns.slice(-5),
        hasSusResponse: susResponses.length > 0
      }
    };
  }

  static async getUserProfile(userId) {
    const stats = await this.getUserStats(userId);
    return {
      userId,
      createdAt: new Date().toISOString(),
      ...stats
    };
  }
}
