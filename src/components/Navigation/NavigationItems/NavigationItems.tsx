import React, { FunctionComponent } from 'react';
import { NavLink } from 'react-router-dom';
import NavigationItem from './NavigationItem/NavigationItem';
import './NavigationItems.scss';

const NavigationItems: FunctionComponent = () => (
  <ul className="navigation-items">
    <NavigationItem exact text="Burger Builder" link="/" />
    <NavigationItem text="Orders" link="/orders" />
  </ul>
);

export default NavigationItems;
