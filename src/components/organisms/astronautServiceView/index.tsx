'use client';
import React, { useState } from 'react';
import styles from './astronaut.module.css';
import { chau_philomene } from '@/ui/fonts';
import Image from 'next/image';
import {
  ASTRONAUT_PAINTING,
  ASTRONAUT_SPEAKINGS,
  ASTRONAUT_TYPING,
} from '../../../../public/exporter';
import SliderButtons from '@/components/molecules/sliderButtons';
import { IAstronautTabProps } from './types';
const AstronautTab: React.FC<IAstronautTabProps> = ({
  onPressNext,
  onPressPrev,
  index,
}) => {
  return (
    <div className="flex flex-col items-center">
      <div className={styles.ellipse}>
        <p
          className={`text-white ${chau_philomene.className} bottom-5 w-full self-center text-40px leading-48px absolute`}
        >
          Creation
        </p>
        <Image
          className="absolute top-[-185px]"
          src={ASTRONAUT_PAINTING}
          alt="Astronaut Painting"
        />
        <Image
          className="absolute bottom-[-50px] opacity-[0.8] w-[102px] h-[134px] left-[-30px]"
          src={ASTRONAUT_TYPING}
          alt="Astronaut Painting"
        />
        <Image
          className="absolute bottom-[-50px] opacity-[0.8] w-[102px] h-[134px] right-[-30px]"
          src={ASTRONAUT_SPEAKINGS}
          alt="Astronaut Painting"
        />
      </div>
      <div className="mt-[80px]">
        <SliderButtons
          index={index}
          onPressPrev={onPressPrev}
          onPressNext={onPressNext}
        />
      </div>
    </div>
  );
};

export default AstronautTab;
