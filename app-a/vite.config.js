import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";

export default ({ command }) => ({
  plugins: [react()],
  build: {
    manifest: true,
    rollupOptions: {
      input: resolve(__dirname, "src/MicroFrontend.jsx"),
      preserveEntrySignatures: "exports-only",
      external: ["react", "react-dom"],
      output: {
        entryFileNames: "bundle.[hash].js",
        format: "esm",
      },
    },
  },
});
