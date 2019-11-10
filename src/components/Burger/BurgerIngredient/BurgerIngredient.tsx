import React, { FC } from 'react';
import './BurgerIngredient.scss';
import { OuterIngredient, InnerIngredient } from '../../../common/Types';

interface Props {
  type: string;
}

const BurgerIngredient: FC<Props> = props => {
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

export default BurgerIngredient;
