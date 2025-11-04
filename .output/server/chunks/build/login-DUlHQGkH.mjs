import { _ as __nuxt_component_0 } from './AuthLoginForm-DBC5AIfW.mjs';
import { defineComponent, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { b as useSeoMeta, c as useRoute } from './server.mjs';
import './FormField-D0fPdc7u.mjs';
import '@vueuse/core';
import 'reka-ui';
import './Input-DZZU1M-i.mjs';
import 'zod';
import './useSanctumAuth-CxJ5yyq2.mjs';
import './useSanctumClient-DOkjdFOV.mjs';
import './useSanctumError-C4ThmU5N.mjs';
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
import 'tailwind-variants';
import '@iconify/utils/lib/css/icon';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Login"
    });
    const route = useRoute();
    const resetToken = route.query.reset;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AuthLoginForm = __nuxt_component_0;
      _push(ssrRenderComponent(_component_AuthLoginForm, mergeProps({ token: unref(resetToken) }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=login-DUlHQGkH.mjs.map
