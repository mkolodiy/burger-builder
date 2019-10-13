import React from 'react';
import './BurgerIngredient.scss';

interface Props {
  type: string;
}

enum OuterIngredient {
  BREAD_BOTTOM = 'bread-bottom',
  BREAD_TOP = 'bread-top'
}

enum InnerIngredient {
  MEAT = 'meat',
  CHEESE = 'cheese',
  SALAD = 'salad',
  BACON = 'bacon'
}

const BurgerIngredient = (props: Props) => {
  let ingredient = null;

  switch (props.type) {
    case OuterIngredient.BREAD_BOTTOM:
      ingredient = <div className="ingredient__bread-bottom"></div>;
      break;
    case OuterIngredient.BREAD_TOP:
      ingredient = (
        <div className="ingredient__bread-top">
          <div className="ingredient__seeds1"></div>
          <div className="ingredient__seeds12"></div>
        </div>
      );
      break;
    case InnerIngredient.MEAT:
      ingredient = <div className="ingredient__meat"></div>;
      break;
    case InnerIngredient.CHEESE:
      ingredient = <div className="ingredient__cheese"></div>;
      break;
    case InnerIngredient.SALAD:
      ingredient = <div className="ingredient__salad"></div>;
      break;
    case InnerIngredient.BACON:
      ingredient = <div className="ingredient__bacon"></div>;
      break;
    default:
      ingredient = null;
  }

  return ingredient;
};

export { OuterIngredient, InnerIngredient };
export default BurgerIngredient;
