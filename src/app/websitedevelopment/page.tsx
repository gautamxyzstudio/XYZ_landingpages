'use client';
import Header from '@/components/atoms/header';
import React, { useRef, useState } from 'react';
import Intro from './components/Intro';
import About from './components/about';
import Info from './components/Info';
import FormView from './components/formView';
import Services from './components/services';
import CustomModal from '@/components/molecules/modal';
import FormMobile from './components/formmobile';
import Form from '@/components/organisms/form';

const Web = () => {
  const divRef = useRef<HTMLDivElement | null>(null);
  const scrollToComp = () => {
    if (divRef.current) {
      divRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div>
      {/* <CustomModal /> */}
      <div className="w-full pl-[24px] sm:pl-20   bg-primary">
        <Header />
        {/* <div className="flex justify-center flex-row md:mt-5">
          <Intro type={'website'} onPress={scrollToComp} />
        </div> */}
      </div>
      <div className="w-full bg-white z-[-2] relative pt-124px">
        <div className="h-370px bg-primary absolute  z-[-1] top-0 left-0 w-full rounded-b-80px" />
        <About />
      </div>
      {/* <div className="pl-20 bg-white pt-124px pb-72px">
        <Info />
      </div> */}
      {/* <div>
        <Services />
      </div> */}
      <div className="block sm:hidden">
        <FormMobile />
        <div className="mt-[-72px] mb-[56px] relative ">
          <Form />
        </div>
      </div>
      <div className="hidden sm:block">
        <FormView />
      </div>
    </div>
  );
};

export default Web;
