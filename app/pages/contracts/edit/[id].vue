<template>
  <div class="edit-contract-page">
    <h1>Edit Contract</h1>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="date_signed">Date Signed</label>
        <input
          id="date_signed"
          v-model="contract.date_signed"
          type="date"
        >
      </div>

      <div class="form-group">
        <label for="customer_id">Customer ID</label>
        <input
          id="customer_id"
          v-model="contract.customer_id"
          type="text"
          disabled
        >
      </div>

      <div class="form-group">
        <label for="date_desk">Date Desk</label>
        <input
          id="date_desk"
          v-model="contract.date_desk"
          type="datetime-local"
        >
      </div>

      <div class="form-group">
        <label for="contract_value">Contract Value</label>
        <input
          id="contract_value"
          v-model="contract.contract_value"
          type="number"
        >
      </div>

      <div class="form-group">
        <label for="deposit">Deposit</label>
        <input
          id="deposit"
          v-model="contract.deposit"
          type="number"
        >
      </div>

      <div class="form-group">
        <label for="status">Status</label>
        <select
          id="status"
          v-model="contract.status"
        >
          <option value="pending">
            Pending
          </option>
          <option value="approved">
            Approved
          </option>
          <option value="rejected">
            Rejected
          </option>
        </select>
      </div>

      <div class="form-group">
        <label for="pdf_file">PDF File</label>
        <input
          id="pdf_file"
          type="file"
          @change="handleFileUpload"
        >
      </div>

      <button type="submit">
        Save
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contract: {
        date_signed: '',
        customer_id: '',
        date_desk: '',
        contract_value: null,
        deposit: null,
        status: '',
        pdf_file: null,
      },
    }
  },
  methods: {
    handleFileUpload(event) {
      this.contract.pdf_file = event.target.files[0]
    },
    submitForm() {
      console.log('Contract data:', this.contract)
      // Add your form submission logic here
    },
  },
}
</script>

<style scoped>
.edit-contract-page {
    max-width: 600px;
    margin: 0 auto;
}
.form-group {
    margin-bottom: 1rem;
}
label {
    display: block;
    margin-bottom: 0.5rem;
}
input,
select,
button {
    width: 100%;
    padding: 0.5rem;
    margin-bottom: 0.5rem;
}
</style>
