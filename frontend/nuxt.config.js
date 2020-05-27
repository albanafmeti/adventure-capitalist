require('dotenv').config();

export default {
    mode: 'spa',
    /*
    ** Headers of the page
    */
    head: {
        titleTemplate: '%s - AdVenture Capitalist',
        title: 'AdVenture Capitalist',
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: process.env.npm_package_description || ''}
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
        ]
    },
    /*
    ** Customize the progress-bar color
    */
    loading: false,
    /*
    ** Global CSS
    */
    css: [
        'vuesax/dist/vuesax.css',
        '@/assets/scss/style.scss',
    ],
    /*
    ** Plugins to load before mounting the App
    */
    plugins: [
        '@/plugins/vuesax',
        '@/plugins/socket.js',
        '@/plugins/repositories.js',
    ],
    /*
    ** Nuxt.js dev-modules
    */
    buildModules: [],
    /*
    ** Nuxt.js modules
    */
    modules: [
        '@nuxtjs/axios',
        '@nuxtjs/auth',
        '@nuxtjs/dotenv',
    ],
    /*
    ** Axios module configuration
    ** See https://axios.nuxtjs.org/options
    */
    axios: {
        // See https://github.com/nuxt-community/axios-module#options
        baseURL: process.env.API_URL
    },


    /*
    ** Auth module configuration
    */

    auth: {
        redirect: {
            login: '/login',
            logout: '/login',
            home: '/'
        },
        strategies: {
            local: {
                endpoints: {
                    login: {url: '/login', method: 'post', propertyName: 'data.token'},
                    user: {url: '/user', method: 'get', propertyName: 'data.user'},
                    logout: false
                },
            }
        },
    },

    /*
    ** Build configuration
    */

    /**
     * Router config.
     */

    router: {
        linkExactActiveClass: 'active'
    },

    build: {
        /*
        ** You can extend webpack config here
        */
        extend(config, ctx) {
            config.node = {fs: "empty"}
        }
    }
}
