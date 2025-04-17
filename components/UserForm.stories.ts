import type { Meta, StoryObj } from '@storybook/vue3';
import { within, userEvent } from '@storybook/test';
import UserForm from './UserForm.vue';

// Meta information for the story
const meta: Meta<typeof UserForm> = {
  title: 'Components/UserForm',
  component: UserForm,
  tags: ['autodocs'], // Enables automatic documentation generation
  parameters: {
    layout: 'centered',
  },
};

export default meta;

// Define the story object type
type Story = StoryObj<typeof UserForm>;

// Basic story rendering the component
export const Default: Story = {
  args: {
    // Form manages its own state internally
  },
};

// Story with interaction test
export const FilledUserForm: Story = {
  args: {
    // ... same args as Default ...
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('Enter user details', async () => {
        // Select a role (e.g., Editor)
        await userEvent.click(canvas.getByRole('button', { name: 'Editor' }));
        
        // Fill in Name
        await userEvent.type(canvas.getByLabelText('Name'), 'Jane Doe');
        
        // Fill in Email
        await userEvent.type(canvas.getByLabelText('Email'), 'jane.doe@example.com');
    });

    // Snapshot after filling
    await step('User form filled snapshot', async () => {}); 

    await step('Submit the user form', async () => {
        await userEvent.click(canvas.getByRole('button', { name: 'Create User' }));
    });

    // Snapshot after submission
    await step('User form submitted snapshot', async () => {
        // Optional: Assert submitted data is shown
        // await expect(canvas.getByText('Submitted User Data:')).toBeInTheDocument();
    }); 
  },
}; 