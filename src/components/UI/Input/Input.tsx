import React, { FC } from 'react';
import { InputType } from '../../../common/Types';

interface Props {
  inputType: InputType;
  label: string;
}

const Input: FC<Props> = props => {
  let inputElement = null;
  switch (props.inputType) {
    case InputType.INPUT:
      inputElement = <input {...props} />;
      break;
    case InputType.TEXTAREA:
      inputElement = <textarea {...props} />;
      break;
    default:
      inputElement = <input {...props} />;
  }

  return (
    <div>
      <label>{props.label}</label>
      {inputElement}
    </div>
  );
};
