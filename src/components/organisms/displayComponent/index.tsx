import Image from 'next/image';
import React from 'react';
import {
  ASTRONAUT_HII,
  FRAME,
  MOBILE_VIDEO,
} from '../../../../public/exporter';
import YellowCircle from '@/components/atoms/yellowCircle';
import BackgroundCircles from '@/components/molecules/backgroundCircles';

const DisplayComponent = () => {
  return (
    <BackgroundCircles>
      <div className=" relative top-0  flex items-center justify-center w-full h-full ">
        <Image
          className="absolute  animate-[wiggle_2s_ease-in-out_infinite] top-0 left-9"
          src={ASTRONAUT_HII}
          alt="Astronaut hi"
        />
        <div className="absolute flex items-center overflow-hidden bottom-0 w-[382px] h-[722px]  z-[1]">
          <video
            className="absolute left-[-5px] rounded-[63px] top-[58px] w-full h-full"
            loop
            muted
            autoPlay
          >
            <source src={MOBILE_VIDEO} type="video/mp4" />
          </video>
          <Image
            className="absolute w-[367px] h-[722px] bottom-0"
            src={FRAME}
            alt=""
          />
        </div>
      </div>
    </BackgroundCircles>
  );
};

export default DisplayComponent;
