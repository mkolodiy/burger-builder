import React from 'react';
import './BuildControl.scss';
import { IngredientTypes } from '../../BurgerIngredient/BurgerIngredient';

interface Props {
  label: string;
  type: IngredientTypes;
}

const BuildControl = (props: Props) => (
  <div className="build-control">
    <div className="build-control__label">{props.label}</div>
    <button className="build-control__less-btn">Less</button>
    <button className="build-control__more-btn">More</button>
  </div>
);

export default BuildControl;
