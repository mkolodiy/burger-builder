import React, { Component, SyntheticEvent } from 'react';
import axios from '../../../axios-orders';
import './ContactData.scss';
import Button from '../../../components/UI/Button/Button';
import { ButtonType, Ingredient, InputType } from '../../../common/Types';
import Spinner from '../../../components/UI/Spinner/Spinner';
import { RouteComponentProps } from 'react-router';
import Input from '../../../components/UI/Input/Input';

interface ComponentProps {
  ingredients: Ingredient[];
  totalPrice: number;
}

interface ElementConfigOptions {
  value: string;
  displayValue: string;
}

interface ElementConfig {
  type?: string;
  placeholder?: string;
  options?: ElementConfigOptions[];
}

interface Element {
  elementType: InputType;
  elementConfig: ElementConfig;
  elementValue: string;
}

interface State {
  orderForm: { [key: string]: Element };
  loading: boolean;
  loaded: boolean;
}

type Props = ComponentProps & RouteComponentProps;

class ContactData extends Component<Props> {
  state: State = {
    orderForm: {
      name: {
        elementType: InputType.INPUT,
        elementConfig: {
          type: 'text',
          placeholder: 'Your name'
        },
        elementValue: ''
      },
      street: {
        elementType: InputType.INPUT,
        elementConfig: {
          type: 'text',
          placeholder: 'Your street'
        },
        elementValue: ''
      },
      zipCode: {
        elementType: InputType.INPUT,
        elementConfig: {
          type: 'text',
          placeholder: 'Your zip code'
        },
        elementValue: ''
      },
      country: {
        elementType: InputType.INPUT,
        elementConfig: {
          type: 'text',
          placeholder: 'Your country'
        },
        elementValue: ''
      },
      email: {
        elementType: InputType.INPUT,
        elementConfig: {
          type: 'email',
          placeholder: 'Your email'
        },
        elementValue: ''
      },
      deliveryMethod: {
        elementType: InputType.SELECT,
        elementConfig: {
          options: [
            { value: 'fastest', displayValue: 'Fastest' },
            { value: 'cheapest', displayValue: 'Cheapest' }
          ]
        },
        elementValue: ''
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
      customer: {}
    };
    axios
      .post('/orders.json', order)
      .then(() => this.setState({ loading: false, loaded: true }))
      .catch(() => this.setState({ loading: false }));
  };

  _renderForm = () => {
    const formElements = [];
    for (let key in this.state.orderForm) {
      formElements.push({ id: key, config: this.state.orderForm[key] });
    }

    return (
      <>
        <h4>Enter your Contact Data</h4>
        <form onSubmit={this._orderHandler}>
          {formElements.map(formElement => (
            <Input
              key={formElement.id}
              elementValue={formElement.config.elementValue}
              elementType={formElement.config.elementType}
              elementConfig={formElement.config.elementConfig}
              label={formElement.config.elementConfig.placeholder}
            />
          ))}
          <Button
            type={ButtonType.SUCCESS}
            disabled={this.props.ingredients.length === 0}
          >
            Order
          </Button>
        </form>
      </>
    );
  };

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
