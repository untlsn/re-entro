import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  modules: [
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxt/test-utils",
    "shadcn-nuxt",
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
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: "Ui",
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: "./components/ui",
  },
});
