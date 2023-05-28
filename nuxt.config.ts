// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ['@/assets/preflight.css'],
    experimental: {
        inlineSSRStyles: false,
    }
})
