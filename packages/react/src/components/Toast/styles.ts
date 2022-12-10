import * as Toast from '@radix-ui/react-toast'
import { keyframes, styled } from '../../styles'

const VIEWPORT_PADDING = 20

const hide = keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 },
})

const slideIn = keyframes({
  from: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
  to: { transform: 'translateX(0)' },
})

const swipeOut = keyframes({
  from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
  to: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
})

export const ToastContainer = styled(Toast.Root, {
  all: 'unset',
  display: 'flex',
  gap: '$1',
  flexDirection: 'column',
  background: '$gray800',
  boxSizing: 'border-box',
  border: '1px solid $gray600',
  borderRadius: '$sm',
  padding: '$3 $5',

  maxWidth: '22.5rem',
  width: '100%',

  '&[data-state="open"]': {
    animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
  '&[data-state="closed"]': {
    animation: `${hide} 100ms ease-in`,
  },
  '&[data-swipe="move"]': {
    transform: 'translateX(var(--radix-toast-swipe-move-x))',
  },
  '&[data-swipe="cancel"]': {
    transform: 'translateX(0)',
    transition: 'transform 200ms ease-out',
  },
  '&[data-swipe="end"]': {
    animation: `${swipeOut} 100ms ease-out`,
  },
})

export const ToastHeader = styled('div', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
})

export const ToastClose = styled(Toast.Close, {
  background: 'transparent',
  border: 0,

  svg: {
    color: '$gray200',
    width: '$4',
    height: '$4',
    cursor: 'pointer',
  },
})

export const ToastTitle = styled(Toast.Title, {
  fontSize: '$xl',
  color: '$white',
  fontWeight: '$bold',
  fontFamily: '$default',
  lineHeight: '$base',
})

export const ToastDescription = styled(Toast.Description, {
  fontSize: '$sm',
  color: '$gray200',
  fontFamily: '$default',
  lineHeight: '$base',
})

export const ToastViewport = styled(Toast.Viewport, {
  position: 'fixed',
  bottom: 0,
  right: 0,
  zIndex: 1000,
  margin: '$4',
  maxWidth: '22.5rem',
  width: '100%',
  padding: VIEWPORT_PADDING,
  listStyle: 'none',
  outline: 'none',
})
