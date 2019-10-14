import React, { Component, Fragment } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import { InnerIngredient, Ingredient } from '../../common/Types';

interface State {
  ingredients: Ingredient[];
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
    ingredients: [
      { type: InnerIngredient.MEAT, amount: 0 },
      { type: InnerIngredient.CHEESE, amount: 0 },
      { type: InnerIngredient.SALAD, amount: 0 },
      { type: InnerIngredient.BACON, amount: 0 }
    ],
    totalPrice: 4,
    purchasable: false
  };

  _addIngredientHandler = (type: InnerIngredient) => {
    const index = this.state.ingredients.findIndex(i => i.type === type);
    const ingredient = this.state.ingredients[index];
    const updatedCount = ingredient.amount + 1;
    const updatedIngredients = [...this.state.ingredients];
    updatedIngredients[index] = {
      ...ingredient,
      amount: updatedCount
    };
    const priceAddition = INGREDIENT_PRICES[type];
    const updatedTotalPrice = this.state.totalPrice + priceAddition;

    this.setState({
      ingredients: updatedIngredients,
      totalPrice: updatedTotalPrice
    });
    this._updatePurchase(updatedIngredients);
  };

  _removeIngredientHandler = (type: InnerIngredient) => {
    const index = this.state.ingredients.findIndex(i => i.type === type);
    const ingredient = this.state.ingredients[index];
    const updatedCount = ingredient.amount - 1;
    const updatedIngredients = [...this.state.ingredients];
    updatedIngredients[index] = {
      ...ingredient,
      amount: updatedCount
    };
    const priceAddition = INGREDIENT_PRICES[type];
    const updatedTotalPrice = this.state.totalPrice - priceAddition;

    this.setState({
      ingredients: updatedIngredients,
      totalPrice: updatedTotalPrice
    });
    this._updatePurchase(updatedIngredients);
  };

  _updatePurchase = (ingredients: Ingredient[]) => {
    const sum = ingredients
      .map(i => i.amount)
      .reduce((sum, value) => sum + value, 0);
    this.setState({ purchasable: sum > 0 });
  };

  render() {
    const disableInfo: { [key: string]: boolean } = {};
    this.state.ingredients.forEach(i => (disableInfo[i.type] = i.amount <= 0));

    return (
      <Fragment>
        <Modal>
          <OrderSummary ingredients={this.state.ingredients} />
        </Modal>
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
