import React, { FunctionComponent } from 'react';
import './Modal.scss';

const Modal: FunctionComponent = props => (
  <div className="modal">{props.children}</div>
);

export default Modal;
