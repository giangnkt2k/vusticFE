import { _ as _sfc_main$3 } from './Input-DZZU1M-i.mjs';
import { o as useToast, g as _sfc_main$b, j as useLocale, d as useAppConfig, t as tv } from './server.mjs';
import { defineComponent, withAsyncContext, ref, unref, isRef, withCtx, createTextVNode, mergeModels, createVNode, toDisplayString, useSlots, computed, useModel, watch, mergeProps, createBlock, createCommentVNode, openBlock, renderSlot, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderSlot, ssrRenderList, ssrRenderAttr, ssrRenderStyle } from 'vue/server-renderer';
import { Primitive, useForwardPropsEmits, PaginationRoot, PaginationList, PaginationFirst, PaginationPrev, PaginationListItem, PaginationEllipsis, PaginationNext, PaginationLast } from 'reka-ui';
import { O as upperFirst } from '../nitro/nitro.mjs';
import { useVueTable, getExpandedRowModel, getSortedRowModel, getFilteredRowModel, getCoreRowModel, FlexRender } from '@tanstack/vue-table';
import { useClipboard, reactiveOmit, reactivePick } from '@vueuse/core';
import { _ as _sfc_main$4 } from './DropdownMenu-BLV8L53p.mjs';
import { u as useContracts } from './useContracts-Bg2eSje4.mjs';
import 'vue-router';
import 'consola';
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
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '@iconify/utils';
import 'reka-ui/namespaced';
import './useSanctumFetch-Bq3Ox6iK.mjs';
import './useSanctumClient-DOkjdFOV.mjs';

const theme$1 = {
  "slots": {
    "root": "relative overflow-auto",
    "base": "min-w-full overflow-clip",
    "caption": "sr-only",
    "thead": "relative",
    "tbody": "divide-y divide-default [&>tr]:data-[selectable=true]:hover:bg-elevated/50 [&>tr]:data-[selectable=true]:focus-visible:outline-primary",
    "tfoot": "relative",
    "tr": "data-[selected=true]:bg-elevated/50",
    "th": "px-4 py-3.5 text-sm text-highlighted text-left rtl:text-right font-semibold [&:has([role=checkbox])]:pe-0",
    "td": "p-4 text-sm text-muted whitespace-nowrap [&:has([role=checkbox])]:pe-0",
    "separator": "absolute z-[1] left-0 w-full h-px bg-(--ui-border-accented)",
    "empty": "py-6 text-center text-sm text-muted",
    "loading": "py-6 text-center"
  },
  "variants": {
    "pinned": {
      "true": {
        "th": "sticky bg-default/75 data-[pinned=left]:left-0 data-[pinned=right]:right-0",
        "td": "sticky bg-default/75 data-[pinned=left]:left-0 data-[pinned=right]:right-0"
      }
    },
    "sticky": {
      "true": {
        "thead": "sticky top-0 inset-x-0 bg-default/75 z-[1] backdrop-blur",
        "tfoot": "sticky bottom-0 inset-x-0 bg-default/75 z-[1] backdrop-blur"
      },
      "header": {
        "thead": "sticky top-0 inset-x-0 bg-default/75 z-[1] backdrop-blur"
      },
      "footer": {
        "tfoot": "sticky bottom-0 inset-x-0 bg-default/75 z-[1] backdrop-blur"
      }
    },
    "loading": {
      "true": {
        "thead": "after:absolute after:z-[1] after:h-px"
      }
    },
    "loadingAnimation": {
      "carousel": "",
      "carousel-inverse": "",
      "swing": "",
      "elastic": ""
    },
    "loadingColor": {
      "primary": "",
      "secondary": "",
      "success": "",
      "info": "",
      "warning": "",
      "error": "",
      "neutral": ""
    }
  },
  "compoundVariants": [
    {
      "loading": true,
      "loadingColor": "primary",
      "class": {
        "thead": "after:bg-primary"
      }
    },
    {
      "loading": true,
      "loadingColor": "secondary",
      "class": {
        "thead": "after:bg-secondary"
      }
    },
    {
      "loading": true,
      "loadingColor": "success",
      "class": {
        "thead": "after:bg-success"
      }
    },
    {
      "loading": true,
      "loadingColor": "info",
      "class": {
        "thead": "after:bg-info"
      }
    },
    {
      "loading": true,
      "loadingColor": "warning",
      "class": {
        "thead": "after:bg-warning"
      }
    },
    {
      "loading": true,
      "loadingColor": "error",
      "class": {
        "thead": "after:bg-error"
      }
    },
    {
      "loading": true,
      "loadingColor": "neutral",
      "class": {
        "thead": "after:bg-inverted"
      }
    },
    {
      "loading": true,
      "loadingAnimation": "carousel",
      "class": {
        "thead": "after:animate-[carousel_2s_ease-in-out_infinite] rtl:after:animate-[carousel-rtl_2s_ease-in-out_infinite]"
      }
    },
    {
      "loading": true,
      "loadingAnimation": "carousel-inverse",
      "class": {
        "thead": "after:animate-[carousel-inverse_2s_ease-in-out_infinite] rtl:after:animate-[carousel-inverse-rtl_2s_ease-in-out_infinite]"
      }
    },
    {
      "loading": true,
      "loadingAnimation": "swing",
      "class": {
        "thead": "after:animate-[swing_2s_ease-in-out_infinite]"
      }
    },
    {
      "loading": true,
      "loadingAnimation": "elastic",
      "class": {
        "thead": "after:animate-[elastic_2s_ease-in-out_infinite]"
      }
    }
  ],
  "defaultVariants": {
    "loadingColor": "primary",
    "loadingAnimation": "carousel"
  }
};
const _sfc_main$2 = {
  __name: "UTable",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    as: { type: null, required: false },
    data: { type: Array, required: false },
    columns: { type: Array, required: false },
    caption: { type: String, required: false },
    meta: { type: Object, required: false },
    empty: { type: String, required: false },
    sticky: { type: [Boolean, String], required: false },
    loading: { type: Boolean, required: false },
    loadingColor: { type: null, required: false },
    loadingAnimation: { type: null, required: false },
    watchOptions: { type: Object, required: false, default: () => ({
      deep: true
    }) },
    globalFilterOptions: { type: Object, required: false },
    columnFiltersOptions: { type: Object, required: false },
    columnPinningOptions: { type: Object, required: false },
    columnSizingOptions: { type: Object, required: false },
    visibilityOptions: { type: Object, required: false },
    sortingOptions: { type: Object, required: false },
    groupingOptions: { type: Object, required: false },
    expandedOptions: { type: Object, required: false },
    rowSelectionOptions: { type: Object, required: false },
    rowPinningOptions: { type: Object, required: false },
    paginationOptions: { type: Object, required: false },
    facetedOptions: { type: Object, required: false },
    onSelect: { type: Function, required: false },
    onHover: { type: Function, required: false },
    onContextmenu: { type: [Function, Array], required: false },
    class: { type: null, required: false },
    ui: { type: null, required: false },
    state: { type: Object, required: false },
    onStateChange: { type: Function, required: false },
    renderFallbackValue: { type: null, required: false },
    _features: { type: Array, required: false },
    autoResetAll: { type: Boolean, required: false },
    debugAll: { type: Boolean, required: false },
    debugCells: { type: Boolean, required: false },
    debugColumns: { type: Boolean, required: false },
    debugHeaders: { type: Boolean, required: false },
    debugRows: { type: Boolean, required: false },
    debugTable: { type: Boolean, required: false },
    defaultColumn: { type: Object, required: false },
    getRowId: { type: Function, required: false },
    getSubRows: { type: Function, required: false },
    initialState: { type: Object, required: false },
    mergeOptions: { type: Function, required: false }
  }, {
    "globalFilter": { type: String, ...{ default: void 0 } },
    "globalFilterModifiers": {},
    "columnFilters": { type: Array, ...{ default: [] } },
    "columnFiltersModifiers": {},
    "columnOrder": { type: Array, ...{ default: [] } },
    "columnOrderModifiers": {},
    "columnVisibility": { type: Object, ...{ default: {} } },
    "columnVisibilityModifiers": {},
    "columnPinning": { type: Object, ...{ default: {} } },
    "columnPinningModifiers": {},
    "columnSizing": { type: Object, ...{ default: {} } },
    "columnSizingModifiers": {},
    "columnSizingInfo": { type: Object, ...{ default: {} } },
    "columnSizingInfoModifiers": {},
    "rowSelection": { type: Object, ...{ default: {} } },
    "rowSelectionModifiers": {},
    "rowPinning": { type: Object, ...{ default: {} } },
    "rowPinningModifiers": {},
    "sorting": { type: Array, ...{ default: [] } },
    "sortingModifiers": {},
    "grouping": { type: Array, ...{ default: [] } },
    "groupingModifiers": {},
    "expanded": { type: [Boolean, Object], ...{ default: {} } },
    "expandedModifiers": {},
    "pagination": { type: Object, ...{ default: {} } },
    "paginationModifiers": {}
  }),
  emits: ["update:globalFilter", "update:columnFilters", "update:columnOrder", "update:columnVisibility", "update:columnPinning", "update:columnSizing", "update:columnSizingInfo", "update:rowSelection", "update:rowPinning", "update:sorting", "update:grouping", "update:expanded", "update:pagination"],
  setup(__props, { expose: __expose }) {
    const props = __props;
    const slots = useSlots();
    const { t } = useLocale();
    const appConfig = useAppConfig();
    const data = ref(props.data ?? []);
    const columns = computed(() => props.columns ?? Object.keys(data.value[0] ?? {}).map((accessorKey) => ({ accessorKey, header: upperFirst(accessorKey) })));
    const meta = computed(() => props.meta ?? {});
    const ui = computed(() => tv({ extend: tv(theme$1), ...appConfig.ui?.table || {} })({
      sticky: props.sticky,
      loading: props.loading,
      loadingColor: props.loadingColor,
      loadingAnimation: props.loadingAnimation
    }));
    const hasFooter = computed(() => {
      function hasFooterRecursive(columns2) {
        for (const column of columns2) {
          if ("footer" in column) {
            return true;
          }
          if ("columns" in column && hasFooterRecursive(column.columns)) {
            return true;
          }
        }
        return false;
      }
      return hasFooterRecursive(columns.value);
    });
    const globalFilterState = useModel(__props, "globalFilter", { type: String, ...{ default: void 0 } });
    const columnFiltersState = useModel(__props, "columnFilters", { type: Array, ...{ default: [] } });
    const columnOrderState = useModel(__props, "columnOrder", { type: Array, ...{ default: [] } });
    const columnVisibilityState = useModel(__props, "columnVisibility", { type: Object, ...{ default: {} } });
    const columnPinningState = useModel(__props, "columnPinning", { type: Object, ...{ default: {} } });
    const columnSizingState = useModel(__props, "columnSizing", { type: Object, ...{ default: {} } });
    const columnSizingInfoState = useModel(__props, "columnSizingInfo", { type: Object, ...{ default: {} } });
    const rowSelectionState = useModel(__props, "rowSelection", { type: Object, ...{ default: {} } });
    const rowPinningState = useModel(__props, "rowPinning", { type: Object, ...{ default: {} } });
    const sortingState = useModel(__props, "sorting", { type: Array, ...{ default: [] } });
    const groupingState = useModel(__props, "grouping", { type: Array, ...{ default: [] } });
    const expandedState = useModel(__props, "expanded", { type: [Boolean, Object], ...{ default: {} } });
    const paginationState = useModel(__props, "pagination", { type: Object, ...{ default: {} } });
    const tableRef = ref(null);
    const tableApi = useVueTable({
      ...reactiveOmit(props, "as", "data", "columns", "caption", "sticky", "loading", "loadingColor", "loadingAnimation", "class", "ui"),
      data,
      get columns() {
        return columns.value;
      },
      meta: meta.value,
      getCoreRowModel: getCoreRowModel(),
      ...props.globalFilterOptions || {},
      onGlobalFilterChange: (updaterOrValue) => valueUpdater(updaterOrValue, globalFilterState),
      ...props.columnFiltersOptions || {},
      getFilteredRowModel: getFilteredRowModel(),
      onColumnFiltersChange: (updaterOrValue) => valueUpdater(updaterOrValue, columnFiltersState),
      onColumnOrderChange: (updaterOrValue) => valueUpdater(updaterOrValue, columnOrderState),
      ...props.visibilityOptions || {},
      onColumnVisibilityChange: (updaterOrValue) => valueUpdater(updaterOrValue, columnVisibilityState),
      ...props.columnPinningOptions || {},
      onColumnPinningChange: (updaterOrValue) => valueUpdater(updaterOrValue, columnPinningState),
      ...props.columnSizingOptions || {},
      onColumnSizingChange: (updaterOrValue) => valueUpdater(updaterOrValue, columnSizingState),
      onColumnSizingInfoChange: (updaterOrValue) => valueUpdater(updaterOrValue, columnSizingInfoState),
      ...props.rowSelectionOptions || {},
      onRowSelectionChange: (updaterOrValue) => valueUpdater(updaterOrValue, rowSelectionState),
      ...props.rowPinningOptions || {},
      onRowPinningChange: (updaterOrValue) => valueUpdater(updaterOrValue, rowPinningState),
      ...props.sortingOptions || {},
      getSortedRowModel: getSortedRowModel(),
      onSortingChange: (updaterOrValue) => valueUpdater(updaterOrValue, sortingState),
      ...props.groupingOptions || {},
      onGroupingChange: (updaterOrValue) => valueUpdater(updaterOrValue, groupingState),
      ...props.expandedOptions || {},
      getExpandedRowModel: getExpandedRowModel(),
      onExpandedChange: (updaterOrValue) => valueUpdater(updaterOrValue, expandedState),
      ...props.paginationOptions || {},
      onPaginationChange: (updaterOrValue) => valueUpdater(updaterOrValue, paginationState),
      ...props.facetedOptions || {},
      state: {
        get globalFilter() {
          return globalFilterState.value;
        },
        get columnFilters() {
          return columnFiltersState.value;
        },
        get columnOrder() {
          return columnOrderState.value;
        },
        get columnVisibility() {
          return columnVisibilityState.value;
        },
        get columnPinning() {
          return columnPinningState.value;
        },
        get expanded() {
          return expandedState.value;
        },
        get rowSelection() {
          return rowSelectionState.value;
        },
        get sorting() {
          return sortingState.value;
        },
        get grouping() {
          return groupingState.value;
        },
        get rowPinning() {
          return rowPinningState.value;
        },
        get columnSizing() {
          return columnSizingState.value;
        },
        get columnSizingInfo() {
          return columnSizingInfoState.value;
        },
        get pagination() {
          return paginationState.value;
        }
      }
    });
    function valueUpdater(updaterOrValue, ref2) {
      ref2.value = typeof updaterOrValue === "function" ? updaterOrValue(ref2.value) : updaterOrValue;
    }
    function onRowSelect(e, row) {
      if (!props.onSelect) {
        return;
      }
      const target = e.target;
      const isInteractive = target.closest("button") || target.closest("a");
      if (isInteractive) {
        return;
      }
      e.preventDefault();
      e.stopPropagation();
      props.onSelect(row, e);
    }
    function onRowHover(e, row) {
      if (!props.onHover) {
        return;
      }
      props.onHover(e, row);
    }
    function onRowContextmenu(e, row) {
      if (!props.onContextmenu) {
        return;
      }
      if (Array.isArray(props.onContextmenu)) {
        props.onContextmenu.forEach((fn) => fn(e, row));
      } else {
        props.onContextmenu(e, row);
      }
    }
    function resolveValue(prop, arg) {
      if (typeof prop === "function") {
        return prop(arg);
      }
      return prop;
    }
    watch(
      () => props.data,
      () => {
        data.value = props.data ? [...props.data] : [];
      },
      props.watchOptions
    );
    __expose({
      tableRef,
      tableApi
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: __props.as,
        class: ui.value.root({ class: [props.ui?.root, props.class] })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<table class="${ssrRenderClass(ui.value.base({ class: [props.ui?.base] }))}"${_scopeId}>`);
            if (__props.caption || !!slots.caption) {
              _push2(`<caption class="${ssrRenderClass(ui.value.caption({ class: [props.ui?.caption] }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "caption", {}, () => {
                _push2(`${ssrInterpolate(__props.caption)}`);
              }, _push2, _parent2, _scopeId);
              _push2(`</caption>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<thead class="${ssrRenderClass(ui.value.thead({ class: [props.ui?.thead] }))}"${_scopeId}><!--[-->`);
            ssrRenderList(unref(tableApi).getHeaderGroups(), (headerGroup) => {
              _push2(`<tr class="${ssrRenderClass(ui.value.tr({ class: [props.ui?.tr] }))}"${_scopeId}><!--[-->`);
              ssrRenderList(headerGroup.headers, (header) => {
                _push2(`<th${ssrRenderAttr("data-pinned", header.column.getIsPinned())}${ssrRenderAttr("scope", header.colSpan > 1 ? "colgroup" : "col")}${ssrRenderAttr("colspan", header.colSpan > 1 ? header.colSpan : void 0)}${ssrRenderAttr("rowspan", header.rowSpan > 1 ? header.rowSpan : void 0)} class="${ssrRenderClass(ui.value.th({
                  class: [
                    props.ui?.th,
                    resolveValue(header.column.columnDef.meta?.class?.th, header)
                  ],
                  pinned: !!header.column.getIsPinned()
                }))}"${_scopeId}>`);
                ssrRenderSlot(_ctx.$slots, `${header.id}-header`, mergeProps({ ref_for: true }, header.getContext()), () => {
                  if (!header.isPlaceholder) {
                    _push2(ssrRenderComponent(unref(FlexRender), {
                      render: header.column.columnDef.header,
                      props: header.getContext()
                    }, null, _parent2, _scopeId));
                  } else {
                    _push2(`<!---->`);
                  }
                }, _push2, _parent2, _scopeId);
                _push2(`</th>`);
              });
              _push2(`<!--]--></tr>`);
            });
            _push2(`<!--]--><tr class="${ssrRenderClass(ui.value.separator({ class: [props.ui?.separator] }))}"${_scopeId}></tr></thead><tbody class="${ssrRenderClass(ui.value.tbody({ class: [props.ui?.tbody] }))}"${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "body-top", {}, null, _push2, _parent2, _scopeId);
            if (unref(tableApi).getRowModel().rows?.length) {
              _push2(`<!--[-->`);
              ssrRenderList(unref(tableApi).getRowModel().rows, (row) => {
                _push2(`<!--[--><tr${ssrRenderAttr("data-selected", row.getIsSelected())}${ssrRenderAttr("data-selectable", !!props.onSelect || !!props.onHover || !!props.onContextmenu)}${ssrRenderAttr("data-expanded", row.getIsExpanded())}${ssrRenderAttr("role", props.onSelect ? "button" : void 0)}${ssrRenderAttr("tabindex", props.onSelect ? 0 : void 0)} class="${ssrRenderClass(ui.value.tr({
                  class: [
                    props.ui?.tr,
                    resolveValue(unref(tableApi).options.meta?.class?.tr, row)
                  ]
                }))}" style="${ssrRenderStyle(resolveValue(unref(tableApi).options.meta?.style?.tr, row))}"${_scopeId}><!--[-->`);
                ssrRenderList(row.getVisibleCells(), (cell) => {
                  _push2(`<td${ssrRenderAttr("data-pinned", cell.column.getIsPinned())}${ssrRenderAttr("colspan", resolveValue(cell.column.columnDef.meta?.colspan?.td, cell))}${ssrRenderAttr("rowspan", resolveValue(cell.column.columnDef.meta?.rowspan?.td, cell))} class="${ssrRenderClass(ui.value.td({
                    class: [
                      props.ui?.td,
                      resolveValue(cell.column.columnDef.meta?.class?.td, cell)
                    ],
                    pinned: !!cell.column.getIsPinned()
                  }))}" style="${ssrRenderStyle(resolveValue(cell.column.columnDef.meta?.style?.td, cell))}"${_scopeId}>`);
                  ssrRenderSlot(_ctx.$slots, `${cell.column.id}-cell`, mergeProps({ ref_for: true }, cell.getContext()), () => {
                    _push2(ssrRenderComponent(unref(FlexRender), {
                      render: cell.column.columnDef.cell,
                      props: cell.getContext()
                    }, null, _parent2, _scopeId));
                  }, _push2, _parent2, _scopeId);
                  _push2(`</td>`);
                });
                _push2(`<!--]--></tr>`);
                if (row.getIsExpanded()) {
                  _push2(`<tr class="${ssrRenderClass(ui.value.tr({ class: [props.ui?.tr] }))}"${_scopeId}><td${ssrRenderAttr("colspan", row.getAllCells().length)} class="${ssrRenderClass(ui.value.td({ class: [props.ui?.td] }))}"${_scopeId}>`);
                  ssrRenderSlot(_ctx.$slots, "expanded", { row }, null, _push2, _parent2, _scopeId);
                  _push2(`</td></tr>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`<!--]-->`);
              });
              _push2(`<!--]-->`);
            } else if (__props.loading && !!slots["loading"]) {
              _push2(`<tr${_scopeId}><td${ssrRenderAttr("colspan", unref(tableApi).getAllLeafColumns().length)} class="${ssrRenderClass(ui.value.loading({ class: props.ui?.loading }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "loading", {}, null, _push2, _parent2, _scopeId);
              _push2(`</td></tr>`);
            } else {
              _push2(`<tr${_scopeId}><td${ssrRenderAttr("colspan", unref(tableApi).getAllLeafColumns().length)} class="${ssrRenderClass(ui.value.empty({ class: props.ui?.empty }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "empty", {}, () => {
                _push2(`${ssrInterpolate(__props.empty || unref(t)("table.noData"))}`);
              }, _push2, _parent2, _scopeId);
              _push2(`</td></tr>`);
            }
            ssrRenderSlot(_ctx.$slots, "body-bottom", {}, null, _push2, _parent2, _scopeId);
            _push2(`</tbody>`);
            if (hasFooter.value) {
              _push2(`<tfoot class="${ssrRenderClass(ui.value.tfoot({ class: [props.ui?.tfoot] }))}"${_scopeId}><tr class="${ssrRenderClass(ui.value.separator({ class: [props.ui?.separator] }))}"${_scopeId}></tr><!--[-->`);
              ssrRenderList(unref(tableApi).getFooterGroups(), (footerGroup) => {
                _push2(`<tr class="${ssrRenderClass(ui.value.tr({ class: [props.ui?.tr] }))}"${_scopeId}><!--[-->`);
                ssrRenderList(footerGroup.headers, (header) => {
                  _push2(`<th${ssrRenderAttr("data-pinned", header.column.getIsPinned())}${ssrRenderAttr("colspan", header.colSpan > 1 ? header.colSpan : void 0)}${ssrRenderAttr("rowspan", header.rowSpan > 1 ? header.rowSpan : void 0)} class="${ssrRenderClass(ui.value.th({
                    class: [
                      props.ui?.th,
                      resolveValue(header.column.columnDef.meta?.class?.th, header)
                    ],
                    pinned: !!header.column.getIsPinned()
                  }))}" style="${ssrRenderStyle(resolveValue(header.column.columnDef.meta?.style?.th, header))}"${_scopeId}>`);
                  ssrRenderSlot(_ctx.$slots, `${header.id}-footer`, mergeProps({ ref_for: true }, header.getContext()), () => {
                    if (!header.isPlaceholder) {
                      _push2(ssrRenderComponent(unref(FlexRender), {
                        render: header.column.columnDef.footer,
                        props: header.getContext()
                      }, null, _parent2, _scopeId));
                    } else {
                      _push2(`<!---->`);
                    }
                  }, _push2, _parent2, _scopeId);
                  _push2(`</th>`);
                });
                _push2(`<!--]--></tr>`);
              });
              _push2(`<!--]--></tfoot>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</table>`);
          } else {
            return [
              createVNode("table", {
                ref_key: "tableRef",
                ref: tableRef,
                class: ui.value.base({ class: [props.ui?.base] })
              }, [
                __props.caption || !!slots.caption ? (openBlock(), createBlock("caption", {
                  key: 0,
                  class: ui.value.caption({ class: [props.ui?.caption] })
                }, [
                  renderSlot(_ctx.$slots, "caption", {}, () => [
                    createTextVNode(toDisplayString(__props.caption), 1)
                  ])
                ], 2)) : createCommentVNode("", true),
                createVNode("thead", {
                  class: ui.value.thead({ class: [props.ui?.thead] })
                }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(tableApi).getHeaderGroups(), (headerGroup) => {
                    return openBlock(), createBlock("tr", {
                      key: headerGroup.id,
                      class: ui.value.tr({ class: [props.ui?.tr] })
                    }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(headerGroup.headers, (header) => {
                        return openBlock(), createBlock("th", {
                          key: header.id,
                          "data-pinned": header.column.getIsPinned(),
                          scope: header.colSpan > 1 ? "colgroup" : "col",
                          colspan: header.colSpan > 1 ? header.colSpan : void 0,
                          rowspan: header.rowSpan > 1 ? header.rowSpan : void 0,
                          class: ui.value.th({
                            class: [
                              props.ui?.th,
                              resolveValue(header.column.columnDef.meta?.class?.th, header)
                            ],
                            pinned: !!header.column.getIsPinned()
                          })
                        }, [
                          renderSlot(_ctx.$slots, `${header.id}-header`, mergeProps({ ref_for: true }, header.getContext()), () => [
                            !header.isPlaceholder ? (openBlock(), createBlock(unref(FlexRender), {
                              key: 0,
                              render: header.column.columnDef.header,
                              props: header.getContext()
                            }, null, 8, ["render", "props"])) : createCommentVNode("", true)
                          ])
                        ], 10, ["data-pinned", "scope", "colspan", "rowspan"]);
                      }), 128))
                    ], 2);
                  }), 128)),
                  createVNode("tr", {
                    class: ui.value.separator({ class: [props.ui?.separator] })
                  }, null, 2)
                ], 2),
                createVNode("tbody", {
                  class: ui.value.tbody({ class: [props.ui?.tbody] })
                }, [
                  renderSlot(_ctx.$slots, "body-top"),
                  unref(tableApi).getRowModel().rows?.length ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(unref(tableApi).getRowModel().rows, (row) => {
                    return openBlock(), createBlock(Fragment, {
                      key: row.id
                    }, [
                      createVNode("tr", {
                        "data-selected": row.getIsSelected(),
                        "data-selectable": !!props.onSelect || !!props.onHover || !!props.onContextmenu,
                        "data-expanded": row.getIsExpanded(),
                        role: props.onSelect ? "button" : void 0,
                        tabindex: props.onSelect ? 0 : void 0,
                        class: ui.value.tr({
                          class: [
                            props.ui?.tr,
                            resolveValue(unref(tableApi).options.meta?.class?.tr, row)
                          ]
                        }),
                        style: resolveValue(unref(tableApi).options.meta?.style?.tr, row),
                        onClick: ($event) => onRowSelect($event, row),
                        onPointerenter: ($event) => onRowHover($event, row),
                        onPointerleave: ($event) => onRowHover($event, null),
                        onContextmenu: ($event) => onRowContextmenu($event, row)
                      }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(row.getVisibleCells(), (cell) => {
                          return openBlock(), createBlock("td", {
                            key: cell.id,
                            "data-pinned": cell.column.getIsPinned(),
                            colspan: resolveValue(cell.column.columnDef.meta?.colspan?.td, cell),
                            rowspan: resolveValue(cell.column.columnDef.meta?.rowspan?.td, cell),
                            class: ui.value.td({
                              class: [
                                props.ui?.td,
                                resolveValue(cell.column.columnDef.meta?.class?.td, cell)
                              ],
                              pinned: !!cell.column.getIsPinned()
                            }),
                            style: resolveValue(cell.column.columnDef.meta?.style?.td, cell)
                          }, [
                            renderSlot(_ctx.$slots, `${cell.column.id}-cell`, mergeProps({ ref_for: true }, cell.getContext()), () => [
                              createVNode(unref(FlexRender), {
                                render: cell.column.columnDef.cell,
                                props: cell.getContext()
                              }, null, 8, ["render", "props"])
                            ])
                          ], 14, ["data-pinned", "colspan", "rowspan"]);
                        }), 128))
                      ], 46, ["data-selected", "data-selectable", "data-expanded", "role", "tabindex", "onClick", "onPointerenter", "onPointerleave", "onContextmenu"]),
                      row.getIsExpanded() ? (openBlock(), createBlock("tr", {
                        key: 0,
                        class: ui.value.tr({ class: [props.ui?.tr] })
                      }, [
                        createVNode("td", {
                          colspan: row.getAllCells().length,
                          class: ui.value.td({ class: [props.ui?.td] })
                        }, [
                          renderSlot(_ctx.$slots, "expanded", { row })
                        ], 10, ["colspan"])
                      ], 2)) : createCommentVNode("", true)
                    ], 64);
                  }), 128)) : __props.loading && !!slots["loading"] ? (openBlock(), createBlock("tr", { key: 1 }, [
                    createVNode("td", {
                      colspan: unref(tableApi).getAllLeafColumns().length,
                      class: ui.value.loading({ class: props.ui?.loading })
                    }, [
                      renderSlot(_ctx.$slots, "loading")
                    ], 10, ["colspan"])
                  ])) : (openBlock(), createBlock("tr", { key: 2 }, [
                    createVNode("td", {
                      colspan: unref(tableApi).getAllLeafColumns().length,
                      class: ui.value.empty({ class: props.ui?.empty })
                    }, [
                      renderSlot(_ctx.$slots, "empty", {}, () => [
                        createTextVNode(toDisplayString(__props.empty || unref(t)("table.noData")), 1)
                      ])
                    ], 10, ["colspan"])
                  ])),
                  renderSlot(_ctx.$slots, "body-bottom")
                ], 2),
                hasFooter.value ? (openBlock(), createBlock("tfoot", {
                  key: 1,
                  class: ui.value.tfoot({ class: [props.ui?.tfoot] })
                }, [
                  createVNode("tr", {
                    class: ui.value.separator({ class: [props.ui?.separator] })
                  }, null, 2),
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(tableApi).getFooterGroups(), (footerGroup) => {
                    return openBlock(), createBlock("tr", {
                      key: footerGroup.id,
                      class: ui.value.tr({ class: [props.ui?.tr] })
                    }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(footerGroup.headers, (header) => {
                        return openBlock(), createBlock("th", {
                          key: header.id,
                          "data-pinned": header.column.getIsPinned(),
                          colspan: header.colSpan > 1 ? header.colSpan : void 0,
                          rowspan: header.rowSpan > 1 ? header.rowSpan : void 0,
                          class: ui.value.th({
                            class: [
                              props.ui?.th,
                              resolveValue(header.column.columnDef.meta?.class?.th, header)
                            ],
                            pinned: !!header.column.getIsPinned()
                          }),
                          style: resolveValue(header.column.columnDef.meta?.style?.th, header)
                        }, [
                          renderSlot(_ctx.$slots, `${header.id}-footer`, mergeProps({ ref_for: true }, header.getContext()), () => [
                            !header.isPlaceholder ? (openBlock(), createBlock(unref(FlexRender), {
                              key: 0,
                              render: header.column.columnDef.footer,
                              props: header.getContext()
                            }, null, 8, ["render", "props"])) : createCommentVNode("", true)
                          ])
                        ], 14, ["data-pinned", "colspan", "rowspan"]);
                      }), 128))
                    ], 2);
                  }), 128))
                ], 2)) : createCommentVNode("", true)
              ], 2)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui@3.3.3_@babel+parser@7.28.3_@netlify+blobs@9.1.2_change-case@5.4.4_db0@0.3.2_em_2b3b2ac436a2d8473dd8078f8c127796/node_modules/@nuxt/ui/dist/runtime/components/Table.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const theme = {
  "slots": {
    "root": "",
    "list": "flex items-center gap-1",
    "ellipsis": "pointer-events-none",
    "label": "min-w-5 text-center",
    "first": "",
    "prev": "",
    "item": "",
    "next": "",
    "last": ""
  }
};
const _sfc_main$1 = {
  __name: "UPagination",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    firstIcon: { type: String, required: false },
    prevIcon: { type: String, required: false },
    nextIcon: { type: String, required: false },
    lastIcon: { type: String, required: false },
    ellipsisIcon: { type: String, required: false },
    color: { type: null, required: false, default: "neutral" },
    variant: { type: null, required: false, default: "outline" },
    activeColor: { type: null, required: false, default: "primary" },
    activeVariant: { type: null, required: false, default: "solid" },
    showControls: { type: Boolean, required: false, default: true },
    size: { type: null, required: false },
    to: { type: Function, required: false },
    class: { type: null, required: false },
    ui: { type: null, required: false },
    defaultPage: { type: Number, required: false },
    disabled: { type: Boolean, required: false },
    itemsPerPage: { type: Number, required: false, default: 10 },
    page: { type: Number, required: false },
    showEdges: { type: Boolean, required: false, default: false },
    siblingCount: { type: Number, required: false, default: 2 },
    total: { type: Number, required: false, default: 0 }
  },
  emits: ["update:page"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const slots = useSlots();
    const { dir } = useLocale();
    const appConfig = useAppConfig();
    const rootProps = useForwardPropsEmits(reactivePick(props, "as", "defaultPage", "disabled", "itemsPerPage", "page", "showEdges", "siblingCount", "total"), emits);
    const firstIcon = computed(() => props.firstIcon || (dir.value === "rtl" ? appConfig.ui.icons.chevronDoubleRight : appConfig.ui.icons.chevronDoubleLeft));
    const prevIcon = computed(() => props.prevIcon || (dir.value === "rtl" ? appConfig.ui.icons.chevronRight : appConfig.ui.icons.chevronLeft));
    const nextIcon = computed(() => props.nextIcon || (dir.value === "rtl" ? appConfig.ui.icons.chevronLeft : appConfig.ui.icons.chevronRight));
    const lastIcon = computed(() => props.lastIcon || (dir.value === "rtl" ? appConfig.ui.icons.chevronDoubleLeft : appConfig.ui.icons.chevronDoubleRight));
    const ui = computed(() => tv({ extend: tv(theme), ...appConfig.ui?.pagination || {} })());
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(PaginationRoot), mergeProps(unref(rootProps), {
        class: ui.value.root({ class: [props.ui?.root, props.class] })
      }, _attrs), {
        default: withCtx(({ page, pageCount }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(PaginationList), {
              class: ui.value.list({ class: props.ui?.list })
            }, {
              default: withCtx(({ items }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (__props.showControls || !!slots.first) {
                    _push3(ssrRenderComponent(unref(PaginationFirst), {
                      "as-child": "",
                      class: ui.value.first({ class: props.ui?.first })
                    }, {
                      default: withCtx((_, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          ssrRenderSlot(_ctx.$slots, "first", {}, () => {
                            _push4(ssrRenderComponent(_sfc_main$b, {
                              color: __props.color,
                              variant: __props.variant,
                              size: __props.size,
                              icon: firstIcon.value,
                              to: __props.to?.(1)
                            }, null, _parent4, _scopeId3));
                          }, _push4, _parent4, _scopeId3);
                        } else {
                          return [
                            renderSlot(_ctx.$slots, "first", {}, () => [
                              createVNode(_sfc_main$b, {
                                color: __props.color,
                                variant: __props.variant,
                                size: __props.size,
                                icon: firstIcon.value,
                                to: __props.to?.(1)
                              }, null, 8, ["color", "variant", "size", "icon", "to"])
                            ])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  if (__props.showControls || !!slots.prev) {
                    _push3(ssrRenderComponent(unref(PaginationPrev), {
                      "as-child": "",
                      class: ui.value.prev({ class: props.ui?.prev })
                    }, {
                      default: withCtx((_, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          ssrRenderSlot(_ctx.$slots, "prev", {}, () => {
                            _push4(ssrRenderComponent(_sfc_main$b, {
                              color: __props.color,
                              variant: __props.variant,
                              size: __props.size,
                              icon: prevIcon.value,
                              to: page > 1 ? __props.to?.(page - 1) : void 0
                            }, null, _parent4, _scopeId3));
                          }, _push4, _parent4, _scopeId3);
                        } else {
                          return [
                            renderSlot(_ctx.$slots, "prev", {}, () => [
                              createVNode(_sfc_main$b, {
                                color: __props.color,
                                variant: __props.variant,
                                size: __props.size,
                                icon: prevIcon.value,
                                to: page > 1 ? __props.to?.(page - 1) : void 0
                              }, null, 8, ["color", "variant", "size", "icon", "to"])
                            ])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`<!--[-->`);
                  ssrRenderList(items, (item, index) => {
                    _push3(`<!--[-->`);
                    if (item.type === "page") {
                      _push3(ssrRenderComponent(unref(PaginationListItem), {
                        key: index,
                        "as-child": "",
                        value: item.value,
                        class: ui.value.item({ class: props.ui?.item })
                      }, {
                        default: withCtx((_, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            ssrRenderSlot(_ctx.$slots, "item", mergeProps({ ref_for: true }, { item, index, page, pageCount }), () => {
                              _push4(ssrRenderComponent(_sfc_main$b, {
                                color: page === item.value ? __props.activeColor : __props.color,
                                variant: page === item.value ? __props.activeVariant : __props.variant,
                                size: __props.size,
                                label: String(item.value),
                                ui: { label: ui.value.label() },
                                to: __props.to?.(item.value),
                                square: ""
                              }, null, _parent4, _scopeId3));
                            }, _push4, _parent4, _scopeId3);
                          } else {
                            return [
                              renderSlot(_ctx.$slots, "item", mergeProps({ ref_for: true }, { item, index, page, pageCount }), () => [
                                createVNode(_sfc_main$b, {
                                  color: page === item.value ? __props.activeColor : __props.color,
                                  variant: page === item.value ? __props.activeVariant : __props.variant,
                                  size: __props.size,
                                  label: String(item.value),
                                  ui: { label: ui.value.label() },
                                  to: __props.to?.(item.value),
                                  square: ""
                                }, null, 8, ["color", "variant", "size", "label", "ui", "to"])
                              ])
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    } else {
                      _push3(ssrRenderComponent(unref(PaginationEllipsis), {
                        key: item.type,
                        index,
                        "as-child": "",
                        class: ui.value.ellipsis({ class: props.ui?.ellipsis })
                      }, {
                        default: withCtx((_, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            ssrRenderSlot(_ctx.$slots, "ellipsis", {}, () => {
                              _push4(ssrRenderComponent(_sfc_main$b, {
                                color: __props.color,
                                variant: __props.variant,
                                size: __props.size,
                                icon: __props.ellipsisIcon || unref(appConfig).ui.icons.ellipsis
                              }, null, _parent4, _scopeId3));
                            }, _push4, _parent4, _scopeId3);
                          } else {
                            return [
                              renderSlot(_ctx.$slots, "ellipsis", {}, () => [
                                createVNode(_sfc_main$b, {
                                  color: __props.color,
                                  variant: __props.variant,
                                  size: __props.size,
                                  icon: __props.ellipsisIcon || unref(appConfig).ui.icons.ellipsis
                                }, null, 8, ["color", "variant", "size", "icon"])
                              ])
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    }
                    _push3(`<!--]-->`);
                  });
                  _push3(`<!--]-->`);
                  if (__props.showControls || !!slots.next) {
                    _push3(ssrRenderComponent(unref(PaginationNext), {
                      "as-child": "",
                      class: ui.value.next({ class: props.ui?.next })
                    }, {
                      default: withCtx((_, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          ssrRenderSlot(_ctx.$slots, "next", {}, () => {
                            _push4(ssrRenderComponent(_sfc_main$b, {
                              color: __props.color,
                              variant: __props.variant,
                              size: __props.size,
                              icon: nextIcon.value,
                              to: page < pageCount ? __props.to?.(page + 1) : void 0
                            }, null, _parent4, _scopeId3));
                          }, _push4, _parent4, _scopeId3);
                        } else {
                          return [
                            renderSlot(_ctx.$slots, "next", {}, () => [
                              createVNode(_sfc_main$b, {
                                color: __props.color,
                                variant: __props.variant,
                                size: __props.size,
                                icon: nextIcon.value,
                                to: page < pageCount ? __props.to?.(page + 1) : void 0
                              }, null, 8, ["color", "variant", "size", "icon", "to"])
                            ])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  if (__props.showControls || !!slots.last) {
                    _push3(ssrRenderComponent(unref(PaginationLast), {
                      "as-child": "",
                      class: ui.value.last({ class: props.ui?.last })
                    }, {
                      default: withCtx((_, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          ssrRenderSlot(_ctx.$slots, "last", {}, () => {
                            _push4(ssrRenderComponent(_sfc_main$b, {
                              color: __props.color,
                              variant: __props.variant,
                              size: __props.size,
                              icon: lastIcon.value,
                              to: __props.to?.(pageCount)
                            }, null, _parent4, _scopeId3));
                          }, _push4, _parent4, _scopeId3);
                        } else {
                          return [
                            renderSlot(_ctx.$slots, "last", {}, () => [
                              createVNode(_sfc_main$b, {
                                color: __props.color,
                                variant: __props.variant,
                                size: __props.size,
                                icon: lastIcon.value,
                                to: __props.to?.(pageCount)
                              }, null, 8, ["color", "variant", "size", "icon", "to"])
                            ])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    __props.showControls || !!slots.first ? (openBlock(), createBlock(unref(PaginationFirst), {
                      key: 0,
                      "as-child": "",
                      class: ui.value.first({ class: props.ui?.first })
                    }, {
                      default: withCtx(() => [
                        renderSlot(_ctx.$slots, "first", {}, () => [
                          createVNode(_sfc_main$b, {
                            color: __props.color,
                            variant: __props.variant,
                            size: __props.size,
                            icon: firstIcon.value,
                            to: __props.to?.(1)
                          }, null, 8, ["color", "variant", "size", "icon", "to"])
                        ])
                      ]),
                      _: 3
                    }, 8, ["class"])) : createCommentVNode("", true),
                    __props.showControls || !!slots.prev ? (openBlock(), createBlock(unref(PaginationPrev), {
                      key: 1,
                      "as-child": "",
                      class: ui.value.prev({ class: props.ui?.prev })
                    }, {
                      default: withCtx(() => [
                        renderSlot(_ctx.$slots, "prev", {}, () => [
                          createVNode(_sfc_main$b, {
                            color: __props.color,
                            variant: __props.variant,
                            size: __props.size,
                            icon: prevIcon.value,
                            to: page > 1 ? __props.to?.(page - 1) : void 0
                          }, null, 8, ["color", "variant", "size", "icon", "to"])
                        ])
                      ]),
                      _: 2
                    }, 1032, ["class"])) : createCommentVNode("", true),
                    (openBlock(true), createBlock(Fragment, null, renderList(items, (item, index) => {
                      return openBlock(), createBlock(Fragment, null, [
                        item.type === "page" ? (openBlock(), createBlock(unref(PaginationListItem), {
                          key: index,
                          "as-child": "",
                          value: item.value,
                          class: ui.value.item({ class: props.ui?.item })
                        }, {
                          default: withCtx(() => [
                            renderSlot(_ctx.$slots, "item", mergeProps({ ref_for: true }, { item, index, page, pageCount }), () => [
                              createVNode(_sfc_main$b, {
                                color: page === item.value ? __props.activeColor : __props.color,
                                variant: page === item.value ? __props.activeVariant : __props.variant,
                                size: __props.size,
                                label: String(item.value),
                                ui: { label: ui.value.label() },
                                to: __props.to?.(item.value),
                                square: ""
                              }, null, 8, ["color", "variant", "size", "label", "ui", "to"])
                            ])
                          ]),
                          _: 2
                        }, 1032, ["value", "class"])) : (openBlock(), createBlock(unref(PaginationEllipsis), {
                          key: item.type,
                          index,
                          "as-child": "",
                          class: ui.value.ellipsis({ class: props.ui?.ellipsis })
                        }, {
                          default: withCtx(() => [
                            renderSlot(_ctx.$slots, "ellipsis", {}, () => [
                              createVNode(_sfc_main$b, {
                                color: __props.color,
                                variant: __props.variant,
                                size: __props.size,
                                icon: __props.ellipsisIcon || unref(appConfig).ui.icons.ellipsis
                              }, null, 8, ["color", "variant", "size", "icon"])
                            ])
                          ]),
                          _: 3
                        }, 8, ["index", "class"]))
                      ], 64);
                    }), 256)),
                    __props.showControls || !!slots.next ? (openBlock(), createBlock(unref(PaginationNext), {
                      key: 2,
                      "as-child": "",
                      class: ui.value.next({ class: props.ui?.next })
                    }, {
                      default: withCtx(() => [
                        renderSlot(_ctx.$slots, "next", {}, () => [
                          createVNode(_sfc_main$b, {
                            color: __props.color,
                            variant: __props.variant,
                            size: __props.size,
                            icon: nextIcon.value,
                            to: page < pageCount ? __props.to?.(page + 1) : void 0
                          }, null, 8, ["color", "variant", "size", "icon", "to"])
                        ])
                      ]),
                      _: 2
                    }, 1032, ["class"])) : createCommentVNode("", true),
                    __props.showControls || !!slots.last ? (openBlock(), createBlock(unref(PaginationLast), {
                      key: 3,
                      "as-child": "",
                      class: ui.value.last({ class: props.ui?.last })
                    }, {
                      default: withCtx(() => [
                        renderSlot(_ctx.$slots, "last", {}, () => [
                          createVNode(_sfc_main$b, {
                            color: __props.color,
                            variant: __props.variant,
                            size: __props.size,
                            icon: lastIcon.value,
                            to: __props.to?.(pageCount)
                          }, null, 8, ["color", "variant", "size", "icon", "to"])
                        ])
                      ]),
                      _: 2
                    }, 1032, ["class"])) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(PaginationList), {
                class: ui.value.list({ class: props.ui?.list })
              }, {
                default: withCtx(({ items }) => [
                  __props.showControls || !!slots.first ? (openBlock(), createBlock(unref(PaginationFirst), {
                    key: 0,
                    "as-child": "",
                    class: ui.value.first({ class: props.ui?.first })
                  }, {
                    default: withCtx(() => [
                      renderSlot(_ctx.$slots, "first", {}, () => [
                        createVNode(_sfc_main$b, {
                          color: __props.color,
                          variant: __props.variant,
                          size: __props.size,
                          icon: firstIcon.value,
                          to: __props.to?.(1)
                        }, null, 8, ["color", "variant", "size", "icon", "to"])
                      ])
                    ]),
                    _: 3
                  }, 8, ["class"])) : createCommentVNode("", true),
                  __props.showControls || !!slots.prev ? (openBlock(), createBlock(unref(PaginationPrev), {
                    key: 1,
                    "as-child": "",
                    class: ui.value.prev({ class: props.ui?.prev })
                  }, {
                    default: withCtx(() => [
                      renderSlot(_ctx.$slots, "prev", {}, () => [
                        createVNode(_sfc_main$b, {
                          color: __props.color,
                          variant: __props.variant,
                          size: __props.size,
                          icon: prevIcon.value,
                          to: page > 1 ? __props.to?.(page - 1) : void 0
                        }, null, 8, ["color", "variant", "size", "icon", "to"])
                      ])
                    ]),
                    _: 2
                  }, 1032, ["class"])) : createCommentVNode("", true),
                  (openBlock(true), createBlock(Fragment, null, renderList(items, (item, index) => {
                    return openBlock(), createBlock(Fragment, null, [
                      item.type === "page" ? (openBlock(), createBlock(unref(PaginationListItem), {
                        key: index,
                        "as-child": "",
                        value: item.value,
                        class: ui.value.item({ class: props.ui?.item })
                      }, {
                        default: withCtx(() => [
                          renderSlot(_ctx.$slots, "item", mergeProps({ ref_for: true }, { item, index, page, pageCount }), () => [
                            createVNode(_sfc_main$b, {
                              color: page === item.value ? __props.activeColor : __props.color,
                              variant: page === item.value ? __props.activeVariant : __props.variant,
                              size: __props.size,
                              label: String(item.value),
                              ui: { label: ui.value.label() },
                              to: __props.to?.(item.value),
                              square: ""
                            }, null, 8, ["color", "variant", "size", "label", "ui", "to"])
                          ])
                        ]),
                        _: 2
                      }, 1032, ["value", "class"])) : (openBlock(), createBlock(unref(PaginationEllipsis), {
                        key: item.type,
                        index,
                        "as-child": "",
                        class: ui.value.ellipsis({ class: props.ui?.ellipsis })
                      }, {
                        default: withCtx(() => [
                          renderSlot(_ctx.$slots, "ellipsis", {}, () => [
                            createVNode(_sfc_main$b, {
                              color: __props.color,
                              variant: __props.variant,
                              size: __props.size,
                              icon: __props.ellipsisIcon || unref(appConfig).ui.icons.ellipsis
                            }, null, 8, ["color", "variant", "size", "icon"])
                          ])
                        ]),
                        _: 3
                      }, 8, ["index", "class"]))
                    ], 64);
                  }), 256)),
                  __props.showControls || !!slots.next ? (openBlock(), createBlock(unref(PaginationNext), {
                    key: 2,
                    "as-child": "",
                    class: ui.value.next({ class: props.ui?.next })
                  }, {
                    default: withCtx(() => [
                      renderSlot(_ctx.$slots, "next", {}, () => [
                        createVNode(_sfc_main$b, {
                          color: __props.color,
                          variant: __props.variant,
                          size: __props.size,
                          icon: nextIcon.value,
                          to: page < pageCount ? __props.to?.(page + 1) : void 0
                        }, null, 8, ["color", "variant", "size", "icon", "to"])
                      ])
                    ]),
                    _: 2
                  }, 1032, ["class"])) : createCommentVNode("", true),
                  __props.showControls || !!slots.last ? (openBlock(), createBlock(unref(PaginationLast), {
                    key: 3,
                    "as-child": "",
                    class: ui.value.last({ class: props.ui?.last })
                  }, {
                    default: withCtx(() => [
                      renderSlot(_ctx.$slots, "last", {}, () => [
                        createVNode(_sfc_main$b, {
                          color: __props.color,
                          variant: __props.variant,
                          size: __props.size,
                          icon: lastIcon.value,
                          to: __props.to?.(pageCount)
                        }, null, 8, ["color", "variant", "size", "icon", "to"])
                      ])
                    ]),
                    _: 2
                  }, 1032, ["class"])) : createCommentVNode("", true)
                ]),
                _: 2
              }, 1032, ["class"])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui@3.3.3_@babel+parser@7.28.3_@netlify+blobs@9.1.2_change-case@5.4.4_db0@0.3.2_em_2b3b2ac436a2d8473dd8078f8c127796/node_modules/@nuxt/ui/dist/runtime/components/Pagination.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const toast = useToast();
    const { copy } = useClipboard();
    const { contracts, fetchContracts, deleteContract } = useContracts();
    [__temp, __restore] = withAsyncContext(() => fetchContracts()), await __temp, __restore();
    const searchQuery = ref("");
    const data = ref(
      Array.isArray(contracts.value) ? contracts.value : contracts.value.data || []
    );
    const paginationFetch = ref({
      first_page_url: Array.isArray(contracts.value) ? "" : contracts.value.first_page_url || "",
      from: Array.isArray(contracts.value) ? 0 : contracts.value.from || 0,
      last_page: Array.isArray(contracts.value) ? 1 : contracts.value.last_page || 1,
      last_page_url: Array.isArray(contracts.value) ? "" : contracts.value.last_page_url || "",
      links: Array.isArray(contracts.value) ? [] : contracts.value.links || [],
      next_page_url: Array.isArray(contracts.value) ? null : contracts.value.next_page_url || null,
      prev_page_url: Array.isArray(contracts.value) ? null : contracts.value.prev_page_url || null,
      per_page: Array.isArray(contracts.value) ? 10 : contracts.value.per_page || 10,
      to: Array.isArray(contracts.value) ? 0 : contracts.value.to || 0,
      total: Array.isArray(contracts.value) ? 0 : contracts.value.total || 0,
      current_page: Array.isArray(contracts.value) ? 1 : contracts.value.current_page || 1
    });
    const columns = [
      {
        accessorKey: "id",
        header: "ID"
      },
      {
        accessorKey: "name",
        header: "Tên hợp đồng"
      },
      {
        accessorKey: "contract_number",
        header: "Số hợp đồng"
      },
      {
        accessorKey: "date_signed",
        header: "Ngày ký"
      },
      {
        accessorKey: "customer.name",
        header: "Khách hàng"
      },
      {
        accessorKey: "date_desk",
        header: "Ngày bàn giao"
      },
      {
        accessorKey: "contract_value",
        header: "Giá trị hợp đồng"
      },
      {
        accessorKey: "deposit",
        header: "Tiền đặt cọc"
      },
      {
        accessorKey: "status",
        header: "Trạng thái"
      },
      {
        accessorKey: "pdf_file",
        header: "Tệp PDF"
      },
      {
        id: "action"
      }
    ];
    const searchingContracts = async () => {
      await fetchContracts(searchQuery.value);
      if (Array.isArray(contracts.value)) {
        data.value = [...contracts.value];
      } else if (contracts.value.data) {
        data.value = [...contracts.value.data];
      }
    };
    const refreshTable = async () => {
      await fetchContracts();
      if (Array.isArray(contracts.value)) {
        data.value = [...contracts.value];
      } else if (contracts.value && typeof contracts.value === "object" && "data" in contracts.value) {
        data.value = [...contracts.value.data];
      }
    };
    const handleDeleteContract = async (contractId) => {
      try {
        await deleteContract(contractId);
        toast.add({
          title: "Success",
          description: "Contract deleted successfully!",
          color: "success",
          icon: "i-lucide-circle-check"
        });
        await refreshTable();
      } catch {
        toast.add({
          title: "Error",
          description: "Failed to delete contract",
          color: "error",
          icon: "i-lucide-circle-x"
        });
      }
    };
    function getDropdownActions(contract) {
      return [
        [
          {
            label: "Copy contract Id",
            icon: "i-lucide-copy",
            onSelect: () => {
              copy(contract.id?.toString() || "");
              toast.add({
                title: "Contract ID copied to clipboard!",
                color: "success",
                icon: "i-lucide-circle-check"
              });
            }
          }
        ],
        [
          {
            label: "Edit",
            icon: "i-lucide-edit"
          },
          {
            label: "Delete",
            icon: "i-lucide-trash",
            color: "error",
            onSelect: () => {
              if (contract.id) {
                handleDeleteContract(contract.id);
              }
            }
          }
        ]
      ];
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UInput = _sfc_main$3;
      const _component_UButton = _sfc_main$b;
      const _component_UTable = _sfc_main$2;
      const _component_UDropdownMenu = _sfc_main$4;
      const _component_UPagination = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="flex items-center justify-between mb-4"><div class="flex space-x-2">`);
      _push(ssrRenderComponent(_component_UInput, {
        modelValue: unref(searchQuery),
        "onUpdate:modelValue": ($event) => isRef(searchQuery) ? searchQuery.value = $event : null,
        icon: "i-lucide-search",
        size: "md",
        variant: "outline",
        placeholder: "Search..."
      }, null, _parent));
      _push(ssrRenderComponent(_component_UButton, {
        class: "text-white bg-blue-600 rounded-lg",
        onClick: searchingContracts
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Search `);
          } else {
            return [
              createTextVNode(" Search ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_UButton, {
        to: "/contracts/create",
        target: "_blank"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Thêm hợp đồng `);
          } else {
            return [
              createTextVNode(" Thêm hợp đồng ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_UTable, {
        data: unref(data),
        columns,
        class: "flex-1"
      }, {
        "name-cell": withCtx(({ row }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center gap-3"${_scopeId}><div${_scopeId}><p class="font-medium text-highlighted"${_scopeId}>${ssrInterpolate(row.original.name)}</p><p${_scopeId}>${ssrInterpolate(row.original.position)}</p></div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center gap-3" }, [
                createVNode("div", null, [
                  createVNode("p", { class: "font-medium text-highlighted" }, toDisplayString(row.original.name), 1),
                  createVNode("p", null, toDisplayString(row.original.position), 1)
                ])
              ])
            ];
          }
        }),
        "action-cell": withCtx(({ row }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UDropdownMenu, {
              items: getDropdownActions(row.original)
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UButton, {
                    icon: "i-lucide-ellipsis-vertical",
                    color: "neutral",
                    variant: "ghost",
                    "aria-label": "Actions"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UButton, {
                      icon: "i-lucide-ellipsis-vertical",
                      color: "neutral",
                      variant: "ghost",
                      "aria-label": "Actions"
                    })
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UDropdownMenu, {
                items: getDropdownActions(row.original)
              }, {
                default: withCtx(() => [
                  createVNode(_component_UButton, {
                    icon: "i-lucide-ellipsis-vertical",
                    color: "neutral",
                    variant: "ghost",
                    "aria-label": "Actions"
                  })
                ]),
                _: 1
              }, 8, ["items"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex justify-center border-t border-default pt-4">`);
      _push(ssrRenderComponent(_component_UPagination, {
        "default-page": unref(paginationFetch).current_page,
        "items-per-page": unref(paginationFetch).per_page,
        total: unref(paginationFetch).total
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contracts/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-iS9A55Hv.mjs.map
