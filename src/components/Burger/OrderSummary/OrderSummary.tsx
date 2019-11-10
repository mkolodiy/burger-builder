import React, { FC, Fragment } from 'react';
import { Ingredient, ButtonType } from '../../../common/Types';
import Button from '../../UI/Button/Button';

interface Props {
  ingredients: Ingredient[];
  onClose: () => void;
  onContinue: () => void;
  price: number;
}

const OrderSummary: FC<Props> = props => {
  const ingredientSummary = props.ingredients.map(i => {
    return (
      <li key={i.type}>
        <span style={{ textTransform: 'capitalize' }}>{i.type}</span>:{' '}
        {i.amount}
      </li>
    );
  });
  return (
    <Fragment>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>
        <strong>Total price: {props.price}</strong>
      </p>
      <p>Continue to Checkout?</p>
      <Button onClick={props.onClose} type={ButtonType.DANGER}>
        CANCEL
      </Button>
      <Button onClick={props.onContinue} type={ButtonType.SUCCESS}>
        CONTINUE
      </Button>
    </Fragment>
  );
};

export default OrderSummary;
