import React from 'react';
import { IngredientTypes } from '../BurgerIngredient/BurgerIngredient';
import './BuildControls.scss';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  { label: 'Meat', type: IngredientTypes.MEAT },
  { label: 'Cheese', type: IngredientTypes.CHEESE },
  { label: 'Salad', type: IngredientTypes.SALAD },
  { label: 'Meat', type: IngredientTypes.BACON }
];

const BuildControls = () => (
  <div className="build-controls">
    {controls.map(control => (
      <BuildControl
        key={control.type}
        label={control.label}
        type={control.type}
      />
    ))}
  </div>
);

export default BuildControls;
