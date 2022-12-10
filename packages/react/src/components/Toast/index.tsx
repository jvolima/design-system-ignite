import { ToastProvider } from '@radix-ui/react-toast'
import { X } from 'phosphor-react'
import { ComponentProps } from 'react'
import {
  ToastClose,
  ToastContainer,
  ToastDescription,
  ToastHeader,
  ToastTitle,
  ToastViewport,
} from './styles'

export interface ToastProps extends ComponentProps<typeof ToastContainer> {
  title: string
  description: string
}

export function Toast({ title, description, ...rest }: ToastProps) {
  return (
    <ToastProvider>
      <ToastContainer {...rest}>
        <ToastHeader>
          <ToastTitle>{title}</ToastTitle>
          <ToastClose>
            <X />
          </ToastClose>
        </ToastHeader>
        <ToastDescription>{description}</ToastDescription>
      </ToastContainer>

      <ToastViewport />
    </ToastProvider>
  )
}

Toast.displayName = 'Toast'
