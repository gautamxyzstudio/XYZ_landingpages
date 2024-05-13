import React from 'react';
import { IButtonProps } from './types';

const Button: React.FC<IButtonProps> = ({
  width = 'w-full',
  height = 'h-14',
  title,
  buttonType,
}) => {
  const orange = `bg-orange shadow-button justify-center flex items-center rounded-md ${width} ${height} cursor-pointer`;
  const orangeButtonText = 'text-white text-xl font-medium';
  const black = `bg-black border-1px border-orange justify-center flex items-center rounded-md ${width} ${height} cursor-pointer`;
  const blackButtonText = 'text-orange text-xl font-medium';
  return (
    <div className={buttonType === 'black' ? black : orange}>
      <span
        className={buttonType === 'black' ? blackButtonText : orangeButtonText}
      >
        {title}
      </span>
    </div>
  );
};

export default Button;
