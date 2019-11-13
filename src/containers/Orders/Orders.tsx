import React, { Component } from 'react';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import Order from '../../components/Order/Order';
import { RouteComponentProps } from 'react-router';
import { IOrder } from '../../common/Types';

interface State {
  orders: IOrder[];
  loading: boolean;
}

type Props = RouteComponentProps;

class Orders extends Component<Props> {
  state: State = {
    orders: [],
    loading: false
  };

  componentDidMount() {
    this.setState({
      loading: true
    });
    axios
      .get('/orders.json')
      .then(result => {
        const fetchedOrders = [];
        for (let key in result.data) {
          fetchedOrders.push({
            ...result.data[key],
            id: key
          });
        }
        this.setState({
          orders: fetchedOrders,
          loading: false
        });
      })
      .catch(error => {
        this.setState({
          loading: false
        });
      });
  }

  render() {
    return (
      <div>
        {this.state.orders.map(order => (
          <Order
            key={order.id}
            ingredients={order.ingredients}
            totalPrice={Number(order.price)}
          />
        ))}
      </div>
    );
  }
}

export default withErrorHandler(Orders, axios);
