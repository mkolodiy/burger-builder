import React, { FunctionComponent } from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import './NavigationItems.scss';

const NavigationItems: FunctionComponent = () => (
  <ul className="navigation-items">
    <NavigationItem text="Burger Builder" link="/" active />
    <NavigationItem text="Checkout" link="/" />
  </ul>
);

export default NavigationItems;
