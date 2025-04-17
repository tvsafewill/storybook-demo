<template>
  <div class="custom-select-button-wrapper">
    <label v-if="label" :for="inputId" class="custom-label">{{ label }}</label>
    <SelectButton 
      :id="inputId"
      :modelValue="modelValue" 
      @update:modelValue="emit('update:modelValue', $event)"
      :options="options" 
      :optionLabel="optionLabel"
      :optionValue="optionValue"
      :aria-labelledby="label ? inputId + '-label' : undefined"
      />
  </div>
</template>

<script setup lang="ts">
import SelectButton from 'primevue/selectbutton';
import { computed } from 'vue';

// Define props using type
type SelectButtonOption = {
    [key: string]: any;
} | string | number;

type Props = {
  modelValue: any;
  options: SelectButtonOption[];
  optionLabel?: string;
  optionValue?: string;
  label?: string;
  id?: string;
};

const props = defineProps<Props>();

const emit = defineEmits(['update:modelValue']);

const inputId = computed(() => props.id || `custom-select-${Math.random().toString(36).substring(7)}`);

</script>

<style scoped>
.custom-select-button-wrapper {
  margin-bottom: 1rem; /* Add some space below the component */
}
.custom-label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
}
/* Add any custom styling for the wrapper or the SelectButton itself */
:deep(.p-selectbutton .p-button) {
    /* Example: customize button appearance */
    /* border-radius: 20px; */
}
</style> 