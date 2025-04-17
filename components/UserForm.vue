<template>
  <div class="card user-form-card">
    <form @submit.prevent="submitUser" class="p-fluid grid formgrid">
      <h3 class="col-12 text-center mb-4">Create User</h3>

      <!-- Role Selection (CustomSelectButton) at the top -->
      <div class="field col-12">
        <CustomSelectButton 
          label="Select Role"
          v-model="selectedRole"
          :options="roles"
          optionLabel="name"
          optionValue="value"
          id="userRole"
        />
      </div>

      <!-- Name Input -->
      <div class="field col-12 md:col-6">
        <label for="userName">Name</label>
        <InputText id="userName" v-model="userName" />
      </div>

      <!-- Email Input -->
      <div class="field col-12 md:col-6">
        <label for="userEmail">Email</label>
        <InputText id="userEmail" type="email" v-model="userEmail" />
      </div>

      <!-- Submit Button -->
      <div class="col-12 flex justify-center mt-3">
        <Button type="submit" label="Create User" icon="pi pi-user-plus"></Button>
      </div>
      
      <!-- Submitted Data Display -->
      <div v-if="submittedData" class="col-12 mt-4 message-section">
        <h4>Submitted User Data:</h4>
        <pre>{{ JSON.stringify(submittedData, null, 2) }}</pre>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
// CustomSelectButton should be auto-imported by Nuxt

// Define types
type Role = {
    name: string;
    value: string;
};

type UserData = {
    name: string | null;
    email: string | null;
    role: string;
};

// Form state refs
const userName = ref<string | null>(null);
const userEmail = ref<string | null>(null);

// Role options and selection
const roles = ref<Role[]>([
    { name: 'Admin', value: 'admin' },
    { name: 'Editor', value: 'editor' },
    { name: 'Viewer', value: 'viewer' }
]);
const selectedRole = ref<string>(roles.value[0].value); // Default to first role

// Submitted data state
const submittedData = ref<UserData | null>(null);

// Submit handler
const submitUser = () => {
  const data: UserData = {
    name: userName.value,
    email: userEmail.value,
    role: selectedRole.value
  };
  submittedData.value = data;
  console.log('Submitting User:', data);
  // Add actual form submission logic here (e.g., API call)
};
</script>

<style scoped>
/* Reuse styles from ProductForm with slight adjustments if needed */
.user-form-card {
  width: 100%;
  max-width: 40rem; 
  border-radius: 8px;
  padding: 2rem 3rem;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
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
    white-space: pre-wrap; 
    font-size: 0.9em;
}

.text-center {
    text-align: center;
}

.mb-4 {
    margin-bottom: 1.5rem !important;
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
</style> 