'use client';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Header from '@/components/atoms/header';
import AstronautTab from '@/components/organisms/astronautServiceView';
import ServicesContentTab from '@/components/organisms/servicesContentTab';
import { chau_philomene } from '@/ui/fonts';
import React, { useMemo, useRef, useState } from 'react';
import Slider from 'react-slick';

const Services = () => {
  const sliderRef = useRef<Slider | null>(null);
  const [sliderIndex, updateSliderIndex] = useState<number>(0);

  const changeTab = (type: 'increment' | 'decrement') => {
    if (type === 'increment') {
      if (sliderIndex <= 1) {
        updateSliderIndex(sliderIndex + 1);
        sliderRef.current?.slickGoTo(sliderIndex + 1);
      }
    } else {
      if (sliderIndex > 0) {
        updateSliderIndex(sliderIndex - 1);
        sliderRef.current?.slickGoTo(sliderIndex - 1);
      }
    }
  };

  // Memoized style for the background image
  const servicesStyle = useMemo(() => {
    return {
      backgroundImage: 'url(service.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    };
  }, []);

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
    vertical: true,
    slidesToScroll: 1,
  };

  return (
    <div className="pt-12 pb-[70px]" style={servicesStyle}>
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
            <p className="text-blackText leading-38px text-3xl font-medium">
              Fusion of creativity and
            </p>
            <p
              className="text-blackText leading-38
               px text-3xl font-medium"
            >
              functionality
            </p>
          </div>
        </div>
        {/* Content Section */}
        <div className="pt-94px">
          <div className="flex items-center flex-row">
            <AstronautTab
              onPressNext={() => changeTab('increment')}
              onPressPrev={() => changeTab('decrement')}
              index={sliderIndex}
            />
            <div className="slider-container">
              <Slider ref={sliderRef} {...settings}>
                <div>
                  <ServicesContentTab />
                </div>
                <div>
                  <ServicesContentTab />
                </div>
                <div>
                  <ServicesContentTab />
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
