'use client';
import React, { RefObject, memo, useRef } from 'react';
import Image from 'next/image';
import { LOGO, LOGO_BOTTOM, LOGO_TOP } from '../../../../public/exporter';
import Button from '../button';
import { scrollIntoView } from 'seamless-scroll-polyfill';
import { useRouter } from 'next/navigation';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
const Header = () => {
  const logoTweenRef = useRef<any>(null);
  const logoRef = useRef<HTMLImageElement | null>(null);
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

  useGSAP(() => {
    logoTweenRef.current = gsap.to(logoRef.current, {
      rotate: 180,
      ease: 'none',
      paused: true,
    });
  });

  const rotateElement = () => {
    logoTweenRef.current.play();
  };

  const reverseAnim = () => {
    logoTweenRef.current.reverse();
  };

  const onPressReload = () => {
    if (window) {
      window.location.reload();
    }
  };

  return (
    <div className="pt-6 flex flex-row justify-between items-center">
      <div
        onMouseEnter={rotateElement}
        onMouseLeave={reverseAnim}
        onClick={onPressReload}
        className="cursor-pointer"
      >
        <Image
          ref={logoRef}
          className="w-[38px] sm:w-[48px] md:w-[60px] lg:w-[74px] xl-[80px]"
          src={LOGO_TOP}
          alt="Logo"
        />
        <Image
          className="w-[38px] sm:w-[48px] md:w-[60px] lg:w-[74px] xl-[80px]"
          src={LOGO_BOTTOM}
          alt="Logo"
        />
      </div>
      <p className="block md:hidden">
        <Button
          width="sm:w-[180px]"
          height="sm:h-[48px]"
          widthSmall="w-[94px]"
          heightSmall="h-[32px]"
          onPress={scrollToComp}
          buttonType={'orange'}
          title={'Get in touch'}
        />
      </p>
    </div>
  );
};

export default memo(Header);
