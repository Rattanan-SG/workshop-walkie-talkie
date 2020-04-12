import colors from 'vuetify/es5/util/colors'

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    '@nuxtjs/vuetify'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    '@nuxtjs/firebase'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  firebase: {
    config: {
      apiKey: 'AIzaSyBVl5ccISLIQ38T32vbJP1DFFfMRcxhdAQ',
      authDomain: 'walkie-talkie-12a5e.firebaseapp.com',
      databaseURL: 'https://walkie-talkie-12a5e.firebaseio.com',
      projectId: 'walkie-talkie-12a5e',
      storageBucket: 'walkie-talkie-12a5e.appspot.com',
      messagingSenderId: '1087934909912',
      appId: '1:1087934909912:web:73c6f5e04cef3bb8d676ad',
      measurementId: 'G-GRL7K1XRGD',
      fcmPublicVapidKey:
        'BEKVpNqJl9Kq0Ma_IIDYOHjx8cMRstQkBIeNAhYb86JhshxiUqcGQJYlCnSce6WK5g-sd_1ZtcREwYgAMmW7p9A'
    },
    services: {
      auth: {
        ssr: true,
        initialize: {
          onAuthStateChangedMutation: 'ON_AUTH_STATE_CHANGED_MUTATION'
        }
      },
      firestore: true,
      storage: true,
      messaging: {
        createServiceWorker: true
      },
      performance: true,
      analytics: true
    }
  },
  pwa: {
    workbox: {
      importScripts: ['/firebase-auth-sw.js', '/firebase-messaging-sw.js']
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
