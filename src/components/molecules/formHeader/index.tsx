import { chau_philomene } from '@/ui/fonts';
import React from 'react';

const FormHeader = () => {
  return (
    <div className="flex w-full items-center justify-center flex-row">
      <p
        className={`text-orange ${chau_philomene.className} whitespace-nowrap font-bold text-4xl`}
      >
        Contact Us
      </p>
      <svg
        className="mx-6"
        width="4"
        height="78"
        viewBox="0 0 4 78"
        fill="none"
      >
        <path
          d="M2 1.71893V76.281"
          stroke="#F17C04"
          stroke-width="3.04335"
          stroke-linecap="round"
        />
      </svg>
      <div>
        <p className="text-white leading-38px text-3xl font-medium">
          Provide your detail
        </p>
        <p className="text-white leading-38px text-3xl font-medium">
          to join with our team
        </p>
      </div>
    </div>
  );
};

export default FormHeader;
