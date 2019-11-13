import React, { FC } from 'react';
import { ButtonType } from '../../../common/Types';
import './Button.scss';

interface Props {
  onClick?: () => void;
  type: ButtonType;
  disabled?: boolean;
}

const Button: FC<Props> = props => {
  const classes: string = [
    'button',
    props.type === ButtonType.SUCCESS ? 'button--success' : 'button--danger',
    props.disabled ? 'button_-disabled' : ''
  ].join(' ');

  return (
    <button
      className={classes}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
