import Button from '@/components/atoms/button';
import { chau_philomene } from '@/ui/fonts';
import React from 'react';
import { ASTRONAUT_ROCKET } from '../../../../../public/exporter';
import Image from 'next/image';
import DisplayComponent from '@/components/organisms/displayComponent';
import { IIntroProps } from './types';

const Intro: React.FC<IIntroProps> = ({ type }) => {
  return (
    <div className="flex w-full  flex-row max-w-screen-2xl justify-between">
      <div>
        <div className="md:mt-[122px]">
          <p
            className={`text-5xl font-normal ${chau_philomene.className} leading-70px text-dark`}
          >
            {'"Where'}
            <span className="text-orange"> Vision</span>{' '}
            {'Meets Reality, Your Brand Shines Bright!"'}
          </p>
          <div className="mt-6">
            <p className="text-2xl font-normal leading-9">
              Step into the cosmic realm of XYZ Studio, where creativity knows
              no bounds.
            </p>
            <p className="text-2xl font-normal leading-9">
              Unlock the full potential of your business with our design,
              development, and promotion expertise.
            </p>
          </div>
        </div>
        <div className="md:mt-9">
          <Button
            width="w-180px"
            buttonType={'orange'}
            title={'Get in touch'}
          />
        </div>
        <div className="flex flex-row justify-center">
          <Image
            className="w-[290px] h-[290px]"
            src={ASTRONAUT_ROCKET}
            alt="Astronaut"
          />
        </div>
      </div>
      <div className="ml-45px w-full">
        <DisplayComponent type={type} />
      </div>
    </div>
  );
};

export default Intro;
