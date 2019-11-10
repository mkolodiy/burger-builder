import React, { FC } from 'react';
import './Backdrop.scss';

interface Props {
  display: boolean;
  onClose?: () => void;
}

const Backdrop: FC<Props> = props =>
  props.display ? (
    <div className="backdrop" onClick={props.onClose}></div>
  ) : null;

export default Backdrop;
