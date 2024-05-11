import Image from 'next/image';
import React from 'react';
import { MOBILE_DEV } from '../../../../public/exporter';

const ServiceCard = () => {
  return (
    <div className="bg-white max-w-prose border-1px border-borderGrey rounded-xl py-4 pl-4 pr-9">
      <div className="flex flex-row items-center">
        <Image
          className="bg-primary p-2 w-12 h-12 rounded-lg"
          src={MOBILE_DEV}
          alt="Mobile"
        />
        <p className="ml-4 text-xl text-blackText font-medium">Website</p>
      </div>
      <p className="mt-4 text-16px leading-6">
        Our approach to website creation ensures that your website not only
        looks great but also delivers exceptional functionality.
      </p>
    </div>
  );
};

export default ServiceCard;
