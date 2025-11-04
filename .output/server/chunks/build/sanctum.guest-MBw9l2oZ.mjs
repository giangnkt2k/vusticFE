import { u as useSanctumAuth } from './useSanctumAuth-CxJ5yyq2.mjs';
import { F as defineNuxtRouteMiddleware, i as useSanctumConfig, G as createError, n as navigateTo } from './server.mjs';
import 'vue';
import './useSanctumClient-DOkjdFOV.mjs';
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

const sanctum_guest = defineNuxtRouteMiddleware(() => {
  const options = useSanctumConfig();
  const { isAuthenticated } = useSanctumAuth();
  if (!isAuthenticated.value) {
    return;
  }
  const endpoint = options.redirect.onGuestOnly;
  if (endpoint === void 0) {
    throw new Error("`sanctum.redirect.onGuestOnly` is not defined");
  }
  if (endpoint === false) {
    throw createError({ statusCode: 403 });
  }
  return navigateTo(endpoint, { replace: true });
});

export { sanctum_guest as default };
//# sourceMappingURL=sanctum.guest-MBw9l2oZ.mjs.map
