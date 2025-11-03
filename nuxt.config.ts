// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  modules: [
    '@nuxt/ui',
    '@nuxt/eslint',
    'nuxt-auth-sanctum',
    'nuxt-laravel-echo',
    'nuxt-sanctum-precognition',
  ],

  ssr: true,
  devtools: { enabled: true },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: {
        lang: 'en',
        class: 'scroll-smooth',
      },
      bodyAttrs: {
        class: 'antialiased',
      },
      link: [
        {
          rel: 'icon',
          href: '/favicon.ico',
        },
        {
          rel: 'shortcut icon',
          href: '/favicon.ico',
        },
        {
          rel: 'apple-touch-icon',
          href: '/favicon.ico',
        },
      ],
    },
  },

  css: ['~/assets/css/main.css'],
  ui: {
    formField: {
      slots: {
        root: '',
        wrapper: '',
        labelWrapper: 'flex content-center items-center justify-between',
        label: 'block font-medium text-default',
        container: 'mt-1 relative',
        description: 'text-muted',
        error: 'mt-2 text-error',
        hint: 'text-muted',
        help: 'mt-2 text-muted',
      },
      variants: {
        size: {
          xs: {
            root: 'text-xs',
          },
          sm: {
            root: 'text-xs',
          },
          md: {
            root: 'text-sm',
          },
          lg: {
            root: 'text-sm',
          },
          xl: {
            root: 'text-base',
          },
        },
        required: {
          true: {
            label: 'after:content-[\'*\'] after:ms-0.5 after:text-error',
          },
        },
      },
      defaultVariants: {
        size: 'md',
      },
    },
  },
  runtimeConfig: {
    public: {
      API_URL: process.env.NUXT_PUBLIC_SANCTUM_BASE_URL || 'http://localhost:80',
    },
  },

  future: {
    compatibilityVersion: 4,
  },

  compatibilityDate: '2024-07-14',

  nitro: {
    compressPublicAssets: true,
  },

  vite: {
    optimizeDeps: {
      include: ['pusher-js'],
    },
  },

  typescript: {
    strict: true,
    typeCheck: 'build',
  },

  echo: {
    key: '',
    scheme: 'http',
  },

  eslint: {
    config: {
      stylistic: true,
    },
  },

  sanctum: {
    baseUrl: 'http://localhost:80',
    redirect: {
      onGuestOnly: '/dashboard',
      onLogin: '/dashboard',
    },
  },
})
