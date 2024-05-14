import React from 'react';
import { IYellowCircleProps } from './types';

const YellowCircle: React.FC<IYellowCircleProps> = ({
  top = undefined,
  left = undefined,
  right = undefined,
  bottom = undefined,
}) => {
  return (
    <div
      className={`absolute ${top} ${right} ${left} ${bottom} bg-yellow w-66px h-66px rounded-full `}
    />
  );
};

export default YellowCircle;
