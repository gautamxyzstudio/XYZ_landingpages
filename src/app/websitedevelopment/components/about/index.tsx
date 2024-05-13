/* eslint-disable react/no-unescaped-entities */
import Button from '@/components/atoms/button';
import { chau_philomene } from '@/ui/fonts';
import React from 'react';
import Image from 'next/image';
import { ASTRONAUT_SITTING } from '../../../../../public/exporter';
import BgCircles from '@/components/organisms/bgCircles';

const About = () => {
  return (
    <div className="flex-1 overflow-hidden relative md:py-10 md:pl-10 md:mx-20 bg-dark rounded-4xl">
      <div className="flex flex-row justify-center  items-center">
        <p
          className={`text-orange ${chau_philomene.className} font-bold leading-44px text-4xl`}
        >
          About Us
        </p>
        <svg
          className="md:mx-6"
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
        <div>
          <p className="text-white  leading-38px text-3xl font-medium">
            Cosmic Companion in the
          </p>
          <p className="text-white  leading-38px text-3xl font-medium">
            Digital Odyssey
          </p>
        </div>
      </div>
      <div className="md:mt-29px items-center justify-between flex flex-row">
        <div className="w-6/12">
          <p className="text-white text-2xl leading-36px font-regular">
            XYZ Studio transcends the traditional digital agency; we're your
            cosmic companion in the digital odyssey.
          </p>
          <p className="text-white text-2xl leading-36px mt-4 font-regular">
            We crave a captivating website, a high-flying mobile app,
            streamlined web applications, or a powerful digital marketing
            strategy, our expertise is poised to manifest your celestial visit
          </p>
          <div className="mt-6">
            <Button width="w-180px" buttonType={'black'} title={'Learn More'} />
          </div>
        </div>
        <div className="background-red z-10 mr-[76px]">
          <Image src={ASTRONAUT_SITTING} alt="ASTRONAUT SITTING" />
        </div>
      </div>

      <BgCircles />
    </div>
  );
};

export default About;
