'use client';

import React, { useState } from 'react';
import Header from '@/components/atoms/header';
import CustomModal from '@/components/molecules/modal';
import Info from '../websitedevelopment/components/Info';
import Intro from '../websitedevelopment/components/Intro';
import About from '../websitedevelopment/components/about';
import FormView from '../websitedevelopment/components/formView';
import Services from '../websitedevelopment/components/services';

const Mobile = () => {
  return (
    <>
      <CustomModal />
      <div className="w-full pl-[24px] sm:pl-20   bg-primary">
        <Header />
        <div className="flex justify-center flex-row md:mt-5">
          <Intro
            type={'mobile'}
            onPress={function (): void {
              throw new Error('Function not implemented.');
            }}
          />
        </div>
      </div>
      <div className="w-full bg-white z-[-2] relative pt-124px">
        <div className="h-370px bg-primary absolute  z-[-1] top-0 left-0 w-full rounded-b-80px" />
        <About />
      </div>
      <div className="pl-20 overflow-hidden bg-white pt-124px pb-72px">
        <Info />
      </div>
      <Services />
      <FormView />
    </>
  );
};

export default Mobile;
