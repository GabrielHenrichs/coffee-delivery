import { CustomInput, InputContainer } from './styles'

export function Input({
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <InputContainer>
      <CustomInput {...props} />
      {!props.required && <span>Opcional</span>}
    </InputContainer>
  )
}
