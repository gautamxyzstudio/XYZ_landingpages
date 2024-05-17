'use client';
import React, { useEffect, useState } from 'react';
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
import { log } from 'console';
const AstronautTab: React.FC<IAstronautTabProps> = ({
  onPressNext,
  onPressPrev,
  index,
}) => {
  const getTranslation = (index: number) => {
    switch (index) {
      case 0: {
        return {
          a: {
            transform: `translate(0,0)`,
            scale: 1,
            opacity: 1,
            transitionDuration: '700ms',
          },
          b: {
            transform: `translate(0,0)`,
            scale: 0.3,
            transitionDuration: '700ms',
            opacity: 0.8,
          },
          c: {
            transform: `translate(0,0)`,
            scale: 0.3,
            opacity: 0.8,
            transitionDuration: '700ms',
          },
        };
      }
      case 1: {
        return {
          a: {
            transform: `translate(180%,150%)`,
            transitionDuration: '700ms',
            scale: 0.4,
            opacity: 0.8,
          },
          b: {
            transform: `translate(-360%,0%)`,
            transitionDuration: '700ms',
            scale: 0.4,
            opacity: 0.8,
          },
          c: {
            transform: `translate(80%,-70%)`,
            transitionDuration: '700ms',
            scale: 1,
            opacity: 1,
          },
        };
      }
      case 2: {
        return {
          a: {
            transform: `translate(-180%,140%)`,
            transitionDuration: '700ms',
            scale: 0.4,
            opacity: 0.8,
          },
          b: {
            transform: `translate(-75%,-70%)`,
            transitionDuration: '700ms',
            scale: 1,
            opacity: 1,
          },
          c: {
            transform: `translate(380%,-20%)`,
            transitionDuration: '700ms',
            scale: 0.4,
            opacity: 0.8,
          },
        };
      }
    }
  };

  const getTitle = (index: number) => {
    switch (index) {
      case 0: {
        return 'Creation';
      }
      case 1: {
        return 'Development';
      }
      case 2: {
        return 'Campaign';
      }
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className={styles.ellipse}>
        <p
          className={`text-white ${chau_philomene.className} bottom-5 w-full self-center text-40px leading-48px absolute`}
        >
          {getTitle(index)}
        </p>
        <Image
          className="absolute w-[265px]  h-[360px] top-[-185px]"
          src={ASTRONAUT_PAINTING}
          style={getTranslation(index)?.a}
          alt="Astronaut Painting"
        />
        <Image
          className="absolute  w-[265px]  h-[360px] top-[40px] right-[-100px] "
          src={ASTRONAUT_SPEAKINGS}
          style={getTranslation(index)?.b}
          alt="Astronaut Painting"
        />
        <Image
          className="absolute  w-[265px]  h-[360px] top-[40px] left-[-100px] "
          src={ASTRONAUT_TYPING}
          style={getTranslation(index)?.c}
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
