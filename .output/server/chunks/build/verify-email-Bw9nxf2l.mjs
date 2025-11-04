import { b as useSeoMeta, f as _sfc_main$c, o as useToast, g as _sfc_main$b, n as navigateTo } from './server.mjs';
import { defineComponent, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from 'vue';
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

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ResendNotificationButton",
  __ssrInlineRender: true,
  setup(__props) {
    const sanctumFetch = useSanctumClient();
    const toast = useToast();
    async function sendEmailNotification() {
      try {
        const response = await sanctumFetch.raw("/email/verification-notification", { method: "POST" });
        if (response.type === "opaqueredirect") {
          await navigateTo(response.headers.get("Location"));
        }
        toast.add({ description: "Done! Check your inbox for the verification email.", color: "success" });
      } catch {
        toast.add({ description: "Failed to send the verification email. Please try again later.", color: "error" });
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UButton = _sfc_main$b;
      _push(ssrRenderComponent(_component_UButton, mergeProps({ onClick: sendEmailNotification }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Resend verification email `);
          } else {
            return [
              createTextVNode(" Resend verification email ")
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/VerifyEmail/ResendNotificationButton.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main$1, { __name: "VerifyEmailResendNotificationButton" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "verify-email",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Verify email"
    });
    const { logout } = useSanctumAuth();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VerifyEmailResendNotificationButton = __nuxt_component_0;
      const _component_ULink = _sfc_main$c;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col gap-4 sm:min-w-80 md:min-w-96 max-w-md" }, _attrs))}><p> Thanks for signing up! Before get started, could you verify your email address by clicking on the link we just emailed to you? If you didn&#39;t receive the email, we will gladly send you another. </p><div class="flex justify-between items-center">`);
      _push(ssrRenderComponent(_component_VerifyEmailResendNotificationButton, null, null, _parent));
      _push(ssrRenderComponent(_component_ULink, {
        class: "underline underline-offset-2 text-neutral-500",
        onClick: unref(logout)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Logout `);
          } else {
            return [
              createTextVNode(" Logout ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/verify-email.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=verify-email-Bw9nxf2l.mjs.map
