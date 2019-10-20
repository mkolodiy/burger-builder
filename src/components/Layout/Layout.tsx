import React, { Fragment, FunctionComponent } from 'react';
import './Layout.scss';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

const Layout: FunctionComponent = props => (
  <Fragment>
    <SideDrawer />
    <Toolbar />
    <main className="layout__content">{props.children}</main>
  </Fragment>
);

export default Layout;
