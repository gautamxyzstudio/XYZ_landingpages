import React from 'react';
import Image from 'next/image';
import { chau_philomene } from '@/ui/fonts';
import { IInfoCardProps } from './types';
const InfoCard: React.FC<IInfoCardProps> = ({ icon, title, count, alt }) => {
  return (
    <div className="flex w-max  items-center px-6 py-4 ">
      <Image
        className="h-[42px] w-[42px]  md:w-[56px] md:h-[56px]"
        src={icon}
        alt={alt}
      />
      <div className="ml-2 sm:ml-4">
        <p
          className={`text-white ${chau_philomene.className} text-[20px]  md:text-40px leading-[28px] md:leading-40px`}
        >
          {count}
        </p>
        <p className="text-grey text-[12px] leading-[20px] md:text-xl weight-400 md:leading-28px">
          {title}
        </p>
      </div>
    </div>
  );
};

export default InfoCard;
