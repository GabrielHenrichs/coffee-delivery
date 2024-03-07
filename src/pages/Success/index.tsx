import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import SuccessImage from '../../assets/success-image.svg'
import { Info, InfoIcon, SuccessContainer } from './styles'
import { useContext } from 'react'
import { OrderContext } from '../../contexts/OrderContext'

export function Success() {
  const { order } = useContext(OrderContext)

  return (
    <SuccessContainer>
      <h1>Uhu! Pedido confirmado</h1>
      <h2>Agora é só aguardar que logo o café chegará até você</h2>

      <div>
        <Info>
          <div>
            <InfoIcon iconColor="purple">
              <MapPin size={16} weight="fill" />
            </InfoIcon>
            <div>
              <span>
                Entrega em{' '}
                <strong>
                  {order?.rua}, {order?.numero}
                  {!!order?.complemento && '/' + order?.complemento}
                </strong>
              </span>
              <span>
                {order?.bairro} - {order?.cidade}, {order?.uf}
              </span>
            </div>
          </div>
          <div>
            <InfoIcon iconColor="yellow">
              <Timer size={16} weight="fill" />
            </InfoIcon>
            <div>
              <span>Previsão de entrega</span>
              <strong>20 min - 30 min</strong>
            </div>
          </div>
          <div>
            <InfoIcon iconColor="yellowDark">
              <CurrencyDollar size={16} />
            </InfoIcon>
            <div>
              <span>Pagamento na entrega</span>
              <strong>
                {order?.paymentMethod === 'creditCard'
                  ? 'Cartão de Crédito'
                  : order?.paymentMethod === 'debitCard'
                    ? 'Cartão de Débito'
                    : 'Dinheiro'}
              </strong>
            </div>
          </div>
        </Info>
        <img
          src={SuccessImage}
          alt="Desenho de um motociclista carregando uma encomenda"
        />
      </div>
    </SuccessContainer>
  )
}
