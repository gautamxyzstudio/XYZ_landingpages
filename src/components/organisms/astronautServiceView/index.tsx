'use client';
import React, { useState } from 'react';
import styles from './astronaut.module.css';
import { chau_philomene } from '@/ui/fonts';
import Image from 'next/image';
import { ASTRONAUT_PAINTING } from '../../../../public/exporter';
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
          className="absolute top-[-165px]"
          src={ASTRONAUT_PAINTING}
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
