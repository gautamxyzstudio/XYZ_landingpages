// 'use client';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Header from '@/components/atoms/header';
import Form from '@/components/organisms/form';
import CustomModal from '@/components/molecules/modal';
import Info from '@/components/website/Info';
import Intro from '@/components/website/Intro';
import About from '@/components/website/about';
import FormView from '@/components/website/formView';
import FormMobile from '@/components/website/formmobile';
import Services from '@/components/website/services';
import ServicesMobile from '@/components/website/servicesMobile';
import { useEffect, useState } from 'react';
import Platform from '@/components/website/platform';
import PlatformMobile from '@/components/website/platformMobile';

export default function Home() {
  return (
    <>
      <div>
        <CustomModal />
        <div className="w-full pl-[24px] pr-[24px]  sm:pl-20 sm:pr-20 md:pl-20 md:pr-20 lg:pl-20 lg:pl-20   bg-primary">
          <Header />
          <div className="flex justify-center mt-[50px]  flex-row">
            <Intro type={'website'} />
          </div>
        </div>
        <div className="w-full flex justify-center bg-white  z-[0] relative pt-[50px]  md:pt-84px">
          <div className="h-[90px]  md:h-370px bg-primary absolute  z-[-1] top-0 left-0 w-full rounded-b-80px" />
          <About />
        </div>
        <div className="block md:hidden">
          <PlatformMobile />
        </div>
        <div className="hidden lg:block">
          <Platform />
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
        <div id="form" className="block sm:hidden">
          <FormMobile />
          <div className="mt-[-132px] mb-[56px] relative ">
            <Form />
          </div>
        </div>
        <div id="formSec" className="hidden sm:block">
          <FormView />
        </div>
      </div>
    </>
  );
}
