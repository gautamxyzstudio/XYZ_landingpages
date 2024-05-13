import Image from 'next/image';
import React from 'react';
import { ASTRONAUT_HII, FRAME } from '../../../../public/exporter';
import YellowCircle from '@/components/atoms/yellowCircle';

const DisplayComponent = () => {
  return (
    <div className="bg-white relative top-0  flex items-center justify-center w-full h-full rounded-4xl">
      <YellowCircle />
      <Image
        className="absolute animate-[wiggle_2s_ease-in-out_infinite] top-0 left-9"
        src={ASTRONAUT_HII}
        alt="Astronaut hi"
      />
      <Image className="absolute h-5/6 bottom-0" src={FRAME} alt="" />
    </div>
  );
};

export default DisplayComponent;
