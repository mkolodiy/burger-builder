import React, { Fragment, Component, ComponentClass } from 'react';
import Modal from '../../components/UI/Modal/Modal';
import { AxiosInstance, AxiosResponse, AxiosRequestConfig } from 'axios';
import { RouteComponentProps } from 'react-router';

interface State {
  error: any;
}

type Props = RouteComponentProps;

const withErrorHandler = (
  WrappedComponent: ComponentClass<Props>,
  axios: AxiosInstance
) => {
  return class extends Component<Props> {
    requestInterceptor: number;
    responseInterceptor: number;

    state: State = {
      error: null
    };

    constructor(props: Props) {
      super(props);
      this.requestInterceptor = axios.interceptors.request.use(
        (request: AxiosRequestConfig) => {
          this.setState({ error: null });
          return request;
        }
      );
      this.responseInterceptor = axios.interceptors.response.use(
        (response: AxiosResponse<any>) => response,
        error => this.setState({ error: error })
      );
    }

    componentWillUnmount() {
      axios.interceptors.request.eject(this.requestInterceptor);
      axios.interceptors.response.eject(this.responseInterceptor);
    }

    _onClickHandler = () => {
      this.setState({ error: null });
    };

    render() {
      return (
        <Fragment>
          <Modal
            display={this.state.error !== null}
            onClose={this._onClickHandler}
          >
            {this.state.error !== null ? this.state.error!.message : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </Fragment>
      );
    }
  };
};

export default withErrorHandler;
