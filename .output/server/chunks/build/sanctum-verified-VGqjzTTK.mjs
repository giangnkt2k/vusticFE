import { F as defineNuxtRouteMiddleware, i as useSanctumConfig, G as createError, n as navigateTo } from './server.mjs';
import { u as useSanctumAuth } from './useSanctumAuth-CxJ5yyq2.mjs';
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

const sanctumVerified = defineNuxtRouteMiddleware(() => {
  const sanctumConfig = useSanctumConfig();
  const { isAuthenticated, user } = useSanctumAuth();
  if (!isAuthenticated.value) {
    if (sanctumConfig.redirect.onAuthOnly === false) {
      return createError({
        statusCode: 409,
        message: "You must verify your email to access this page",
        fatal: true
      });
    }
    return navigateTo(sanctumConfig.redirect.onAuthOnly);
  }
  if (user.value?.email_verified_at !== null) {
    return;
  }
  return navigateTo("/verify-email");
});

export { sanctumVerified as default };
//# sourceMappingURL=sanctum-verified-VGqjzTTK.mjs.map
