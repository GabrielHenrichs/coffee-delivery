import { Trash } from 'phosphor-react'
import cardImage from '../../../../assets/card-image.svg'
import { ItemBody, ItemContainer, ItemFooter } from './styles'
import { OrderItem } from '../../../../reducers/order/reducer'
import { ChangeEvent, useContext } from 'react'
import { OrderContext } from '../../../../contexts/OrderContext'

interface CheckoutItemProps {
  orderItem: OrderItem
}

export function CheckoutItem({ orderItem }: CheckoutItemProps) {
  const { deleteItemFromCart, changeQuantityFromItem } =
    useContext(OrderContext)

  function handleChangeQuantity(event: ChangeEvent<HTMLInputElement>) {
    changeQuantityFromItem(orderItem.id, event.target.valueAsNumber)
  }

  function handleDeleteItemFromCart() {
    deleteItemFromCart(orderItem.id)
  }

  return (
    <ItemContainer>
      <img src={cardImage} alt="Xícara de café" />

      <ItemBody>
        <div>
          <span>{orderItem.product.title}</span>
          <strong>
            {orderItem.product.price.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </strong>
        </div>
        <ItemFooter>
          <input
            type="number"
            min={1}
            defaultValue={orderItem.quantity}
            onChange={handleChangeQuantity}
          />
          <button type="button" onClick={handleDeleteItemFromCart}>
            <Trash size={16} />
            Remover
          </button>
        </ItemFooter>
      </ItemBody>
    </ItemContainer>
  )
}
