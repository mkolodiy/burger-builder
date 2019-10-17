import React, { FunctionComponent } from 'react';
import { ButtonType } from '../../../common/Types';
import './Button.scss';

interface Props {
  onClick: () => void;
  type: ButtonType;
}

const Button: FunctionComponent<Props> = props => {
  const classes: string = [
    'button',
    props.type === ButtonType.SUCCESS ? 'button--success' : 'button--danger'
  ].join(' ');

  return (
    <button className={classes} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
