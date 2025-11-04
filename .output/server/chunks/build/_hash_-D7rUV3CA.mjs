import { _ as _sfc_main$1$1, a as _sfc_main$2 } from './FormField-D0fPdc7u.mjs';
import { _ as _sfc_main$3 } from './Input-DZZU1M-i.mjs';
import { b as useSeoMeta, c as useRoute, g as _sfc_main$b, n as navigateTo } from './server.mjs';
import { defineComponent, mergeProps, unref, ref, reactive, withCtx, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { z } from 'zod';
import { u as useSanctumClient } from './useSanctumClient-DOkjdFOV.mjs';
import { u as useSanctumError } from './useSanctumError-C4ThmU5N.mjs';
import '@vueuse/core';
import 'reka-ui';
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

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AuthPasswordResetForm",
  __ssrInlineRender: true,
  props: {
    email: {},
    token: {}
  },
  setup(__props) {
    const props = __props;
    const sanctumFetch = useSanctumClient();
    const schema = z.object({
      email: z.string().email(),
      password: z.string().min(8),
      password_confirmation: z.string().min(8),
      token: z.string()
    }).refine(
      (data) => data.password === data.password_confirmation,
      {
        message: "Passwords do not match",
        path: ["password_confirmation"]
      }
    );
    const form = ref();
    const state = reactive({
      email: props.email,
      password: "",
      password_confirmation: "",
      token: props.token
    });
    async function onSubmit(event) {
      form.value?.clear();
      const payload = event.data;
      try {
        await sanctumFetch("/reset-password", {
          method: "POST",
          body: payload
        });
        await navigateTo({ path: "/login", query: { reset: "true" } });
      } catch (error) {
        const err = useSanctumError(error);
        if (err.isValidationError) {
          form.value?.setErrors(err.bag);
        }
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UForm = _sfc_main$1$1;
      const _component_UFormField = _sfc_main$2;
      const _component_UInput = _sfc_main$3;
      const _component_UButton = _sfc_main$b;
      _push(ssrRenderComponent(_component_UForm, mergeProps({
        ref_key: "form",
        ref: form,
        schema: unref(schema),
        state: unref(state),
        class: "space-y-4 sm:min-w-80 md:min-w-96 max-w-md",
        onSubmit
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UFormField, {
              label: "Email",
              name: "email"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: unref(state).email,
                    "onUpdate:modelValue": ($event) => unref(state).email = $event,
                    icon: "i-heroicons-at-symbol",
                    class: "w-full",
                    trailing: ""
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: unref(state).email,
                      "onUpdate:modelValue": ($event) => unref(state).email = $event,
                      icon: "i-heroicons-at-symbol",
                      class: "w-full",
                      trailing: ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UFormField, {
              label: "New Password",
              name: "password"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: unref(state).password,
                    "onUpdate:modelValue": ($event) => unref(state).password = $event,
                    type: "password",
                    icon: "i-heroicons-lock-closed",
                    class: "w-full",
                    trailing: ""
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: unref(state).password,
                      "onUpdate:modelValue": ($event) => unref(state).password = $event,
                      type: "password",
                      icon: "i-heroicons-lock-closed",
                      class: "w-full",
                      trailing: ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UFormField, {
              label: "Confirm New Password",
              name: "password_confirmation"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: unref(state).password_confirmation,
                    "onUpdate:modelValue": ($event) => unref(state).password_confirmation = $event,
                    type: "password",
                    icon: "i-heroicons-arrow-path",
                    class: "w-full",
                    trailing: ""
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: unref(state).password_confirmation,
                      "onUpdate:modelValue": ($event) => unref(state).password_confirmation = $event,
                      type: "password",
                      icon: "i-heroicons-arrow-path",
                      class: "w-full",
                      trailing: ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="flex justify-end"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UButton, { type: "submit" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Reset Password `);
                } else {
                  return [
                    createTextVNode(" Reset Password ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode(_component_UFormField, {
                label: "Email",
                name: "email"
              }, {
                default: withCtx(() => [
                  createVNode(_component_UInput, {
                    modelValue: unref(state).email,
                    "onUpdate:modelValue": ($event) => unref(state).email = $event,
                    icon: "i-heroicons-at-symbol",
                    class: "w-full",
                    trailing: ""
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(_component_UFormField, {
                label: "New Password",
                name: "password"
              }, {
                default: withCtx(() => [
                  createVNode(_component_UInput, {
                    modelValue: unref(state).password,
                    "onUpdate:modelValue": ($event) => unref(state).password = $event,
                    type: "password",
                    icon: "i-heroicons-lock-closed",
                    class: "w-full",
                    trailing: ""
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(_component_UFormField, {
                label: "Confirm New Password",
                name: "password_confirmation"
              }, {
                default: withCtx(() => [
                  createVNode(_component_UInput, {
                    modelValue: unref(state).password_confirmation,
                    "onUpdate:modelValue": ($event) => unref(state).password_confirmation = $event,
                    type: "password",
                    icon: "i-heroicons-arrow-path",
                    class: "w-full",
                    trailing: ""
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode("div", { class: "flex justify-end" }, [
                createVNode(_component_UButton, { type: "submit" }, {
                  default: withCtx(() => [
                    createTextVNode(" Reset Password ")
                  ]),
                  _: 1
                })
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Auth/AuthPasswordResetForm.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main$1, { __name: "AuthPasswordResetForm" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[hash]",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Reset password"
    });
    const route = useRoute();
    const email = route.query.email ?? "";
    const resetToken = route.params.hash;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AuthPasswordResetForm = __nuxt_component_0;
      _push(ssrRenderComponent(_component_AuthPasswordResetForm, mergeProps({
        email: unref(email),
        token: unref(resetToken)
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/password-reset/[hash].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_hash_-D7rUV3CA.mjs.map
