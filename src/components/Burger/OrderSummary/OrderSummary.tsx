import React, { FunctionComponent, Fragment } from 'react';
import { Ingredient } from '../../../common/Types';

interface Props {
  ingredients: Ingredient[];
}

const OrderSummary: FunctionComponent<Props> = props => {
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
      <p>Continue to Checkout?</p>
    </Fragment>
  );
};

export default OrderSummary;
