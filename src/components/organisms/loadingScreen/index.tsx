'use client';
import React, { ReactNode, useEffect, useMemo, useState } from 'react';
import { LOADING } from '../../../../public/exporter';
import { ReactLenis, useLenis } from '@studio-freight/react-lenis';

const Loading = ({ children }: { children: ReactNode }) => {
  const [showSplash, setShowSplash] = useState(true);

  // Use the useLenis hook to interact with Lenis
  useLenis(
    (lenis) => {
      if (showSplash) {
        lenis.stop();
      } else {
        lenis.start();
      }
    },
    [showSplash]
  );

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowSplash(false);
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);
  return (
    <div>
      {showSplash && (
        <div className="absolute flex bg-contain bg-main-bg justify-center items-center z-50 w-full h-screen">
          <video
            className="w-[240px] bg-opacity-0 video h-[240px] object-contain"
            loop
            muted
            autoPlay
            playsInline
          >
            <source src={LOADING} type="video/mp4" />
          </video>
        </div>
      )}
      {children}
    </div>
  );
};

export default Loading;
