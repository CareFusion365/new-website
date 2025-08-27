// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  devServer: { port: 3000 },
  modules: [
    "@nuxtjs/tailwindcss",
    "shadcn-nuxt",
    "nuxt-lucide-icons",
    "@nuxt/image",
    "@vueuse/nuxt",
  ],
  shadcn: {
    prefix: "",
    componentDir: "./components/ui",
  },
  app: {
    head: {
      title: "CareFusion :: Data-powered healthcare",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: "CareFusion :: Data-powered healthcare" },
      ],
      script: [
        {
          async: true,
          src: "https://www.googletagmanager.com/gtag/js?id=G-SBD69TB3Q3",
        },
        {
          innerHTML: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-SBD69TB3Q3');
          `,
        },
      ],
    },
  },
});
