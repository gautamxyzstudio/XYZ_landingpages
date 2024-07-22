import { chau_philomene } from '@/ui/fonts';
import React from 'react';
import { IFormHeaderProps } from './types';

const FormHeader: React.FC<IFormHeaderProps> = ({
  title,
  secondarySubTitle,
  subtitle,
}) => {
  return (
    <div className="flex z-10 w-full items-center justify-center flex-row">
      <h2
        className={`text-orange ${chau_philomene.className} text-xl sm:text-xl md:text-2xl lg:text-3xl whitespace-nowrap font-bold xl:text-4xl`}
      >
        {title ?? 'Contact Us'}
      </h2>
      <div className="block lg:hidden">
        <svg
          className="mx-3 sm-20 md:mx-6"
          xmlns="http://www.w3.org/2000/svg"
          width="2"
          height="42"
          viewBox="0 0 2 42"
          fill="none"
        >
          <path
            d="M1 1V41"
            stroke="#F17C04"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
      </div>
      <div className="hidden lg:block">
        <svg
          className="mx-3 sm-20 md:mx-6"
          xmlns="http://www.w3.org/2000/svg"
          width="4"
          height="102"
          viewBox="0 0 4 102"
          fill="none"
        >
          <path
            d="M2 2V100"
            stroke="#F17C04"
            stroke-width="4"
            stroke-linecap="round"
          />
        </svg>
      </div>
      <div>
        <p className="md:text-white text-white text-xs sm:text-sm md:text-base lg:text-lg  xl:text-3xl font-medium">
          {subtitle ?? 'Provide your detail'}
        </p>
        <p className="md:text-white text-white  text-xs sm:text-sm md:text-base lg:text-lg   xl:text-3xl  font-medium">
          {secondarySubTitle ?? 'to join with our team'}
        </p>
      </div>
    </div>
  );
};

export default FormHeader;
