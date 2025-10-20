// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', 'nuxt-icon', '@nuxt/image'], 

    pinia: {
      // @ts-ignore
    autoImports: ['defineStore', 'storeToRefs']
  },

  // css: ['@/assets/css/tailwind.css'],
  plugins: ['~/plugins/aos.client.ts'],

    app: {
    head: {
      title: "E-GAMESTORE",
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/favicon.svg",
        },
        // Font Awesome (already there)
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css",
        },
         // Add your Google Fonts here
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&family=Vazirmatn:wght@400;700&display=swap=Roboto:wght@400;500;700&display=swap",
        },

      ],
    },
  },

})