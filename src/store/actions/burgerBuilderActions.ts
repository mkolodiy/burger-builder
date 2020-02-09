import * as actionTypes from './actionTypes';
import { InnerIngredient } from '../../common/Types';
import { createLocalAction, createThunkAction, HttpMethod } from '../utils/actionUtils';
import { ThunkAction } from 'redux-thunk';
import { AnyAction } from 'redux';

export const actionAddIngredient = (ingredientType: InnerIngredient) => {
  return createLocalAction({
    type: actionTypes.ADD_INGREDIENT,
    payload: ingredientType
  });
};

export const actionRemoveIngredient = (ingredientType: InnerIngredient) => {
  return createLocalAction({
    type: actionTypes.REMOVE_INGREDIENT,
    payload: ingredientType
  });
};

export const actionInitIngredients = (): ThunkAction<any, {}, {}, AnyAction> => {
  return createThunkAction({
    type: actionTypes.SET_INGREDIENTS,
    url: '/ingredients.json',
    method: HttpMethod.GET
  });
};
