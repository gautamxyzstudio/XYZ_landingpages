'use client';
import Image from 'next/image';
import React, { ReactNode, useEffect, useMemo, useState } from 'react';
import { LOADER } from '../../../../public/exporter';

const Loading = ({ children }: { children: ReactNode }) => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowSplash(false);
    }, 1000);
    return () => clearInterval(timeout);
  }, []);

  console.log(window.innerHeight, window.outerHeight);

  const initialStyles: React.CSSProperties = useMemo(() => {
    return {
      overflow: 'hidden',
      height: window.innerHeight,
    };
  }, []);

  const afterLoadingStyles: React.CSSProperties = useMemo(() => {
    return {
      height: '100%',
    };
  }, []);

  return (
    <div style={showSplash ? initialStyles : afterLoadingStyles}>
      {showSplash && (
        <div className="absolute bg-white flex justify-center items-center z-20 w-full h-screen">
          <Image width={240} height={240} src={LOADER} alt="" />
        </div>
      )}
      {children}
    </div>
  );
};

export default Loading;
