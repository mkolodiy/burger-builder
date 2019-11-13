import React, { FC } from 'react';
import burgerLogo from '../../assets/images/burger-logo.png';
import './Logo.scss';
import { Link } from 'react-router-dom';

const Logo: FC = () => (
  <div className="logo">
    <Link to="/">
      <img src={burgerLogo} alt="MyBurger" />
    </Link>
  </div>
);

export default Logo;
