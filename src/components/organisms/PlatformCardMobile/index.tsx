import Image from 'next/image';
import React from 'react';
import { PLATFORM } from '../../../../public/exporter';

const PlatformCardMobile = () => {
  return (
    <div className="rounded-[12px] shadow-custom  flex flex-col bg-[#272727] justify-center items-center p-6">
      <Image width={123} height={68} src={PLATFORM} alt="" />
      <p className="text-white text-center my-4 font-semibold text-base">
        Native Mobile App Development
      </p>
      <p className="text-white text-center text-xs leading-5">
        Our mobile app developers build top-quality native apps for both iOS and
        Android systems aligned with your business needs. Our mobile app
        developers build top-quality native apps for both iOS and Android
        systems aligned with your business needs
      </p>
    </div>
  );
};

export default PlatformCardMobile;
