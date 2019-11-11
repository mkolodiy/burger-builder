import React, { Component } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import { RouteComponentProps } from 'react-router-dom';

type Props = RouteComponentProps;

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
        <CheckoutSummary
          ingredients={this.props.location.state.ingredients}
          onContinue={this._onContinue}
          onCancel={this._onCancel}
        />
      </div>
    );
  }
}

export default Checkout;
