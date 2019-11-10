import React, { Fragment, Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './Layout.scss';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import BurgerBuilder from '../BurgerBuilder/BurgerBuilder';
import Checkout from '../Checkout/Checkout';
import NotFound from '../NotFound/NotFound';

interface State {
  showSideDrawer: boolean;
}

class Layout extends Component {
  state: State = {
    showSideDrawer: false
  };

  _sideDrawerToggleHandler = () => {
    this.setState((prevState: State) => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };

  render() {
    return (
      <Fragment>
        <SideDrawer
          open={this.state.showSideDrawer}
          onClose={this._sideDrawerToggleHandler}
        />
        <Toolbar toggleSideDrawer={this._sideDrawerToggleHandler} />
        <main className="layout__content">
          <Switch>
            <Route path="/checkout" component={Checkout} />
            <Route path="/" exact component={BurgerBuilder} />
            <Route component={NotFound} />
          </Switch>
        </main>
      </Fragment>
    );
  }
}

export default Layout;
