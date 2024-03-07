import { MapPin, ShoppingCart } from 'phosphor-react'
import coffeeDeliveryLogo from '../../assets/coffee-delivery-logo.svg'
import { Actions, Cart, CartCounter, HeaderContainer, Location } from './styles'
import { Link } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { OrderContext } from '../../contexts/OrderContext'

export function Header() {
  const { orderItems } = useContext(OrderContext)
  const [city, setCity] = useState('')

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const response = await fetch('https://ipapi.co/json/')
        const data = await response.json()

        if (data) {
          const location = `${data.city}, ${data.region_code}`
          setCity(location)
        }
      } catch (error) {
        console.error('Error fetching location:', error)
      }
    }

    fetchLocation()
  }, [])

  return (
    <HeaderContainer>
      <Link to="/">
        <img src={coffeeDeliveryLogo} alt="Logotipo do Coffee Delivery" />
      </Link>
      <Actions>
        <Location>
          <MapPin size={22} weight="fill" />
          <span>{city}</span>
        </Location>
        <Cart to="/checkout">
          <ShoppingCart size={22} weight="fill" />
          {orderItems.length !== 0 && (
            <CartCounter>{orderItems.length}</CartCounter>
          )}
        </Cart>
      </Actions>
    </HeaderContainer>
  )
}
