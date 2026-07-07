import { WishlistService } from "../services/wishlistService.js";
import { AppError } from "../middleware/errorHandler.js";
import { validateProductId } from "../middleware/validation.js";

export async function getWishlist(request, response, userId) {
  try {
    const wishlist = await WishlistService.getWishlist(userId);

    response.writeHead(200, { "Content-Type": "application/json" });
    response.end(JSON.stringify({ success: true, data: wishlist }));
  } catch (error) {
    throw new AppError(500, "Failed to fetch wishlist");
  }
}

export async function addToWishlist(request, response, userId, body) {
  try {
    if (!body.productId) {
      throw new AppError(400, "productId is required");
    }

    const productId = validateProductId(body.productId);
    const result = await WishlistService.addToWishlist(userId, productId);

    if (!result) {
      throw new AppError(404, "Product not found");
    }

    response.writeHead(201, { "Content-Type": "application/json" });
    response.end(JSON.stringify({ success: true, data: result }));
  } catch (error) {
    if (error instanceof AppError) throw error;
    throw new AppError(500, "Failed to add to wishlist");
  }
}

export async function removeFromWishlist(request, response, userId, productId) {
  try {
    const cleanProductId = validateProductId(productId);
    const result = await WishlistService.removeFromWishlist(userId, cleanProductId);

    response.writeHead(200, { "Content-Type": "application/json" });
    response.end(JSON.stringify({ success: true, data: result }));
  } catch (error) {
    if (error instanceof AppError) throw error;
    throw new AppError(500, "Failed to remove from wishlist");
  }
}
