import React, { FunctionComponent } from 'react';
import './BuildControl.scss';

interface Props {
  label: string;
  addIngredient: () => void;
  removeIngredient: () => void;
  disabled: boolean;
}

const BuildControl: FunctionComponent<Props> = props => (
  <div className="build-control">
    <div className="build-control__label">{props.label}</div>
    <button
      className="build-control__less-btn"
      onClick={props.removeIngredient}
      disabled={props.disabled}
    >
      Less
    </button>
    <button className="build-control__more-btn" onClick={props.addIngredient}>
      More
    </button>
  </div>
);

export default BuildControl;
