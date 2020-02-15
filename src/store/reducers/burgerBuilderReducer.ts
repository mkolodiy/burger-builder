import { ActionType, getType, ActionStatus } from '../utils/actionUtils';
import { Ingredient, InnerIngredient } from '../../common/Types';
import { LocalAction, ThunkAction } from '../utils/actionUtils';

export interface GeneralState {
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
    case ActionType.ADD_INGREDIENT:
      return handleIngredients(state, action.payload!, true);
    case ActionType.REMOVE_INGREDIENT:
      return handleIngredients(state, action.payload!, false);
    case getType(ActionType.SET_INGREDIENTS, ActionStatus.SUCCESS):
      return action.payload || [];
    default:
      return state;
  }
};

const totalPrice = (state: number = 4, action: ThunkAction<string, InnerIngredient>) => {
  switch (action.type) {
    case ActionType.ADD_INGREDIENT:
      return state + INGREDIENT_PRICES[action.payload!];
    case ActionType.REMOVE_INGREDIENT:
      return state - INGREDIENT_PRICES[action.payload!];
    default:
      return state;
  }
};

const error = (state: boolean = false, action: LocalAction<string, boolean | any>) => {
  switch (action.type) {
    case ActionType.SET_ERROR:
      return action.payload || false;
    case getType(ActionType.SET_INGREDIENTS, ActionStatus.FAILURE):
      return true;
    default:
      return state;
  }
};

export default {
  ingredients,
  totalPrice,
  error
};
