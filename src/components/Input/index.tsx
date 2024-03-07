import { useFormContext } from 'react-hook-form'
import { CustomInput, InputContainer } from './styles'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  optional?: boolean
}

export function Input({ optional = false, ...props }: InputProps) {
  const { register } = useFormContext()

  return (
    <InputContainer>
      <CustomInput {...register(props.id || '')} {...props} />
      {optional && <span>Opcional</span>}
    </InputContainer>
  )
}
