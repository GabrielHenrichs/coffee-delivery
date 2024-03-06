import { Bank, CreditCard, Money } from 'phosphor-react'
import { RadioContainer } from './styles'

export function Radio() {
  return (
    <RadioContainer>
      <div>
        <input
          type="radio"
          id="creditCard"
          name="payment-method"
          value="creditCard"
        />
        <label htmlFor="creditCard">
          <CreditCard size={16} />
          Cartão de Crédito
        </label>
      </div>

      <div>
        <input
          type="radio"
          id="debitCard"
          name="payment-method"
          value="debitCard"
        />
        <label htmlFor="debitCard">
          <Bank size={16} />
          Cartão de Débito
        </label>
      </div>

      <div>
        <input type="radio" id="money" name="payment-method" value="money" />
        <label htmlFor="money">
          <Money size={16} />
          Dinheiro
        </label>
      </div>
    </RadioContainer>
  )
}
