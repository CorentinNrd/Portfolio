// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['nuxt-icon', '@element-plus/nuxt', 'nuxt-swiper', '@nuxtjs/tailwindcss'],
  elementPlus: {
    /** Options */
  },
  // @ts-ignore
  alias: {
    '@': '.',
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Corentin Nordmann',
      // link: [{ rel: 'icon', type: 'image/png', href: '/UFriendsClient/images/PiniaLogo.png' }],
    },
  },
});
