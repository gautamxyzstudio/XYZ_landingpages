import React from 'react';
import Image from 'next/image';
import { IDetailCardProps } from './types';
const DetailCard: React.FC<IDetailCardProps> = ({ title, icon }) => {
  return (
    <div className="flex w-80% flex-row items-center">
      <Image
        className="w-[14px]  h-[14px] sm:w-[16px] sm:h-[16px]"
        src={icon}
        alt="Address"
      />
      <p className="ml-2 text-xs leading-5 sm:text-base sm:leading-6 text-white font-semibold">
        {title}
      </p>
    </div>
  );
};

export default DetailCard;
