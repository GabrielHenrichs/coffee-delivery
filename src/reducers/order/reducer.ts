import { produce } from 'immer'
import { ActionTypes } from './actions'

export interface Product {
  id: number
  title: string
  description: string
  price: number
  tags: string[]
}

export interface OrderItem {
  id: string
  product: Product
  quantity: number
  registerDate: Date
}

export interface Order {
  id: string
  cep: string
  rua: string
  numero: string
  complemento: string
  bairro: string
  cidade: string
  uf: string
  paymentMethod: string
  registerDate: Date
}

interface OrderState {
  orderItems: OrderItem[]
  order: Order
}

export function orderReducer(state: OrderState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_ITEM_TO_CART:
      return produce(state, (draft) => {
        draft.orderItems.push(action.payload.orderItem)
      })
    case ActionTypes.CHANGE_QUANTITY_FROM_ITEM: {
      const orderItemIndex = state.orderItems.findIndex((item) => {
        return item.id === action.payload.orderItemId
      })

      if (orderItemIndex < 0) {
        return state
      }

      return produce(state, (draft) => {
        draft.orderItems[orderItemIndex].quantity = action.payload.quantity
      })
    }
    case ActionTypes.DELETE_ITEM_FROM_CART:
      return produce(state, (draft) => {
        draft.orderItems = draft.orderItems.filter(
          (item) => item.id !== action.payload.orderItemId,
        )
      })
    case ActionTypes.CREATE_NEW_ORDER:
      return produce(state, (draft) => {
        draft.order = action.payload.newOrder
        draft.orderItems = []
      })
    default:
      return state
  }
}
