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
  valid: boolean;
  shouldValidate: boolean;
  onChange: (event: any) => void;
}

const Input: FC<Props> = props => {
  let inputElement = null;
  const classes = ['input__element'];

  if (!props.valid && props.shouldValidate) {
    classes.push('input__element--invalid');
  }

  const classesAsString = classes.join(' ');

  switch (props.elementType) {
    case InputType.INPUT:
      inputElement = (
        <input
          className={classesAsString}
          {...props.elementConfig}
          value={props.elementValue}
          onChange={props.onChange}
        />
      );
      break;
    case InputType.TEXTAREA:
      inputElement = (
        <textarea
          className={classesAsString}
          {...props.elementConfig}
          value={props.elementValue}
          onChange={props.onChange}
        />
      );
      break;
    case InputType.SELECT:
      inputElement = (
        <select
          className={classesAsString}
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
          className={classesAsString}
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
