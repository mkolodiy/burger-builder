import React, { FunctionComponent } from 'react';
import './Backdrop.scss';

interface Props {
  display: boolean;
  onClose: () => void;
}

const Backdrop: FunctionComponent<Props> = props =>
  props.display ? (
    <div className="backdrop" onClick={props.onClose}></div>
  ) : null;

export default Backdrop;
