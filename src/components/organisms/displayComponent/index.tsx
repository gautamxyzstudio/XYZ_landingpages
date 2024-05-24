import Image from 'next/image';
import React from 'react';
import {
  ASTRONAUT_HII,
  FRAME,
  LAPTOP_FRAME,
  MOBILE_VIDEO,
  WEBSITE_VIDEO,
} from '../../../../public/exporter';
import BackgroundCircles from '@/components/molecules/backgroundCircles';
import { IDisplayComponentProps } from './types';

const DisplayComponent: React.FC<IDisplayComponentProps> = ({ type }) => {
  return (
    <BackgroundCircles>
      <div className="relative w-full flex items-center justify-center h-full ">
        <Image
          className="absolute w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px] xl:w-[400px] xl:h-[400px] animate-[wiggle_2s_ease-in-out_infinite] top-6  left-9 sm:left-11 md:left-[89px] lg:left-[177px] xl:left-[80px]"
          src={ASTRONAUT_HII}
          alt="Astronaut hi"
        />

        {type === 'mobile' && (
          <div className="absolute flex items-center overflow-hidden bottom-0 w-[195px] h-[394px]  sm:w-[250px] sm:h-[494px] md:w-[297px] md:h-[594px] lg:w-[335px] lg:h-[658px]   z-[1]">
            <video
              playsInline
              className="absolute top-[60px] rounded-[45px] md:rounded-[63px] sm:top-[65px] md:top-[89px] w-full h-full"
              loop
              muted
              autoPlay
            >
              <source src={MOBILE_VIDEO} type="video/mp4" />
            </video>
            <Image priority className="absolute  bottom-0" src={FRAME} alt="" />
          </div>
        )}
        {type === 'website' && (
          <div className="absolute  w-[90%] h-[90%] flex flex-row justify-center items-center">
            <video
              playsInline
              className="absolute  z-10 rounded-[20px] bottom-[5px]  w-[79%] h-full"
              loop
              muted
              autoPlay
            >
              <source src={WEBSITE_VIDEO} type="video/mp4" />
            </video>
            <Image priority className="absolute" src={LAPTOP_FRAME} alt="" />
          </div>
        )}
      </div>
    </BackgroundCircles>
  );
};

export default DisplayComponent;
