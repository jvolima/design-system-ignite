import { StoryObj, Meta } from '@storybook/react'
import { Box, Button, Toast, ToastProps } from '@jvolima-ignite-ui/react'
import { useState } from 'react'

export default {
  title: 'Notifications/Toast',
  component: Toast,
  args: {},
  decorators: [
    (Story) => {
      const [open, setOpen] = useState(false)

      function handleOpenToast() {
        setOpen(false)
        setOpen(true)
      }

      return (
        <Box
          css={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            overflow: 'hidden',
          }}
        >
          <Button onClick={handleOpenToast}>Add to calendar</Button>
          {Story({
            args: {
              title: 'Scheduling done',
              description: 'Wednesday, October 23rd at 4pm',
              open,
              onOpenChange: setOpen,
            },
          })}
        </Box>
      )
    },
  ],
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
