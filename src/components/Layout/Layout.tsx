import React, { Fragment, FunctionComponent } from 'react';

const Layout: FunctionComponent = props => (
  <Fragment>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main>{props.children}</main>
  </Fragment>
);

export default Layout;
