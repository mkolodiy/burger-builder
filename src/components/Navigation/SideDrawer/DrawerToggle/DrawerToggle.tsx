import React, { FunctionComponent } from 'react';
import './DrawerToggle.scss';

interface Props {
  onClick: () => void;
}

const DrawerToggle: FunctionComponent<Props> = props => (
  <div className="drawer-toggle" onClick={props.onClick}>
    <div></div>
    <div></div>
    <div></div>
  </div>
);

export default DrawerToggle;
