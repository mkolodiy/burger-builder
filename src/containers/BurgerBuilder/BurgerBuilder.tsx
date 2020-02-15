import React, { Component, Fragment } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import { Ingredient } from '../../common/Types';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import { RouteComponentProps } from 'react-router';
import { connect } from 'react-redux';
import { ReduxState } from '../../store/reducers';
import { actionAddIngredient, actionRemoveIngredient, actionInitIngredients } from '../../store/actions';

interface State {
  modalOpened: boolean;
}

interface ReduxProps {
  ingredients: Ingredient[];
  totalPrice: number;
  error: boolean;
}

interface DispatchProps {
  actionAddIngredient: typeof actionAddIngredient;
  actionRemoveIngredient: typeof actionRemoveIngredient;
  actionInitIngredients: typeof actionInitIngredients;
}

type Props = RouteComponentProps & ReduxProps & DispatchProps;

class BurgerBuilder extends Component<Props, State> {
  state: State = {
    modalOpened: false
  };

  componentDidMount() {
    this.props.actionInitIngredients();
  }

  _isPurchasable = () => {
    const sum = this.props.ingredients.map(i => i.amount).reduce((sum, value) => sum + value, 0);
    return sum > 0;
  };

  _modalOpenedHandler = () => {
    this.setState({ modalOpened: true });
  };

  _modalClosedHandler = () => {
    this.setState({ modalOpened: false });
  };

  _purchaseHandler = () => {
    this.props.history.push('/checkout');
  };

  _renderOrderSummary = (totalPrice: number) => (
    <OrderSummary ingredients={this.props.ingredients} onClose={this._modalClosedHandler} onContinue={this._purchaseHandler} price={totalPrice} />
  );

  _renderBurger = (disableInfo: { [key: string]: boolean }, totalPrice: number) => (
    <Fragment>
      <Burger ingredients={this.props.ingredients} />
      <BuildControls
        addIngredient={this.props.actionAddIngredient}
        removeIngredient={this.props.actionRemoveIngredient}
        disabled={disableInfo}
        price={totalPrice}
        purchasable={this._isPurchasable()}
        openCheckoutModal={this._modalOpenedHandler}
      />
    </Fragment>
  );

  render() {
    const disableInfo: { [key: string]: boolean } = {};
    this.props.ingredients.forEach(i => (disableInfo[i.type] = i.amount <= 0));
    const totalPrice = Number(this.props.totalPrice.toFixed(2));

    let orderSummary = this._renderOrderSummary(totalPrice);

    let burger = this.props.error ? <p>Ingredients can't be loaded!</p> : <Spinner />;
    if (this.props.ingredients.length !== 0) {
      burger = this._renderBurger(disableInfo, totalPrice);
    }

    return (
      <Fragment>
        <Modal display={this.state.modalOpened} onClose={this._modalClosedHandler}>
          {orderSummary}
        </Modal>
        {burger}
      </Fragment>
    );
  }
}

const mapStateToProps = (state: ReduxState) => {
  return {
    ingredients: state.ingredients,
    totalPrice: state.totalPrice,
    error: state.error
  };
};

const mapDispatchToProps = {
  actionAddIngredient,
  actionRemoveIngredient,
  actionInitIngredients
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));
