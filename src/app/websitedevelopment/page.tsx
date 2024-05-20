'use client';
import Header from '@/components/atoms/header';
import React, { useRef, useState } from 'react';
import Intro from './components/Intro';
import About from './components/about';
import Info from './components/Info';
import FormView from './components/formView';
import FormMobile from './components/formmobile';
import Form from '@/components/organisms/form';
import CustomModal from '@/components/molecules/modal';
import Services from './components/services';
const Web = () => {
  const divRef = useRef<HTMLDivElement | null>(null);

  const scrollToComp = () => {
    if (divRef.current) {
      divRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div>
      <div className="hidden lg:block">
        <CustomModal />
      </div>
      <div className="w-full pl-[24px] pr-[24px]  sm:pl-20 sm:pr-20 md:pl-20 md:pr-20 lg:pl-20 lg:pl-20  bg-primary">
        <Header />
        <div className="flex justify-center mt-[50px]  flex-row">
          <Intro type={'website'} onPress={scrollToComp} />
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
      <div ref={divRef} className="block sm:hidden">
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

export default Web;
