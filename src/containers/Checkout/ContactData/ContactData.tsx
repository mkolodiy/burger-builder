import React, { Component, SyntheticEvent } from 'react';
import axios from '../../../axios-orders';
import './ContactData.scss';
import Button from '../../../components/UI/Button/Button';
import { ButtonType, Ingredient } from '../../../common/Types';
import Spinner from '../../../components/UI/Spinner/Spinner';
import { RouteComponentProps } from 'react-router';

interface ComponentProps {
  ingredients: Ingredient[];
  totalPrice: number;
}

interface State {
  customer: {};
  loading: boolean;
  loaded: boolean;
}

type Props = ComponentProps & RouteComponentProps;

class ContactData extends Component<Props> {
  state: State = {
    customer: {
      name: '',
      email: '',
      address: {
        street: '',
        zipCode: '',
        postalCode: ''
      }
    },
    loading: false,
    loaded: false
  };

  _orderHandler = (event: SyntheticEvent) => {
    event.preventDefault();

    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.totalPrice,
      customer: {
        name: 'Maksym Kolodiy',
        address: {
          street: 'Teststreet 1',
          zipCode: '12345',
          country: 'Germany'
        },
        email: 'test@test.com',
        deliveryMethod: 'fastest'
      }
    };
    axios
      .post('/orders.json', order)
      .then(() => this.setState({ loading: false, loaded: true }))
      .catch(() => this.setState({ loading: false }));
  };

  _renderForm = () => (
    <>
      <h4>Enter your Contact Data</h4>
      <form onSubmit={this._orderHandler}>
        <input type="text" name="name" placeholder="Your name" />
        <input type="email" name="email" placeholder="Your email" />
        <input type="text" name="street" placeholder="Your street" />
        <input type="text" name="postalCode" placeholder="Your postal ode" />
        <Button
          type={ButtonType.SUCCESS}
          disabled={this.props.ingredients.length === 0}
        >
          Order
        </Button>
      </form>
    </>
  );

  _renderLoaded = () => (
    <>
      <h1>Success</h1>
      <Button
        type={ButtonType.SUCCESS}
        onClick={() => this.props.history.push('/')}
      >
        Go back
      </Button>
    </>
  );

  render() {
    const { loaded, loading } = this.state;

    return (
      <div className="contact-data">
        {!loaded && !loading && this._renderForm()}
        {loading && <Spinner />}
        {loaded && !loading && this._renderLoaded()}
      </div>
    );
  }
}

export default ContactData;
