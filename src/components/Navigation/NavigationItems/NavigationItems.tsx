import React, { FunctionComponent } from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import './NavigationItems.scss';

const NavigationItems: FunctionComponent = () => (
  <ul className="navigation-items">
    <NavigationItem exact text="Burger Builder" link="/" />
    <NavigationItem text="Orders" link="/orders" />
  </ul>
);

export default NavigationItems;
