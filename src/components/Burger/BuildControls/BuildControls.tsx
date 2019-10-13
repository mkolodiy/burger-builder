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
  price: number;
  purchasable: boolean;
}

const BuildControls = (props: Props) => (
  <div className="build-controls">
    <p>
      Current Price: <strong>{props.price.toFixed(2)}</strong>
    </p>
    {controls.map(control => (
      <BuildControl
        key={control.type}
        label={control.label}
        addIngredient={() => props.addIngredient(control.type)}
        removeIngredient={() => props.removeIngredient(control.type)}
        disabled={props.disabled[control.type]}
      />
    ))}
    <button className="build-controls__order-btn" disabled={!props.purchasable}>
      ORDER NOW
    </button>
  </div>
);

export default BuildControls;
