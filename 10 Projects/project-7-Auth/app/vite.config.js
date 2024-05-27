import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import pluginRewriteAll from "vite-plugin-rewrite-all";

export default defineConfig({
  plugins: [react(), pluginRewriteAll()],
  server: {
    port: 8080,
  },
});
