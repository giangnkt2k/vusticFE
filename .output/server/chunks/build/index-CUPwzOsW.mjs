import { g as _sfc_main$b } from './server.mjs';
import { defineComponent, ref, withAsyncContext, mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { u as useCustomers } from './useCustomers-C1H3ObHC.mjs';
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
import './useSanctumFetch-Bq3Ox6iK.mjs';
import './useSanctumClient-DOkjdFOV.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const tableCustomerFields = [
      { key: "id", label: "ID" },
      { key: "name", label: "Tên khách hàng" },
      { key: "company_name", label: "Tên công ty" },
      { key: "email", label: "Email" },
      { key: "phone", label: "Điện thoại" },
      { key: "address", label: "Địa chỉ" },
      { key: "contact_point", label: "Mối liên hệ" },
      { key: "company_tax_code", label: "Mã số thuế công ty" },
      { key: "note", label: "Ghi chú" }
    ];
    const searchQuery = ref(void 0);
    const { customers, fetchCustomers, updateCustomer, deleteCustomer } = ([__temp, __restore] = withAsyncContext(() => useCustomers()), __temp = await __temp, __restore(), __temp);
    [__temp, __restore] = withAsyncContext(() => fetchCustomers(searchQuery.value)), await __temp, __restore();
    const dataTable = ref([]);
    dataTable.value = Array.isArray(customers.value) ? [...customers.value] : [...customers.value.data];
    const showDeleteDialog = ref(false);
    const customerToDelete = ref(null);
    const form = ref({ name: "", email: "", phone: "", address: "", company_tax_code: "" });
    const showUpdateDialog = ref(false);
    const searchingCustomer = async () => {
      await fetchCustomers(searchQuery.value);
      dataTable.value = Array.isArray(customers.value) ? [...customers.value] : [...customers.value.data];
      console.log("Searched customers:", dataTable);
      searchQuery.value = void 0;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UButton = _sfc_main$b;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative overflow-x-auto shadow-md sm:rounded-lg" }, _attrs))}><div class="grid grid-cols-1 md:grid-cols-3 gap-2 p-4"><div class="flex space-x-2 md:col-span-2 col-span-1 md:justify-start justify-between"><input${ssrRenderAttr("value", searchQuery.value)} type="text" placeholder="Search..." class="border rounded-lg">`);
      _push(ssrRenderComponent(_component_UButton, {
        class: "bg-blue-600 rounded-lg",
        onClick: searchingCustomer
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Tìm kiếm `);
          } else {
            return [
              createTextVNode(" Tìm kiếm ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_UButton, {
        to: "/customers/create",
        class: "col-span-1 bg-green-600 rounded-lg md:justify-self-end justify-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Thêm khách hàng `);
          } else {
            return [
              createTextVNode(" Thêm khách hàng ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"><thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"><tr><!--[-->`);
      ssrRenderList(tableCustomerFields, (field) => {
        _push(`<th scope="col" class="px-6 py-3">${ssrInterpolate(field.label)}</th>`);
      });
      _push(`<!--]--><th scope="col" class="px-6 py-3"> Action </th></tr></thead><tbody><!--[-->`);
      ssrRenderList(dataTable.value, (customer) => {
        _push(`<tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200"><th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">${ssrInterpolate(customer.id)}</th><td class="px-6 py-4">${ssrInterpolate(customer.name)}</td><td class="px-6 py-4">${ssrInterpolate(customer.company_name)}</td><td class="px-6 py-4">${ssrInterpolate(customer.email)}</td><td class="px-6 py-4">${ssrInterpolate(customer.phone)}</td><td class="px-6 py-4">${ssrInterpolate(customer.address)}</td><td class="px-6 py-4">${ssrInterpolate(customer.contact_point)}</td><td class="px-6 py-4">${ssrInterpolate(customer.company_tax_code)}</td><td class="px-6 py-4">${ssrInterpolate(customer.note)}</td><td class="px-6 py-4"><a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline mr-1">Edit</a><a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline">Delete</a></td></tr>`);
      });
      _push(`<!--]-->`);
      if (dataTable.value.length === 0) {
        _push(`<tr><td colspan="7" class="px-6 py-4 text-center text-gray-500"> No customers found </td></tr>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</tbody></table>`);
      if (showUpdateDialog.value) {
        _push(`<div class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40"><div class="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative"><button class="absolute top-2 right-2 text-gray-400 hover:text-gray-600"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button><h2 class="text-xl font-bold mb-4"> Update Customer </h2><form><div class="mb-3"><label class="block text-sm font-medium mb-1">Name</label><input${ssrRenderAttr("value", form.value.name)} type="text" required class="w-full px-3 py-2 border rounded-lg"></div><div class="mb-3"><label class="block text-sm font-medium mb-1">Email</label><input${ssrRenderAttr("value", form.value.email)} type="email" required class="w-full px-3 py-2 border rounded-lg"></div><div class="mb-3"><label class="block text-sm font-medium mb-1">Phone</label><input${ssrRenderAttr("value", form.value.phone)} type="text" class="w-full px-3 py-2 border rounded-lg"></div><div class="mb-3"><label class="block text-sm font-medium mb-1">Address</label><input${ssrRenderAttr("value", form.value.address)} type="text" class="w-full px-3 py-2 border rounded-lg"></div><div class="mb-3"><label class="block text-sm font-medium mb-1">Company Tax Code </label><input${ssrRenderAttr("value", form.value.company_tax_code)} type="text" class="w-full px-3 py-2 border rounded-lg"></div><div class="flex justify-end gap-2 mt-4"><button type="button" class="px-4 py-2 rounded-lg bg-gray-200 text-gray-700"> Cancel </button><button type="submit" class="px-4 py-2 rounded-lg bg-green-600 text-white"> Update </button></div></form></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (showDeleteDialog.value) {
        _push(`<div class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40"><div class="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative"><button class="absolute top-2 right-2 text-gray-400 hover:text-gray-600"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button><div class="text-center"><div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 mb-4"><svg class="h-6 w-6 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path></svg></div><h3 class="text-lg font-semibold text-gray-900 mb-2"> Xác nhận xóa khách hàng </h3><p class="text-sm text-gray-500 mb-6"> Bạn có chắc chắn muốn xóa khách hàng <strong>&quot;${ssrInterpolate(customerToDelete.value?.name)}&quot;</strong> không? Hành động này không thể hoàn tác. </p><div class="flex justify-center gap-3"><button type="button" class="px-4 py-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300"> Hủy </button><button type="button" class="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700"> Xóa </button></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/customers/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-CUPwzOsW.mjs.map
