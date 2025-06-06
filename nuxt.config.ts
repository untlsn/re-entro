import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  modules: [
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxt/test-utils",
  ],
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: "2025-05-15",
  vite: {
    plugins: [(tailwindcss as Function)()],
  },
  eslint: {
    config: { stylistic: true },
  },
});
