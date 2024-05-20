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
    <div className={` mb-8 sm:mb-10  ${containerStylesClasses}!`}>
      <p
        className={`text-[#868686] text-[12px] sm:text-[16px]   sm:leading-5 font-medium`}
      >
        {title}
      </p>
      <input
        value={value}
        className={` mt-1 sm:mt-2 outline-none w-full text-white bg-transparent border-b-[1px] border-b-inputGrey  pb-1 pr-5 flex-1 ${inputStylesClasses}`}
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
