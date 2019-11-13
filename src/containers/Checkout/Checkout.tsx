import React, { Component } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import { RouteComponentProps, Route } from 'react-router-dom';
import ContactData from './ContactData/ContactData';
import { Ingredient } from '../../common/Types';

interface State {
  ingredients: Ingredient[];
  totalPrice: number;
}

type Props = RouteComponentProps;

class Checkout extends Component<Props> {
  state: State = {
    ingredients: [],
    totalPrice: 0
  };

  componentDidMount() {
    const passedState = this.props.location.state;

    if (passedState) {
      this.setState({
        ingredients: passedState.ingredients,
        totalPrice: passedState.totalPrice
      });
    }
  }

  _onContinue = () => {
    this.props.history.push('/checkout/contact-data');
  };

  _onCancel = () => {
    this.props.history.goBack();
  };

  render() {
    return (
      <div>
        <CheckoutSummary
          ingredients={this.state.ingredients}
          onContinue={this._onContinue}
          onCancel={this._onCancel}
        />
        <Route
          path={`${this.props.match.url}/contact-data`}
          render={props => (
            <ContactData
              {...props}
              ingredients={this.state.ingredients}
              totalPrice={this.state.totalPrice}
            />
          )}
        />
      </div>
    );
  }
}

export default Checkout;
