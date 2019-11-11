import React, { FC } from 'react';
import './CheckoutSummary.scss';
import Burger from '../../Burger/Burger';
import { Ingredient, ButtonType } from '../../../common/Types';
import Button from '../../UI/Button/Button';

interface Props {
  ingredients: Ingredient[];
  onContinue: () => void;
  onCancel: () => void;
}

const CheckoutSummary: FC<Props> = props => {
  return (
    <div className="checkout">
      <h1>We hope it tastes well!</h1>
      <div>
        <Burger ingredients={props.ingredients} />
      </div>
      <div>
        <Button type={ButtonType.DANGER} onClick={props.onCancel}>
          Cancel
        </Button>
        <Button type={ButtonType.SUCCESS} onClick={props.onContinue}>
          Continue
        </Button>
      </div>
    </div>
  );
};

export default CheckoutSummary;
