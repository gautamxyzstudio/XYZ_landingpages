import { HTMLAttributes } from 'react';

export type IModalTextInputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  title: string;
};
