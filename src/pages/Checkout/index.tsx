import { CurrencyDollar, MapPinLine } from 'phosphor-react'
import {
  Address,
  CardHeader,
  CheckoutContainer,
  OrderData,
  OrderSummary,
  OrderTotal,
  Payment,
} from './styles'
import { Input } from '../../components/Input'
import { Radio } from '../../components/Radio'
import { CheckoutItem } from './components/CheckoutItem'

export function Checkout() {
  return (
    <CheckoutContainer>
      <div>
        <h2>Complete seu pedido</h2>
        <OrderData>
          <Address>
            <CardHeader>
              <MapPinLine size={22} />
              <div>
                <strong>Endereço de Entrega</strong>
                <span>Informe o endereço onde deseja receber seu pedido</span>
              </div>
            </CardHeader>
            <div className="grid-address">
              <div className="row-address row-address-1">
                <Input placeholder="CEP" className="cep" required />
              </div>
              <div>
                <Input placeholder="Rua" className="rua" required />
              </div>
              <div className="row-address row-address-3">
                <Input placeholder="Número" className="numero" required />
                <Input placeholder="Complemento" className="complemento" />
              </div>
              <div className="row-address row-address-4">
                <Input placeholder="Bairro" className="bairro" required />
                <div>
                  <Input placeholder="Cidade" className="cidade" required />
                  <Input placeholder="UF" className="uf" required />
                </div>
              </div>
            </div>
          </Address>
          <Payment>
            <CardHeader>
              <CurrencyDollar size={22} />
              <div>
                <strong>Endereço de Entrega</strong>
                <span>Informe o endereço onde deseja receber seu pedido</span>
              </div>
            </CardHeader>
            <Radio />
          </Payment>
        </OrderData>
      </div>
      <div>
        <h2>Cafés selecionados</h2>
        <OrderSummary>
          <div>
            <CheckoutItem />
            <CheckoutItem />
          </div>
          <OrderTotal>
            <div className="totalItens">
              <span>Total de itens</span>
              <strong>R$ 29,70</strong>
            </div>
            <div className="delivery">
              <span>Entrega</span>
              <strong>R$ 3,50</strong>
            </div>
            <div className="total">
              <span>Total</span>
              <strong>R$ 33,20</strong>
            </div>
          </OrderTotal>
          <button type="submit">Confirmar Pedido</button>
        </OrderSummary>
      </div>
    </CheckoutContainer>
  )
}
