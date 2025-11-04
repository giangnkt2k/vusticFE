import { _ as _sfc_main$1$1, a as _sfc_main$2 } from './FormField-D0fPdc7u.mjs';
import { _ as _sfc_main$3 } from './Input-DZZU1M-i.mjs';
import { b as useSeoMeta, i as useSanctumConfig, f as _sfc_main$c, g as _sfc_main$b, n as navigateTo, h as useNuxtApp } from './server.mjs';
import { defineComponent, ref, mergeProps, unref, withCtx, createVNode, createTextVNode, reactive, computed, toRaw, toValue, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { u as useSanctumAuth } from './useSanctumAuth-CxJ5yyq2.mjs';
import { debounce, isEqual } from 'lodash-es';
import { objectToFormData } from 'object-form-encoder';
import { u as useSanctumClient } from './useSanctumClient-DOkjdFOV.mjs';
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

const usePrecognitionConfig = () => {
  return useNuxtApp().$config.public.precognition;
};
const PRECOGNITION_HEADER = "Precognition", PRECOGNITION_ONLY_HEADER = "Precognition-Validate-Only", PRECOGNITION_SUCCESS_HEADER = "Precognition-Success";
const STATUS_NO_CONTENT = 204, STATUS_VALIDATION_ERROR = 422;
const isFile = (value) => typeof File !== "undefined" && value instanceof File || value instanceof Blob || typeof FileList !== "undefined" && value instanceof FileList && value.length > 0;
const hasFiles = (data) => isFile(data) || typeof data === "object" && data !== null && Object.values(data).some((value) => hasFiles(value));
const clearFiles = (data) => {
  let newData = { ...data };
  Object.keys(newData).forEach((name) => {
    const value = newData[name];
    if (value === null) {
      return;
    }
    if (isFile(value)) {
      const { [name]: _, ...fields } = newData;
      newData = fields;
      return;
    }
    if (Array.isArray(value)) {
      newData[name] = Object.values(clearFiles({ ...value }));
      return;
    }
    if (typeof value === "object") {
      newData[name] = clearFiles(newData[name]);
      return;
    }
  });
  return newData;
};
const usePrecognitionForm = (method, url, payload) => {
  const _originalPayload = structuredClone(payload);
  const _originalPayloadKeys = Object.keys(_originalPayload);
  const _validated = ref([]);
  const _touched = ref([]);
  const _config = usePrecognitionConfig();
  const _client = useSanctumClient();
  async function process(params = {
    precognitive: false,
    fields: [],
    options: {}
  }) {
    let payload2 = form.data();
    const headers = new Headers();
    const includeFiles = params.options?.validateFiles ?? _config.validateFiles;
    if (hasFiles(payload2)) {
      if (params.precognitive && !includeFiles) {
        console.warn("Files were detected in the payload but will not be sent. To include files, set `validateFiles` to `true` in the validation options or module config.");
        payload2 = clearFiles(payload2);
      } else {
        payload2 = objectToFormData(payload2);
      }
    }
    if (params.precognitive) {
      headers.set(PRECOGNITION_HEADER, "true");
      if (params.fields.length > 0 && params.fields.length !== _originalPayloadKeys.length) {
        headers.set(PRECOGNITION_ONLY_HEADER, params.fields.join());
      }
    }
    const request_url = toValue(url), request_method = toValue(method);
    const response = await _client.raw(request_url, {
      method: request_method,
      ...["get", "delete"].includes(request_method) ? { query: payload2 } : { body: payload2 },
      headers,
      ignoreResponseError: true
    });
    if (params.precognitive) {
      if (response.headers.get(PRECOGNITION_HEADER) !== "true") {
        console.warn("Did not receive a Precognition response. Ensure you have the Precognition middleware in place for the route.");
      }
      if (response.status === STATUS_NO_CONTENT && response.headers.get(PRECOGNITION_SUCCESS_HEADER) === "true") {
        if (params.fields.length > 0) {
          const validatedNew = new Set(_validated.value);
          params.fields.forEach((field) => {
            validatedNew.add(field);
            form.forgetError(field);
          });
          _validated.value = [...validatedNew];
        } else {
          _validated.value = _originalPayloadKeys;
          form.setErrors({});
        }
      }
    }
    if (response.ok) {
      return Promise.resolve(response);
    }
    if (response.status === STATUS_VALIDATION_ERROR) {
      const validationResponse = response._data;
      if (params.fields.length == 0) {
        form.setErrors(validationResponse.errors);
      } else {
        const currentErrors = form.errors;
        const newErrors = validationResponse.errors;
        for (const field in newErrors) {
          currentErrors[field] = newErrors[field];
        }
      }
    }
    return Promise.reject(response);
  }
  const form = reactive({
    fields: payload,
    errors: {},
    processing: false,
    validating: false,
    hasErrors: computed(() => Object.keys(form.errors).length > 0),
    wasSuccessful: false,
    recentlySuccessful: false,
    touched: (name) => _touched.value.includes(name),
    valid: (name) => _validated.value.includes(name) && !form.invalid(name),
    invalid: (name) => typeof form.errors[name] !== "undefined",
    data() {
      return toRaw(form.fields);
    },
    setData(data) {
      Object.keys(data).forEach((key) => {
        form.fields[key] = data[key];
      });
      return form;
    },
    touch(name) {
      const inputs = Array.isArray(name) ? name : [name];
      const fields = [..._touched.value, ...inputs];
      const newTouched = [...new Set(fields)];
      const hasNewFields = newTouched.length !== _touched.value.length || newTouched.every((x) => _touched.value.includes(x));
      if (hasNewFields) {
        _touched.value = newTouched;
      }
      return form;
    },
    reset(...keys) {
      const resetField = (fieldName) => {
        form.fields[fieldName] = _originalPayload[fieldName];
        form.forgetError(fieldName);
      };
      if (keys.length === 0) {
        _originalPayloadKeys.forEach((name) => resetField(name));
        _touched.value = [];
        _validated.value = [];
      }
      const newTouched = [..._touched.value];
      const newValidated = [..._validated.value];
      keys.forEach((name) => {
        resetField(name);
        if (newTouched.includes(name)) {
          newTouched.splice(newTouched.indexOf(name), 1);
        }
        if (newValidated.includes(name)) {
          newValidated.splice(newValidated.indexOf(name), 1);
        }
      });
      _touched.value = newTouched;
      _validated.value = newValidated;
      return form;
    },
    setErrors(entries) {
      if (!isEqual(form.errors, entries)) {
        form.errors = entries;
      }
      return form;
    },
    forgetError(name) {
      const {
        [name]: _,
        ...newErrors
      } = form.errors;
      return form.setErrors(newErrors);
    },
    validate(name, options) {
      if (typeof name === "undefined") {
        name = [];
      }
      const fields = Array.isArray(name) ? name : [name];
      form.validating = true;
      process({ precognitive: true, fields, options }).then((response) => {
        if (!options?.onSuccess) {
          return;
        }
        options.onSuccess(response);
      }).catch((response) => {
        if (response.status === STATUS_VALIDATION_ERROR) {
          if (!options?.onValidationError) {
            return;
          }
          options.onValidationError(response);
          return;
        }
        if (!options?.onError) {
          return;
        }
        options.onError(response);
      }).finally(() => form.validating = false);
      return form;
    },
    async validateWithErrors() {
      form.validating = true;
      try {
        await process({ precognitive: true, fields: [] }).finally(() => form.validating = false);
      } catch {
        return form.errors;
      }
      return {};
    },
    async submit() {
      form.processing = true;
      return await process().then((response) => {
        form.wasSuccessful = true;
        form.recentlySuccessful = true;
        debounce(
          () => {
            form.recentlySuccessful = false;
          },
          2e3
        )();
        return response;
      }).catch((response) => {
        form.wasSuccessful = false;
        throw response;
      }).finally(() => form.processing = false);
    }
  });
  if (_config.validationTimeout > 0) {
    form.validate = debounce(form.validate, _config.validationTimeout);
  }
  return form;
};
const useNuxtFormValidator = (form) => {
  async function validate() {
    const apiErrors = await form.validateWithErrors();
    const errors = [];
    for (const [fieldName, fieldErrors] of Object.entries(apiErrors)) {
      if (fieldErrors === void 0 || fieldErrors.length === 0) {
        continue;
      }
      const message = fieldErrors[0];
      if (message === void 0) {
        continue;
      }
      errors.push({
        name: fieldName,
        message
      });
    }
    return errors;
  }
  return validate;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AuthRegisterForm",
  __ssrInlineRender: true,
  setup(__props) {
    const sanctumConfig = useSanctumConfig();
    const { refreshIdentity } = useSanctumAuth();
    const form = usePrecognitionForm("post", "/register", {
      name: "",
      email: "",
      password: "",
      password_confirmation: ""
    });
    const state = form.fields;
    const validator = useNuxtFormValidator(form);
    const formComponent = ref();
    async function onSubmit(_) {
      formComponent.value?.clear();
      await form.submit();
      await refreshIdentity();
      navigateTo(sanctumConfig.redirect.onGuestOnly || "/");
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UForm = _sfc_main$1$1;
      const _component_UFormField = _sfc_main$2;
      const _component_UInput = _sfc_main$3;
      const _component_ULink = _sfc_main$c;
      const _component_UButton = _sfc_main$b;
      _push(ssrRenderComponent(_component_UForm, mergeProps({
        ref_key: "formComponent",
        ref: formComponent,
        validate: unref(validator),
        state: unref(state),
        class: "space-y-4 sm:min-w-80 md:min-w-96 max-w-md",
        onSubmit
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UFormField, {
              label: "Name",
              name: "name"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: unref(state).name,
                    "onUpdate:modelValue": ($event) => unref(state).name = $event,
                    icon: "i-heroicons-user",
                    class: "w-full",
                    trailing: ""
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: unref(state).name,
                      "onUpdate:modelValue": ($event) => unref(state).name = $event,
                      icon: "i-heroicons-user",
                      class: "w-full",
                      trailing: ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
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
              label: "Password",
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
              label: "Confirm Password",
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
            _push2(`<div class="flex justify-end gap-4 items-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_ULink, {
              to: "/login",
              class: "text-sm text-neutral-500 underline"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Already registered? `);
                } else {
                  return [
                    createTextVNode(" Already registered? ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UButton, { type: "submit" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Register `);
                } else {
                  return [
                    createTextVNode(" Register ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode(_component_UFormField, {
                label: "Name",
                name: "name"
              }, {
                default: withCtx(() => [
                  createVNode(_component_UInput, {
                    modelValue: unref(state).name,
                    "onUpdate:modelValue": ($event) => unref(state).name = $event,
                    icon: "i-heroicons-user",
                    class: "w-full",
                    trailing: ""
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
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
                label: "Password",
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
                label: "Confirm Password",
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
              createVNode("div", { class: "flex justify-end gap-4 items-center" }, [
                createVNode(_component_ULink, {
                  to: "/login",
                  class: "text-sm text-neutral-500 underline"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Already registered? ")
                  ]),
                  _: 1
                }),
                createVNode(_component_UButton, { type: "submit" }, {
                  default: withCtx(() => [
                    createTextVNode(" Register ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Auth/AuthRegisterForm.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main$1, { __name: "AuthRegisterForm" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "register",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Register"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AuthRegisterForm = __nuxt_component_0;
      _push(ssrRenderComponent(_component_AuthRegisterForm, _attrs, null, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/register.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=register-DglsZ9ju.mjs.map
