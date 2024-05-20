/* eslint-disable react/no-unescaped-entities */
import Button from '@/components/atoms/button';
import { chau_philomene } from '@/ui/fonts';
import React from 'react';
import Image from 'next/image';
import { ASTRONAUT_SITTING } from '../../../../../public/exporter';
import BgCircles from '@/components/organisms/bgCircles';

const About = () => {
  return (
    <div className="max-w-[1240px] overflow-hidden relative py-8 pl-4 pr-4 sm:pr-4 md:pr-0 sm:py-10 sm:pl-10 mx-6 sm:mx-20 bg-dark rounded-4xl">
      <div className="flex   flex-row justify-center  items-center">
        <p
          className={`text-orange ${chau_philomene.className} text-xl sm:text-3xl md:text-4xl leading-7 sm:leading-10 md:leading-44px `}
        >
          About Us
        </p>
        <div className="block sm:hidden">
          <svg
            className="mx-3 sm-20 md:mx-6"
            xmlns="http://www.w3.org/2000/svg"
            width="2"
            height="42"
            viewBox="0 0 2 42"
            fill="none"
          >
            <path
              d="M1 1V41"
              stroke="#F17C04"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </div>
        <div className="hidden sm:block">
          <svg
            className="mx-3 sm-20 md:mx-6"
            xmlns="http://www.w3.org/2000/svg"
            width="4"
            height="102"
            viewBox="0 0 4 102"
            fill="none"
          >
            <path
              d="M2 2V100"
              stroke="#F17C04"
              stroke-width="4"
              stroke-linecap="round"
            />
          </svg>
        </div>
        <div>
          <p className="text-white text-xs leading-5 sm:text-2xl sm:leading-8  md:leading-38px md:text-3xl font-medium">
            Cosmic Companion in the
          </p>
          <p className="text-white text-xs leading-5 sm:text-2xl sm:leading-8  md:leading-38px md:text-3xl font-medium">
            Digital Odyssey
          </p>
        </div>
      </div>
      <div className="mt-10 sm:mt-[30px] items-center justify-between flex flex-row">
        <div className="w-full  sm:w-6/12">
          <p className="text-white text-xs leading-5 sm:text-base  sm:leading-6  md:text-2xl md:leading-36px font-regular">
            XYZ Studio transcends the traditional digital agency; we're your
            cosmic companion in the digital odyssey.
          </p>
          <p className="text-white mt-2  sm:mt-4 text-xs leading-5 sm:text-base  sm:leading-6  md:text-2xl md:leading-36px font-regular">
            We crave a captivating website, a high-flying mobile app,
            streamlined web applications, or a powerful digital marketing
            strategy, our expertise is poised to manifest your celestial visit
          </p>
          <div className="mt-6">
            <Button
              width="sm:w-[180px]"
              height="sm:h-[56px]"
              widthSmall="w-[94px]"
              heightSmall="h-[32px]"
              buttonType={'black'}
              title={'Learn More'}
              onPress={function (): void {
                throw new Error('Function not implemented.');
              }}
            />
          </div>
        </div>
        <div className="background-red hidden sm:block z-10 mr-[76px]">
          <Image src={ASTRONAUT_SITTING} alt="ASTRONAUT SITTING" />
        </div>
      </div>
      <BgCircles />
    </div>
  );
};

export default About;
