import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const HeaderContainer = styled.header`
  padding: 2rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
`

export const Location = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  background: ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme['purple-dark']};
  border-radius: 6px;
  padding: 8px;

  > svg {
    color: ${(props) => props.theme.purple};
  }
`

export const Cart = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme['yellow-light']};
  border-radius: 6px;
  padding: 8px;
  text-decoration: none;
  position: relative;

  > svg {
    color: ${(props) => props.theme['yellow-dark']};
  }
`

export const CartCounter = styled.div`
  background: ${(props) => props.theme['yellow-dark']};
  color: ${(props) => props.theme.white};
  width: 1.25rem;
  height: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  font-weight: bold;
  font-size: 0.75rem;

  position: absolute;
  top: -0.5rem;
  right: -0.5rem;
`
