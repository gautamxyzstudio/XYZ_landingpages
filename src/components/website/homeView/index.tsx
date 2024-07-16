'use client';
/* eslint-disable react/no-unescaped-entities */
import Button from '@/components/atoms/button';
import Header from '@/components/atoms/header';
import { chau_philomene } from '@/ui/fonts';
import React, { useRef } from 'react';
import {
  FRAME,
  HOME_BG_VIDEO,
  MOBILE_THIRD,
  UFO,
} from '../../../../public/exporter';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import styles from './styles.module.css';

const HomeView = () => {
  const headingRef = useRef<HTMLParagraphElement | null>(null);
  const subHeadingRef = useRef<HTMLParagraphElement | null>(null);
  const buttonDivRef = useRef<HTMLDivElement | null>(null);
  const ufoImageRef = useRef<HTMLImageElement | null>(null);
  const htmlSourceElement = useRef<HTMLDivElement | null>(null);
  const upperDivRef = useRef<HTMLDivElement | null>(null);
  const subHeadingSmallRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    gsap.from(ufoImageRef.current, {
      bottom: 0,
      top: '100%',
      left: 0,
      opacity: 0,
      rotate: 0,
    });
    gsap.to(buttonDivRef.current, {
      opacity: 1,
      scale: 1,
      duration: 1.5,
      ease: 'power3.inOut',
    });
    gsap.to(headingRef.current, {
      opacity: 1,
      scale: 1,
      duration: 1.5,
      ease: 'power3.inOut',
    });
    gsap.to(subHeadingRef.current, {
      opacity: 1,
      scale: 1,
      duration: 1.5,
      ease: 'power3.inOut',
    });
    gsap.to(subHeadingSmallRef.current, {
      opacity: 1,
      scale: 1,
      duration: 1.5,
      ease: 'power3.inOut',
    });
  });

  return (
    <div className="w-full bg-opacity-0 main relative">
      <div
        ref={upperDivRef}
        className="pl-[24px] md:h-screen  pr-[24px] sm:pl-20  sm:pr-20 md:pl-20 md:pr-20 lg:pl-20 lg:pl-20  top-0 "
      >
        <Header />
        <div className="flex flex-col items-center">
          <Image
            ref={ufoImageRef}
            className="absolute hidden md:block  rotate-45 top-[-3%] right-[100px]"
            src={UFO}
            alt="UFO"
          />
          <p
            ref={headingRef}
            className={`text-center hidden md:block mt-[81px] lg:mt-[110px] scale-[0.5] opacity-0 text-[20px]  md-text-[66px]  text-[68px] leading-[96px] text-white ${chau_philomene.className}`}
          >
            "Where <span className="text-orange">Vision</span> Meets
            <br />
            Reality, Your Brand Shines
            <br /> Bright!"
          </p>
          <p
            className={`text-center block md:hidden mt-[81px] lg:mt-[110px]   text-[20px] text-[24px] sm:text-[44px]  leading-[32px] sm:leading-[52px]  text-white ${chau_philomene.className}`}
          >
            "Where <span className="text-orange">Vision</span> Meets Reality,
            Your Brand Shines Bright!"
          </p>
          <p
            ref={subHeadingRef}
            className="mt-9  hidden md:block  text-center scale-[0.5] opacity-0  text-2xl text-white"
          >
            Step into the cosmic realm of XYZ Studio, where creativity
            <br />
            knows no bounds. Unlock the full potential of your business with our
            design,
            <br />
            development, and promotion expertise.
          </p>
          <p className="mt-4 md:mt-6  block md:hidden text-base md:text-xl text-center  text-white">
            Step into the cosmic realm of XYZ Studio, where creativity knows no
            bounds. Unlock the full potential of your business with our design,
            development, and promotion expertise.
          </p>
          <div
            ref={buttonDivRef}
            className="mt-9  hidden md:block  opacity-0 scale-[0.5] flex flex-col items-center"
          >
            <Button
              width="sm:w-[180px]"
              height="sm:h-[48px]"
              widthSmall="w-[94px]"
              heightSmall="h-[32px]"
              onPress={() => console.log('Press')}
              buttonType={'orange'}
              title={'Get in touch'}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeView;
