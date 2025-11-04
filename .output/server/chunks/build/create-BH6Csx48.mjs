import { o as useToast, l as _sfc_main$2, p as _sfc_main$4, g as _sfc_main$b, n as navigateTo, d as useAppConfig, j as useLocale, e as useFormField, t as tv, k as _sfc_main$e, _ as _sfc_main$g } from './server.mjs';
import { _ as _sfc_main$1$1, a as _sfc_main$3 } from './FormField-D0fPdc7u.mjs';
import { _ as _sfc_main$5 } from './Input-DZZU1M-i.mjs';
import { defineComponent, reactive, withCtx, createVNode, unref, createTextVNode, mergeModels, useSlots, useModel, computed, watch, mergeProps, createBlock, createCommentVNode, openBlock, Fragment, renderSlot, renderList, toDisplayString, withModifiers, resolveDynamicComponent, withKeys, ref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderSlot, ssrRenderClass, ssrRenderList, ssrInterpolate, ssrRenderVNode } from 'vue/server-renderer';
import { Primitive } from 'reka-ui';
import { createReusableTemplate } from '@vueuse/core';
import * as z from 'zod';
import { u as useContracts } from './useContracts-Bg2eSje4.mjs';
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
import './useSanctumFetch-Bq3Ox6iK.mjs';
import './useSanctumClient-DOkjdFOV.mjs';

function parseAcceptToDataTypes(accept) {
  if (!accept || accept === "*") {
    return void 0;
  }
  const types = accept.split(",").map((type) => {
    const trimmedType = type.trim();
    if (trimmedType.includes("/") && trimmedType.endsWith("/*")) {
      return trimmedType.split("/")[0] || trimmedType;
    }
    return trimmedType;
  }).filter((type) => {
    return !type.startsWith(".");
  });
  return types.length > 0 ? types : void 0;
}
function useFileUpload(options) {
  const {
    accept = "*"
  } = options;
  const inputRef = ref();
  const dropzoneRef = ref();
  computed(() => parseAcceptToDataTypes(unref(accept)));
  const isDragging = ref(false);
  const fileDialog = reactive({
    open: () => {
    }
  });
  function open() {
    fileDialog.open();
  }
  return {
    isDragging,
    open,
    inputRef,
    dropzoneRef
  };
}
const theme = {
  "slots": {
    "root": "relative flex flex-col",
    "base": [
      "w-full flex-1 bg-default border border-default flex flex-col gap-2 items-stretch justify-center rounded-lg focus-visible:outline-2",
      "transition-[background]"
    ],
    "wrapper": "flex flex-col items-center justify-center text-center",
    "icon": "shrink-0",
    "avatar": "shrink-0",
    "label": "font-medium text-default mt-2",
    "description": "text-muted mt-1",
    "actions": "flex flex-wrap gap-1.5 shrink-0 mt-4",
    "files": "",
    "file": "relative",
    "fileLeadingAvatar": "shrink-0",
    "fileWrapper": "flex flex-col min-w-0",
    "fileName": "text-default truncate",
    "fileSize": "text-muted truncate",
    "fileTrailingButton": ""
  },
  "variants": {
    "color": {
      "primary": "",
      "secondary": "",
      "success": "",
      "info": "",
      "warning": "",
      "error": "",
      "neutral": ""
    },
    "variant": {
      "area": {
        "wrapper": "px-4 py-3",
        "base": "p-4"
      },
      "button": {}
    },
    "size": {
      "xs": {
        "base": "text-xs",
        "icon": "size-4",
        "file": "text-xs px-2 py-1 gap-1",
        "fileWrapper": "flex-row gap-1"
      },
      "sm": {
        "base": "text-xs",
        "icon": "size-4",
        "file": "text-xs px-2.5 py-1.5 gap-1.5",
        "fileWrapper": "flex-row gap-1"
      },
      "md": {
        "base": "text-sm",
        "icon": "size-5",
        "file": "text-xs px-2.5 py-1.5 gap-1.5"
      },
      "lg": {
        "base": "text-sm",
        "icon": "size-5",
        "file": "text-sm px-3 py-2 gap-2",
        "fileSize": "text-xs"
      },
      "xl": {
        "base": "text-base",
        "icon": "size-6",
        "file": "text-sm px-3 py-2 gap-2"
      }
    },
    "layout": {
      "list": {
        "root": "gap-2 items-start",
        "files": "flex flex-col w-full gap-2",
        "file": "min-w-0 flex items-center border border-default rounded-md w-full",
        "fileTrailingButton": "ms-auto"
      },
      "grid": {
        "fileWrapper": "hidden",
        "fileLeadingAvatar": "size-full rounded-lg",
        "fileTrailingButton": "absolute -top-1.5 -end-1.5 p-0 rounded-full border-2 border-bg"
      }
    },
    "position": {
      "inside": "",
      "outside": ""
    },
    "dropzone": {
      "true": "border-dashed data-[dragging=true]:bg-elevated/25"
    },
    "interactive": {
      "true": ""
    },
    "highlight": {
      "true": ""
    },
    "multiple": {
      "true": ""
    },
    "disabled": {
      "true": "cursor-not-allowed opacity-75"
    }
  },
  "compoundVariants": [
    {
      "color": "primary",
      "class": "focus-visible:outline-primary"
    },
    {
      "color": "secondary",
      "class": "focus-visible:outline-secondary"
    },
    {
      "color": "success",
      "class": "focus-visible:outline-success"
    },
    {
      "color": "info",
      "class": "focus-visible:outline-info"
    },
    {
      "color": "warning",
      "class": "focus-visible:outline-warning"
    },
    {
      "color": "error",
      "class": "focus-visible:outline-error"
    },
    {
      "color": "primary",
      "highlight": true,
      "class": "border-primary"
    },
    {
      "color": "secondary",
      "highlight": true,
      "class": "border-secondary"
    },
    {
      "color": "success",
      "highlight": true,
      "class": "border-success"
    },
    {
      "color": "info",
      "highlight": true,
      "class": "border-info"
    },
    {
      "color": "warning",
      "highlight": true,
      "class": "border-warning"
    },
    {
      "color": "error",
      "highlight": true,
      "class": "border-error"
    },
    {
      "color": "neutral",
      "class": "focus-visible:outline-inverted"
    },
    {
      "color": "neutral",
      "highlight": true,
      "class": "border-inverted"
    },
    {
      "size": "xs",
      "layout": "list",
      "class": {
        "fileTrailingButton": "-me-1"
      }
    },
    {
      "size": "sm",
      "layout": "list",
      "class": {
        "fileTrailingButton": "-me-1.5"
      }
    },
    {
      "size": "md",
      "layout": "list",
      "class": {
        "fileTrailingButton": "-me-1.5"
      }
    },
    {
      "size": "lg",
      "layout": "list",
      "class": {
        "fileTrailingButton": "-me-2"
      }
    },
    {
      "size": "xl",
      "layout": "list",
      "class": {
        "fileTrailingButton": "-me-2"
      }
    },
    {
      "variant": "button",
      "size": "xs",
      "class": {
        "base": "p-1"
      }
    },
    {
      "variant": "button",
      "size": "sm",
      "class": {
        "base": "p-1.5"
      }
    },
    {
      "variant": "button",
      "size": "md",
      "class": {
        "base": "p-1.5"
      }
    },
    {
      "variant": "button",
      "size": "lg",
      "class": {
        "base": "p-2"
      }
    },
    {
      "variant": "button",
      "size": "xl",
      "class": {
        "base": "p-2"
      }
    },
    {
      "layout": "grid",
      "multiple": true,
      "class": {
        "files": "grid grid-cols-2 md:grid-cols-3 gap-4 w-full",
        "file": "p-0 aspect-square"
      }
    },
    {
      "layout": "grid",
      "multiple": false,
      "class": {
        "file": "absolute inset-0 p-0"
      }
    },
    {
      "interactive": true,
      "disabled": false,
      "class": "hover:bg-elevated/25"
    }
  ],
  "defaultVariants": {
    "color": "primary",
    "variant": "area",
    "size": "md"
  }
};
const _sfc_main$1 = /* @__PURE__ */ Object.assign({ inheritAttrs: false }, {
  __name: "UFileUpload",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    as: { type: null, required: false },
    id: { type: String, required: false },
    name: { type: String, required: false },
    icon: { type: String, required: false },
    label: { type: String, required: false },
    description: { type: String, required: false },
    color: { type: null, required: false },
    variant: { type: null, required: false },
    size: { type: null, required: false },
    layout: { type: null, required: false, default: "grid" },
    position: { type: null, required: false, default: "outside" },
    highlight: { type: Boolean, required: false },
    accept: { type: String, required: false, default: "*" },
    multiple: { type: Boolean, required: false, default: false },
    reset: { type: Boolean, required: false, default: false },
    dropzone: { type: Boolean, required: false, default: true },
    interactive: { type: Boolean, required: false, default: true },
    required: { type: Boolean, required: false },
    disabled: { type: Boolean, required: false },
    fileIcon: { type: String, required: false },
    fileDelete: { type: [Boolean, Object], required: false },
    fileDeleteIcon: { type: String, required: false },
    class: { type: null, required: false },
    ui: { type: null, required: false }
  }, {
    "modelValue": { type: null },
    "modelModifiers": {}
  }),
  emits: /* @__PURE__ */ mergeModels(["change"], ["update:modelValue"]),
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const slots = useSlots();
    const modelValue = useModel(__props, "modelValue");
    const appConfig = useAppConfig();
    const { t } = useLocale();
    const [DefineFilesTemplate, ReuseFilesTemplate] = createReusableTemplate();
    const { isDragging, open, inputRef, dropzoneRef } = useFileUpload({
      accept: props.accept,
      reset: props.reset,
      multiple: props.multiple,
      dropzone: props.dropzone
    });
    const { emitFormInput, emitFormChange, id, name, disabled, ariaAttrs } = useFormField(props);
    const variant = computed(() => props.multiple ? "area" : props.variant);
    const layout = computed(() => props.variant === "button" && !props.multiple ? "grid" : props.layout);
    const position = computed(() => {
      if (layout.value === "grid" && props.multiple) {
        return "inside";
      }
      if (variant.value === "button") {
        return "outside";
      }
      return props.position;
    });
    const ui = computed(() => tv({ extend: tv(theme), ...appConfig.ui?.fileUpload || {} })({
      dropzone: props.dropzone,
      interactive: props.interactive,
      color: props.color,
      size: props.size,
      variant: variant.value,
      layout: layout.value,
      position: position.value,
      multiple: props.multiple,
      highlight: props.highlight,
      disabled: props.disabled
    }));
    function createObjectUrl(file) {
      return URL.createObjectURL(file);
    }
    function formatFileSize(bytes) {
      if (bytes === 0) {
        return "0B";
      }
      const k = 1024;
      const sizes = ["B", "KB", "MB", "GB"];
      const i = Math.floor(Math.log(bytes) / Math.log(k));
      const size = bytes / Math.pow(k, i);
      const formattedSize = i === 0 ? size.toString() : size.toFixed(0);
      return `${formattedSize}${sizes[i]}`;
    }
    function onUpdate(files, reset = false) {
      if (props.multiple) {
        if (reset) {
          modelValue.value = files;
        } else {
          const existingFiles = modelValue.value || [];
          modelValue.value = [...existingFiles, ...files || []];
        }
      } else {
        modelValue.value = files?.[0];
      }
      const event = new Event("change", { target: { value: modelValue.value } });
      emits("change", event);
      emitFormChange();
      emitFormInput();
    }
    function removeFile(index) {
      if (!modelValue.value) {
        return;
      }
      if (!props.multiple || index === void 0) {
        onUpdate([], true);
        dropzoneRef.value?.focus();
        return;
      }
      const files = [...modelValue.value];
      files.splice(index, 1);
      onUpdate(files, true);
      dropzoneRef.value?.focus();
    }
    watch(modelValue, (newValue) => {
      const hasModelReset = !Array.isArray(newValue) || !newValue.length;
      if (hasModelReset && inputRef.value) {
        inputRef.value.value = "";
      }
    });
    __expose({
      inputRef,
      dropzoneRef
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(DefineFilesTemplate), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (modelValue.value && (Array.isArray(modelValue.value) ? modelValue.value.length : true)) {
              _push2(`<!--[-->`);
              ssrRenderSlot(_ctx.$slots, "files-top", {
                files: modelValue.value,
                open: unref(open),
                removeFile
              }, null, _push2, _parent2, _scopeId);
              _push2(`<div class="${ssrRenderClass(ui.value.files({ class: props.ui?.files }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "files", { files: modelValue.value }, () => {
                _push2(`<!--[-->`);
                ssrRenderList(Array.isArray(modelValue.value) ? modelValue.value : [modelValue.value], (file, index) => {
                  _push2(`<div class="${ssrRenderClass(ui.value.file({ class: props.ui?.file }))}"${_scopeId}>`);
                  ssrRenderSlot(_ctx.$slots, "file", {
                    file,
                    index
                  }, () => {
                    ssrRenderSlot(_ctx.$slots, "file-leading", {
                      file,
                      index
                    }, () => {
                      _push2(ssrRenderComponent(_sfc_main$e, {
                        src: createObjectUrl(file),
                        icon: __props.fileIcon || unref(appConfig).ui.icons.file,
                        size: props.size,
                        class: ui.value.fileLeadingAvatar({ class: props.ui?.fileLeadingAvatar })
                      }, null, _parent2, _scopeId));
                    }, _push2, _parent2, _scopeId);
                    _push2(`<div class="${ssrRenderClass(ui.value.fileWrapper({ class: props.ui?.fileWrapper }))}"${_scopeId}><span class="${ssrRenderClass(ui.value.fileName({ class: props.ui?.fileName }))}"${_scopeId}>`);
                    ssrRenderSlot(_ctx.$slots, "file-name", {
                      file,
                      index
                    }, () => {
                      _push2(`${ssrInterpolate(file.name)}`);
                    }, _push2, _parent2, _scopeId);
                    _push2(`</span><span class="${ssrRenderClass(ui.value.fileSize({ class: props.ui?.fileSize }))}"${_scopeId}>`);
                    ssrRenderSlot(_ctx.$slots, "file-size", {
                      file,
                      index
                    }, () => {
                      _push2(`${ssrInterpolate(formatFileSize(file.size))}`);
                    }, _push2, _parent2, _scopeId);
                    _push2(`</span></div>`);
                    ssrRenderSlot(_ctx.$slots, "file-trailing", {
                      file,
                      index
                    }, () => {
                      _push2(ssrRenderComponent(_sfc_main$b, mergeProps({ color: "neutral" }, { ref_for: true }, {
                        ...layout.value === "grid" ? {
                          variant: "solid",
                          size: "xs"
                        } : {
                          variant: "link",
                          size: __props.size
                        },
                        ...typeof __props.fileDelete === "object" ? __props.fileDelete : void 0
                      }, {
                        "aria-label": unref(t)("fileUpload.removeFile", { filename: file.name }),
                        "trailing-icon": __props.fileDeleteIcon || unref(appConfig).ui.icons.close,
                        class: ui.value.fileTrailingButton({ class: props.ui?.fileTrailingButton }),
                        onClick: ($event) => removeFile(index)
                      }), null, _parent2, _scopeId));
                    }, _push2, _parent2, _scopeId);
                  }, _push2, _parent2, _scopeId);
                  _push2(`</div>`);
                });
                _push2(`<!--]-->`);
              }, _push2, _parent2, _scopeId);
              _push2(`</div>`);
              ssrRenderSlot(_ctx.$slots, "files-bottom", {
                files: modelValue.value,
                open: unref(open),
                removeFile
              }, null, _push2, _parent2, _scopeId);
              _push2(`<!--]-->`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              modelValue.value && (Array.isArray(modelValue.value) ? modelValue.value.length : true) ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                renderSlot(_ctx.$slots, "files-top", {
                  files: modelValue.value,
                  open: unref(open),
                  removeFile
                }),
                createVNode("div", {
                  class: ui.value.files({ class: props.ui?.files })
                }, [
                  renderSlot(_ctx.$slots, "files", { files: modelValue.value }, () => [
                    (openBlock(true), createBlock(Fragment, null, renderList(Array.isArray(modelValue.value) ? modelValue.value : [modelValue.value], (file, index) => {
                      return openBlock(), createBlock("div", {
                        key: file.name,
                        class: ui.value.file({ class: props.ui?.file })
                      }, [
                        renderSlot(_ctx.$slots, "file", {
                          file,
                          index
                        }, () => [
                          renderSlot(_ctx.$slots, "file-leading", {
                            file,
                            index
                          }, () => [
                            createVNode(_sfc_main$e, {
                              src: createObjectUrl(file),
                              icon: __props.fileIcon || unref(appConfig).ui.icons.file,
                              size: props.size,
                              class: ui.value.fileLeadingAvatar({ class: props.ui?.fileLeadingAvatar })
                            }, null, 8, ["src", "icon", "size", "class"])
                          ]),
                          createVNode("div", {
                            class: ui.value.fileWrapper({ class: props.ui?.fileWrapper })
                          }, [
                            createVNode("span", {
                              class: ui.value.fileName({ class: props.ui?.fileName })
                            }, [
                              renderSlot(_ctx.$slots, "file-name", {
                                file,
                                index
                              }, () => [
                                createTextVNode(toDisplayString(file.name), 1)
                              ])
                            ], 2),
                            createVNode("span", {
                              class: ui.value.fileSize({ class: props.ui?.fileSize })
                            }, [
                              renderSlot(_ctx.$slots, "file-size", {
                                file,
                                index
                              }, () => [
                                createTextVNode(toDisplayString(formatFileSize(file.size)), 1)
                              ])
                            ], 2)
                          ], 2),
                          renderSlot(_ctx.$slots, "file-trailing", {
                            file,
                            index
                          }, () => [
                            createVNode(_sfc_main$b, mergeProps({ color: "neutral" }, { ref_for: true }, {
                              ...layout.value === "grid" ? {
                                variant: "solid",
                                size: "xs"
                              } : {
                                variant: "link",
                                size: __props.size
                              },
                              ...typeof __props.fileDelete === "object" ? __props.fileDelete : void 0
                            }, {
                              "aria-label": unref(t)("fileUpload.removeFile", { filename: file.name }),
                              "trailing-icon": __props.fileDeleteIcon || unref(appConfig).ui.icons.close,
                              class: ui.value.fileTrailingButton({ class: props.ui?.fileTrailingButton }),
                              onClick: withModifiers(($event) => removeFile(index), ["stop", "prevent"])
                            }), null, 16, ["aria-label", "trailing-icon", "class", "onClick"])
                          ])
                        ])
                      ], 2);
                    }), 128))
                  ])
                ], 2),
                renderSlot(_ctx.$slots, "files-bottom", {
                  files: modelValue.value,
                  open: unref(open),
                  removeFile
                })
              ], 64)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(ssrRenderComponent(unref(Primitive), {
        as: __props.as,
        class: ui.value.root({ class: [props.ui?.root, props.class] })
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {
              open: unref(open),
              removeFile
            }, () => {
              ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(variant.value === "button" ? "button" : "div"), {
                ref_key: "dropzoneRef",
                ref: dropzoneRef,
                role: variant.value === "button" ? void 0 : "button",
                "data-dragging": unref(isDragging),
                class: ui.value.base({ class: props.ui?.base }),
                tabindex: __props.interactive && !unref(disabled) ? 0 : -1,
                onClick: ($event) => __props.interactive && !unref(disabled) && unref(open)(),
                onKeydown: () => {
                },
                onKeyup: ($event) => __props.interactive && !unref(disabled) && unref(open)()
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    if (position.value === "inside") {
                      _push3(ssrRenderComponent(unref(ReuseFilesTemplate), null, null, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                    if (position.value === "inside" ? __props.multiple ? !modelValue.value?.length : !modelValue.value : true) {
                      _push3(`<div class="${ssrRenderClass(ui.value.wrapper({ class: props.ui?.wrapper }))}"${_scopeId2}>`);
                      ssrRenderSlot(_ctx.$slots, "leading", {}, () => {
                        if (variant.value === "button") {
                          _push3(ssrRenderComponent(_sfc_main$g, {
                            name: __props.icon || unref(appConfig).ui.icons.upload,
                            class: ui.value.icon({ class: props.ui?.icon })
                          }, null, _parent3, _scopeId2));
                        } else {
                          _push3(ssrRenderComponent(_sfc_main$e, {
                            icon: __props.icon || unref(appConfig).ui.icons.upload,
                            size: props.size,
                            class: ui.value.avatar({ class: props.ui?.avatar })
                          }, null, _parent3, _scopeId2));
                        }
                      }, _push3, _parent3, _scopeId2);
                      if (variant.value !== "button") {
                        _push3(`<!--[-->`);
                        if (__props.label || !!slots.label) {
                          _push3(`<div class="${ssrRenderClass(ui.value.label({ class: props.ui?.label }))}"${_scopeId2}>`);
                          ssrRenderSlot(_ctx.$slots, "label", {}, () => {
                            _push3(`${ssrInterpolate(__props.label)}`);
                          }, _push3, _parent3, _scopeId2);
                          _push3(`</div>`);
                        } else {
                          _push3(`<!---->`);
                        }
                        if (__props.description || !!slots.description) {
                          _push3(`<div class="${ssrRenderClass(ui.value.description({ class: props.ui?.description }))}"${_scopeId2}>`);
                          ssrRenderSlot(_ctx.$slots, "description", {}, () => {
                            _push3(`${ssrInterpolate(__props.description)}`);
                          }, _push3, _parent3, _scopeId2);
                          _push3(`</div>`);
                        } else {
                          _push3(`<!---->`);
                        }
                        if (!!slots.actions) {
                          _push3(`<div class="${ssrRenderClass(ui.value.actions({ class: props.ui?.actions }))}"${_scopeId2}>`);
                          ssrRenderSlot(_ctx.$slots, "actions", {
                            files: modelValue.value,
                            open: unref(open),
                            removeFile
                          }, null, _push3, _parent3, _scopeId2);
                          _push3(`</div>`);
                        } else {
                          _push3(`<!---->`);
                        }
                        _push3(`<!--]-->`);
                      } else {
                        _push3(`<!---->`);
                      }
                      _push3(`</div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                  } else {
                    return [
                      position.value === "inside" ? (openBlock(), createBlock(unref(ReuseFilesTemplate), { key: 0 })) : createCommentVNode("", true),
                      (position.value === "inside" ? __props.multiple ? !modelValue.value?.length : !modelValue.value : true) ? (openBlock(), createBlock("div", {
                        key: 1,
                        class: ui.value.wrapper({ class: props.ui?.wrapper })
                      }, [
                        renderSlot(_ctx.$slots, "leading", {}, () => [
                          variant.value === "button" ? (openBlock(), createBlock(_sfc_main$g, {
                            key: 0,
                            name: __props.icon || unref(appConfig).ui.icons.upload,
                            class: ui.value.icon({ class: props.ui?.icon })
                          }, null, 8, ["name", "class"])) : (openBlock(), createBlock(_sfc_main$e, {
                            key: 1,
                            icon: __props.icon || unref(appConfig).ui.icons.upload,
                            size: props.size,
                            class: ui.value.avatar({ class: props.ui?.avatar })
                          }, null, 8, ["icon", "size", "class"]))
                        ]),
                        variant.value !== "button" ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                          __props.label || !!slots.label ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: ui.value.label({ class: props.ui?.label })
                          }, [
                            renderSlot(_ctx.$slots, "label", {}, () => [
                              createTextVNode(toDisplayString(__props.label), 1)
                            ])
                          ], 2)) : createCommentVNode("", true),
                          __props.description || !!slots.description ? (openBlock(), createBlock("div", {
                            key: 1,
                            class: ui.value.description({ class: props.ui?.description })
                          }, [
                            renderSlot(_ctx.$slots, "description", {}, () => [
                              createTextVNode(toDisplayString(__props.description), 1)
                            ])
                          ], 2)) : createCommentVNode("", true),
                          !!slots.actions ? (openBlock(), createBlock("div", {
                            key: 2,
                            class: ui.value.actions({ class: props.ui?.actions })
                          }, [
                            renderSlot(_ctx.$slots, "actions", {
                              files: modelValue.value,
                              open: unref(open),
                              removeFile
                            })
                          ], 2)) : createCommentVNode("", true)
                        ], 64)) : createCommentVNode("", true)
                      ], 2)) : createCommentVNode("", true)
                    ];
                  }
                }),
                _: 3
              }), _parent2, _scopeId);
              if (position.value === "outside") {
                _push2(ssrRenderComponent(unref(ReuseFilesTemplate), null, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
            }, _push2, _parent2, _scopeId);
            _push2(`<input${ssrRenderAttrs(mergeProps({
              id: unref(id),
              ref_key: "inputRef",
              ref: inputRef,
              type: "file",
              name: unref(name),
              accept: __props.accept,
              multiple: __props.multiple,
              required: __props.required,
              disabled: unref(disabled)
            }, { ..._ctx.$attrs, ...unref(ariaAttrs) }, {
              class: "sr-only",
              tabindex: "-1"
            }))}${_scopeId}>`);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", {
                open: unref(open),
                removeFile
              }, () => [
                (openBlock(), createBlock(resolveDynamicComponent(variant.value === "button" ? "button" : "div"), {
                  ref_key: "dropzoneRef",
                  ref: dropzoneRef,
                  role: variant.value === "button" ? void 0 : "button",
                  "data-dragging": unref(isDragging),
                  class: ui.value.base({ class: props.ui?.base }),
                  tabindex: __props.interactive && !unref(disabled) ? 0 : -1,
                  onClick: ($event) => __props.interactive && !unref(disabled) && unref(open)(),
                  onKeydown: withModifiers(() => {
                  }, ["prevent"]),
                  onKeyup: withKeys(($event) => __props.interactive && !unref(disabled) && unref(open)(), ["enter", "space"])
                }, {
                  default: withCtx(() => [
                    position.value === "inside" ? (openBlock(), createBlock(unref(ReuseFilesTemplate), { key: 0 })) : createCommentVNode("", true),
                    (position.value === "inside" ? __props.multiple ? !modelValue.value?.length : !modelValue.value : true) ? (openBlock(), createBlock("div", {
                      key: 1,
                      class: ui.value.wrapper({ class: props.ui?.wrapper })
                    }, [
                      renderSlot(_ctx.$slots, "leading", {}, () => [
                        variant.value === "button" ? (openBlock(), createBlock(_sfc_main$g, {
                          key: 0,
                          name: __props.icon || unref(appConfig).ui.icons.upload,
                          class: ui.value.icon({ class: props.ui?.icon })
                        }, null, 8, ["name", "class"])) : (openBlock(), createBlock(_sfc_main$e, {
                          key: 1,
                          icon: __props.icon || unref(appConfig).ui.icons.upload,
                          size: props.size,
                          class: ui.value.avatar({ class: props.ui?.avatar })
                        }, null, 8, ["icon", "size", "class"]))
                      ]),
                      variant.value !== "button" ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                        __props.label || !!slots.label ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: ui.value.label({ class: props.ui?.label })
                        }, [
                          renderSlot(_ctx.$slots, "label", {}, () => [
                            createTextVNode(toDisplayString(__props.label), 1)
                          ])
                        ], 2)) : createCommentVNode("", true),
                        __props.description || !!slots.description ? (openBlock(), createBlock("div", {
                          key: 1,
                          class: ui.value.description({ class: props.ui?.description })
                        }, [
                          renderSlot(_ctx.$slots, "description", {}, () => [
                            createTextVNode(toDisplayString(__props.description), 1)
                          ])
                        ], 2)) : createCommentVNode("", true),
                        !!slots.actions ? (openBlock(), createBlock("div", {
                          key: 2,
                          class: ui.value.actions({ class: props.ui?.actions })
                        }, [
                          renderSlot(_ctx.$slots, "actions", {
                            files: modelValue.value,
                            open: unref(open),
                            removeFile
                          })
                        ], 2)) : createCommentVNode("", true)
                      ], 64)) : createCommentVNode("", true)
                    ], 2)) : createCommentVNode("", true)
                  ]),
                  _: 3
                }, 40, ["role", "data-dragging", "class", "tabindex", "onClick", "onKeydown", "onKeyup"])),
                position.value === "outside" ? (openBlock(), createBlock(unref(ReuseFilesTemplate), { key: 0 })) : createCommentVNode("", true)
              ]),
              createVNode("input", mergeProps({
                id: unref(id),
                ref_key: "inputRef",
                ref: inputRef,
                type: "file",
                name: unref(name),
                accept: __props.accept,
                multiple: __props.multiple,
                required: __props.required,
                disabled: unref(disabled)
              }, { ..._ctx.$attrs, ...unref(ariaAttrs) }, {
                class: "sr-only",
                tabindex: "-1"
              }), null, 16, ["id", "name", "accept", "multiple", "required", "disabled"])
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui@3.3.3_@babel+parser@7.28.3_@netlify+blobs@9.1.2_change-case@5.4.4_db0@0.3.2_em_2b3b2ac436a2d8473dd8078f8c127796/node_modules/@nuxt/ui/dist/runtime/components/FileUpload.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const MAX_FILE_SIZE = 2 * 1024 * 1024;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "create",
  __ssrInlineRender: true,
  setup(__props) {
    const ACCEPTED_IMAGE_TYPES = ["application/pdf"];
    const formatBytes = (bytes, decimals = 2) => {
      const k = 1024;
      const dm = decimals < 0 ? 0 : decimals;
      const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
      const i = Math.floor(Math.log(bytes) / Math.log(k));
      return Number.parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
    };
    const schema = z.object({
      name: z.string().min(2, "Must be at least 2 characters"),
      contract_number: z.string().min(2, "Must be at least 2 characters"),
      date_desk: z.string(),
      date_signed: z.string(),
      customer_id: z.number().min(1, "Must select a customer"),
      contract_value: z.number().min(0, "Must be a positive number"),
      deposit: z.number().min(0, "Must be a positive number"),
      status: z.string().min(0, "Must be at least 2 characters"),
      pdf_file: z.instanceof(File, {
        message: "Please select a pdf file."
      }).refine((file) => file.size <= MAX_FILE_SIZE, {
        message: `The pdf file is too large. Please choose a pdf file smaller than ${formatBytes(MAX_FILE_SIZE)}.`
      }).refine((file) => ACCEPTED_IMAGE_TYPES.includes(file.type), {
        message: "Please upload a valid pdf file (application/pdf)."
      })
    });
    const state = reactive({
      name: "giang",
      contract_number: "12",
      date_desk: "2025-09-13",
      date_signed: "2025-09-12",
      customer_id: 1,
      contract_value: 1e6,
      deposit: 1e5,
      status: "1",
      pdf_file: void 0
    });
    const toast = useToast();
    const { createContract } = useContracts();
    async function onSubmit(event) {
      await createContract(event.data);
      toast.add({ title: "Success", description: "The form has been submitted.", color: "success" });
      navigateTo("/contracts");
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UCard = _sfc_main$2;
      const _component_UButton = _sfc_main$b;
      const _component_UContainer = _sfc_main$4;
      const _component_UForm = _sfc_main$1$1;
      const _component_UFormField = _sfc_main$3;
      const _component_UInput = _sfc_main$5;
      const _component_UFileUpload = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_UCard, { variant: "subtle" }, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex justify-between"${_scopeId}><h2 class="text-lg font-medium"${_scopeId}> Create Contract </h2>`);
            _push2(ssrRenderComponent(_component_UButton, { to: "/contracts" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Back to Contracts `);
                } else {
                  return [
                    createTextVNode(" Back to Contracts ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex justify-between" }, [
                createVNode("h2", { class: "text-lg font-medium" }, " Create Contract "),
                createVNode(_component_UButton, { to: "/contracts" }, {
                  default: withCtx(() => [
                    createTextVNode(" Back to Contracts ")
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div style="${ssrRenderStyle({ "place-self": "center" })}"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UContainer, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UForm, {
                    schema: unref(schema),
                    state: unref(state),
                    class: "space-y-4 flex flex-col gap-2",
                    onSubmit
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="flex items-center gap-4"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_UFormField, {
                          label: "Tên hợp đồng",
                          name: "name"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UInput, {
                                modelValue: unref(state).name,
                                "onUpdate:modelValue": ($event) => unref(state).name = $event,
                                placeholder: "Enter contract name"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UInput, {
                                  modelValue: unref(state).name,
                                  "onUpdate:modelValue": ($event) => unref(state).name = $event,
                                  placeholder: "Enter contract name"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UFormField, {
                          label: "Số hợp đồng",
                          name: "contract_number"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UInput, {
                                modelValue: unref(state).contract_number,
                                "onUpdate:modelValue": ($event) => unref(state).contract_number = $event,
                                placeholder: "Enter contract number"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UInput, {
                                  modelValue: unref(state).contract_number,
                                  "onUpdate:modelValue": ($event) => unref(state).contract_number = $event,
                                  placeholder: "Enter contract number"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UFormField, {
                          label: "Ngày ký",
                          name: "date_signed"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UInput, {
                                modelValue: unref(state).date_signed,
                                "onUpdate:modelValue": ($event) => unref(state).date_signed = $event,
                                type: "date"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UInput, {
                                  modelValue: unref(state).date_signed,
                                  "onUpdate:modelValue": ($event) => unref(state).date_signed = $event,
                                  type: "date"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UFormField, {
                          label: "Ngày bàn giao",
                          name: "date_desk"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UInput, {
                                modelValue: unref(state).date_desk,
                                "onUpdate:modelValue": ($event) => unref(state).date_desk = $event,
                                type: "date"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UInput, {
                                  modelValue: unref(state).date_desk,
                                  "onUpdate:modelValue": ($event) => unref(state).date_desk = $event,
                                  type: "date"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div><div class="flex items-center gap-4"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_UFormField, {
                          label: "Customer ID",
                          name: "customer_id"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UInput, {
                                modelValue: unref(state).customer_id,
                                "onUpdate:modelValue": ($event) => unref(state).customer_id = $event,
                                placeholder: "Customer ID",
                                type: "number"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UInput, {
                                  modelValue: unref(state).customer_id,
                                  "onUpdate:modelValue": ($event) => unref(state).customer_id = $event,
                                  placeholder: "Customer ID",
                                  type: "number"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UFormField, {
                          label: "Giá trị hợp đồng",
                          name: "contract_value"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UInput, {
                                modelValue: unref(state).contract_value,
                                "onUpdate:modelValue": ($event) => unref(state).contract_value = $event,
                                type: "number"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UInput, {
                                  modelValue: unref(state).contract_value,
                                  "onUpdate:modelValue": ($event) => unref(state).contract_value = $event,
                                  type: "number"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UFormField, {
                          label: "Tiền đã thu",
                          name: "deposit"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UInput, {
                                modelValue: unref(state).deposit,
                                "onUpdate:modelValue": ($event) => unref(state).deposit = $event,
                                type: "number"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UInput, {
                                  modelValue: unref(state).deposit,
                                  "onUpdate:modelValue": ($event) => unref(state).deposit = $event,
                                  type: "number"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div>`);
                        _push4(ssrRenderComponent(_component_UFormField, {
                          label: "Trạng thái",
                          name: "status"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UInput, {
                                modelValue: unref(state).status,
                                "onUpdate:modelValue": ($event) => unref(state).status = $event,
                                placeholder: "Trạng thái"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UInput, {
                                  modelValue: unref(state).status,
                                  "onUpdate:modelValue": ($event) => unref(state).status = $event,
                                  placeholder: "Trạng thái"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UFormField, {
                          name: "pdf_file",
                          label: "File hợp đồng (PDF)",
                          description: "PDF. 2MB Max."
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UFileUpload, {
                                modelValue: unref(state).pdf_file,
                                "onUpdate:modelValue": ($event) => unref(state).pdf_file = $event,
                                class: "w-96 min-h-48"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UFileUpload, {
                                  modelValue: unref(state).pdf_file,
                                  "onUpdate:modelValue": ($event) => unref(state).pdf_file = $event,
                                  class: "w-96 min-h-48"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UButton, {
                          icon: "i-lucide-rocket",
                          size: "md",
                          type: "submit",
                          class: "text-center w-2xl"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Create Contract `);
                            } else {
                              return [
                                createTextVNode(" Create Contract ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("div", { class: "flex items-center gap-4" }, [
                            createVNode(_component_UFormField, {
                              label: "Tên hợp đồng",
                              name: "name"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_UInput, {
                                  modelValue: unref(state).name,
                                  "onUpdate:modelValue": ($event) => unref(state).name = $event,
                                  placeholder: "Enter contract name"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UFormField, {
                              label: "Số hợp đồng",
                              name: "contract_number"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_UInput, {
                                  modelValue: unref(state).contract_number,
                                  "onUpdate:modelValue": ($event) => unref(state).contract_number = $event,
                                  placeholder: "Enter contract number"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UFormField, {
                              label: "Ngày ký",
                              name: "date_signed"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_UInput, {
                                  modelValue: unref(state).date_signed,
                                  "onUpdate:modelValue": ($event) => unref(state).date_signed = $event,
                                  type: "date"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UFormField, {
                              label: "Ngày bàn giao",
                              name: "date_desk"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_UInput, {
                                  modelValue: unref(state).date_desk,
                                  "onUpdate:modelValue": ($event) => unref(state).date_desk = $event,
                                  type: "date"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            })
                          ]),
                          createVNode("div", { class: "flex items-center gap-4" }, [
                            createVNode(_component_UFormField, {
                              label: "Customer ID",
                              name: "customer_id"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_UInput, {
                                  modelValue: unref(state).customer_id,
                                  "onUpdate:modelValue": ($event) => unref(state).customer_id = $event,
                                  placeholder: "Customer ID",
                                  type: "number"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UFormField, {
                              label: "Giá trị hợp đồng",
                              name: "contract_value"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_UInput, {
                                  modelValue: unref(state).contract_value,
                                  "onUpdate:modelValue": ($event) => unref(state).contract_value = $event,
                                  type: "number"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UFormField, {
                              label: "Tiền đã thu",
                              name: "deposit"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_UInput, {
                                  modelValue: unref(state).deposit,
                                  "onUpdate:modelValue": ($event) => unref(state).deposit = $event,
                                  type: "number"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            })
                          ]),
                          createVNode(_component_UFormField, {
                            label: "Trạng thái",
                            name: "status"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UInput, {
                                modelValue: unref(state).status,
                                "onUpdate:modelValue": ($event) => unref(state).status = $event,
                                placeholder: "Trạng thái"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UFormField, {
                            name: "pdf_file",
                            label: "File hợp đồng (PDF)",
                            description: "PDF. 2MB Max."
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UFileUpload, {
                                modelValue: unref(state).pdf_file,
                                "onUpdate:modelValue": ($event) => unref(state).pdf_file = $event,
                                class: "w-96 min-h-48"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UButton, {
                            icon: "i-lucide-rocket",
                            size: "md",
                            type: "submit",
                            class: "text-center w-2xl"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Create Contract ")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UForm, {
                      schema: unref(schema),
                      state: unref(state),
                      class: "space-y-4 flex flex-col gap-2",
                      onSubmit
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "flex items-center gap-4" }, [
                          createVNode(_component_UFormField, {
                            label: "Tên hợp đồng",
                            name: "name"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UInput, {
                                modelValue: unref(state).name,
                                "onUpdate:modelValue": ($event) => unref(state).name = $event,
                                placeholder: "Enter contract name"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UFormField, {
                            label: "Số hợp đồng",
                            name: "contract_number"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UInput, {
                                modelValue: unref(state).contract_number,
                                "onUpdate:modelValue": ($event) => unref(state).contract_number = $event,
                                placeholder: "Enter contract number"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UFormField, {
                            label: "Ngày ký",
                            name: "date_signed"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UInput, {
                                modelValue: unref(state).date_signed,
                                "onUpdate:modelValue": ($event) => unref(state).date_signed = $event,
                                type: "date"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UFormField, {
                            label: "Ngày bàn giao",
                            name: "date_desk"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UInput, {
                                modelValue: unref(state).date_desk,
                                "onUpdate:modelValue": ($event) => unref(state).date_desk = $event,
                                type: "date"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode("div", { class: "flex items-center gap-4" }, [
                          createVNode(_component_UFormField, {
                            label: "Customer ID",
                            name: "customer_id"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UInput, {
                                modelValue: unref(state).customer_id,
                                "onUpdate:modelValue": ($event) => unref(state).customer_id = $event,
                                placeholder: "Customer ID",
                                type: "number"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UFormField, {
                            label: "Giá trị hợp đồng",
                            name: "contract_value"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UInput, {
                                modelValue: unref(state).contract_value,
                                "onUpdate:modelValue": ($event) => unref(state).contract_value = $event,
                                type: "number"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UFormField, {
                            label: "Tiền đã thu",
                            name: "deposit"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UInput, {
                                modelValue: unref(state).deposit,
                                "onUpdate:modelValue": ($event) => unref(state).deposit = $event,
                                type: "number"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode(_component_UFormField, {
                          label: "Trạng thái",
                          name: "status"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_UInput, {
                              modelValue: unref(state).status,
                              "onUpdate:modelValue": ($event) => unref(state).status = $event,
                              placeholder: "Trạng thái"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UFormField, {
                          name: "pdf_file",
                          label: "File hợp đồng (PDF)",
                          description: "PDF. 2MB Max."
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_UFileUpload, {
                              modelValue: unref(state).pdf_file,
                              "onUpdate:modelValue": ($event) => unref(state).pdf_file = $event,
                              class: "w-96 min-h-48"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UButton, {
                          icon: "i-lucide-rocket",
                          size: "md",
                          type: "submit",
                          class: "text-center w-2xl"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Create Contract ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["schema", "state"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { style: { "place-self": "center" } }, [
                createVNode(_component_UContainer, null, {
                  default: withCtx(() => [
                    createVNode(_component_UForm, {
                      schema: unref(schema),
                      state: unref(state),
                      class: "space-y-4 flex flex-col gap-2",
                      onSubmit
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "flex items-center gap-4" }, [
                          createVNode(_component_UFormField, {
                            label: "Tên hợp đồng",
                            name: "name"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UInput, {
                                modelValue: unref(state).name,
                                "onUpdate:modelValue": ($event) => unref(state).name = $event,
                                placeholder: "Enter contract name"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UFormField, {
                            label: "Số hợp đồng",
                            name: "contract_number"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UInput, {
                                modelValue: unref(state).contract_number,
                                "onUpdate:modelValue": ($event) => unref(state).contract_number = $event,
                                placeholder: "Enter contract number"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UFormField, {
                            label: "Ngày ký",
                            name: "date_signed"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UInput, {
                                modelValue: unref(state).date_signed,
                                "onUpdate:modelValue": ($event) => unref(state).date_signed = $event,
                                type: "date"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UFormField, {
                            label: "Ngày bàn giao",
                            name: "date_desk"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UInput, {
                                modelValue: unref(state).date_desk,
                                "onUpdate:modelValue": ($event) => unref(state).date_desk = $event,
                                type: "date"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode("div", { class: "flex items-center gap-4" }, [
                          createVNode(_component_UFormField, {
                            label: "Customer ID",
                            name: "customer_id"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UInput, {
                                modelValue: unref(state).customer_id,
                                "onUpdate:modelValue": ($event) => unref(state).customer_id = $event,
                                placeholder: "Customer ID",
                                type: "number"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UFormField, {
                            label: "Giá trị hợp đồng",
                            name: "contract_value"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UInput, {
                                modelValue: unref(state).contract_value,
                                "onUpdate:modelValue": ($event) => unref(state).contract_value = $event,
                                type: "number"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UFormField, {
                            label: "Tiền đã thu",
                            name: "deposit"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UInput, {
                                modelValue: unref(state).deposit,
                                "onUpdate:modelValue": ($event) => unref(state).deposit = $event,
                                type: "number"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode(_component_UFormField, {
                          label: "Trạng thái",
                          name: "status"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_UInput, {
                              modelValue: unref(state).status,
                              "onUpdate:modelValue": ($event) => unref(state).status = $event,
                              placeholder: "Trạng thái"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UFormField, {
                          name: "pdf_file",
                          label: "File hợp đồng (PDF)",
                          description: "PDF. 2MB Max."
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_UFileUpload, {
                              modelValue: unref(state).pdf_file,
                              "onUpdate:modelValue": ($event) => unref(state).pdf_file = $event,
                              class: "w-96 min-h-48"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UButton, {
                          icon: "i-lucide-rocket",
                          size: "md",
                          type: "submit",
                          class: "text-center w-2xl"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Create Contract ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["schema", "state"])
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h1${_scopeId}>Create Contract</h1>`);
          } else {
            return [
              createVNode("h1", null, "Create Contract")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contracts/create.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=create-BH6Csx48.mjs.map
