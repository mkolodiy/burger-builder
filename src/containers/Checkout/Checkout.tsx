import React, { Component } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import { Ingredient, InnerIngredient } from '../../common/Types';

interface State {
  ingredients: Ingredient[];
}

class Checkout extends Component {
  state: State = {
    ingredients: [
      {
        type: InnerIngredient.SALAD,
        amount: 2
      },
      {
        type: InnerIngredient.BACON,
        amount: 1
      },
      {
        type: InnerIngredient.CHEESE,
        amount: 1
      },
      {
        type: InnerIngredient.MEAT,
        amount: 2
      }
    ]
  };

  render() {
    return (
      <div>
        <CheckoutSummary ingredients={this.state.ingredients} />
      </div>
    );
  }
}

export default Checkout;
