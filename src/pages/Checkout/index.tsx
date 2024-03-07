import { useContext } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import * as zod from 'zod'
import { OrderContext } from '../../contexts/OrderContext'
import { Input } from '../../components/Input'
import { Radio } from '../../components/Radio'
import { CheckoutItem } from './components/CheckoutItem'
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
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router-dom'

const orderFormValidationSchema = zod.object({
  cep: zod.string().min(8, 'Campo obrigatório'),
  rua: zod.string().min(3, 'Campo obrigatório'),
  numero: zod.string().min(1, 'Campo obrigatório'),
  complemento: zod.string(),
  bairro: zod.string().min(1, 'Campo obrigatório'),
  cidade: zod.string().min(1, 'Campo obrigatório'),
  uf: zod.string().min(1, 'Campo obrigatório'),
  paymentMethod: zod.string().min(1, 'Campo obrigatório'),
})

type OrderFormData = zod.infer<typeof orderFormValidationSchema>

export function Checkout() {
  const { orderItems, createNewOrder } = useContext(OrderContext)
  const navigate = useNavigate()

  const totalValueOfItems = orderItems?.reduce(function (acc, item) {
    return acc + item.quantity * item.product.price
  }, 0)
  const deliveryValue = 3.5
  const totalValueOfOrder = deliveryValue + totalValueOfItems

  const orderForm = useForm<OrderFormData>({
    resolver: zodResolver(orderFormValidationSchema),
    defaultValues: {
      cep: '',
      rua: '',
      numero: '',
      complemento: '',
      bairro: '',
      cidade: '',
      uf: '',
      paymentMethod: '',
    },
  })
  const { handleSubmit } = orderForm

  function handleCreateNewOrder(data: OrderFormData) {
    createNewOrder(data)
    navigate('/success')
  }

  return (
    <CheckoutContainer onSubmit={handleSubmit(handleCreateNewOrder)}>
      <FormProvider {...orderForm}>
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
                  <Input id="cep" placeholder="CEP" />
                </div>
                <div>
                  <Input id="rua" placeholder="Rua" />
                </div>
                <div className="row-address row-address-3">
                  <Input id="numero" placeholder="Número" />
                  <Input id="complemento" placeholder="Complemento" optional />
                </div>
                <div className="row-address row-address-4">
                  <Input id="bairro" placeholder="Bairro" />
                  <div>
                    <Input id="cidade" placeholder="Cidade" />
                    <Input id="uf" placeholder="UF" />
                  </div>
                </div>
              </div>
            </Address>
            <Payment>
              <CardHeader>
                <CurrencyDollar size={22} />
                <div>
                  <strong>Pagamento</strong>
                  <span>
                    O pagamento é feito na entrega. Escolha a forma que deseja
                    pagar
                  </span>
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
              {orderItems.map((item) => (
                <CheckoutItem key={item.id} orderItem={item} />
              ))}
            </div>

            {orderItems.length !== 0 ? (
              <OrderTotal>
                <div className="totalItens">
                  <span>Total de itens</span>
                  <strong>
                    {totalValueOfItems.toLocaleString('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    })}
                  </strong>
                </div>
                <div className="delivery">
                  <span>Entrega</span>
                  <strong>
                    {deliveryValue.toLocaleString('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    })}
                  </strong>
                </div>
                <div className="total">
                  <span>Total</span>
                  <strong>
                    {totalValueOfOrder.toLocaleString('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    })}
                  </strong>
                </div>
              </OrderTotal>
            ) : (
              <OrderTotal>
                <span>O seu carrinho está vazio</span>
              </OrderTotal>
            )}
            <button type="submit" disabled={orderItems.length === 0}>
              Confirmar Pedido
            </button>
          </OrderSummary>
        </div>
      </FormProvider>
    </CheckoutContainer>
  )
}
