import type { Meta, StoryObj } from '@storybook/react';
import TextareaWithCounter from './index';

const meta = {
  title: 'Inputs/TextareaWithCounter',
  component: TextareaWithCounter,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'The label of the textarea'
    },
    rows: {
      control: 'number',
      description: 'The number of rows in the textarea'
    },
    resize: {
      control: 'select',
      options: ['none', 'both', 'horizontal', 'vertical'],
      description: 'The resize of the textarea'
    },
    counter: {
      control: 'select',
      options: ['none', 'character', 'word', 'both'],
      description: 'The counter of the textarea'
    }
  }
} satisfies Meta<typeof TextareaWithCounter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Text area',
    rows: 1,
    resize: 'both',
    counter: 'none',
  },
};

export const WordCounter: Story = {
  args: {
    label: 'Text area',
    rows: 1,
    resize: 'both',
    counter: 'word',
  },
};

export const CharacterCounter: Story = {
  args: {
    label: 'Text area',
    rows: 1,
    resize: 'both',
    counter: 'character',
  },
};

export const BothCounters: Story = {
  args: {
    label: 'Text area',
    rows: 1,
    resize: 'both',
    counter: 'both',
  },
};

export const HorizontalResize: Story = {
  args: {
    label: 'Text area',
    rows: 1,
    resize: 'horizontal',
    counter: 'none',
  },
};

export const VerticalResize: Story = {
  args: {
    label: 'Text area',
    rows: 1,
    resize: 'vertical',
    counter: 'none',
  },
};


export const WordCounterWithHorizontalResize: Story = {
  args: {
    label: 'Text area',
    rows: 1,
    resize: 'horizontal',
    counter: 'word',
  },
};

export const CharacterCounterWithVerticalResize: Story = {
  args: {
    label: 'Text area',
    rows: 1,
    resize: 'vertical',
    counter: 'character',
  },
};

export const BothCountersWithBothResize: Story = {
  args: {
    label: 'Text area',
    rows: 1,
    resize: 'both',
    counter: 'both',
  },
};