import { ActionType } from '../utils/actionUtils';
import { createThunkAction, HttpMethod, createLocalAction } from '../utils/actionUtils';
import { ThunkAction } from 'redux-thunk';
import { AnyAction } from 'redux';
import { IOrder } from '../reducers/orderReducer';

export const actionOrderBurger = (order: IOrder): ThunkAction<any, {}, {}, AnyAction> => {
  return createThunkAction({
    type: ActionType.ORDER_BURGER,
    method: HttpMethod.POST,
    url: '/orders.json',
    payload: order
  });
};

export const actionSetPlacingOrder = (placingOrder: boolean) => {
  return createLocalAction({
    type: ActionType.SET_PLACING_ORDER,
    payload: placingOrder
  });
};

export const actionFetchOrders = (): ThunkAction<any, {}, {}, AnyAction> => {
  return createThunkAction({
    type: ActionType.FETCH_ORDERS,
    url: '/orders.json',
    method: HttpMethod.GET
  });
};
