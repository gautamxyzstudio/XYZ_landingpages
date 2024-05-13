import { chau_philomene } from '@/ui/fonts';
import React from 'react';

const FormHeader = () => {
  return (
    <div className="flex flex-row items-center justify-center">
      <p
        className={`text-orange ${chau_philomene.className} whitespace-nowrap font-bold text-4xl`}
      >
        Contact Us
      </p>
      <svg
        className="md:mx-6"
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
      <div>
        <p className="text-white  leading-38px text-3xl font-medium">
          Provide your detail to join with our team
        </p>
      </div>
    </div>
  );
};

export default FormHeader;
