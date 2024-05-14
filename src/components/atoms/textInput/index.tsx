import React, { InputHTMLAttributes, memo } from 'react';
import { ITextInputProps } from './types';

const TextInput: React.FC<ITextInputProps> = ({
  title,
  placeholder,
  value,
  containerStylesClasses,
  titleStylesClasses,
  inputStylesClasses,
  onChange,
  ...textInputProps
}) => {
  return (
    <div className={`mb-8 ${containerStylesClasses}!`}>
      <p className={`text-white text-[16px] leading-5 font-medium`}>{title}</p>
      <input
        value={value}
        className={`mt-2 outline-none w-full rounded-lg  py-4 px-5 flex-1 ${inputStylesClasses}`}
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
