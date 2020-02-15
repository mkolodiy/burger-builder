import axios from '../../axios-orders';
import { AxiosRequestConfig } from 'axios';
import { Dispatch, Action } from 'redux';

export enum ActionType {
  ADD_INGREDIENT = 'ADD_INGREDIENT',
  REMOVE_INGREDIENT = 'REMOVE_INGREDIENT',
  SET_INGREDIENTS = 'SET_INGREDIENTS',
  SET_ERROR = 'SET_ERROR',
  ORDER_BURGER = 'ORDER_BURGER',
  SET_PLACING_ORDER = 'SET_PLACING_ORDER'
}

export enum ActionStatus {
  START = 'START',
  SUCCESS = 'SUCCESS',
  FAILURE = 'FAILURE'
}

export enum HttpMethod {
  GET = 'GET',
  POST = 'POST'
}

export interface LocalAction<A = any, B = any> extends Action<A> {
  payload?: B;
}

export interface ThunkAction<A = any, B = any> extends LocalAction<A, B> {
  url: string;
  method: HttpMethod;
}

export const createLocalAction = (action: LocalAction) => action;

export const createThunkAction = (action: ThunkAction) => {
  return (dispatch: Dispatch) => {
    const { type, url, method, payload } = action;

    let config: AxiosRequestConfig = {
      url,
      method
    };

    if (payload) {
      config = {
        ...config,
        data: payload
      };
    }

    const actionStart: LocalAction = {
      type: getType(type, ActionStatus.START)
    };
    dispatch(actionStart);

    axios(config)
      .then(response => {
        const actionSuccess: LocalAction = {
          type: getType(type, ActionStatus.SUCCESS),
          payload: response.data
        };
        dispatch(actionSuccess);
      })
      .catch(error => {
        const actionError: LocalAction = {
          type: getType(type, ActionStatus.FAILURE),
          payload: error
        };
        dispatch(actionError);
      });
  };
};

export const getType = (actionType: ActionType, actionStatus: ActionStatus) => {
  return `${actionType}_${actionStatus}`;
};
