import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import CustomSelectButton from './CustomSelectButton.vue';

// Meta information for the story
const meta: Meta<typeof CustomSelectButton> = {
  title: 'Components/CustomSelectButton',
  component: CustomSelectButton,
  tags: ['autodocs'], // Enables automatic documentation generation
  argTypes: {
    modelValue: { control: 'select' }, // Allow selecting the value in Storybook controls
    options: { control: 'object' },    // Control for options array/object
    optionLabel: { control: 'text' },
    optionValue: { control: 'text' },
    label: { control: 'text' },
    id: { control: 'text' },
    // We need to handle the update:modelValue event for controls to work
    'onUpdate:modelValue': { action: 'update:modelValue' } // Log event updates
  },
  parameters: {
    layout: 'centered', // Center the component in the Canvas
  },
  render: (args) => ({
    components: { CustomSelectButton },
    // Use setup to handle v-model binding for Storybook controls
    setup() {
      // Use a ref to hold the modelValue, initialized from args
      const modelValueRef = ref(args.modelValue);
      
      // Watch for changes in args.modelValue (when changed via Storybook controls)
      watch(() => args.modelValue, (newVal) => {
        modelValueRef.value = newVal;
      });

      return { args, modelValueRef };
    },
    // Bind the ref to the component's modelValue
    // Also pass other args
    template: '<CustomSelectButton v-bind="args" v-model="modelValueRef" />',
  }),
};

export default meta;

// Define the story object type
type Story = StoryObj<typeof CustomSelectButton>;

// Sample options for the stories
const sampleOptions = [
    { name: 'Option 1', value: 'opt1' },
    { name: 'Option 2', value: 'opt2' },
    { name: 'Option 3', value: 'opt3' }
];

const simpleOptions = ['Yes', 'No', 'Maybe'];

// Story with object options
export const WithObjectOptions: Story = {
  args: {
    modelValue: sampleOptions[0].value, // Default selected value
    options: sampleOptions,
    optionLabel: 'name',
    optionValue: 'value',
    label: 'Select an Option',
    id: 'story-select-obj'
  },
};

// Story with simple string options
export const WithStringOptions: Story = {
  args: {
    modelValue: simpleOptions[1], // Default selected value
    options: simpleOptions,
    label: 'Choose Yes/No/Maybe',
    id: 'story-select-str'
    // optionLabel/optionValue not needed for simple string array
  },
};

// Story without a label
export const NoLabel: Story = {
  args: {
    modelValue: sampleOptions[0].value,
    options: sampleOptions,
    optionLabel: 'name',
    optionValue: 'value',
    id: 'story-select-nolabel'
    // label prop is omitted
  },
}; 