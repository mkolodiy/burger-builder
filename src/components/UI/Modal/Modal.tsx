import React, { FC, Fragment } from 'react';
import './Modal.scss';
import Backdrop from '../Backdrop/Backdrop';

interface Props {
  display: boolean;
  onClose?: () => void;
}

const Modal: FC<Props> = props => {
  const styles = {
    transform: props.display ? 'translateY(0)' : 'translateY(-100vh)',
    opacity: props.display ? '1' : '0'
  };
  return (
    <Fragment>
      <Backdrop display={props.display} onClose={props.onClose} />
      <div className="modal" style={styles}>
        {props.children}
      </div>
    </Fragment>
  );
};

export default Modal;
