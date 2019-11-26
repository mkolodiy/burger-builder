import * as actionTypes from './actions';
import { Ingredient, InnerIngredient } from '../common/Types';

interface Action {
  type: string;
  ingredientType: InnerIngredient;
}

export interface ReduxState {
  ingredients: Ingredient[];
  totalPrice: number;
}

const initialState: ReduxState = {
  ingredients: [
    {
      type: InnerIngredient.BACON,
      amount: 0
    },
    {
      type: InnerIngredient.CHEESE,
      amount: 0
    },
    {
      type: InnerIngredient.SALAD,
      amount: 0
    },
    {
      type: InnerIngredient.MEAT,
      amount: 0
    }
  ],
  totalPrice: 4
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

const reducer = (state: ReduxState = initialState, action: Action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: handleIngredients(state.ingredients, action.ingredientType, true)
      };
    case actionTypes.REMOVE_INGREDIENT:
      return {
        ...state,
        ingredients: handleIngredients(state.ingredients, action.ingredientType, false)
      };
    default:
      return state;
  }
};

export default reducer;
