import React, { FC } from 'react';
import './NavigationItem.scss';
import { NavLink } from 'react-router-dom';

interface Props {
  text: string;
  link: string;
  active?: boolean;
}

const NavigationItem: FC<Props> = props => (
  <li className="navigation-item">
    <NavLink to={props.link}>{props.text}</NavLink>
  </li>
);

export default NavigationItem;
