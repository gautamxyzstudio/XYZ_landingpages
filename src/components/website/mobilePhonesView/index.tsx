'use client';

import React from 'react';
import Mobile from '../mobile';
import Image from 'next/image';
import { MOBILE_SEC, MOBILE_THIRD } from '../../../../public/exporter';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const MobilePhoneView = () => {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.to('.phoneOne', {
      scrollTrigger: {
        trigger: '.mobileDiv',
        start: 'top 50%',
        end: 'top 10%',
        scrub: true,
      },
      x: '23.26vw',
    });
    gsap.to('.phoneThird', {
      scrollTrigger: {
        trigger: '.mobileDiv',
        start: 'top 50%',
        end: 'top 10%',
        scrub: 1,
      },
      x: '-23.26vw',
    });

    gsap.to('.mobileDiv', {
      opacity: 1,
      duration: 2,
      ease: 'power3.inOut',
    });
    gsap.to('.mobileDiv', {
      scrollTrigger: {
        trigger: '.about',
        start: 'top 100%',
        end: 'top 0%',
        scrub: 1,
        pin: '.mobileDiv',
        pinSpacing: false,
      },
      filter: 'blur(10px)',
      scale: 0.8,
      ease: 'power3.inOut',
    });
    gsap.to('.about', {
      scrollTrigger: {
        trigger: '.platform',
        start: 'top 100%',
        end: 'top 0%',
        scrub: 1,
        pin: '.about',
        pinSpacing: false,
      },
      ease: 'power3.inOut',
    });
  });
  return (
    <div className="w-screen   relative gap-8 h-screen mobileMain flex flex-row items-center justify-center bg-contain">
      <Image
        className="phoneOne  w-[20.8vw] h-[67.52vh] phone absolute z-10"
        src={MOBILE_SEC}
        alt=""
      />
      <div className="relative  phone z-30">
        <Mobile height={'h-[88.26vh]'} width={'w-[29.51vw]'} />
      </div>
      <Image
        className="phoneThird  w-[20.8vw] h-[67.52vh] phone absolute z-10"
        src={MOBILE_THIRD}
        alt=""
      />
    </div>
  );
};

export default MobilePhoneView;
