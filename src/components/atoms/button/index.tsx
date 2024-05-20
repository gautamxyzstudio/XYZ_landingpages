import React from 'react';
import { IButtonProps } from './types';

const Button: React.FC<IButtonProps> = ({
  width = 'w-full',
  height = 'h-14',
  title,
  widthSmall = 'w-[94px]',
  heightSmall = 'h-[32px]',
  buttonType,
  onPress,
}) => {
  const orange = `bg-orange shadow-button justify-center flex items-center rounded-md ${widthSmall} ${heightSmall} ${width} ${height}`;
  const orangeButtonText =
    'text-white text-xs leading-5 sm:text-xl sm-leading-7 font-medium';
  const black = `bg-black border-1px border-orange justify-center flex items-center rounded-md ${widthSmall} ${heightSmall} ${width} ${height}`;
  const blackButtonText =
    'text-orange text-xs leading-5 sm:text-xl sm-leading-7 font-medium';
  return (
    <button
      onClick={onPress}
      style={{
        cursor: 'pointer',
        position: 'relative',
        zIndex: 10,
      }}
      className={buttonType === 'black' ? black : orange}
    >
      <span
        className={buttonType === 'black' ? blackButtonText : orangeButtonText}
      >
        {title}
      </span>
    </button>
  );
};

export default Button;
