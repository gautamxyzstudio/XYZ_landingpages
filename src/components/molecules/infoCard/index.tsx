import React from 'react';
import Image from 'next/image';
import { chau_philomene } from '@/ui/fonts';
import { IInfoCardProps } from './types';
const InfoCard: React.FC<IInfoCardProps> = ({ icon, title, count, alt }) => {
  return (
    <div className="flex w-max  items-center px-6 py-4 ">
      <Image src={icon} alt={alt} />
      <div className="ml-4">
        <p
          className={`text-dark ${chau_philomene.className} text-40px leading-40px`}
        >
          {count}
        </p>
        <p className="text-grey text-xl weight-400 leading-28px">{title}</p>
      </div>
    </div>
  );
};

export default InfoCard;
