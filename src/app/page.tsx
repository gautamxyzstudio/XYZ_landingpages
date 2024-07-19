import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Form from '@/components/organisms/form';
import Info from '@/components/website/Info';
import About from '@/components/website/about';
import FormView from '@/components/website/formView';
import FormMobile from '@/components/website/formmobile';
import Services from '@/components/website/services';
import ServicesMobile from '@/components/website/servicesMobile';
import Platform from '@/components/website/platform';
import PlatformMobile from '@/components/website/platformMobile';
import HomeView from '@/components/website/homeView';
import MobilePhoneView from '@/components/website/mobilePhonesView';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DESK_ONE, HOME_BG_VIDEO, WEBSITE_VIDEO } from '../../public/exporter';
import Footer from '@/components/website/footer';
import Mobile from '@/components/website/mobile';
import WebsiteView from '@/components/website/websiteView';
import WebsiteModal from '@/components/website/websiteModal';
import WebFrameMobile from '@/components/website/webFrameMobile';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  return (
    <div className="w-full  overflow-x-hidden   h-full">
      <HomeView />
      <div className="w-screen overflow-x-hidden  hidden xl:block  relative">
        <video
          className="w-screen video h-full absolute object-contain"
          loop
          muted
          autoPlay
          playsInline
        >
          <source src={HOME_BG_VIDEO} type="video/mp4" />
        </video>
        <WebsiteView />
      </div>
      <div className=" block my-[10vh] xl:hidden">
        <WebFrameMobile />
      </div>
      <div className="about">
        <div className=" w-screen hidden xl:flex h-screen z-10  relative items-center justify-center bg-cover bg-no-repeat bg-info-bg">
          <About />
        </div>
      </div>
      <div className=" flex xl:hidden py-0  md:py-[3vh] z-10  relative  bg-none items-center justify-center bg-center  bg-no-repeat  md:bg-info-bg">
        <About />
      </div>
      <div className="bg-contain bg-main-bg z-11 relative">
        <div className="platform hidden lg:flex ">
          <div className="px-20  w-full  mx-auto max-w-[1440px] md:pt-[9vh] lg:pt-[112px] xl:pt-10 pb-[112px]">
            <Platform />
          </div>
          x
        </div>
        <div className="block mt-14 lg:hidden">
          <PlatformMobile />
        </div>

        <div className="overflow-hidden relative z-100 border-white bg-contain mb-14 sm:mb-[72px]">
          <Info />
        </div>
        <div className="bg-contain mx-auto max-w-[1440px] px-[70px] hidden lg:block bg-main-bg">
          <Services />
        </div>
        <div className="block lg:hidden">
          <ServicesMobile />
        </div>
      </div>
      <div
        id="form"
        className="block mt-[56px] pb-[56px] mx-auto  w-full sm:w-[80%] lg:hidden"
      >
        <FormMobile />
        <div className="mt-[-132px]  relative">
          <Form />
        </div>
      </div>
      <div className="hidden lg:block">
        <FormView />
      </div>
      <div className="bg-contain bg-main-bg">
        <Footer />
      </div>
    </div>
  );
}
