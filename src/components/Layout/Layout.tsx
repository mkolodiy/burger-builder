import React, { Fragment, FunctionComponent } from 'react';
import './Layout.scss';
import Toolbar from '../Toolbar/Toolbar';

const Layout: FunctionComponent = props => (
  <Fragment>
    <Toolbar />
    <main className="layout__content">{props.children}</main>
  </Fragment>
);

export default Layout;
