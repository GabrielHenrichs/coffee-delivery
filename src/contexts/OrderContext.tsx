import { ReactNode, createContext, useEffect, useReducer } from 'react'
import {
  Order,
  OrderItem,
  Product,
  orderReducer,
} from '../reducers/order/reducer'
import {
  addItemToCartAction,
  deleteItemFromCartAction,
  changeQuantityFromItemAction,
  createNewOrderAction,
} from '../reducers/order/actions'

interface CreateNewOrderData {
  cep: string
  rua: string
  numero: string
  complemento: string
  bairro: string
  cidade: string
  uf: string
  paymentMethod: string
}

interface OrderItemData {
  product: Product
  quantity: number
}

interface OrderContextType {
  orderItems: OrderItem[]
  order: Order
  addItemToCart: (data: OrderItemData) => void
  deleteItemFromCart: (orderItemId: string) => void
  changeQuantityFromItem: (orderItemId: string, quantity: number) => void
  createNewOrder: (data: CreateNewOrderData) => void
}

export const OrderContext = createContext({} as OrderContextType)

interface OrderContextProviderProps {
  children: ReactNode
}

export function OrderContextProvider({ children }: OrderContextProviderProps) {
  const [orderItemState, dispatch] = useReducer(
    orderReducer,
    {
      orderItems: [],
      order: null,
    },
    (initialState) => {
      const storedStateAsJSON = localStorage.getItem(
        '@coffee-delivery:order-items-state-1.0.0',
      )

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON)
      }

      return initialState
    },
  )

  const { orderItems, order } = orderItemState

  useEffect(() => {
    const stateJSON = JSON.stringify(orderItemState)

    localStorage.setItem('@coffee-delivery:order-items-state-1.0.0', stateJSON)
  }, [orderItemState])

  function createNewOrder(data: CreateNewOrderData) {
    const id = String(new Date().getTime())

    const newOrder: Order = {
      id,
      cep: data.cep,
      rua: data.rua,
      numero: data.numero,
      complemento: data.complemento,
      bairro: data.bairro,
      cidade: data.cidade,
      uf: data.uf,
      paymentMethod: data.paymentMethod,
      registerDate: new Date(),
    }

    dispatch(createNewOrderAction(newOrder))
  }

  function addItemToCart(data: OrderItemData) {
    const id = String(new Date().getTime())

    const orderItem: OrderItem = {
      id,
      product: data.product,
      quantity: data.quantity,
      registerDate: new Date(),
    }

    dispatch(addItemToCartAction(orderItem))
  }

  function deleteItemFromCart(orderItemId: string) {
    dispatch(deleteItemFromCartAction(orderItemId))
  }

  function changeQuantityFromItem(orderItemId: string, quantity: number) {
    dispatch(changeQuantityFromItemAction(orderItemId, quantity))
  }

  return (
    <OrderContext.Provider
      value={{
        orderItems,
        order,
        addItemToCart,
        deleteItemFromCart,
        changeQuantityFromItem,
        createNewOrder,
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}
