import { DOMAttributes } from 'react';

export type IButtonProps = {
  width?: string;
  widthSmall?: string;
  height?: string;
  heightSmall?: string;
  buttonType: 'orange' | 'black';
  title: string;
  onPress: () => void;
};
