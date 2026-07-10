import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Resolve the 3d models path to an absolute path
const modelsPath = resolve(__dirname, "../3d models");

export default defineConfig({
  plugins: [react()],
  server: {
    // Serve 3d models folder as static assets
    fs: {
      allow: [__dirname, modelsPath]
    }
  },
  publicDir: "public",
  resolve: {
    alias: {
      "/3d models": modelsPath
    }
  }
});
