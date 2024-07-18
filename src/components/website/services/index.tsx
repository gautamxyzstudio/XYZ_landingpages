'use client';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React, { useMemo, useRef, useState } from 'react';
import Slider from 'react-slick';
import Header from '@/components/atoms/header';
import AstronautTab from '@/components/organisms/astronautServiceView';
import ServicesContentTab from '@/components/organisms/servicesContentTab';
import { chau_philomene } from '@/ui/fonts';
import { throttle } from '@/utility/contants';

const Services = () => {
  const sliderRef = useRef<Slider | null>(null);
  const [sliderIndex, updateSliderIndex] = useState<number>(0);
  const [clickable, updateIsClickable] = useState<boolean>(true);
  // Function to change the slider index
  const changeTab = (type: 'increment' | 'decrement') => {
    if (clickable === true) {
      if (type === 'increment' && sliderIndex < 2) {
        updateSliderIndex(sliderIndex + 1);
        sliderRef.current?.slickGoTo(sliderIndex + 1);
      } else if (type === 'decrement' && sliderIndex > 0) {
        updateSliderIndex(sliderIndex - 1);
        sliderRef.current?.slickGoTo(sliderIndex - 1);
      }
      updateIsClickable(false);
    }
    setTimeout(() => {
      updateIsClickable(true);
    }, 500);
  };

  // Slider settings
  const settings = {
    dots: false,
    arrows: false,
    centerMode: true,
    infinite: false,
    initialSlide: 0,
    rows: 1,
    slidesPerRow: 1,
    speed: 500,
    centerPadding: '0px',
    slidesToShow: 1,
    easing: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    vertical: true,
    slidesToScroll: 1,
  };

  return (
    <div className="pt-12">
      <div>
        {/* Header Section */}
        <div className="flex flex-row items-center justify-center">
          <p
            className={`text-orange ${chau_philomene.className} font-bold leading-44px text-4xl`}
          >
            Services
          </p>
          <svg
            className="md:mx-6"
            xmlns="http://www.w3.org/2000/svg"
            width="4"
            height="102"
            viewBox="0 0 4 102"
            fill="none"
          >
            <path
              d="M2 2V100"
              stroke="#F17C04"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>
          <div>
            <p className="text-white leading-38px text-3xl font-medium">
              Fusion of creativity and
            </p>
            <p className="text-white leading-38px text-3xl font-medium">
              functionality
            </p>
          </div>
        </div>
        {/* Content Section */}
        <div className="pt-94px">
          <div className="flex justify-center lg:mb-[100px] xl:mb-0  xl:mt-0 items-center flex-row">
            <div className="hidden xl:flex">
              <AstronautTab
                onPressNext={() => changeTab('increment')}
                onPressPrev={() => changeTab('decrement')}
                index={sliderIndex}
                height={228}
                width={456}
                astronautHeight={340}
                astronautWidth={256}
              />
            </div>
            <div className="hidden lg:flex xl:hidden">
              <AstronautTab
                onPressNext={() => changeTab('increment')}
                onPressPrev={() => changeTab('decrement')}
                index={sliderIndex}
                height={168.75}
                width={342}
                astronautHeight={255}
                astronautWidth={192}
              />
            </div>
            <div className="slider-container flex">
              <Slider ref={sliderRef} {...settings}>
                {[0, 1, 2].map((index) => (
                  <div key={index}>
                    <ServicesContentTab />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
