import type { Meta, StoryObj } from '@storybook/vue3';
import ProductTable from './ProductTable.vue';

// Meta information for the story
const meta: Meta<typeof ProductTable> = {
  title: 'Components/ProductTable',
  component: ProductTable,
  tags: ['autodocs'], // Enables automatic documentation generation
  parameters: {
    // Optional parameters
    layout: 'centered', // Center the component in the Canvas
  },
};

export default meta;

// Define the story object type
type Story = StoryObj<typeof ProductTable>;

// Basic story rendering the component
export const Default: Story = {
  args: {
    // Props to pass to the component for this story
    // ProductTable manages its own data internally
  },
}; 