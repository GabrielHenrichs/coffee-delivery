import { Order, OrderItem } from './reducer'

export enum ActionTypes {
  ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART',
  DELETE_ITEM_FROM_CART = 'DELETE_ITEM_FROM_CART',
  CHANGE_QUANTITY_FROM_ITEM = 'CHANGE_QUANTITY_FROM_ITEM',
  CREATE_NEW_ORDER = 'CREATE_NEW_ORDER',
}

export function addItemToCartAction(orderItem: OrderItem) {
  return {
    type: ActionTypes.ADD_ITEM_TO_CART,
    payload: {
      orderItem,
    },
  }
}

export function deleteItemFromCartAction(orderItemId: string) {
  return {
    type: ActionTypes.DELETE_ITEM_FROM_CART,
    payload: {
      orderItemId,
    },
  }
}

export function changeQuantityFromItemAction(
  orderItemId: string,
  quantity: number,
) {
  return {
    type: ActionTypes.CHANGE_QUANTITY_FROM_ITEM,
    payload: {
      orderItemId,
      quantity,
    },
  }
}

export function createNewOrderAction(newOrder: Order) {
  return {
    type: ActionTypes.CREATE_NEW_ORDER,
    payload: {
      newOrder,
    },
  }
}
