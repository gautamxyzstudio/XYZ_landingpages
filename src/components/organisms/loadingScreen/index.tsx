'use client';
import React, { ReactNode, useEffect, useRef, useState } from 'react';
import { LOADING } from '../../../../public/exporter';

const Loading = ({ children }: { children: ReactNode }) => {
  const loaderElement = useRef<HTMLDivElement | null>(null);
  const parentElement = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (loaderElement.current && parentElement.current) {
      const timer = setTimeout(() => {
        if (loaderElement.current && parentElement.current) {
          loaderElement.current.style.display = 'none';
          parentElement.current.style.display = 'unset';
        }
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div className="overflow-hidden h-screen" ref={parentElement}>
      <div
        ref={loaderElement}
        className="absolute  flex bg-contain bg-black justify-center items-center z-50 w-full h-full"
      >
        <video
          className="w-[240px] h-[240px] object-contain"
          loop
          muted
          autoPlay
          playsInline
        >
          <source src={LOADING} type="video/mp4" />
        </video>
      </div>
      {children}
    </div>
  );
};

export default Loading;
