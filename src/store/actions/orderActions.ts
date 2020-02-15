import { ActionType } from '../utils/actionUtils';
import { createThunkAction, HttpMethod, createLocalAction } from '../utils/actionUtils';
import { ThunkAction } from 'redux-thunk';
import { AnyAction } from 'redux';

export const actionOrderBurger = (order: any): ThunkAction<any, {}, {}, AnyAction> => {
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
