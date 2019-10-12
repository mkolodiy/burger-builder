import React from 'react';
import './BurgerIngredient.scss';

interface Props {
  type: string;
}

enum IngredientTypes {
  BREAD_BOTTOM = 'bread-bottom',
  BREAD_TOP = 'bread-top',
  MEAT = 'meat',
  CHEESE = 'cheese',
  SALAD = 'salad',
  BACON = 'bacon'
}

const BurgerIngredient = (props: Props) => {
  let ingredient = null;

  switch (props.type) {
    case IngredientTypes.BREAD_BOTTOM:
      ingredient = <div className="ingredient__bread-bottom"></div>;
      break;
    case IngredientTypes.BREAD_TOP:
      ingredient = (
        <div className="ingredient__bread-top">
          <div className="ingredient__seeds1"></div>
          <div className="ingredient__seeds12"></div>
        </div>
      );
      break;
    case IngredientTypes.MEAT:
      ingredient = <div className="ingredient__meat"></div>;
      break;
    case IngredientTypes.CHEESE:
      ingredient = <div className="ingredient__cheese"></div>;
      break;
    case IngredientTypes.SALAD:
      ingredient = <div className="ingredient__salad"></div>;
      break;
    case IngredientTypes.BACON:
      ingredient = <div className="ingredient__bacon"></div>;
      break;
    default:
      ingredient = null;
  }

  return ingredient;
};

export { IngredientTypes };
export default BurgerIngredient;
