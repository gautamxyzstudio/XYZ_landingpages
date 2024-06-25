'use client';
import Button from '@/components/atoms/button';
import { chau_philomene } from '@/ui/fonts';

import Image from 'next/image';
import DisplayComponent from '@/components/organisms/displayComponent';
import { IIntroProps } from './types';
import { ASTRONAUT_ROCKET } from '../../../../public/exporter';

const Intro: React.FC<IIntroProps> = ({ type }) => {
  const scrollToComp = () => {
    var comp = document.getElementById('form');
    var compSec = document.getElementById('formSec');
    comp?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
    if (compSec) {
      compSec?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <div className="flex w-full max-w-[1240px] flex-wrap flex-row  justify-between">
      <div className="w-full  xl:w-[45%]">
        <div className="xl:mt-[122px]">
          <p
            className={`text-xl  leading-7  sm:text-2xl sm:leading-8 md:text-3xl md:leading-[38px] lg:text-5xl font-normal ${chau_philomene.className} lg:leading-70px text-dark`}
          >
            {'"Where'}
            <span className="text-orange"> Vision</span>{' '}
            {'Meets Reality, Your Brand Shines Bright!"'}
          </p>
          <div className="mt-4  sm-mt-6">
            <p className="text-base leading-6 sm:text-lg leading-7  lg:text-2xl font-normal lg:leading-9">
              Step into the cosmic realm of XYZ Studio, where creativity knows
              no bounds.
            </p>
            <p className="text-base leading-6 sm:text-lg leading-7  lg:text-2xl font-normal lg:leading-9">
              Unlock the full potential of your business with our design,
              development, and promotion expertise.
            </p>
          </div>
          <div className="mt-3 hidden md:block sm:mt-5 md:mt-9">
            <Button
              width="sm:w-[180px]"
              height="sm:h-[48px]"
              widthSmall="w-[94px]"
              heightSmall="h-[32px]"
              onPress={scrollToComp}
              buttonType={'orange'}
              title={'Get in touch'}
            />
          </div>
        </div>
        <div className="flex hidden lg:block flex-row justify-center">
          <Image
            className="w-[290px] h-[290px]"
            src={ASTRONAUT_ROCKET}
            alt="Astronaut"
          />
        </div>
      </div>
      <div className="xl:ml-45px mt-[56px] xl:mt-0 flex items-center w-full h-[450px] sm:h-[550px]  md:h-[650px] lg:h-[750px] xl:h-[750px] xl:w-[637px]">
        <DisplayComponent type={type} />
      </div>
    </div>
  );
};

export default Intro;
