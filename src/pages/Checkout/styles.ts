import styled from 'styled-components'

export const CheckoutContainer = styled.form`
  width: 100%;
  display: grid;
  grid-template-columns: 60% 40%;
  align-items: flex-start;
  justify-content: space-between;
  gap: 2rem;
  padding: 2.5rem 0;

  h2 {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1.125rem;
    padding-bottom: 1rem;
  }
`

export const OrderData = styled.div``

const BaseCard = styled.div`
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px;
  padding: 2.5rem;
  margin: 0.375rem 0;
`
export const CardHeader = styled.header`
  display: flex;
  gap: 0.5rem;
  padding-bottom: 2rem;

  strong {
    display: block;
    color: ${(props) => props.theme['base-subtitle']};
    font-weight: 400;
  }

  span {
    display: block;
    color: ${(props) => props.theme['base-text']};
    font-size: 0.875rem;
  }
`

export const Address = styled(BaseCard)`
  .grid-address {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .row-address {
    display: grid;
    grid-gap: 0.75rem;
  }

  .row-address-1 {
    grid-template-columns: 1fr 1fr 1fr;
  }

  .row-address-3 {
    grid-template-columns: 1fr 2fr;
  }

  .row-address-4 {
    grid-template-columns: 1fr 2fr;

    > div {
      display: flex;
      gap: 0.75rem;
    }
  }

  svg {
    color: ${(props) => props.theme['yellow-dark']};
  }
`
export const Payment = styled(BaseCard)`
  svg {
    color: ${(props) => props.theme.purple};
  }
`

export const OrderSummary = styled(BaseCard)`
  border-top-right-radius: 44px;
  border-bottom-left-radius: 44px;

  button[type='submit'] {
    background: ${(props) => props.theme.yellow};
    color: ${(props) => props.theme.white};
    border: 0;
    width: 100%;
    height: 2.875rem;
    border-radius: 6px;
    font-size: 0.875rem;
    font-weight: 700;
    text-transform: uppercase;
    line-height: 1.6;
    cursor: pointer;

    transition: background-color 0.1s;
  }

  button[type='submit']:not(:disabled):hover {
    background: ${(props) => props.theme['yellow-dark']};
  }

  button[type='submit']:disabled {
    background: ${(props) => props.theme['yellow-dark']};
    cursor: not-allowed;
  }
`

export const OrderTotal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding: 1.5rem 0;
  gap: 0.75rem;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .delivery,
  .totalItens {
    span {
      font-size: 0.875rem;
    }

    strong {
      font-weight: 400;
    }
  }

  .total {
    color: ${(props) => props.theme['base-subtitle']};

    span,
    strong {
      font-size: 1.25rem;
      font-weight: bold;
    }
  }
`
