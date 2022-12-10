import { StoryObj, Meta } from '@storybook/react'
import { Box, Text, Tooltip, TooltipProps } from '@jvolima-ignite-ui/react'

export default {
  title: 'Data Display/Tooltip',
  component: Tooltip,
  args: {
    text: 'October 26 - Available',
    children: (
      <Box
        css={{
          width: '3rem',
          height: '3rem',
          background: '$ignite500',
          borderRadius: '$sm',
          padding: '$4 $6',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',

          margin: '$40',
        }}
      >
        <Text>Hover here</Text>
      </Box>
    ),
  },
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
