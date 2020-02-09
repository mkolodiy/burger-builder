import React, { Component, SyntheticEvent } from 'react';
import axios from '../../../axios-orders';
import './ContactData.scss';
import Button from '../../../components/UI/Button/Button';
import { ButtonType, Ingredient, InputType } from '../../../common/Types';
import Spinner from '../../../components/UI/Spinner/Spinner';
import { RouteComponentProps } from 'react-router';
import Input from '../../../components/UI/Input/Input';
import { ReduxState } from '../../../store/reducers/burgerBuilderReducer';
import { connect } from 'react-redux';

interface ElementConfigOptions {
  value: string;
  displayValue: string;
}

interface ElementConfig {
  type?: string;
  placeholder?: string;
  options?: ElementConfigOptions[];
}

interface ElementValidation {
  required: boolean;
}

interface Element {
  label: string;
  elementType: InputType;
  elementConfig: ElementConfig;
  elementValue: string;
  validation?: ElementValidation;
  valid?: boolean;
  touched?: boolean;
}

interface State {
  orderForm: { [key: string]: Element };
  loading: boolean;
  loaded: boolean;
  formValid: boolean;
}

interface ReduxProps {
  ingredients: Ingredient[];
  totalPrice: number;
}

type Props = ReduxProps & RouteComponentProps;

class ContactData extends Component<Props> {
  state: State = {
    orderForm: {
      name: {
        label: 'Name',
        elementType: InputType.INPUT,
        elementConfig: {
          type: 'text',
          placeholder: 'Enter name'
        },
        elementValue: '',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      street: {
        label: 'Street',
        elementType: InputType.INPUT,
        elementConfig: {
          type: 'text',
          placeholder: 'Enter street'
        },
        elementValue: '',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      zipCode: {
        label: 'ZIP code',
        elementType: InputType.INPUT,
        elementConfig: {
          type: 'text',
          placeholder: 'Enter zip code'
        },
        elementValue: '',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      country: {
        label: 'Country',
        elementType: InputType.INPUT,
        elementConfig: {
          type: 'text',
          placeholder: 'Enter country'
        },
        elementValue: '',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      email: {
        label: 'Email',
        elementType: InputType.INPUT,
        elementConfig: {
          type: 'email',
          placeholder: 'Enter email'
        },
        elementValue: '',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      deliveryMethod: {
        label: 'Delivery method',
        elementType: InputType.SELECT,
        elementConfig: {
          options: [
            { value: 'fastest', displayValue: 'Fastest' },
            { value: 'cheapest', displayValue: 'Cheapest' }
          ]
        },
        elementValue: 'fastest',
        valid: true
      }
    },
    loading: false,
    loaded: false,
    formValid: false
  };

  _orderHandler = (event: SyntheticEvent) => {
    event.preventDefault();
    this.setState({ loading: true });
    const formData: { [key: string]: string } = {};

    for (let key in this.state.orderForm) {
      formData[key] = this.state.orderForm[key].elementValue;
    }

    const order = {
      ingredients: this.props.ingredients,
      price: this.props.totalPrice,
      orderData: formData
    };
    axios
      .post('/orders.json', order)
      .then(() => this.setState({ loading: false, loaded: true }))
      .catch(() => this.setState({ loading: false }));
  };

  _checkValidity = (value: string, rules: ElementValidation) => {
    let isValid = true;
    if (rules.required) {
      isValid = value.trim() !== '' && isValid;
    }

    return isValid;
  };

  _onChangeHandler = (event: any, inputIdentifier: string) => {
    const updatedOrderForm = {
      ...this.state.orderForm
    };
    const updatedFormElement = {
      ...updatedOrderForm[inputIdentifier]
    };
    updatedFormElement.elementValue = event.target.value;
    const validation = updatedFormElement.validation;
    if (validation) {
      updatedFormElement.valid = this._checkValidity(updatedFormElement.elementValue, validation);
    }
    updatedFormElement.touched = true;
    updatedOrderForm[inputIdentifier] = updatedFormElement;

    let formValid = true;
    for (let inputIdentifier in updatedOrderForm) {
      formValid = !!updatedOrderForm[inputIdentifier].valid && formValid;
    }
    this.setState({
      orderForm: updatedOrderForm,
      formValid
    });
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
              label={formElement.config.label}
              valid={!!formElement.config.valid}
              shouldValidate={!!formElement.config.validation && !!formElement.config.touched}
              onChange={event => this._onChangeHandler(event, formElement.id)}
            />
          ))}
          <Button type={ButtonType.SUCCESS} disabled={this.props.ingredients.length === 0 || !this.state.formValid}>
            Order
          </Button>
        </form>
      </>
    );
  };

  _renderLoaded = () => (
    <>
      <h1>Success</h1>
      <Button type={ButtonType.SUCCESS} onClick={() => this.props.history.push('/')}>
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

const mapStateToProps = (state: ReduxState) => {
  return {
    ingredients: state.ingredients,
    totalPrice: state.totalPrice
  };
};

export default connect(mapStateToProps)(ContactData);
