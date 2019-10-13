import React from 'react';
import { InnerIngredient } from '../BurgerIngredient/BurgerIngredient';
import './BuildControls.scss';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  { label: 'Meat', type: InnerIngredient.MEAT },
  { label: 'Cheese', type: InnerIngredient.CHEESE },
  { label: 'Salad', type: InnerIngredient.SALAD },
  { label: 'Meat', type: InnerIngredient.BACON }
];

interface Props {
  addIngredient: (type: InnerIngredient) => void;
  removeIngredient: (type: InnerIngredient) => void;
  disabled: { [key: string]: boolean };
}

const BuildControls = (props: Props) => (
  <div className="build-controls">
    {controls.map(control => (
      <BuildControl
        key={control.type}
        label={control.label}
        addIngredient={() => props.addIngredient(control.type)}
        removeIngredient={() => props.removeIngredient(control.type)}
        disabled={props.disabled[control.type]}
      />
    ))}
  </div>
);

export default BuildControls;
