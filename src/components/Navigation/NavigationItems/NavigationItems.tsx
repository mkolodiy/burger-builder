import React, { FunctionComponent } from 'react';
import { NavLink } from 'react-router-dom';
import NavigationItem from './NavigationItem/NavigationItem';
import './NavigationItems.scss';

const NavigationItems: FunctionComponent = () => (
  <ul className="navigation-items">
    <NavigationItem text="Burger Builder" link="/" active />
  </ul>
);

export default NavigationItems;
