import axios from '../../axios-orders';
import { AxiosRequestConfig } from 'axios';
import * as actionsTypes from '../actions/actionTypes';
import { Dispatch, Action } from 'redux';

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

    axios(config)
      .then(response => {
        const actionSuccess: LocalAction = {
          type,
          payload: response.data
        };
        dispatch(actionSuccess);
      })
      .catch(() => {
        const actionError: LocalAction = {
          type: actionsTypes.SET_ERROR,
          payload: true
        };
        dispatch(actionError);
      });
  };
};
