import { createServer } from "node:http";
import { readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DATA_DIR = join(__dirname, "data");
const PRODUCTS_FILE = join(DATA_DIR, "products.json");
const STORE_FILE = join(DATA_DIR, "store.json");
const PORT = Number(process.env.PORT || 4000);

async function readJson(filePath, fallback) {
  try {
    const raw = await readFile(filePath, "utf8");
    return JSON.parse(raw);
  } catch {
    return fallback;
  }
}

async function writeJson(filePath, data) {
  await writeFile(filePath, `${JSON.stringify(data, null, 2)}\n`, "utf8");
}

function sendJson(response, statusCode, payload) {
  response.writeHead(statusCode, {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,POST,DELETE,OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Content-Type": "application/json"
  });
  response.end(JSON.stringify(payload));
}

function sendNotFound(response) {
  sendJson(response, 404, { error: "Route not found" });
}

async function parseBody(request) {
  const chunks = [];

  for await (const chunk of request) {
    chunks.push(chunk);
  }

  const raw = Buffer.concat(chunks).toString("utf8");
  return raw ? JSON.parse(raw) : {};
}

function calculateSusScore(answers) {
  if (!Array.isArray(answers) || answers.length !== 10) {
    return null;
  }

  const total = answers.reduce((sum, answer, index) => {
    const value = Number(answer);
    if (!Number.isFinite(value) || value < 1 || value > 5) {
      return NaN;
    }

    return sum + (index % 2 === 0 ? value - 1 : 5 - value);
  }, 0);

  return Number.isNaN(total) ? null : total * 2.5;
}

function userStats(store, userId) {
  const wishlist = store.wishlist[userId] ?? [];
  const tryOns = store.tryOns.filter((item) => item.userId === userId);

  return {
    tryOns: tryOns.length,
    wishlisted: wishlist.length,
    purchased: 0
  };
}

async function handleRequest(request, response) {
  if (request.method === "OPTIONS") {
    sendJson(response, 204, {});
    return;
  }

  const url = new URL(request.url, `http://${request.headers.host}`);
  const path = url.pathname;

  try {
    if (request.method === "GET" && path === "/health") {
      sendJson(response, 200, { status: "ok", service: "auraar-backend" });
      return;
    }

    if (request.method === "GET" && path === "/api/products") {
      const products = await readJson(PRODUCTS_FILE, []);
      sendJson(response, 200, products);
      return;
    }

    const userStatsMatch = path.match(/^\/api\/users\/([^/]+)\/stats$/);
    if (request.method === "GET" && userStatsMatch) {
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
