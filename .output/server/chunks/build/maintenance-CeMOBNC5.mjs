import { g as _sfc_main$b, n as navigateTo } from './server.mjs';
import { defineComponent, ref, computed, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { u as useSanctumClient } from './useSanctumClient-DOkjdFOV.mjs';
import { u as useSanctumAuth } from './useSanctumAuth-CxJ5yyq2.mjs';
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

const intervalError = "[nuxt] `setInterval` should not be used on the server. Consider wrapping it with an `onNuxtReady`, `onBeforeMount` or `onMounted` lifecycle hook, or ensure you only call it in the browser by checking `false`.";
const setInterval = () => {
  console.error(intervalError);
};
const HEALTH_CHECK_URL = "/up", HOME_URL = "/";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "maintenance",
  __ssrInlineRender: true,
  setup(__props) {
    const sanctumFetch = useSanctumClient();
    const { refreshIdentity } = useSanctumAuth();
    const secondsBeforeRedirect = ref(0);
    const canRedirect = computed(() => secondsBeforeRedirect.value === 0);
    const redirectButtonText = computed(() => {
      return canRedirect.value ? "Try again" : `Try again in ${secondsBeforeRedirect.value} seconds`;
    });
    function startTimer() {
      secondsBeforeRedirect.value = 5;
      setInterval();
    }
    async function healthCheck() {
      try {
        await sanctumFetch(HEALTH_CHECK_URL);
        try {
          await refreshIdentity();
        } catch {
        }
        await navigateTo(HOME_URL);
      } catch {
        startTimer();
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UButton = _sfc_main$b;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col gap-4 text-center" }, _attrs))}><strong class="text-2xl"> You got us! </strong><p> We&#39;re currently under maintenance. Please check back later. </p>`);
      _push(ssrRenderComponent(_component_UButton, {
        color: "primary",
        label: unref(redirectButtonText),
        class: "mx-auto mt-5",
        disabled: !unref(canRedirect),
        onClick: healthCheck
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/maintenance.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=maintenance-CeMOBNC5.mjs.map
