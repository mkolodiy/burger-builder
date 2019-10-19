import React, { FunctionComponent } from 'react';
import './Toolbar.scss';

interface Props {}

const Toolbar: FunctionComponent<Props> = props => (
  <header className="toolbar">
    <div>MENU</div>
    <div>LOGO</div>
    <nav>...</nav>
  </header>
);

export default Toolbar;
