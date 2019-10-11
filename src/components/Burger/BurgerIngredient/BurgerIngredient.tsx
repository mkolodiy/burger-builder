import React, { FunctionComponent } from 'react';

interface Props {
  type: string;
}

enum Types {
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
    case Types.BREAD_BOTTOM:
      ingredient = <div className="ingredient__bread-bottom"></div>;
      break;
    case Types.BREAD_TOP:
      ingredient = (
        <div className="ingredient__bread-top">
          <div className="ingredient__seeds1"></div>
          <div className="ingredient__seeds12"></div>
        </div>
      );
      break;
    case Types.MEAT:
      ingredient = <div className="ingredient__meat"></div>;
      break;
    case Types.CHEESE:
      ingredient = <div className="ingredient__cheese"></div>;
      break;
    case Types.SALAD:
      ingredient = <div className="ingredient__salad"></div>;
      break;
    case Types.BACON:
      ingredient = <div className="ingredient__bacon"></div>;
      break;
    default:
      ingredient = null;
  }

  return ingredient;
};

export { Types };
export default BurgerIngredient;
