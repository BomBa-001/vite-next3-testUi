// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  pages: true,
  css: ["@/assets/sass/style.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/sass/helpers/_helpers.scss" as *;',
          // additionalData: '@use "@/assets/scss/_var.scss" as *;',
        },
      },
    },
  },
  modules: [
    "nuxt-icon",
    "@nuxt/ui",
    "@pinia/nuxt",
    "@vite-pwa/nuxt",
    '@nuxtjs/tailwindcss'
  ],
  // tailwindcss: {
  //   exposeConfig: true,
  //   viewer: true,
  //   // and more...
  // },
  // --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
  pwa: {
    manifest: {
      name: "Nuxt3-ui",
      short_name: "Nuxt3-ui",
      description: "This is a Nuxt3-ui",
      theme_color: "#000000",
      icons: [
        {
          src: "https://ik.imagekit.io/BomBa001/publicImages/BomBa-001.svg?updatedAt=1701827273385",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "https://ik.imagekit.io/BomBa001/publicImages/BomBa-001.svg?updatedAt=1701827273385",
          sizes: "512x512",
          type: "image/png",
        },
      ],
    },
    devOptions: {
      enabled: true,
      type: "module",
    },
  },
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1, maximum-scale=1",
      title:'BomBa-Nuxt',
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "https://ik.imagekit.io/BomBa001/publicImages/BomBa-001.svg?updatedAt=1701827273385",
        },
      ],
    },
  },
  // --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
  devtools: { enabled: false },
});
