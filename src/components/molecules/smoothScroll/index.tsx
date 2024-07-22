'use client';
import { ReactLenis, useLenis } from '@studio-freight/react-lenis';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
  const lenisRef = useRef<any>(null);

  useEffect(() => {
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);
    return () => {
      gsap.ticker.remove(update);
    };
  }, []);

  return (
    <ReactLenis
      ref={lenisRef}
      options={{
        smoothWheel: true,
      }}
      root
    >
      {children}
    </ReactLenis>
  );
};

export default SmoothScroll;
``;
