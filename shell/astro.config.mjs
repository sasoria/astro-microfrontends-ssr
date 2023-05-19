import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import solidJs from "@astrojs/solid-js";
import deno from "@astrojs/deno";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  output: "server",
  adapter: deno({
    port: 3000,
  }),
});
