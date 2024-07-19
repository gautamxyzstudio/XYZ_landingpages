import Image from 'next/image';
import React, { memo } from 'react';
import { MOBILE_DEV } from '../../../../public/exporter';
type IServiceCardProps = {
  title: string;
  des: string;
};

const ServiceCard: React.FC<IServiceCardProps> = ({ title, des }) => {
  return (
    <div className="bg-[#272727] w-[48%]  max-w-prose border-1px border-[#272727] rounded-xl py-4 pl-4 pr-9">
      <div className="flex flex-row items-center">
        <Image
          className="bg-[#737170] p-2 w-12 h-12 rounded-lg"
          src={MOBILE_DEV}
          alt="Mobile"
        />
        <p className="ml-4 text-xl text-white font-medium">{title}</p>
      </div>
      <p className="mt-4 text-white text-16px leading-6">{des}</p>
    </div>
  );
};

export default memo(ServiceCard);
