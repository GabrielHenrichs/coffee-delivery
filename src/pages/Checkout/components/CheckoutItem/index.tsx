import { Trash } from 'phosphor-react'
import cardImage from '../../../../assets/card-image.svg'
import { ItemBody, ItemContainer, ItemFooter } from './styles'

export function CheckoutItem() {
  return (
    <ItemContainer>
      <img src={cardImage} alt="Xícara de café" />

      <ItemBody>
        <div>
          <span>Expresso Tradicional</span>
          <strong>R$ 9,90</strong>
        </div>
        <ItemFooter>
          <input type="number" min={1} defaultValue={1} />
          <button type="button">
            <Trash size={16} />
            Remover
          </button>
        </ItemFooter>
      </ItemBody>
    </ItemContainer>
  )
}
