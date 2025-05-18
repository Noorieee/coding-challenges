import type { Meta, StoryObj } from '@storybook/react'
import Avatar from './index'

const meta: Meta<typeof Avatar> = {
  title: 'Challenges/Atoms/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    initial: {
      description: 'Single character initial to display',
      type: 'string',
      table: {
        defaultValue: { summary: '' },
      },
    },
    indicator: {
      description: 'Online status indicator',
      options: ['online', 'away', 'busy', undefined],
      control: 'select'
    },
    imageUrl: {
      description: 'URL of avatar image',
      type: 'string'
    },
    isHidden: {
      description: 'Whether to hide the avatar',
      type: 'boolean',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    vanity: {
      description: 'Vanity flag',
      type: 'boolean',
      table: {
        defaultValue: { summary: 'false' },
      },
    }
  }
}

export default meta
type Story = StoryObj<typeof Avatar>

export const Default: Story = {
  args: {
    initial: 'M',
    isHidden: false,
    vanity: false,
    imageUrl: 'https://www.wboy.com/wp-content/uploads/sites/43/2024/02/North_American_river_otter.jpg'
  }
}

export const WithImage: Story = {
  args: {
    initial: 'M',
    imageUrl: 'https://www.wboy.com/wp-content/uploads/sites/43/2024/02/North_American_river_otter.jpg',
    isHidden: false,
    vanity: false
  }
}

export const Hidden: Story = {
  args: {
    initial: 'M',
    isHidden: true,
    vanity: false
  }
}

export const OnlineStatus: Story = {
  args: {
    initial: 'M',
    indicator: 'online',
    isHidden: false,
    vanity: false
  }
}

export const AwayStatus: Story = {
  args: {
    initial: 'M',
    indicator: 'away',
    isHidden: false,
    vanity: false
  }
}

export const BusyStatus: Story = {
  args: {
    initial: 'M',
    indicator: 'busy',
    isHidden: false,
    vanity: false
  }
}

export const WithVanity: Story = {
  args: {
    initial: 'M',
    vanity: true,
    isHidden: false
  }
}
