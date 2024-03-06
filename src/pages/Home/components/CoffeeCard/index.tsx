import { ShoppingCart } from 'phosphor-react'
import cardImage from '../../../../assets/card-image.svg'
import { CardTitle, CardContainer, CardFooter, Tags } from './styles'

export function CoffeeCard() {
  return (
    <CardContainer>
      <img src={cardImage} alt="Xícara de café" />

      <Tags>
        <span>Tradicional</span>
        <span>Com Leite</span>
      </Tags>

      <CardTitle>
        <strong>Expresso Tradicional</strong>
        <span>O tradicional café feito com água quente e grãos moídos</span>
      </CardTitle>

      <CardFooter>
        <span>
          R$ <strong>9,90</strong>
        </span>
        <div>
          <input type="number" min={1} defaultValue={1} />
          <button>
            <ShoppingCart size={22} weight="fill" />
          </button>
        </div>
      </CardFooter>
    </CardContainer>
  )
}
