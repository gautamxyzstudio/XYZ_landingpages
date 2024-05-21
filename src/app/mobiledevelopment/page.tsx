'use client';

import React, { useRef, useState } from 'react';
import Header from '@/components/atoms/header';
import CustomModal from '@/components/molecules/modal';
import Info from '../websitedevelopment/components/Info';
import Intro from '../websitedevelopment/components/Intro';
import About from '../websitedevelopment/components/about';
import FormView from '../websitedevelopment/components/formView';
import Services from '../websitedevelopment/components/services';
import Form from '@/components/organisms/form';
import FormMobile from '../websitedevelopment/components/formmobile';
import { scrollIntoView } from 'seamless-scroll-polyfill';
import ServicesMobile from '../websitedevelopment/components/servicesMobile';
const Mobile = () => {
  const divRef = useRef<HTMLDivElement | null>(null);

  const scrollToComp = () => {
    var comp = document.getElementById('form');
    if (comp)
      setTimeout(function () {
        comp!.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }, 100);
    if (divRef.current) {
      scrollIntoView(divRef.current, {
        behavior: 'smooth',
        block: 'start',
      });
    }
  };
  return (
    <div>
      <CustomModal />
      <div className="w-full pl-[24px] pr-[24px]  sm:pl-20 sm:pr-20 md:pl-20 md:pr-20 lg:pl-20 lg:pl-20   bg-primary">
        <Header />
        <div className="flex justify-center mt-[50px]  flex-row">
          <Intro type={'mobile'} onPress={scrollToComp} />
        </div>
      </div>
      <div className="w-full flex justify-center bg-white z-[-2] relative pt-[50px]  md:pt-124px">
        <div className="h-[170px]  md:h-370px bg-primary absolute  z-[-1] top-0 left-0 w-full rounded-b-80px" />
        <About />
      </div>
      <div className="pl-20 overflow-hidden bg-white pt-14 pb-14 sm:pt-124px sm:pb-72px">
        <Info />
      </div>
      <div className="hidden lg:block">
        <Services />
      </div>
      <div className="block md:hidden">
        <ServicesMobile />
      </div>
      <div id="form" ref={divRef} className="block sm:hidden">
        <FormMobile />
        <div className="mt-[-132px] mb-[56px] relative ">
          <Form />
        </div>
      </div>
      <div ref={divRef} className="hidden sm:block">
        <FormView />
      </div>
    </div>
  );
};

export default Mobile;
