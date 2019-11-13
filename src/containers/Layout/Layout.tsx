import React, { Fragment, Component } from 'react';
import './Layout.scss';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

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
        <main className="layout__content">{this.props.children}</main>
      </Fragment>
    );
  }
}

export default Layout;
