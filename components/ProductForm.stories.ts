import type { Meta, StoryObj } from '@storybook/vue3';
import { within, userEvent, expect, fn } from '@storybook/test';
import ProductForm from './ProductForm.vue';

// Meta information for the story
const meta: Meta<typeof ProductForm> = {
  title: 'Components/ProductForm',
  component: ProductForm,
  tags: ['autodocs'], // Enables automatic documentation generation
  argTypes: {
    // You can define controls for props here if needed
    // Example: 
    // initialCategory: { control: 'select', options: ['electronics', 'accessories', 'clothing', 'home_goods'] }
  },
  parameters: {
    // Optional parameters
    layout: 'centered', // Center the component in the Canvas
  },
};

export default meta;

// Define the story object type
type Story = StoryObj<typeof ProductForm>;

// Basic story rendering the component
export const Default: Story = {
  args: {
    // Props to pass to the component for this story
    // Since ProductForm manages its own state internally now, 
    // we don't need to pass much here unless we add props later.
  },
};

// Story with interaction test
export const FilledForm: Story = {
  args: {
    // ... same args as Default ...
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('Enter product details', async () => {
        // Use label text for standard InputText
        await userEvent.type(canvas.getByLabelText('Product Name'), 'Test Product');
        
        // Target InputNumber: Find wrapper by testid, then find the input inside by role
        const priceWrapper = canvas.getByTestId('price-input');
        const actualPriceInput = within(priceWrapper).getByRole('textbox'); // InputNumber often renders a textbox internally
        await userEvent.clear(actualPriceInput);
        await userEvent.type(actualPriceInput, '123.45');

        const quantityWrapper = canvas.getByTestId('quantity-input');
        const actualQuantityInput = within(quantityWrapper).getByRole('textbox');
        await userEvent.clear(actualQuantityInput);
        await userEvent.type(actualQuantityInput, '50');

        // Click a category button (CustomSelectButton renders buttons)
        await userEvent.click(canvas.getByRole('button', { name: 'Accessories' }));
    });

    // Visual snapshot point 1: After filling form
    await step('Form filled snapshot', async () => {}); 

    await step('Submit the form', async () => {
        await userEvent.click(canvas.getByRole('button', { name: 'Add Product' }));
    });

    // Visual snapshot point 2: After submission (shows submitted data)
    await step('Form submitted snapshot', async () => {
        // Optional: Add functional assertions here if needed
        // await expect(canvas.getByText('Submitted Data:')).toBeInTheDocument();
    }); 
  },
};

// Add more stories here to showcase different states or variations
// Example: Story with pre-filled data (if we modify ProductForm to accept initial data)
/*
export const PreFilled: Story = {
  args: {
    initialData: {
        name: 'Sample Product',
        price: 99.99,
        quantity: 10,
        category: 'accessories'
    }
  },
};
*/ 