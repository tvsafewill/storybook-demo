<template>
    <Dialog v-model:visible="isVisible" modal header="Information" :style="{ width: '25rem' }">
        <p>
           This is a sample dialog component using PrimeVue.
           You can put any content here, like forms, text, or other components.
        </p>
        <template #footer>
            <Button label="Close" icon="pi pi-times" @click="closeDialog" text />
        </template>
    </Dialog>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import Dialog from 'primevue/dialog';
import Button from 'primevue/button';

const props = defineProps<{ visible: boolean }>();
const emit = defineEmits(['update:visible']);

const isVisible = ref(props.visible);

watch(() => props.visible, (newValue) => {
  isVisible.value = newValue;
});

watch(isVisible, (newValue) => {
  if (!newValue) {
    emit('update:visible', false);
  }
});

const closeDialog = () => {
    isVisible.value = false;
}

</script> 