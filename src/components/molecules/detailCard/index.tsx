import React from 'react';
import Image from 'next/image';
import { IDetailCardProps } from './types';
const DetailCard: React.FC<IDetailCardProps> = ({ title, icon }) => {
  return (
    <div className="flex w-80% flex-row items-center">
      <Image src={icon} alt="Address" />
      <p className="ml-2 text-white font-semibold">{title}</p>
    </div>
  );
};

export default DetailCard;
