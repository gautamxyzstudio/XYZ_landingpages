'use client';
import React, { useState } from 'react';
import styles from './astronaut.module.css';
import { chau_philomene } from '@/ui/fonts';
import Image from 'next/image';
import { ASTRONAUT_PAINTING } from '../../../../public/exporter';
import SliderButtons from '@/components/molecules/sliderButtons';
const AstronautTab = () => {
  const [sliderIndex, updateSliderIndex] = useState<number>(0);

  const changeTab = (type: 'increment' | 'decrement') => {
    if (type === 'increment') {
      if (sliderIndex <= 2) {
        updateSliderIndex(sliderIndex + 1);
      }
    } else {
      if (sliderIndex > 0) {
        updateSliderIndex(sliderIndex - 1);
      }
    }
  };

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
          index={sliderIndex}
          onPressPrev={() => changeTab('decrement')}
          onPressNext={() => changeTab('increment')}
        />
      </div>
    </div>
  );
};

export default AstronautTab;
