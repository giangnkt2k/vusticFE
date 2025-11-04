import { F as defineNuxtRouteMiddleware, i as useSanctumConfig, G as createError, n as navigateTo } from './server.mjs';
import { u as useSanctumAuth, t as trimTrailingSlash } from './useSanctumAuth-CxJ5yyq2.mjs';
import 'vue';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '@iconify/utils';
import 'consola';
import 'vue-router';
import 'tailwindcss/colors';
import '@iconify/vue';
import 'vue/server-renderer';
import 'reka-ui';
import '@vueuse/core';
import 'tailwind-variants';
import '@iconify/utils/lib/css/icon';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
import './useSanctumClient-DOkjdFOV.mjs';

const sanctum_auth = defineNuxtRouteMiddleware((to) => {
  const options = useSanctumConfig();
  const { isAuthenticated } = useSanctumAuth();
  if (isAuthenticated.value) {
    return;
  }
  const endpoint = options.redirect.onAuthOnly;
  if (endpoint === void 0) {
    throw new Error("`sanctum.redirect.onAuthOnly` is not defined");
  }
  if (endpoint === false) {
    throw createError({ statusCode: 403 });
  }
  const redirect = { path: endpoint };
  if (options.redirect.keepRequestedRoute) {
    redirect.query = { redirect: trimTrailingSlash(to.fullPath) };
  }
  return navigateTo(redirect, { replace: true });
});

export { sanctum_auth as default };
//# sourceMappingURL=sanctum.auth-B8OORrKX.mjs.map
