import { svelte } from "@sveltejs/vite-plugin-svelte";
import { defineConfig } from "vite";
import { mdsvex } from "mdsvex";

export default defineConfig({
  server: {
    port: 5000,
  },

  plugins: [
    svelte({
      // these are the defaults. If you want to add more extensions, see https://mdsvex.pngwn.io/docs#extensions
      extensions: [".svelte", ".svx"],
      preprocess: mdsvex(),
    }),
  ],
});
