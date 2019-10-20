import React, { FunctionComponent } from 'react';
import './Toolbar.scss';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

interface Props {}

const Toolbar: FunctionComponent<Props> = props => (
  <header className="toolbar">
    <div>MENU</div>
    <div className="toolbar__logo">
      <Logo />
    </div>
    <nav className="toolbar__desktop-only">
      <NavigationItems />
    </nav>
  </header>
);

export default Toolbar;
