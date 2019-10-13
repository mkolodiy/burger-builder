import React, { Component, Fragment } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import { InnerIngredient } from '../../components/Burger/BurgerIngredient/BurgerIngredient';

interface Ingredients {
  [key: string]: number;
}

interface State {
  ingredients: Ingredients;
  totalPrice: number;
  purchasable: boolean;
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
    totalPrice: 4,
    purchasable: false
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
    this._updatePurchase(updatedIngredients);
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
    this._updatePurchase(updatedIngredients);
  };

  _updatePurchase = (ingredients: Ingredients) => {
    const sum = Object.keys(ingredients)
      .map(key => ingredients[key])
      .reduce((sum, value) => sum + value, 0);
    this.setState({ purchasable: sum > 0 });
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
          price={this.state.totalPrice}
          purchasable={this.state.purchasable}
        />
      </Fragment>
    );
  }
}

export default BurgerBuilder;
