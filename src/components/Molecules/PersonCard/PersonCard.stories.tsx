import type { Meta, StoryObj } from '@storybook/react'
import PersonCard from './index'

const meta: Meta<typeof PersonCard> = {
  title: 'Molecules/PersonCard',
  component: PersonCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'text',
      description: 'Name of the person',
      type: 'string'
    },
    email: {
      control: 'text',
      description: 'Email of the person',
      type: 'string'
    },
    imageUrl: {
      control: 'text',
      description: 'URL of avatar image'
    },
    indicator: {
      description: 'Online status indicator',
      options: ['online', 'away', 'busy', undefined],
      control: 'select'
    },
    vanity: {
      control: 'boolean',
      description: 'Vanity flag',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    isHidden: {
      control: 'boolean',
      description: 'Whether to hide the avatar, email, and name',
      table: {
        defaultValue: { summary: 'false' },
      },
    }
  },
  render: ({ ...args }) => {
    return (
      <div style={{ width: '500px'}}>
        <PersonCard {...args} />
      </div>
    )
  }
}

export default meta
type Story = StoryObj<typeof PersonCard>

export const Default: Story = {
  args: {
    name: 'Noor Hussain',
    email: 'noor.hussain@example.com',
    imageUrl: 'https://www.wboy.com/wp-content/uploads/sites/43/2024/02/North_American_river_otter.jpg',
    indicator: undefined,
    vanity: false,
    isHidden: false
  }
}

export const WithVanity: Story = {
  args: {
    name: 'Noor Hussain',
    email: 'noor.hussain@example.com',
    imageUrl: 'https://www.wboy.com/wp-content/uploads/sites/43/2024/02/North_American_river_otter.jpg',
    indicator: undefined,
    vanity: true,
    isHidden: false
  }
}

export const WithInitial: Story = {
  args: {
    name: 'Noor Hussain',
    email: 'noor.hussain@example.com',
    imageUrl: '',
    indicator: undefined,
    vanity: false,
    isHidden: false
  }
}

export const WithIndicator: Story = {
  args: {
    name: 'Noor Hussain',
    email: 'noor.hussain@example.com',
    imageUrl: '',
    indicator: 'online',
    vanity: false,
    isHidden: false
  }
}

export const HiddenCard: Story = {
  args: {
    name: 'Noor Hussain',
    email: 'noor.hussain@example.com',
    imageUrl: 'https://www.wboy.com/wp-content/uploads/sites/43/2024/02/North_American_river_otter.jpg',
    indicator: undefined,
    vanity: false,
    isHidden: true
  }
}
