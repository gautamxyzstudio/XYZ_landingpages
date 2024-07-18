import React from 'react';
import Image from 'next/image';

import { getCurrentYear } from '@/utility/contants';
import DetailCard from '@/components/molecules/detailCard';
import { footerDetails } from './types';
import { LOGO_WHITE } from '../../../../public/exporter';
const Footer = () => {
  const currentYear = getCurrentYear();
  return (
    <div className="flex-wrap  mx-auto max-w-[1440px]    py-6 px-6 sm:py-12 sm:px-20 flex sm:justify-between flex-row">
      <div className="hidden sm:block">
        <Image
          className="w-[41px] h-[41px]  sm:w-41 sm:h-41"
          src={LOGO_WHITE}
          alt="LOGO"
        />
        <p className="mt-30px text-silverText  font-regular text-sm">
          {`Copyright © ${currentYear} The XYZ Studio`}
        </p>
        <p className="mt-3 text-silverText font-regular text-sm">
          All rights reserved
        </p>
      </div>
      <div className="text-center">
        <p className="mb-[4px] font-semibold sm:mb-6 text-base text-white sm:text-xl">
          Quick Links
        </p>
        <p className="mt-2 sm:mt-3  text-xs text-silverText font-regular sm:text-sm cursor-pointer">
          About us
        </p>
        <p className="mt-2 sm:mt-3 text-xs text-silverText font-regular sm:text-sm cursor-pointer">
          Services
        </p>
        <p className="mt-2 sm:mt-3 text-silverText text-xs font-regular sm:text-sm cursor-pointer">
          Contact us
        </p>
      </div>
      <div className="block sm:hidden w-full my-4 h-[1px] bg-[#383838]" />
      <div className="flex flex-col items-start  lg:items-end gap-y-[28px]">
        {footerDetails.map((details, index) => (
          <DetailCard
            key={details.id}
            icon={details.icon}
            title={details.title}
          />
        ))}
      </div>
      <div className="block w-full sm:hidden">
        <div className="block sm:hidden w-full my-4 h-[1px] bg-[#383838]" />
        <p className="text-silverText text-xs  font-regular text-sm">{`Copyright © ${currentYear} The XYZ Studio`}</p>
        <p className="text-silverText text-xs  mt-2 font-regular text-sm">
          All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
