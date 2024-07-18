'use client';
import React, { RefObject, memo, useRef } from 'react';
import Image from 'next/image';
import { LOGO } from '../../../../public/exporter';
import Button from '../button';
import { scrollIntoView } from 'seamless-scroll-polyfill';

const Header = () => {
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
    <div className="pt-6 flex flex-row justify-between items-center">
      <Image className="w-[7.6vh] h-[7.6vh]" src={LOGO} alt="Logo" />
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
