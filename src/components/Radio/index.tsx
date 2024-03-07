import { Bank, CreditCard, Money } from 'phosphor-react'
import { RadioContainer } from './styles'
import { useFormContext } from 'react-hook-form'

export function Radio() {
  const { register } = useFormContext()

  return (
    <RadioContainer>
      <div>
        <input
          id="creditCard"
          type="radio"
          value="creditCard"
          {...register('paymentMethod')}
        />
        <label htmlFor="creditCard">
          <CreditCard size={16} />
          Cartão de Crédito
        </label>
      </div>

      <div>
        <input
          id="debitCard"
          type="radio"
          value="debitCard"
          {...register('paymentMethod')}
        />
        <label htmlFor="debitCard">
          <Bank size={16} />
          Cartão de Débito
        </label>
      </div>

      <div>
        <input
          id="money"
          type="radio"
          value="money"
          {...register('paymentMethod')}
        />
        <label htmlFor="money">
          <Money size={16} />
          Dinheiro
        </label>
      </div>
    </RadioContainer>
  )
}
