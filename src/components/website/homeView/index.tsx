'use client';
/* eslint-disable react/no-unescaped-entities */
import Button from '@/components/atoms/button';
import Header from '@/components/atoms/header';
import { chau_philomene } from '@/ui/fonts';
import React, { useRef } from 'react';
import { UFO } from '../../../../public/exporter';
import Image from 'next/image';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const HomeView = () => {
  const headingRef = useRef<HTMLParagraphElement | null>(null);
  const subHeadingRef = useRef<HTMLParagraphElement | null>(null);
  const buttonDivRef = useRef<HTMLDivElement | null>(null);
  const ufoImageRef = useRef<HTMLImageElement | null>(null);
  const htmlSourceElement = useRef<HTMLDivElement | null>(null);
  const upperDivRef = useRef<HTMLDivElement | null>(null);
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.from(ufoImageRef.current, {
      bottom: 0,
      top: '100%',
      left: 0,
      delay: 1,
      opacity: 0,
      rotate: 0,
    });
    gsap.to(buttonDivRef.current, {
      opacity: 1,
      scale: 1,
      delay: 1,
      duration: 1.5,
      ease: 'power3.inOut',
    });
    gsap.to(headingRef.current, {
      opacity: 1,
      scale: 1,
      delay: 1,
      duration: 1.5,
      ease: 'power3.inOut',
    });
    gsap.to(subHeadingRef.current, {
      opacity: 1,
      delay: 1,
      scale: 1,
      duration: 1.5,
      ease: 'power3.inOut',
    });
    gsap.to(upperDivRef.current, {
      scrollTrigger: {
        trigger: '.website',
        start: 'top 65%',
        end: 'top 10%',
        scrub: 1,
      },
      filter: 'blur(8px)',
      scale: 0.5,
      opacity: 0,
    });
  });

  return (
    <div className="w-full  max-w-screen-2xl  mx-auto bg-opacity-0 relative">
      <div
        ref={upperDivRef}
        className="pl-[24px] hidden xl:block   pr-[24px] sm:pl-20  sm:pr-20 md:pl-20 md:pr-20 lg:pl-20 lg:pl-20"
      >
        <Header />
        <div>
          <Image
            ref={ufoImageRef}
            className="absolute rotate-45 top-[-3%] right-[100px]"
            src={UFO}
            alt="UFO"
          />
          <p
            ref={headingRef}
            className={`text-center mt-[6vh]  scale-[0.5] opacity-0 text-[7.39vh] leading-[10.43vh] text-white ${chau_philomene.className}`}
          >
            "Where <span className="text-orange">Imagination</span> Meets
            <br />
            Functionality: Exceptional Mobile App
            <br /> Development"
          </p>
          <p
            ref={subHeadingRef}
            className="mt-[3.91vh] hidden xl:block  text-center scale-[0.5] opacity-0  text-[2.6vh] leading-[3.91vh] text-white"
          >
            We bring together creative minds and technical prowess
            <br />
            to develop mobile apps that Engage users and
            <br />
            deliver measurable results for your business.
          </p>
          <div
            ref={buttonDivRef}
            className="mt-[3.91vh] mx-auto opacity-0   mb-[4.69vh]  flex flex-col items-center"
          >
            <Button
              width="sm:w-[12.5vw]"
              height="sm:h-[5.21vh]"
              widthSmall="w-[94px]"
              heightSmall="h-[32px]"
              onPress={() => console.log('Press')}
              buttonType={'orange'}
              title={'Get in touch'}
            />
          </div>
        </div>
      </div>
      <div className="pl-[24px] block xl:hidden  pr-[24px] sm:pl-20  sm:pr-20 md:pl-20 md:pr-20 lg:pl-20 lg:pl-20">
        <Header />
        <div>
          <p
            className={`text-center block xl:hidden mt-[81px] lg:mt-[110px]  text-[6vw] text-white ${chau_philomene.className}`}
          >
            "Where <span className="text-orange">Vision</span> Meets Reality,
            Your Brand Shines Bright!"
          </p>

          <p className="mt-[3.91vh] block xl:hidden  text-center  text-[2.1vh] leading-[3.1vh] text-white">
            Step into the cosmic realm of XYZ Studio, where creativity knows no
            bounds. Unlock the full potential of your business with our design,
            development, and promotion expertise.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeView;
