import React, { Component } from 'react';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import Order from '../../components/Order/Order';
import { RouteComponentProps } from 'react-router';
import { ReduxState } from '../../store/reducers';
import { actionFetchOrders } from '../../store/actions';
import { IOrder } from '../../store/reducers/orderReducer';
import { connect } from 'react-redux';
import Spinner from '../../components/UI/Spinner/Spinner';

interface ReduxProps {
  orders: IOrder[];
  fetchingOrders: boolean;
}

interface DispatchProps {
  actionFetchOrders: typeof actionFetchOrders;
}

type Props = ReduxProps & DispatchProps & RouteComponentProps;

class Orders extends Component<Props> {
  componentDidMount() {
    this.props.actionFetchOrders();
  }

  render() {
    if (!this.props.fetchingOrders) {
      return this.props.orders.map(order => <Order key={order.fireBaseId} ingredients={order.ingredients} totalPrice={Number(order.price)} />);
    }
    return (
      <div>
        <Spinner />
      </div>
    );
  }
}

const mapStateToProps = (state: ReduxState) => {
  return {
    orders: state.orders,
    fetchingOrders: state.fetchingOrders
  };
};

const mapDispatchToProps = {
  actionFetchOrders
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Orders, axios));
