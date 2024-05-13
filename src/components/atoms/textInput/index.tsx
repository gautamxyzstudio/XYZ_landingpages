import React, { InputHTMLAttributes, memo } from 'react';
import { ITextInputProps } from './types';

type textInputProps = ITextInputProps & InputHTMLAttributes<HTMLInputElement>;

const TextInput: React.FC<ITextInputProps> = ({
  title,
  placeholder,
  value,
  onChange,
  ...textInputProps
}) => {
  return (
    <div className="mb-8">
      <p className="text-white">{title}</p>
      <input
        value={value}
        className="mt-2 outline-none w-full rounded-lg  py-4 px-5 flex-1"
        placeholder={placeholder}
        onChange={onChange}
        title="name"
        type="text"
        {...textInputProps}
      />
    </div>
  );
};

export default memo(TextInput);
