'use client';
import { ReactLenis, useLenis } from '@studio-freight/react-lenis';
import React, { useEffect } from 'react';

const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
  const lenis = useLenis();
  useEffect(() => {
    if (performance.navigation.type === 1 && lenis) {
      lenis.scrollTo(0, { duration: 0, force: true });
    }
  }, [lenis]);
  return (
    <ReactLenis
      options={{
        duration: 1.5,

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
