import Button from '@/components/atoms/button';
import { chau_philomene } from '@/ui/fonts';
import React from 'react';
import { ASTRONAUT_RIDING } from '../../../../../public/exporter';
import Image from 'next/image';
const Intro = () => {
  return (
    <div>
      <div className="md:mt-[122px]">
        <p
          className={`text-5xl font-normal ${chau_philomene.className} leading-loose text-dark`}
        >
          {'"Where'}
          <span className="text-orange"> Vision</span>{' '}
          {'Meets Reality, Your Brand Shines Bright!"'}
        </p>
        <div>
          <p className="text-2xl font-normal leading-9">
            Step into the cosmic realm of XYZ Studio, where creativity knows no
            bounds.
          </p>
          <p className="text-2xl font-normal leading-9">
            Unlock the full potential of your business with our design,
            development, and promotion expertise.
          </p>
        </div>
      </div>
      <div className="md:mt-9">
        <Button width="w-180px" buttonType={'orange'} title={'Get in touch'} />
      </div>
      <Image src={ASTRONAUT_RIDING} alt="Astronaut" />
      {/* <div className="h-370px" /> */}
    </div>
  );
};

export default Intro;
