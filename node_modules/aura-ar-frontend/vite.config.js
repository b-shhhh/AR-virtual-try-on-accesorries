import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

export default defineConfig({
  plugins: [react()],
  server: {
    // Serve 3d models folder as static assets
    fs: {
      allow: [join(__dirname, "../3d models")]
    }
  },
  publicDir: "public",
  resolve: {
    alias: {
      "/3d models": join(__dirname, "../3d models")
    }
  }
});
