export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Tix - Buy and sell event tickets on the internet',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'description', content: 'Tix is a refreshing approach to event ticketing in Africa. Create and sell your first ticket from your phone in under 10 minutes.' },
      { name: 'title', content: 'Tix - Buy and sell event tickets on the internet' },
      { property: 'og:type', content: 'website'},
      { property: 'og:url', content: 'https://tixdotafrica.netlify.app/'},
      { property: 'og:title', content: 'Tix - Buy and sell event tickets on the internet'},
      { property: 'og:description', content: 'Tix is a refreshing approach to event ticketing in Africa. Create and sell your first ticket from your phone in under 10 minutes.'},
      { property: 'og:image', content: 'https://tix.com.ng/static/images/seo.png'},
      { property: 'twitter:card', content: 'summary_large_image'},
      { property: 'twitter:url', content: 'https://tixdotafrica.netlify.app/'},
      { property: 'twitter:title', content: 'Tix - Buy and sell event tickets on the internet'},
      { property: 'twitter:description', content: 'Tix is a refreshing approach to event ticketing in Africa. Create and sell your first ticket from your phone in under 10 minutes.'},
      { property: 'twitter:image', content: 'https://tix.com.ng/static/images/seo.png'},
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Inter&display=swap' },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '@/plugins/vue-material-icons' }
  ],

  axios: {
    proxy: true,
    credentials: true,
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
