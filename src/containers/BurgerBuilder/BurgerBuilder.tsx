import React, { Component, Fragment } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import { InnerIngredient } from '../../components/Burger/BurgerIngredient/BurgerIngredient';
import { string } from 'prop-types';

interface State {
  ingredients: { [key: string]: number };
  totalPrice: number;
}

const INGREDIENT_PRICES = {
  salad: 0.5,
  bacon: 0.4,
  cheese: 1.3,
  meat: 0.7
};

class BurgerBuilder extends Component {
  state: State = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4
  };

  _addIngredientHandler = (type: InnerIngredient) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const updatedTotalPrice = this.state.totalPrice + priceAddition;
    this.setState({
      ingredients: updatedIngredients,
      totalPrice: updatedTotalPrice
    });
  };

  _removeIngredientHandler = (type: InnerIngredient) => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    const updatedCount = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const priceDeduction = INGREDIENT_PRICES[type];
    const updatedTotalPrice = this.state.totalPrice - priceDeduction;
    this.setState({
      ingredients: updatedIngredients,
      totalPrice: updatedTotalPrice
    });
  };

  render() {
    const disableInfo: { [key: string]: boolean } = {};
    Object.keys(this.state.ingredients).forEach(
      key => (disableInfo[key] = this.state.ingredients[key] <= 0)
    );

    return (
      <Fragment>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          addIngredient={this._addIngredientHandler}
          removeIngredient={this._removeIngredientHandler}
          disabled={disableInfo}
        />
      </Fragment>
    );
  }
}

export default BurgerBuilder;
