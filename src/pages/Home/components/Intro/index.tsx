import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import cupOfCoffeeImage from '../../../../assets/cup-of-coffee.svg'
import { IntroContainer, Item, Items } from './styles'

export function Intro() {
  return (
    <IntroContainer>
      <div>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <h2>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </h2>
        <Items>
          <div>
            <Item itemColor="yellowDark">
              <div>
                <ShoppingCart size={16} weight="fill" />
              </div>
              <span>Compra simples e segura</span>
            </Item>
            <Item itemColor="yellow">
              <div>
                <Timer size={16} weight="fill" />
              </div>
              <span>Entrega rápida e rastreada</span>
            </Item>
          </div>
          <div>
            <Item itemColor="baseText">
              <div>
                <Package size={16} weight="fill" />
              </div>
              <span>Embalagem mantém o café intacto</span>
            </Item>
            <Item itemColor="purple">
              <div>
                <Coffee size={16} weight="fill" />
              </div>
              <span>O café chega fresquinho até você</span>
            </Item>
          </div>
        </Items>
      </div>
      <img src={cupOfCoffeeImage} alt="Copo de café" />
    </IntroContainer>
  )
}
