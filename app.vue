<template>
  <div class="app-container">
    <NuxtRouteAnnouncer />
    <h1>Welcome to PrimeVue + Nuxt!</h1>

    <!-- Replace LoginForm and Dialog with ProductForm -->
    <ProductForm />

    <ProductTable />

    <!-- InfoDialog and its trigger removed -->

  </div>
</template>

<script setup lang="ts">
// Components like ProductForm, ProductTable should be auto-imported by Nuxt
// No longer need ref or Button import for dialog
// import { ref } from 'vue';
// import Button from 'primevue/button'; 

// const showDialog = ref(false); // Removed

</script>

<style>
body {
  font-family: var(--p-font-family);
  /* Remove padding from body, apply to container */
  /* padding: 2rem; */ 
  background-color: var(--p-body-background);
  color: var(--p-text-color);
  margin: 0; /* Ensure no default body margin */
  min-height: 100vh; /* Ensure body takes full height */
}

.app-container {
  display: flex;
  flex-direction: column;
  align-items: center; /* Center items horizontally */
  padding: 2rem; /* Add padding here */
  min-height: calc(100vh - 4rem); /* Account for padding */
}

h1 {
  text-align: center;
  margin-bottom: 2rem;
}

/* Remove unused styles for dialog trigger */
/* .my-4 {
    margin-top: 1rem;
    margin-bottom: 1rem;
}

.flex {
    display: flex;
}

.justify-center {
    justify-content: center;
} */
</style>
