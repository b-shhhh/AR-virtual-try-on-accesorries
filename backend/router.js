import { AppError, errorHandler } from "./middleware/errorHandler.js";
import * as healthRoutes from "./routes/health.js";
import * as productRoutes from "./routes/products.js";
import * as wishlistRoutes from "./routes/wishlist.js";
import * as userRoutes from "./routes/users.js";
import * as tryonRoutes from "./routes/tryons.js";
import * as susRoutes from "./routes/sus.js";

async function parseBody(request) {
  const chunks = [];
  for await (const chunk of request) {
    chunks.push(chunk);
  }
  const raw = Buffer.concat(chunks).toString("utf8");
  return raw ? JSON.parse(raw) : {};
}

function sendJson(response, statusCode, payload) {
  response.writeHead(statusCode, { "Content-Type": "application/json" });
  response.end(JSON.stringify(payload));
}

export async function router(request, response) {
  const url = new URL(request.url, `http://${request.headers.host}`);
  const pathname = url.pathname;
  const method = request.method;

  try {
    // Health check
    if (method === "GET" && pathname === "/health") {
      return await healthRoutes.healthRoute(request, response);
    }

    // Products
    if (method === "GET" && pathname === "/api/products") {
      return await productRoutes.getProducts(request, response);
    }

    const productByIdMatch = pathname.match(/^\/api\/products\/([^/]+)$/);
    if (method === "GET" && productByIdMatch) {
      return await productRoutes.getProductById(request, response, productByIdMatch[1]);
    }

    if (method === "GET" && pathname === "/api/products/stats") {
      return await productRoutes.getProductStats(request, response);
    }

    // Users & Stats
    const userStatsMatch = pathname.match(/^\/api\/users\/([^/]+)\/stats$/);
    if (method === "GET" && userStatsMatch) {
      return await userRoutes.getUserStats(request, response, userStatsMatch[1]);
    }

    const userProfileMatch = pathname.match(/^\/api\/users\/([^/]+)$/);
    if (method === "GET" && userProfileMatch) {
      return await userRoutes.getUserProfile(request, response, userProfileMatch[1]);
    }

    // Wishlist
    const wishlistMatch = pathname.match(/^\/api\/users\/([^/]+)\/wishlist$/);
    if (method === "GET" && wishlistMatch) {
      return await wishlistRoutes.getWishlist(request, response, wishlistMatch[1]);
    }

    if (method === "POST" && wishlistMatch) {
      const body = await parseBody(request);
      return await wishlistRoutes.addToWishlist(request, response, wishlistMatch[1], body);
    }

    const wishlistItemMatch = pathname.match(/^\/api\/users\/([^/]+)\/wishlist\/([^/]+)$/);
    if (method === "DELETE" && wishlistItemMatch) {
      return await wishlistRoutes.removeFromWishlist(
        request,
        response,
        wishlistItemMatch[1],
        wishlistItemMatch[2]
      );
    }

    // Try-ons
    if (method === "POST" && pathname === "/api/tryons") {
      const body = await parseBody(request);
      return await tryonRoutes.recordTryOn(request, response, body);
    }

    const userTryOnsMatch = pathname.match(/^\/api\/users\/([^/]+)\/tryons$/);
    if (method === "GET" && userTryOnsMatch) {
      return await tryonRoutes.getUserTryOns(request, response, userTryOnsMatch[1]);
    }

    // SUS Responses
    if (method === "POST" && pathname === "/api/sus-responses") {
      const body = await parseBody(request);
      return await susRoutes.recordSusResponse(request, response, body);
    }

    const userSusMatch = pathname.match(/^\/api\/users\/([^/]+)\/sus$/);
    if (method === "GET" && userSusMatch) {
      return await susRoutes.getUserSusResponse(request, response, userSusMatch[1]);
    }

    if (method === "GET" && pathname === "/api/sus/stats") {
      return await susRoutes.getSusStats(request, response);
    }

    // 404
    throw new AppError(404, "Route not found");
  } catch (error) {
    errorHandler(error, response);
  }
}
