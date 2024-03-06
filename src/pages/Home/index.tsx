import { CardList, HomeContainer } from './styles'
import { Intro } from './components/Intro'
import { CoffeeCard } from './components/CoffeeCard'

export function Home() {
  return (
    <HomeContainer>
      <Intro />
      <div>
        <h2>Nossos cafés</h2>
        <CardList>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => (
            <CoffeeCard key={item} />
          ))}
        </CardList>
      </div>
    </HomeContainer>
  )
}
