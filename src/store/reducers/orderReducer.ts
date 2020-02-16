import { ActionType, getType, ActionStatus } from '../utils/actionUtils';
import { Ingredient } from '../../common/Types';
import { ThunkAction } from '../utils/actionUtils';

export interface IOrder {
  fireBaseId?: string;
  ingredients: Ingredient[];
  price: number;
  orderData: { [key: string]: string };
}

export interface OrderState {
  orders: IOrder[];
  placingOrder: boolean;
  fetchingOrders: boolean;
}

const orders = (state: IOrder[] = [], action: ThunkAction<string, IOrder[] | any>) => {
  switch (action.type) {
    case getType(ActionType.FETCH_ORDERS, ActionStatus.SUCCESS):
      const payload = action.payload;
      if (payload) {
        const orders = [];
        for (let key in payload) {
          orders.push({
            ...payload[key],
            fireBaseId: key
          });
        }
        return orders;
      }
      return [];
    case getType(ActionType.ORDER_BURGER, ActionStatus.SUCCESS):
      if (action.payload) {
        const orders = [
          ...state,
          {
            fireBaseId: action.payload!.name,
            ...action.additionalData
          }
        ];
        return orders;
      }
      return state;
    case getType(ActionType.ORDER_BURGER, ActionStatus.FAILURE):
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

const fetchingOrders = (state: boolean = false, action: ThunkAction<string, boolean | any>) => {
  switch (action.type) {
    case ActionType.SET_FETCHING_ORDERS:
      return action.payload || false;
    case getType(ActionType.FETCH_ORDERS, ActionStatus.START):
      return true;
    case getType(ActionType.FETCH_ORDERS, ActionStatus.SUCCESS):
    case getType(ActionType.FETCH_ORDERS, ActionStatus.FAILURE):
      return false;
    default:
      return state;
  }
};

export default {
  orders,
  placingOrder,
  fetchingOrders
};
