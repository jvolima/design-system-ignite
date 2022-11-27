import { ComponentProps } from 'react'
import { Input, Prefix, TextInputContainer } from './styles'

export interface TextInputProps extends ComponentProps<typeof Input> {
  prefix?: string
}

export function TextInput({ prefix, disabled, ...props }: TextInputProps) {
  return (
    <TextInputContainer variant={disabled === true ? 'disabled' : 'enabled'}>
      {!!prefix && <Prefix>{prefix}</Prefix>}
      <Input {...props} disabled={disabled} />
    </TextInputContainer>
  )
}
