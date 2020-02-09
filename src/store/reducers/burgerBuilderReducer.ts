import * as actionTypes from '../actions/actionTypes';
import { Ingredient, InnerIngredient } from '../../common/Types';
import { combineReducers } from 'redux';
import { LocalAction, ThunkAction } from '../utils/actionUtils';

export interface ReduxState {
  ingredients: Ingredient[];
  totalPrice: number;
  error: boolean;
}

const INGREDIENT_PRICES = {
  salad: 0.5,
  bacon: 0.4,
  cheese: 1.3,
  meat: 0.7
};

const handleIngredients = (ingredients: Ingredient[], type: InnerIngredient, increment: boolean) => {
  return ingredients.map(ingredient => {
    if (ingredient.type === type) {
      return {
        ...ingredient,
        amount: increment ? ++ingredient.amount : --ingredient.amount
      };
    }
    return ingredient;
  });
};

const ingredients = (state: Ingredient[] = [], action: ThunkAction<string, Ingredient[] | any>) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT:
      return handleIngredients(state, action.payload!, true);
    case actionTypes.REMOVE_INGREDIENT:
      return handleIngredients(state, action.payload!, false);
    case actionTypes.SET_INGREDIENTS:
      return action.payload || [];
  }
  return state;
};

const totalPrice = (state: number = 4, action: ThunkAction<string, InnerIngredient>) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT:
      return state + INGREDIENT_PRICES[action.payload!];
    case actionTypes.REMOVE_INGREDIENT:
      return state - INGREDIENT_PRICES[action.payload!];
  }
  return state;
};

const error = (state: boolean = false, action: LocalAction<string, boolean>) => {
  switch (action.type) {
    case actionTypes.SET_ERROR:
      return action.payload || false;
  }
  return state;
};

const burgerBuilderReducer = combineReducers<ReduxState>({
  ingredients,
  totalPrice,
  error
});

export default burgerBuilderReducer;
