import { RuntimeConfig as UserRuntimeConfig, PublicRuntimeConfig as UserPublicRuntimeConfig } from 'nuxt/schema'
  interface SharedRuntimeConfig {
   app: {
      buildId: string,

      baseURL: string,

      buildAssetsDir: string,

      cdnURL: string,
   },

   nitro: {
      envPrefix: string,
   },

   icon: {
      serverKnownCssClasses: Array<any>,
   },

   sanctum: {
      baseUrl: string,

      mode: string,

      userStateKey: string,

      redirectIfAuthenticated: boolean,

      redirectIfUnauthenticated: boolean,

      endpoints: {
         csrf: string,

         login: string,

         logout: string,

         user: string,
      },

      csrf: {
         cookie: string,

         header: string,
      },

      client: {
         retry: boolean,

         initialRequest: boolean,
      },

      redirect: {
         keepRequestedRoute: boolean,

         onLogin: string,

         onLogout: string,

         onAuthOnly: string,

         onGuestOnly: string,
      },

      globalMiddleware: {
         enabled: boolean,

         prepend: boolean,

         allow404WithoutAuth: boolean,
      },

      logLevel: number,

      appendPlugin: boolean,

      serverProxy: {
         enabled: boolean,

         route: string,

         baseUrl: string,
      },
   },
  }
  interface SharedPublicRuntimeConfig {
   API_URL: string,

   sanctum: {
      baseUrl: string,

      mode: string,

      userStateKey: string,

      redirectIfAuthenticated: boolean,

      redirectIfUnauthenticated: boolean,

      endpoints: {
         csrf: string,

         login: string,

         logout: string,

         user: string,
      },

      csrf: {
         cookie: string,

         header: string,
      },

      client: {
         retry: boolean,

         initialRequest: boolean,
      },

      redirect: {
         keepRequestedRoute: boolean,

         onLogin: string,

         onLogout: string,

         onAuthOnly: string,

         onGuestOnly: string,
      },

      globalMiddleware: {
         enabled: boolean,

         prepend: boolean,

         allow404WithoutAuth: boolean,
      },

      logLevel: number,

      appendPlugin: boolean,
   },

   echo: {
      broadcaster: string,

      host: string,

      port: number,

      scheme: string,

      transports: Array<string>,

      authentication: {
         mode: string,

         baseUrl: string,

         authEndpoint: string,

         csrfEndpoint: string,

         csrfCookie: string,

         csrfHeader: string,
      },

      logLevel: number,

      key: string,
   },

   precognition: {
      validateFiles: boolean,

      validationTimeout: number,

      logLevel: number,
   },
  }
declare module '@nuxt/schema' {
  interface RuntimeConfig extends UserRuntimeConfig {}
  interface PublicRuntimeConfig extends UserPublicRuntimeConfig {}
}
declare module 'nuxt/schema' {
  interface RuntimeConfig extends SharedRuntimeConfig {}
  interface PublicRuntimeConfig extends SharedPublicRuntimeConfig {}
}
declare module 'vue' {
        interface ComponentCustomProperties {
          $config: UserRuntimeConfig
        }
      }