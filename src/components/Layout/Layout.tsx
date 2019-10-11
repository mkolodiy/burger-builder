import React, { Fragment, FunctionComponent } from 'react';
import './Layout.scss';

const Layout: FunctionComponent = props => (
  <Fragment>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main className="layout__content">{props.children}</main>
  </Fragment>
);

export default Layout;
