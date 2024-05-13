import React, {
  InputHTMLAttributes,
  TextareaHTMLAttributes,
  memo,
} from 'react';
import { ITextAreaProps } from './types';

type textAreaProps = ITextAreaProps & TextareaHTMLAttributes<HTMLInputElement>;

const TextArea: React.FC<ITextAreaProps> = ({
  title,
  placeholder,
  value,
  onChange,
  ...textAreaProps
}) => {
  return (
    <div className="mb-8">
      <p className="text-white">{title}</p>
      <textarea
        value={value}
        className="mt-2 resize-none outline-none w-full rounded-lg  py-4 px-5 flex-1"
        placeholder={placeholder}
        title="name"
        rows={3}
        {...textAreaProps}
      />
    </div>
  );
};

export default memo(TextArea);
