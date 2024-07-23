/* eslint-disable react/no-unescaped-entities */
'use client';
import Button from '@/components/atoms/button';
import { chau_philomene } from '@/ui/fonts';
import React, { useRef, useState } from 'react';
import Image from 'next/image';

import BgCircles from '@/components/organisms/bgCircles';
import { CSSTransition } from 'react-transition-group';
import './about.css';
import { ASTRONAUT_SITTING } from '../../../../public/exporter';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
const About = () => {
  const [expanded, setExpanded] = useState(false);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const toggleExpand = () => {
    setExpanded(!expanded);
  };
  useGSAP(() => {
    gsap.to(imageRef.current, {
      yPercent: -5,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
      duration: 1.5,
    });
  });

  return (
    <div className="max-w-[1240px] overflow-hidden aboutMain relative py-8 pl-4 pr-4 sm:pr-4 lg:pr-0 sm:py-10 sm:pl-10 mx-6 sm:mx-20 bg-dark rounded-4xl">
      <div className="flex  flex-row justify-center  items-center">
        <h2
          className={`text-orange ${chau_philomene.className} text-xl leading-7  sm:text-2xl sm:leading-8 md:text-3xl md:text-10 lg:text-4xl lg:leading-44px `}
        >
          About Us
        </h2>
        <div className="block md:hidden">
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
        <div className="hidden md:block">
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
        <div className="hidden md:block">
          <h2 className="text-white text-xs leading-5 sm:text-xl sm:leading-6  md:text-2xl  md:leading-8 lg:text-3xl lg:leading-9 font-medium">
            Web App development Company
          </h2>
          <h2 className="text-white text-xs leading-5 sm:text-xl sm:leading-6  md:text-2xl  md:leading-8 lg:text-3xl lg:leading-9 font-medium">
            in Vancouver
          </h2>
        </div>
        <div className="md:hidden flex flex-row flex-wrap w-[50%]">
          <h2 className="text-white text-xs leading-5 sm:text-xl sm:leading-6  md:text-2xl  md:leading-8 lg:text-3xl lg:leading-9 font-medium">
            Web App development Company
          </h2>
          <h2 className="text-white text-xs leading-5 sm:text-xl sm:leading-6  md:text-2xl  md:leading-8 lg:text-3xl lg:leading-9 font-medium">
            in Vancouver
          </h2>
        </div>
      </div>

      <div className="mt-10 md:mt-[30px] items-center justify-between flex flex-row">
        <div className="w-full lg:w-6/12">
          <p className="text-white text-xs leading-5 sm:text-base  sm:leading-6 md:text-xl md:leading-6   lg:text-2xl lg:leading-36px font-regular">
            XYZ Studio is a leading website development company in Vancouver,
            specializing in dynamic, visually stunning websites and web
            applications. Focusing on innovation and performance, we start with
            enhancing our clients’ digital presence.
          </p>
          <p className="text-white text-xs leading-5 sm:text-base  sm:leading-6 md:text-xl md:leading-6   lg:text-2xl lg:leading-36px font-regular">
            Powering businesses with cutting-edge technology and seamless user
            experience from interactive web design to the web on top of complex
            developments, XYZ Studio's expertise extends the full range of
            digital solutions, delivering unparalleled results that drive
            business improvement.
          </p>
          <CSSTransition
            in={expanded}
            unmountOnExit
            timeout={300}
            classNames="expand"
          >
            <p className="text-white mt-6 text-xs additional-content  leading-5 sm:text-base  sm:leading-6 md:text-xl md:leading-6   lg:text-2xl lg:leading-36px font-regular">
              We crave a captivating website, a high-flying mobile app,
              streamlined web applications, or a powerful digital marketing
              strategy, our expertise is poised to manifest your celestial visit
            </p>
          </CSSTransition>
          <div className="mt-6">
            <Button
              width="sm:w-[180px]"
              height="sm:h-[48px]"
              widthSmall="w-[94px]"
              heightSmall="h-[32px]"
              buttonType={'black'}
              title={expanded ? 'Minimize' : 'Read More'}
              onPress={toggleExpand}
            />
          </div>
        </div>
        <div className="background-red hidden lg:block z-10 mr-[76px]">
          <Image
            ref={imageRef}
            src={ASTRONAUT_SITTING}
            alt="ASTRONAUT SITTING"
          />
        </div>
      </div>
      <BgCircles />
    </div>
  );
};

export default About;
