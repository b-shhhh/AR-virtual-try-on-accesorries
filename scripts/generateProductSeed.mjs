import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { createProductCatalog } from "../src/data/productCatalog.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, "..");
const products = createProductCatalog(100);

await mkdir(join(rootDir, "database"), { recursive: true });
await mkdir(join(rootDir, "backend", "data"), { recursive: true });

await writeFile(
  join(rootDir, "database", "firestore-products-seed.json"),
  `${JSON.stringify(products, null, 2)}\n`,
  "utf8"
);

await writeFile(
  join(rootDir, "backend", "data", "products.json"),
  `${JSON.stringify(products, null, 2)}\n`,
  "utf8"
);

console.log(`Generated ${products.length} products.`);
