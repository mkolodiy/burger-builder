import React, { Component } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import { RouteComponentProps, Route } from 'react-router-dom';
import ContactData from './ContactData/ContactData';
import { Ingredient } from '../../common/Types';
import { connect } from 'react-redux';
import { ReduxState } from '../../store/reducers/burgerBuilderReducer';

interface State {
  ingredients: Ingredient[];
  totalPrice: number;
}

interface ReduxProps {
  ingredients: Ingredient[];
}

type Props = ReduxProps & RouteComponentProps;

class Checkout extends Component<Props> {
  _onContinue = () => {
    this.props.history.push('/checkout/contact-data');
  };

  _onCancel = () => {
    this.props.history.goBack();
  };

  render() {
    return (
      <div>
        <CheckoutSummary ingredients={this.props.ingredients} onContinue={this._onContinue} onCancel={this._onCancel} />
        <Route path={`${this.props.match.url}/contact-data`} component={ContactData} />
      </div>
    );
  }
}

const mapStateToProps = (state: ReduxState) => {
  return {
    ingredients: state.ingredients
  };
};

export default connect(mapStateToProps)(Checkout);
