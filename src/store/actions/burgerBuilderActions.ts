import { ActionType } from '../utils/actionUtils';
import { InnerIngredient } from '../../common/Types';
import { createLocalAction, createThunkAction, HttpMethod } from '../utils/actionUtils';
import { ThunkAction } from 'redux-thunk';
import { AnyAction } from 'redux';

export const actionAddIngredient = (ingredientType: InnerIngredient) => {
  return createLocalAction({
    type: ActionType.ADD_INGREDIENT,
    payload: ingredientType
  });
};

export const actionRemoveIngredient = (ingredientType: InnerIngredient) => {
  return createLocalAction({
    type: ActionType.REMOVE_INGREDIENT,
    payload: ingredientType
  });
};

export const actionInitIngredients = (): ThunkAction<any, {}, {}, AnyAction> => {
  return createThunkAction({
    type: ActionType.SET_INGREDIENTS,
    url: '/ingredients.json',
    method: HttpMethod.GET
  });
};
