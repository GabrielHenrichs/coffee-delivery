import styled from 'styled-components'
import { InputProps } from '.'

export const InputContainer = styled.div`
  position: relative;

  > span {
    position: absolute;
    right: 0.75rem;
    top: 0.875rem;
    font-style: italic;
    font-size: 0.75rem;
    color: ${(props) => props.theme['base-label']};
  }
`

export const CustomInput = styled.input<InputProps>`
  width: 100%;
  height: 2.5rem;
  border-radius: 4px;
  padding: 0.75rem;
  padding-right: ${(props) => props.optional && 'calc(0.75rem + 52px)'};
  border: 1px solid ${(props) => props.theme['base-button']};
  background: ${(props) => props.theme['base-input']};
  color: ${(props) => props.theme['base-text']};

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
  }

  &::after {
    content: 'Opcional';
  }
`
