import type { Meta, StoryObj } from '@storybook/react'
import Input from './index'
import { useState } from 'react'

const meta: Meta<typeof Input> = {
  title: 'Atoms/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      description: 'Label for the input field',
      type: 'string',
      table: {
        defaultValue: { summary: 'Name' },
      },
    },
    isDisabled: {
      description: 'Whether input is disabled',
      type: 'boolean',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    errorMessage: {
      description: 'Text to display below the input when there is an error.',
      type: 'string',
      table: {
        defaultValue: { summary: 'This is an error message' },
      },
    },
    id: {
      description: 'ID of input label',
      type: 'string',
      table: {
        defaultValue: { summary: 'text' },
      },
    },
    onChange: {
      action: 'onChange',
      table: {
        category: 'Events',
        type: { summary: '(value: string) => void' },
      },
    },
    value: {
      description: 'Text value of input',
      type: 'string',
      table: {
        defaultValue: { summary: 'text' },
      },
    },
  },
  render: ({ value: initialValue = '', ...args }) => {
    const [value, setValue] = useState(initialValue)

    const handleOnChange = (value: string) => {
      setValue(value);
    }

    return (
      <Input {...args} value={value} onChange={handleOnChange} />
    )
  }
}

export default meta
type Story = StoryObj<typeof Input>

export const Default: Story = {
  args: {
    label: 'Name',
    isDisabled: false,
    errorMessage: '',
    id: 'text',
    value: '',
  },
}

export const Focused: Story = {
  args: {
    label: 'Name',
    isDisabled: false,
    errorMessage: '',
    id: 'focused',
    value: 'Typing...',
  },
}

export const Error: Story = {
  args: {
    label: 'Name',
    isDisabled: false,
    errorMessage: 'This is an error message',
    id: 'error',
    value: 'Invalid input',
  },
}

export const Disabled: Story = {
  args: {
    label: 'Name',
    isDisabled: true,
    errorMessage: '',
    id: 'disabled',
    value: 'Cannot edit this',
  },
}
