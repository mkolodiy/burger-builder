import React, { FC } from 'react';
import { InputType } from '../../../common/Types';
import './Input.scss';

interface ElementConfigOptions {
  value: string;
  displayValue: string;
}

interface ElementConfig {
  type?: string;
  placeholder?: string;
  options?: ElementConfigOptions[];
}

interface Props {
  label: string | undefined;
  elementType: InputType;
  elementConfig: ElementConfig;
  elementValue: string;
  onChange: (event: any) => void;
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
          onChange={props.onChange}
        />
      );
      break;
    case InputType.TEXTAREA:
      inputElement = (
        <textarea
          className="input__element"
          {...props.elementConfig}
          value={props.elementValue}
          onChange={props.onChange}
        />
      );
      break;
    case InputType.SELECT:
      inputElement = (
        <select
          className="input__element"
          value={props.elementValue}
          onChange={props.onChange}
        >
          {props.elementConfig.options &&
            props.elementConfig.options.map(option => (
              <option key={option.value} value={option.value}>
                {option.displayValue}
              </option>
            ))}
        </select>
      );
      break;
    default:
      inputElement = (
        <input
          className="input__element"
          {...props.elementConfig}
          value={props.elementValue}
          onChange={props.onChange}
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
