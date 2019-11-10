import React, { FC } from 'react';
import './DrawerToggle.scss';

interface Props {
  onClick: () => void;
}

const DrawerToggle: FC<Props> = props => (
  <div className="drawer-toggle" onClick={props.onClick}>
    <div></div>
    <div></div>
    <div></div>
  </div>
);

export default DrawerToggle;
