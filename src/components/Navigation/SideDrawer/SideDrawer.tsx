import React, { FC, Fragment } from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import './SideDrawer.scss';
import Backdrop from '../../UI/Backdrop/Backdrop';

interface Props {
  onClose: () => void;
  open: boolean;
}

const SideDrawer: FC<Props> = props => {
  const classes = ['side-drawer', props.open ? 'open' : 'close'].join(' ');

  return (
    <Fragment>
      <Backdrop display={props.open} onClose={props.onClose} />
      <div className={classes}>
        <div className="side-drawer__logo">
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Fragment>
  );
};

export default SideDrawer;
