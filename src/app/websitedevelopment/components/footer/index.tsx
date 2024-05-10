import React from 'react';
import Image from 'next/image';
import { LOGO_WHITE, POSITION } from '../../../../../public/exporter';
import { getCurrentYear } from '@/utility/contants';
import DetailCard from '@/components/molecules/detailCard';
import { footerDetails } from './types';
const Footer = () => {
  const currentYear = getCurrentYear();
  return (
    <div className="bg-dark flex-wrap py-12 md:px-20 flex justify-between flex-row">
      <div>
        <Image src={LOGO_WHITE} alt="LOGO" />
        <p className="mt-30px text-silverText  font-regular text-sm">
          {`Copyright © ${currentYear} The XYZ Studio`}
        </p>
        <p className="mt-3 text-silverText font-regular text-sm">
          All rights reserved
        </p>
      </div>
      <div>
        <p className="mb-6 text-white text-xl">Quick Links</p>
        <p className="mt-3 text-silverText font-regular text-sm cursor-pointer">
          About us
        </p>

        <p className="mt-3 text-silverText font-regular text-sm cursor-pointer">
          Services
        </p>

        <p className="mt-3 text-silverText font-regular text-sm cursor-pointer">
          Contact us
        </p>
      </div>
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
    </div>
  );
};

export default Footer;
