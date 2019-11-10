import React, { FC } from 'react';
import './CheckoutSummary.scss';
import Burger from '../../Burger/Burger';
import { Ingredient, ButtonType } from '../../../common/Types';
import Button from '../../UI/Button/Button';

interface Props {
  ingredients: Ingredient[];
}

const CheckoutSummary: FC<Props> = props => {
  return (
    <div className="checkout">
      <h1>We hope it tastes well!</h1>
      <div>
        <Burger ingredients={props.ingredients} />
      </div>
      <div>
        <Button type={ButtonType.DANGER} onClick={() => undefined}>
          Cancel
        </Button>
        <Button type={ButtonType.SUCCESS} onClick={() => undefined}>
          Continue
        </Button>
      </div>
    </div>
  );
};

export default CheckoutSummary;
