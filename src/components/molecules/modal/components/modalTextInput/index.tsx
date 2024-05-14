import React, { InputHTMLAttributes, memo } from 'react';
import { IModalTextInputProps } from './types';

const ModalTextInput: React.FC<IModalTextInputProps> = ({
  title,
  placeholder,
  value,

  onChange,
  ...textInputProps
}) => {
  return (
    <div className={`mb-4`}>
      <p className={`text-blackText text-[16px] leading-5 font-medium`}>
        {title}
      </p>
      <input
        value={value}
        className={`mt-2 border-[1px] h-[40px] border-[#DBDBDB] outline-none w-full rounded-lg  py-2 px-2 flex-1`}
        placeholder={placeholder}
        onChange={onChange}
        title="name"
        type="text"
        {...textInputProps}
      />
    </div>
  );
};

export default memo(ModalTextInput);
