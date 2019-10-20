import React, { FunctionComponent } from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import './SideDrawer.scss';

const SideDrawer: FunctionComponent = () => {
  return (
    <div className="side-drawer">
      <div className="side-drawer__logo">
        <Logo />
      </div>
      <nav>
        <NavigationItems />
      </nav>
    </div>
  );
};

export default SideDrawer;
