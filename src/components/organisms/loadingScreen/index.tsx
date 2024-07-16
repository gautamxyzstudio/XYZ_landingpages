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
    return () => clearTimeout(timeout);
  }, []);

  const initialStyles: React.CSSProperties = useMemo(() => {
    return {
      overflow: 'scroll',
      height: '100vh',
    };
  }, []);

  return (
    <div style={initialStyles}>
      {showSplash && (
        <div className="absolute flex bg-contain bg-main-bg justify-center items-center z-50 w-full h-screen">
          <Image width={240} height={240} src={LOADER} alt="Loading" />
        </div>
      )}
      {children}
    </div>
  );
};

export default Loading;
