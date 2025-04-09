import type { Meta, StoryObj } from '@storybook/react'
import ExampleComp from './index'

const meta: Meta<typeof ExampleComp> = {
  title: 'Miscellaneous/ExampleComp',
  component: ExampleComp,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ExampleComp>

export const Default: Story = {
  args: {
    title: 'Example Component',
  },
}

export const CustomTitle: Story = {
  args: {
    title: 'Custom Title',
  },
}
