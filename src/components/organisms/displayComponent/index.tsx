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
      <div className=" relative top-0  flex items-center justify-center w-full h-full ">
        <Image
          className="absolute  animate-[wiggle_2s_ease-in-out_infinite] top-0 left-9"
          src={ASTRONAUT_HII}
          alt="Astronaut hi"
        />

        {type === 'mobile' && (
          <div className="absolute flex items-center overflow-hidden bottom-0 w-[382px] h-[722px]  z-[1]">
            <video
              className="absolute left-[-5px] rounded-[63px] top-[58px] w-full h-full"
              loop
              muted
              autoPlay
            >
              <source src={MOBILE_VIDEO} type="video/mp4" />
            </video>
            <Image className="absolute  bottom-0" src={FRAME} alt="" />
          </div>
        )}
        {type === 'website' && (
          <div className="absolute  flex flex-row justify-center items-center w-[700px]  h-[446px]">
            <video
              className="absolute  z-10 rounded-[20px] bottom-[10px]  w-[80%] h-full"
              loop
              muted
              autoPlay
            >
              <source src={WEBSITE_VIDEO} type="video/mp4" />
            </video>
            <Image className="absolute" src={LAPTOP_FRAME} alt="" />
          </div>
        )}
      </div>
    </BackgroundCircles>
  );
};

export default DisplayComponent;
