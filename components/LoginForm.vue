<template>
  <div class="card flex justify-center">
    <form @submit.prevent="login" class="flex flex-col gap-2 p-fluid">
      <label for="username">Username</label>
      <InputText id="username" v-model="username" aria-describedby="username-help" />
      <small id="username-help">Enter your username.</small>

      <label for="password">Password</label>
      <InputText id="password" type="password" v-model="password" aria-describedby="password-help" />
      <small id="password-help">Enter your password.</small>

      <Button type="submit" label="Login" class="mt-2"></Button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import InputText from 'primevue/inputtext'; // Explicit import needed if auto-import fails
import Button from 'primevue/button'; // Explicit import needed if auto-import fails

const username = ref('');
const password = ref('');

const login = () => {
  console.log('Logging in with:', username.value, password.value);
  // Add actual login logic here
};
</script>

<style scoped>
.card {
  width: 25rem;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  background-color: var(--p-content-background);
}
</style> 