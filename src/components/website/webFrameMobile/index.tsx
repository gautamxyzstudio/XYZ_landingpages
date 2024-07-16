import React from 'react';
import { LAPTOP_FRAME, WEBSITE_VIDEO } from '../../../../public/exporter';
import Image from 'next/image';

const WebFrameMobile = () => {
  return (
    <div className="flex px-[24px] relative top-0 left-0  w-full h-full flex-row justify-center items-center">
      <video
        playsInline
        className="absolute z-10 top-[5px] rounded-[20px] bottom-[5px]  w-[79%] h-[90%]"
        loop
        muted
        autoPlay
      >
        <source src={WEBSITE_VIDEO} type="video/mp4" />
      </video>
      <Image
        className="relative  top-0 left-0"
        priority
        src={LAPTOP_FRAME}
        alt=""
      />
    </div>
  );
};

export default WebFrameMobile;
