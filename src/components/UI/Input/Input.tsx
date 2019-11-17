import React, { FC } from 'react';
import { InputType } from '../../../common/Types';
import './Input.scss';

interface Props {
  label: string | undefined;
  elementType: InputType;
  elementConfig: {};
  elementValue: any;
}

const Input: FC<Props> = props => {
  let inputElement = null;
  switch (props.elementType) {
    case InputType.INPUT:
      inputElement = (
        <input
          className="input__element"
          {...props.elementConfig}
          value={props.elementValue}
        />
      );
      break;
    case InputType.TEXTAREA:
      inputElement = (
        <textarea
          className="input__element"
          {...props.elementConfig}
          value={props.elementValue}
        />
      );
      break;
    default:
      inputElement = (
        <input
          className="input__element"
          {...props.elementConfig}
          value={props.elementValue}
        />
      );
  }

  return (
    <div className="input">
      <label className="input__label">{props.label}</label>
      {inputElement}
    </div>
  );
};

export default Input;
