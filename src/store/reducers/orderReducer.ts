import { ActionType, getType, ActionStatus } from '../utils/actionUtils';
import { Ingredient } from '../../common/Types';
import { ThunkAction } from '../utils/actionUtils';

export interface Order {
  ingredients: Ingredient[];
  price: number;
  orderData: { [key: string]: string };
}

export interface OrderState {
  orders: Order[];
  placingOrder: boolean;
}

const orders = (state: Order[] = [], action: ThunkAction<string, Order[] | any>) => {
  switch (action.type) {
    case getType(ActionType.ORDER_BURGER, ActionStatus.SUCCESS):
      return action.payload || [];
    case getType(ActionType.ORDER_BURGER, ActionStatus.FAILURE):
      return [];
    default:
      return state;
  }
};

const placingOrder = (state: boolean = false, action: ThunkAction<string, boolean | any>) => {
  switch (action.type) {
    case ActionType.SET_PLACING_ORDER:
      return action.payload || false;
    case getType(ActionType.ORDER_BURGER, ActionStatus.START):
      return true;
    case getType(ActionType.ORDER_BURGER, ActionStatus.SUCCESS):
    case getType(ActionType.ORDER_BURGER, ActionStatus.FAILURE):
      return false;
    default:
      return state;
  }
};

export default {
  orders,
  placingOrder
};
