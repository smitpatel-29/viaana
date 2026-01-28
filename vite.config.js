import { defineConfig } from "vite";
import { resolve } from "path";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        about: resolve(__dirname, "pages/about.html"),
        causes: resolve(__dirname, "pages/causes.html"),
        contact: resolve(__dirname, "pages/contact.html"),
        getInvolved: resolve(__dirname, "pages/get-involved.html"),
        privacy: resolve(__dirname, "pages/privacy.html"),
        terms: resolve(__dirname, "pages/terms.html"),
      },
    },
  },
});
