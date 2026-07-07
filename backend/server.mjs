import { createServer } from "node:http";
import { corsMiddleware } from "./middleware/corsHandler.js";
import { requestLogger } from "./middleware/requestLogger.js";
import { router } from "./router.js";

const PORT = Number(process.env.PORT || 4000);

async function handleRequest(request, response) {
  if (request.method === "OPTIONS") {
    response.writeHead(204);
    response.end();
    return;
  }

  // Apply middleware
  corsMiddleware(request, response, () => {
    requestLogger(request, response, async () => {
      try {
        await router(request, response);
      } catch (error) {
        console.error("Request error:", error);
      }
    });
  });
}

const server = createServer(handleRequest);

server.listen(PORT, () => {
  console.log(`[${new Date().toISOString()}] AuraAR Backend started on http://localhost:${PORT}`);
  console.log("Available endpoints:");
  console.log("  GET  /health");
  console.log("  GET  /api/products");
  console.log("  GET  /api/users/:userId/stats");
  console.log("  GET  /api/users/:userId/wishlist");
  console.log("  POST /api/users/:userId/wishlist");
  console.log("  DEL  /api/users/:userId/wishlist/:productId");
  console.log("  POST /api/tryons");
  console.log("  GET  /api/users/:userId/tryons");
  console.log("  POST /api/sus-responses");
  console.log("  GET  /api/users/:userId/sus");
});

process.on("SIGTERM", () => {
  console.log("SIGTERM received, shutting down gracefully");
  server.close(() => {
    console.log("Server closed");
    process.exit(0);
  });
});
      const store = await readJson(STORE_FILE, { wishlist: {}, tryOns: [], susResponses: [] });
      sendJson(response, 200, userStats(store, userStatsMatch[1]));
      return;
    }

    const userWishlistMatch = path.match(/^\/api\/users\/([^/]+)\/wishlist$/);
    if (request.method === "GET" && userWishlistMatch) {
      const products = await readJson(PRODUCTS_FILE, []);
      const store = await readJson(STORE_FILE, { wishlist: {}, tryOns: [], susResponses: [] });
      const ids = store.wishlist[userWishlistMatch[1]] ?? [];
      sendJson(response, 200, products.filter((product) => ids.includes(product.id)));
      return;
    }

    if (request.method === "POST" && userWishlistMatch) {
      const body = await parseBody(request);
      const store = await readJson(STORE_FILE, { wishlist: {}, tryOns: [], susResponses: [] });
      const userId = userWishlistMatch[1];
      const current = new Set(store.wishlist[userId] ?? []);

      if (!body.productId) {
        sendJson(response, 400, { error: "productId is required" });
        return;
      }

      current.add(body.productId);
      store.wishlist[userId] = [...current];
      await writeJson(STORE_FILE, store);
      sendJson(response, 201, { wishlist: store.wishlist[userId] });
      return;
    }

    const removeWishlistMatch = path.match(/^\/api\/users\/([^/]+)\/wishlist\/([^/]+)$/);
    if (request.method === "DELETE" && removeWishlistMatch) {
      const store = await readJson(STORE_FILE, { wishlist: {}, tryOns: [], susResponses: [] });
      const [userId, productId] = removeWishlistMatch.slice(1).map(decodeURIComponent);
      store.wishlist[userId] = (store.wishlist[userId] ?? []).filter((id) => id !== productId);
      await writeJson(STORE_FILE, store);
      sendJson(response, 200, { wishlist: store.wishlist[userId] });
      return;
    }

    if (request.method === "POST" && path === "/api/tryons") {
      const body = await parseBody(request);
      const store = await readJson(STORE_FILE, { wishlist: {}, tryOns: [], susResponses: [] });
      const tryOn = {
        id: crypto.randomUUID(),
        userId: body.userId ?? "anonymous",
        productId: body.productId ?? body.accessoryId ?? null,
        accessoryId: body.accessoryId ?? null,
        faceRatio: body.faceRatio ?? null,
        fps: body.fps ?? null,
        createdAt: new Date().toISOString()
      };

      store.tryOns.push(tryOn);
      await writeJson(STORE_FILE, store);
      sendJson(response, 201, tryOn);
      return;
    }

    if (request.method === "POST" && path === "/api/sus-responses") {
      const body = await parseBody(request);
      const score = calculateSusScore(body.answers);

      if (score === null) {
        sendJson(response, 400, { error: "answers must contain 10 values from 1 to 5" });
        return;
      }

      const store = await readJson(STORE_FILE, { wishlist: {}, tryOns: [], susResponses: [] });
      const responseRecord = {
        id: crypto.randomUUID(),
        userId: body.userId ?? "anonymous",
        answers: body.answers.map(Number),
        score,
        comments: body.comments ?? "",
        createdAt: new Date().toISOString()
      };

      store.susResponses.push(responseRecord);
      await writeJson(STORE_FILE, store);
      sendJson(response, 201, responseRecord);
      return;
    }

    sendNotFound(response);
  } catch (error) {
    sendJson(response, 500, { error: error.message || "Internal server error" });
  }
}

createServer(handleRequest).listen(PORT, () => {
  console.log(`AuraAR backend running at http://localhost:${PORT}`);
});
