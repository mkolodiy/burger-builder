import React, { FC } from 'react';
import './Toolbar.scss';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

interface Props {
  toggleSideDrawer: () => void;
}

const Toolbar: FC<Props> = props => (
  <header className="toolbar">
    <DrawerToggle onClick={props.toggleSideDrawer} />
    <div className="toolbar__logo">
      <Logo />
    </div>
    <nav className="toolbar__desktop-only">
      <NavigationItems />
    </nav>
  </header>
);

export default Toolbar;
