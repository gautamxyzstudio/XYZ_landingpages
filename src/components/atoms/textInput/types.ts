import { HTMLAttributes } from 'react';

export type ITextInputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  title: string;
  containerStylesClasses?: string | undefined;
  titleStylesClasses?: string | undefined;
  inputStylesClasses?: string | undefined;
};
