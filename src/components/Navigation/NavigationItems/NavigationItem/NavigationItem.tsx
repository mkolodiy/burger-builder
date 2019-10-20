import React, { FunctionComponent } from 'react';
import './NavigationItem.scss';

interface Props {
  text: string;
  link: string;
  active?: boolean;
}

const NavigationItem: FunctionComponent<Props> = props => (
  <li className="navigation-item">
    <a href={props.link} className={props.active ? 'active' : ''}>
      {props.text}
    </a>
  </li>
);

export default NavigationItem;
