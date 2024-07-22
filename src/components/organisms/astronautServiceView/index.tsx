'use client';
import React, { memo, useEffect, useRef, useState } from 'react';
import { chau_philomene } from '@/ui/fonts';
import Image from 'next/image';
import {
  ASTRONAUT_PAINTING,
  ASTRONAUT_SPEAKINGS,
  ASTRONAUT_TYPING,
} from '../../../../public/exporter';
import SliderButtons from '@/components/molecules/sliderButtons';
import { IAstronautTabProps } from './types';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
const AstronautTab: React.FC<IAstronautTabProps> = ({
  onPressNext,
  onPressPrev,
  astronautHeight,
  astronautWidth,
  refFirst,
  refSecond,
  refThird,
  width,
  height,
  index,
}) => {
  // const nextHandler = () => {
  //   if (stepOneRef.current) {
  //     if (index === 0) {
  //       gsap.to(stepOneRef.current, {
  //         scale: 0.4,
  //         x: width / 2,
  //         y: height,
  //       });
  //       gsap.to(stepTwoRef.current, {
  //         x: -width / 2,
  //       });
  //       gsap.to(stepThreeRef.current, {
  //         scale: 0.8,
  //         x: 0,
  //         y: 0,
  //         top: '-90%',
  //       });
  //     } else if (index === 1) {
  //       gsap.to(stepOneRef.current, {
  //         x: -width / 2,
  //       });
  //       gsap.to(stepTwoRef.current, {
  //         scale: 1,
  //         x: 0,
  //         y: 0,
  //         top: '-75%',
  //       });
  //       gsap.to(stepThreeRef.current, {
  //         scale: 0.4,
  //         x: width / 2,
  //         y: height,
  //       });
  //     }
  //   }
  //   onPressNext();
  // };

  // const prevHandler = () => {
  //   if (stepOneRef.current) {
  //     if (index === 1) {
  //       gsap.to(stepOneRef.current, {
  //         scale: 1,
  //         x: 0,
  //         y: 0,
  //       });
  //       gsap.to(stepTwoRef.current, {
  //         x: width / 2,
  //       });
  //       gsap.to(stepThreeRef.current, {
  //         scale: 0.35,
  //         x: -width / 2,
  //         y: height,
  //       });
  //     } else if (index === 2) {
  //       gsap.to(stepOneRef.current, {
  //         x: width / 2,
  //       });
  //       gsap.to(stepTwoRef.current, {
  //         scale: 0.4,
  //         x: -width / 2,
  //         y: height,
  //       });
  //       gsap.to(stepThreeRef.current, {
  //         scale: 0.9,
  //         x: 0,
  //         y: 0,
  //       });
  //     }
  //   }
  //   onPressPrev();
  // };

  const getTitle = (index: number) => {
    switch (index) {
      case 0: {
        return 'Creation';
      }
      case 1: {
        return 'Design';
      }
      case 2: {
        return 'Development';
      }
    }
  };

  return (
    <div className="flex  flex-col items-center">
      <div
        className={`relative top-0 flex left-0 text-center  flex-col items-center  bg-[#0775C6]`}
        style={{
          width: `${width}px`,
          height: `${height}px`,
          borderRadius: `${height}px ${height}px 0 0`,
        }}
      >
        <h3
          className={`text-white ${chau_philomene.className} bottom-5 w-full self-center text-40px leading-48px absolute`}
        >
          {getTitle(index)}
        </h3>
        <Image
          height={astronautHeight}
          width={astronautWidth}
          ref={refFirst}
          className="absolute opacity-0"
          src={ASTRONAUT_PAINTING}
          alt="Astronaut Painting"
        />
        <Image
          className="absolute opacity-0"
          src={ASTRONAUT_SPEAKINGS}
          height={astronautHeight}
          width={astronautWidth}
          ref={refSecond}
          alt="Astronaut Painting"
        />
        <Image
          className="absolute opacity-0"
          height={astronautHeight}
          width={astronautWidth}
          src={ASTRONAUT_TYPING}
          ref={refThird}
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

export default memo(AstronautTab);
