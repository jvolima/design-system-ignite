import {
  TooltipPortal,
  TooltipProvider,
  TooltipTrigger,
} from '@radix-ui/react-tooltip'
import { ComponentProps, ReactNode } from 'react'
import { TooltipArrow, TooltipContainer, TooltipContent } from './styles'

export interface TooltipProps extends ComponentProps<typeof TooltipContainer> {
  text: string
  children: ReactNode
}

export function Tooltip({ text, children, ...rest }: TooltipProps) {
  return (
    <TooltipProvider>
      <TooltipContainer {...rest}>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipPortal>
          <TooltipContent sideOffset={-10} align="center">
            {text}
            <TooltipArrow width={12} height={8} />
          </TooltipContent>
        </TooltipPortal>
      </TooltipContainer>
    </TooltipProvider>
  )
}

Tooltip.displayName = 'Tooltip'
