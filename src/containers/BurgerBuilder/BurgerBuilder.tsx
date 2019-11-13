import React, { Component, Fragment } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import { InnerIngredient, Ingredient } from '../../common/Types';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import { RouteComponentProps } from 'react-router';

interface State {
  ingredients: Ingredient[];
  totalPrice: number;
  purchasable: boolean;
  modalOpened: boolean;
  loading: boolean;
  error: boolean;
}

type Props = RouteComponentProps;

const INGREDIENT_PRICES = {
  salad: 0.5,
  bacon: 0.4,
  cheese: 1.3,
  meat: 0.7
};

class BurgerBuilder extends Component<Props> {
  state: State = {
    ingredients: [],
    totalPrice: 4,
    purchasable: false,
    modalOpened: false,
    loading: false,
    error: false
  };

  componentDidMount() {
    axios
      .get('/ingredients.json')
      .then(response => {
        this.setState({ ingredients: response.data });
      })
      .catch(error => this.setState({ error: true }));
  }

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

  _modalOpenedHandler = () => {
    this.setState({ modalOpened: true });
  };

  _modalClosedHandler = () => {
    this.setState({ modalOpened: false });
  };

  _purchaseHandler = () => {
    this.props.history.push('/checkout', {
      ingredients: this.state.ingredients,
      totalPrice: this.state.totalPrice
    });
  };

  _renderOrderSummary = (totalPrice: number) => (
    <OrderSummary
      ingredients={this.state.ingredients}
      onClose={this._modalClosedHandler}
      onContinue={this._purchaseHandler}
      price={totalPrice}
    />
  );

  _renderBurger = (
    disableInfo: { [key: string]: boolean },
    totalPrice: number
  ) => (
    <Fragment>
      <Burger ingredients={this.state.ingredients} />
      <BuildControls
        addIngredient={this._addIngredientHandler}
        removeIngredient={this._removeIngredientHandler}
        disabled={disableInfo}
        price={totalPrice}
        purchasable={this.state.purchasable}
        openCheckoutModal={this._modalOpenedHandler}
      />
    </Fragment>
  );

  render() {
    const disableInfo: { [key: string]: boolean } = {};
    this.state.ingredients.forEach(i => (disableInfo[i.type] = i.amount <= 0));
    const totalPrice = Number(this.state.totalPrice.toFixed(2));

    let orderSummary = this._renderOrderSummary(totalPrice);
    if (this.state.loading) {
      orderSummary = this.state.error ? (
        <p>Ingredients can't be loaded!</p>
      ) : (
        <Spinner />
      );
    }

    let burger = <Spinner />;
    if (this.state.ingredients.length !== 0) {
      burger = this._renderBurger(disableInfo, totalPrice);
    }

    return (
      <Fragment>
        <Modal
          display={this.state.modalOpened}
          onClose={this._modalClosedHandler}
        >
          {orderSummary}
        </Modal>
        {burger}
      </Fragment>
    );
  }
}

export default withErrorHandler(BurgerBuilder, axios);
