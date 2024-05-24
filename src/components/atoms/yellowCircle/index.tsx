import React from 'react';
import { IYellowCircleProps } from './types';

const YellowCircle: React.FC<IYellowCircleProps> = ({
  top = undefined,
  left = undefined,
  right = undefined,
  bottom = undefined,
  animation = undefined,
}) => {
  return (
    <div
      className={`absolute ${top} ${right} ${left} ${bottom} bg-yellow  w-[40px] h-[40px]  sm:w-[40px] sm:h-[40px]  md:w-[50px] md:h-[50px] lg:w-66px lg:h-66px rounded-full ${animation} `}
    />
  );
};

export default YellowCircle;
