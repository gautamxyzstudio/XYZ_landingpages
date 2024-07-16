'use client';
import { ReactLenis, useLenis } from '@studio-freight/react-lenis';
import React from 'react';

const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
  return (
    <ReactLenis
      options={{
        duration: 1.5,

        // smoothWheel: true,
        // infinite: true,
      }}
      root
    >
      {children}
    </ReactLenis>
  );
};

export default SmoothScroll;
``;
