import React from 'react';
import Image from 'next/image';

import { getCurrentYear } from '@/utility/contants';
import DetailCard from '@/components/molecules/detailCard';
import { footerDetails } from './types';
import { LOGO_WHITE } from '../../../../public/exporter';
const Footer = () => {
  const currentYear = getCurrentYear();
  return (
    <div className="bg-dark flex-wrap justify-start py-6 px-6 sm:py-12 sm:px-20 flex sm:justify-between flex-row">
      <div className="hidden sm:block">
        <Image
          className="w-6 h-6  sm:w-41 sm:h-41"
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
      <div>
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
      <div>
        {footerDetails.map((details, index) => {
          const isLast = footerDetails.length - 1 === index;
          const style = isLast ? 'mb-0' : 'mb-7';
          return (
            <div className={style} key={index}>
              <DetailCard icon={details.icon} title={details.title} />
            </div>
          );
        })}
      </div>
      <div className="block w-full sm-hidden">
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
