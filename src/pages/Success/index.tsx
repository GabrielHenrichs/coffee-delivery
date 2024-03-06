import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import SuccessImage from '../../assets/success-image.svg'
import { Info, InfoIcon, SuccessContainer } from './styles'

export function Success() {
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
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
              </span>
              <span>Farrapos - Porto Alegre, RS</span>
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
              <strong>Cartão de Crédito</strong>
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
