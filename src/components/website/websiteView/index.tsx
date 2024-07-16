'use client';
import React, { useEffect, useRef } from 'react';
import { WEBSITE_SEV, WEBSITE_VIEW } from '../../../../public/exporter';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

const WebsiteView = React.forwardRef<HTMLVideoElement>(({}, ref) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  gsap.registerPlugin(ScrollTrigger);

  // Custom GSAP hook using useGSAP (not shown in your snippet)
  useGSAP(() => {
    let tl = gsap.timeline({
      defaults: { duration: videoRef.current?.duration, ease: 'power4' },
      scrollTrigger: {
        trigger: '.about',
        start: 'top 100%',
        end: 'top 1%',
        pin: '.web',
        scrub: 1,
      },
    });
    tl.fromTo(
      videoRef.current,
      { currentTime: 0 },
      { currentTime: videoRef.current?.duration }
    );
  });

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        className="w-full h-full object-contain"
        ref={videoRef}
        muted
        playsInline
        preload="auto"
      >
        <source src={WEBSITE_VIEW} type="video/mp4" />
      </video>
    </div>
  );
});
WebsiteView.displayName = 'WebsiteView';
export default WebsiteView;
