import { chau_philomene } from '@/ui/fonts';
import React from 'react';

const FormHeader = () => {
  return (
    <div className="flex z-10 w-full items-center justify-center flex-row">
      <p
        className={`text-orange ${chau_philomene.className} text-xl  whitespace-nowrap font-bold sm:text-4xl`}
      >
        Contact Us
      </p>
      <div className="block sm:hidden">
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
      <div className="hidden sm:block">
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
        <p className="sm:text-white text-textBlack text-xs leading-5   sm:leading-38px sm:text-3xl font-medium">
          Provide your detail
        </p>
        <p className="sm:text-white text-textBlack text-xs leading-5   sm:leading-38px sm:text-3xl font-medium">
          to join with our team
        </p>
      </div>
    </div>
  );
};

export default FormHeader;
