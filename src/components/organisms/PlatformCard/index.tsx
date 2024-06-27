import Image from 'next/image';
import React from 'react';
import { PLATFORM } from '../../../../public/exporter';

const PlatformCard = () => {
  return (
    <div className="bg-white h-[284px] cursor-pointer relative flex-1 px-20 rounded-lg shadow-custom py-[30px] transition-flex duration-450 hover:flex-3">
      <div className="flex flex-col items-center justify-center h-full">
        <Image width={230} height={138} src={PLATFORM} alt="" />
        <p className="mt-6 text-2xl text-center font-semibold line-clamp-2">
          Native Mobile App Development
        </p>
      </div>
      <div className="absolute inset-0 opacity-0 hover:opacity-100 px-6 flex justify-center items-center rounded-lg bg-black bg-opacity-90 transition-opacity duration-450">
        <p className="text-white text-xl leading-9">
          Our mobile app developers build top-quality native apps for both iOS
          and Android systems aligned with your business needs
        </p>
      </div>
    </div>
  );
};

export default PlatformCard;
