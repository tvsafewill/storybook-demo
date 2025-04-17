<template>
  <div class="card">
    <DataTable :value="products" tableStyle="min-width: 50rem">
      <Column field="code" header="Code"></Column>
      <Column field="name" header="Name"></Column>
      <Column field="category" header="Category"></Column>
      <Column field="quantity" header="Quantity"></Column>
      <Column header="Status">
          <template #body="slotProps">
              <Tag :value="getProductStatus(slotProps.data.quantity)" :severity="getStatusSeverity(slotProps.data.quantity)" />
          </template>
      </Column>
    </DataTable>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Tag from 'primevue/tag';

type Product = {
  code: string;
  name: string;
  category: string;
  quantity: number;
};

const products = ref<Product[]>([
  { code: 'P100', name: 'Laptop', category: 'Electronics', quantity: 15 },
  { code: 'P101', name: 'Keyboard', category: 'Accessories', quantity: 50 },
  { code: 'P102', name: 'Mouse', category: 'Accessories', quantity: 30 },
  { code: 'P103', name: 'Monitor', category: 'Electronics', quantity: 5 },
  { code: 'P104', name: 'Webcam', category: 'Accessories', quantity: 0 },
]);

const getProductStatus = (quantity: number): string => {
    if (quantity > 10) return 'INSTOCK';
    if (quantity > 0) return 'LOWSTOCK';
    return 'OUTOFSTOCK';
};

const getStatusSeverity = (quantity: number): 'success' | 'warning' | 'danger' | undefined => {
    if (quantity > 10) return 'success';
    if (quantity > 0) return 'warning';
    return 'danger';
};

</script>

<style scoped>
.card {
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  background-color: var(--p-content-background);
  margin-top: 2rem;
}
</style> 