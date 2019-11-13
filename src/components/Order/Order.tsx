import React, { FC } from 'react';
import './Order.scss';
import { Ingredient, InnerIngredient } from '../../common/Types';

interface Props {
  ingredients: Ingredient[];
  totalPrice: number;
}

const Order: FC<Props> = props => (
  <div className="order">
    <div className="order__ingredients">
      <p>
        Ingredients:
        {props.ingredients.map((ingredient: Ingredient) => (
          <span>
            {ingredient.type.toString()} ({ingredient.amount})
          </span>
        ))}
      </p>
    </div>
    <p>
      Price: <strong>EUR {props.totalPrice}</strong>
    </p>
  </div>
);

export default Order;
