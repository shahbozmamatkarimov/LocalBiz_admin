// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "LocalBiz - Admin",
      link: [
        {
          rel: "icon",
          href: "/icon.svg",
        },
        //   {
        //     rel: "stylesheet",
        //     href: "https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css",
        //   },
        //   {
        //     rel: "stylesheet",
        //     href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css",
        //   },
      ],
    },
  },
  plugins: [{ src: "~/plugins/aos", mode: "client", ssr: false }],
  imports: {
    autoImport: true,
  },
  css: ["~/assets/main.scss"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  // runtimeConfig: {
  //   public: {
  //     apiBaseUrl: process.env.API_BASE_URL,
  //     isDemo: process.env.IS_DEMO,
  //   },
  // },
  modules: ["@pinia/nuxt", "@element-plus/nuxt", "nuxt-swiper"],
});
