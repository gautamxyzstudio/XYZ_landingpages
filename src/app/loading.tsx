import Image from 'next/image';
import React from 'react';
import { LOADER } from '../../public/exporter';

const Loading = () => {
  return (
    <div className="absolute bg-white flex justify-center items-center z-20 w-full h-screen">
      <Image width={240} height={240} src={LOADER} alt="" />
    </div>
  );
};

export default Loading;
