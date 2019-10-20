import React, { FunctionComponent } from 'react';
import burgerLogo from '../../assets/images/burger-logo.png';
import './Logo.scss';

const Logo: FunctionComponent = () => (
  <div className="logo">
    <img src={burgerLogo} alt="MyBurger" />
  </div>
);

export default Logo;
