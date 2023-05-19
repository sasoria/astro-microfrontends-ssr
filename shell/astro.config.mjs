import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import solidJs from "@astrojs/solid-js";
import deno from "@astrojs/deno";

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    solidJs(),
    {
      name: "importmap-externals",
      hooks: {
        "astro:build:setup": ({ vite, target }) => {
          if (target === "client") {
            vite.build.rollupOptions["external"] = ["react", "react-dom"];
          }
        },
      },
    },
  ],
  output: "server",
  adapter: deno({
    port: 3000,
  }),
});
