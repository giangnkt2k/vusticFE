import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = "sanctum-verified" | "sanctum:auth" | "sanctum:guest"
declare module 'nuxt/app' {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}