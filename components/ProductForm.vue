<template>
  <div class="card product-form-card">
    <form @submit.prevent="submitProduct" class="p-fluid grid formgrid">
      <div v-if="submittedData" class="col-12 mt-4 message-section">
        <h4>Submitted Data:</h4>
        <pre>{{ JSON.stringify(submittedData, null, 2) }}</pre>
      </div>

      <h3 class="col-12 text-center mb-4">Add Product</h3>
      <div class="col-12 flex justify-center mt-3">
        <Button type="submit" label="Add Product" icon="pi pi-plus"></Button>
      </div>
 
      <div class="field col-12">
        <label for="productName">Product Name</label>
        <InputText id="productName" v-model="productName" />
      </div>

      <div class="field col-12 md:col-6">
        <label for="price">Price</label>
        <InputGroup>
          <InputGroupAddon>$</InputGroupAddon>
          <InputNumber
            id="price"
            v-model="price"
            mode="decimal"
            :minFractionDigits="2"
            :maxFractionDigits="2"
            data-testid="price-input"
          />
        </InputGroup>
      </div>

      <div class="field col-12 md:col-6">
        <label for="quantity">Quantity</label>
        <InputNumber id="quantity" v-model="quantity" integeronly data-testid="quantity-input" />
      </div>

      <div class="field col-12">
        <CustomSelectButton
          label="Select Category"
          v-model="selectedCategory"
          :options="categories"
          optionLabel="name"
          optionValue="value"
        />
      </div>

   </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import InputText from "primevue/inputtext";
import InputNumber from "primevue/inputnumber";
import Button from "primevue/button";
import InputGroup from "primevue/inputgroup";
import InputGroupAddon from "primevue/inputgroupaddon";
// CustomSelectButton should be auto-imported

// Define types for clarity
type Category = {
  name: string;
  value: string;
};

type ProductData = {
  name: string | null;
  price: number | null;
  quantity: number | null;
  category: string;
};

const productName = ref<string | null>(null);
const price = ref<number | null>(null);
const quantity = ref<number | null>(null);

const categories = ref<Category[]>([
  { name: "Electronics", value: "electronics" },
  { name: "Accessories", value: "accessories" },
  { name: "Clothing", value: "clothing" },
  { name: "Home Goods", value: "home_goods" },
]);
const selectedCategory = ref<string>(categories.value[0].value);
const submittedData = ref<ProductData | null>(null);

const submitProduct = () => {
  const data: ProductData = {
    name: productName.value,
    price: price.value,
    quantity: quantity.value,
    category: selectedCategory.value,
  };
  submittedData.value = data;
  console.log("Submitting Product:", data);
  // Add actual form submission logic here (e.g., API call)
};
</script>

<style scoped>
.product-form-card {
  width: 100%;
  max-width: 40rem; /* Adjust max width as needed */
  border-radius: 8px;
  padding: 2rem 3rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  background-color: var(--p-content-background);
  margin-top: 2rem;
}

.field {
  margin-bottom: 1.25rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.message-section {
  background-color: var(--p-highlight-background);
  color: var(--p-highlight-color);
  border: 1px solid var(--p-content-border-color);
  padding: 1rem;
  border-radius: 6px;
  word-wrap: break-word;
}

.message-section h4 {
  margin-top: 0;
  margin-bottom: 0.5rem;
}

.message-section pre {
  margin: 0;
  white-space: pre-wrap; /* Allow text wrapping */
  font-size: 0.9em;
}

.text-center {
  text-align: center;
}

.mb-4 {
  margin-bottom: 1.5rem !important; /* Increase bottom margin for title */
}

.mt-3 {
  margin-top: 1rem !important;
}

.mt-4 {
  margin-top: 1.5rem !important;
}

.justify-center {
  justify-content: center;
}

.flex {
  display: flex;
}

/* Override default fluid button width if needed */
/* .p-fluid .p-button {
    width: auto;
} */
</style>
