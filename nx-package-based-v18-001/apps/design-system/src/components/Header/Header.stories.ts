import type { Meta, StoryObj } from '@storybook/react'

import { Header } from './Header'

const meta: Meta<typeof Header> = {
  component: Header,
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof meta>

export const LoggedIn: Story = {
  args: {
    user: {
      name: 'Jane Doe'
    }
  }
}

export const LoggedOut: Story = {}
