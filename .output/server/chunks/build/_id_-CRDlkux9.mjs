import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual } from 'vue/server-renderer';
import { x as _export_sfc } from './server.mjs';
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

const _sfc_main = {
  data() {
    return {
      contract: {
        date_signed: "",
        customer_id: "",
        date_desk: "",
        contract_value: null,
        deposit: null,
        status: "",
        pdf_file: null
      }
    };
  },
  methods: {
    handleFileUpload(event) {
      this.contract.pdf_file = event.target.files[0];
    },
    submitForm() {
      console.log("Contract data:", this.contract);
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "edit-contract-page" }, _attrs))} data-v-0810d847><h1 data-v-0810d847>Edit Contract</h1><form data-v-0810d847><div class="form-group" data-v-0810d847><label for="date_signed" data-v-0810d847>Date Signed</label><input id="date_signed"${ssrRenderAttr("value", $data.contract.date_signed)} type="date" data-v-0810d847></div><div class="form-group" data-v-0810d847><label for="customer_id" data-v-0810d847>Customer ID</label><input id="customer_id"${ssrRenderAttr("value", $data.contract.customer_id)} type="text" disabled data-v-0810d847></div><div class="form-group" data-v-0810d847><label for="date_desk" data-v-0810d847>Date Desk</label><input id="date_desk"${ssrRenderAttr("value", $data.contract.date_desk)} type="datetime-local" data-v-0810d847></div><div class="form-group" data-v-0810d847><label for="contract_value" data-v-0810d847>Contract Value</label><input id="contract_value"${ssrRenderAttr("value", $data.contract.contract_value)} type="number" data-v-0810d847></div><div class="form-group" data-v-0810d847><label for="deposit" data-v-0810d847>Deposit</label><input id="deposit"${ssrRenderAttr("value", $data.contract.deposit)} type="number" data-v-0810d847></div><div class="form-group" data-v-0810d847><label for="status" data-v-0810d847>Status</label><select id="status" data-v-0810d847><option value="pending" data-v-0810d847${ssrIncludeBooleanAttr(Array.isArray($data.contract.status) ? ssrLooseContain($data.contract.status, "pending") : ssrLooseEqual($data.contract.status, "pending")) ? " selected" : ""}> Pending </option><option value="approved" data-v-0810d847${ssrIncludeBooleanAttr(Array.isArray($data.contract.status) ? ssrLooseContain($data.contract.status, "approved") : ssrLooseEqual($data.contract.status, "approved")) ? " selected" : ""}> Approved </option><option value="rejected" data-v-0810d847${ssrIncludeBooleanAttr(Array.isArray($data.contract.status) ? ssrLooseContain($data.contract.status, "rejected") : ssrLooseEqual($data.contract.status, "rejected")) ? " selected" : ""}> Rejected </option></select></div><div class="form-group" data-v-0810d847><label for="pdf_file" data-v-0810d847>PDF File</label><input id="pdf_file" type="file" data-v-0810d847></div><button type="submit" data-v-0810d847> Save </button></form></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contracts/edit/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-0810d847"]]);

export { _id_ as default };
//# sourceMappingURL=_id_-CRDlkux9.mjs.map
