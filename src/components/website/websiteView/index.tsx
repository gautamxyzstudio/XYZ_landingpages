'use client';
import React from 'react';
import WebsiteModal from '../websiteModal';
import { DESK_ONE, DESK_TWO, WEBSITE_VIDEO } from '../../../../public/exporter';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const WebsiteView = () => {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.set('.webOne', {
      rotate: -35,
      bottom: 0,
      left: '-17vw',
    });
    gsap.set('.webTwo', {
      rotate: 35,
      bottom: 0,
      right: '-17vw',
    });
    gsap.to('.webOne', {
      scrollTrigger: {
        trigger: '.website',
        start: 'top 65%',
        end: 'top 10%',
        markers: true,
        scrub: true,
      },
      rotate: -5,
      duration: 1,
      bottom: '45%',
      left: 0,
    });
    gsap.to('.webTwo', {
      scrollTrigger: {
        trigger: '.website',
        start: 'top 65%',
        end: 'top 10%',
        markers: true,
        scrub: true,
      },
      rotate: 5,
      duration: 1,
      bottom: '45%',
      right: 0,
    });
  });

  return (
    <div className="w-screen website flex pt-[4vh] flex-col items-center h-screen">
      <div className="absolute webOne left-0">
        <WebsiteModal
          height={'h-[34.5vh]'}
          width={'w-[34.58vw]'}
          src={DESK_ONE}
          type="image"
        />
      </div>

      <div className="absolute webTwo  right-0">
        <WebsiteModal
          height={'h-[34.5vh]'}
          width={'w-[34.58vw]'}
          src={DESK_TWO}
          type="image"
        />
      </div>
      <div className="relative webThree top-0 left-0 z-100">
        <WebsiteModal
          height={'h-[55.55vh]'}
          width={'w-[55.55vw]'}
          src={WEBSITE_VIDEO}
          type="video"
        />
      </div>
    </div>
  );
};

export default WebsiteView;
