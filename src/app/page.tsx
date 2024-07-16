import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React from 'react';
import About from '@/components/website/about';
import Footer from '@/components/website/footer';
import FormView from '@/components/website/formView';
import HomeView from '@/components/website/homeView';
import Info from '@/components/website/Info';
import Platform from '@/components/website/platform';
import Services from '@/components/website/services';
import WebsiteView from '@/components/website/websiteView';
import PlatformMobile from '@/components/website/platformMobile';
import ServicesMobile from '@/components/website/servicesMobile';
import FormMobile from '@/components/website/formmobile';
import Form from '@/components/organisms/form';
import WebFrameMobile from '@/components/website/webFrameMobile';

// Continue with your Home component implementation...
export default function Home() {
  return (
    <div className="w-full mw- h-full">
      <HomeView />
      <div className=" hidden md:block web">
        <WebsiteView />
      </div>
      <div className=" block my-14 md:hidden">
        <WebFrameMobile />
      </div>
      {/* <div className="block grid-place content-center  md:hidden"></div> */}
      <div className="about">
        <div className="  md:w-screen md:h-screen z-10 relative flex items-center justify-center bg-cover bg-no-repeat md:bg-info-bg">
          <About />
        </div>
      </div>
      <div className="platform bg-contain bg-main-bg  z-11 relative ">
        <div className="px-20 hidden md:block  pt-10 pb-[112px]">
          <Platform />
        </div>
        <div className="block mt-14 md:hidden">
          <PlatformMobile />
        </div>
      </div>
      <div className="overflow-hidden border-1 bg-[red] border-white bg-contain bg-main-bg mb-14 sm:mb-[72px]">
        <Info />
      </div>
      <div className="bg-contain  hidden md:block bg-main-bg">
        <Services />
      </div>
      <div className="block md:hidden">
        <ServicesMobile />
      </div>
      <div id="form" className="block mt-[56px] pb-[56px] md:hidden">
        <FormMobile />
        <div className="mt-[-132px]  relative">
          <Form />
        </div>
      </div>
      <div className="hidden  md:block">
        <FormView />
      </div>
      <div className="bg-contain bg-main-bg">
        <Footer />
      </div>
    </div>
  );
}
