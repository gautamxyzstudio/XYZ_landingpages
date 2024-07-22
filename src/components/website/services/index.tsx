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
import { CreationData } from '@/utility/mockdata';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import './styles.css'; // Import the CSS file

type IServicesProps = {
  width: number;
  height: number;
  astronautHeight: number;
  astronautWidth: number;
};

const Services: React.FC<IServicesProps> = ({
  width,
  height,
  astronautHeight,
  astronautWidth,
}) => {
  const sliderRef = useRef<Slider | null>(null);
  const [sliderIndex, updateSliderIndex] = useState<number>(0);
  const [clickable, updateIsClickable] = useState<boolean>(true);
  const stepOneRef = useRef<HTMLImageElement | null>(null);
  const stepTwoRef = useRef<HTMLImageElement | null>(null);
  const stepThreeRef = useRef<HTMLImageElement | null>(null);

  useGSAP(() => {
    gsap.set(stepOneRef.current, {
      top: '-75%',
      opacity: 1,
    });
    gsap.set(stepTwoRef.current, {
      scale: 0.4,
      x: width / 2,
      y: height / 5,
      opacity: 1,
    });
    gsap.set(stepThreeRef.current, {
      scale: 0.35,
      x: -width / 2,
      y: height / 8,
      opacity: 1,
    });
  });

  // Function to change the slider index
  const changeTab = (type: 'increment' | 'decrement') => {
    if (clickable === true) {
      if (type === 'increment' && sliderIndex < 2) {
        updateSliderIndex(sliderIndex + 1);
        if (stepOneRef.current) {
          if (sliderIndex === 0) {
            gsap.to(stepOneRef.current, {
              scale: 0.4,
              x: width / 2,
              y: height,
            });
            gsap.to(stepTwoRef.current, {
              x: -width / 2,
            });
            gsap.to(stepThreeRef.current, {
              scale: 0.8,
              x: 0,
              y: 0,
              top: '-90%',
            });
          } else if (sliderIndex === 1) {
            gsap.to(stepOneRef.current, {
              x: -width / 2,
            });
            gsap.to(stepTwoRef.current, {
              scale: 1,
              x: 0,
              y: 0,
              top: '-75%',
            });
            gsap.to(stepThreeRef.current, {
              scale: 0.4,
              x: width / 2,
              y: height,
            });
          }
        }
        sliderRef.current?.slickGoTo(sliderIndex + 1);
      } else if (type === 'decrement' && sliderIndex > 0) {
        updateSliderIndex(sliderIndex - 1);
        if (stepOneRef.current) {
          if (sliderIndex === 1) {
            gsap.to(stepOneRef.current, {
              scale: 1,
              x: 0,
              y: 0,
            });
            gsap.to(stepTwoRef.current, {
              x: width / 2,
            });
            gsap.to(stepThreeRef.current, {
              scale: 0.35,
              x: -width / 2,
              y: height,
            });
          } else if (sliderIndex === 2) {
            gsap.to(stepOneRef.current, {
              x: width / 2,
            });
            gsap.to(stepTwoRef.current, {
              scale: 0.4,
              x: -width / 2,
              y: height,
            });
            gsap.to(stepThreeRef.current, {
              scale: 0.9,
              x: 0,
              y: 0,
            });
          }
        }
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
    centerMode: false,
    infinite: false,
    initialSlide: 0,
    rows: 1,
    slidesPerRow: 1,
    speed: 500,
    adaptiveHeight: false, // Disable adaptive height
    slidesToShow: 1,
    easing: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    vertical: true,
    slidesToScroll: 1,
  };

  console.log(sliderIndex, 'SLIDER INDEX');

  return (
    <div className="pt-12">
      <div>
        {/* Header Section */}
        <div className="flex flex-row items-center justify-center">
          <h2
            className={`text-orange ${chau_philomene.className} font-bold leading-44px text-4xl`}
          >
            Top Reasons
          </h2>
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
            <h2 className="text-white leading-38px text-3xl font-medium">
              Choose XYZ Studio as
            </h2>
            <h2 className="text-white leading-38px text-3xl font-medium">
              your Web Development Company
            </h2>
          </div>
        </div>
        {/* Content Section */}
        <div className="pt-94px">
          <div className="flex justify-center lg:mb-[100px] xl:mb-0  xl:mt-0 items-center flex-row">
            <AstronautTab
              onPressNext={() => changeTab('increment')}
              onPressPrev={() => changeTab('decrement')}
              index={sliderIndex}
              height={228}
              width={456}
              astronautHeight={340}
              astronautWidth={256}
              refFirst={stepOneRef}
              refSecond={stepTwoRef}
              refThird={stepThreeRef}
            />
            <div className="slider-container">
              <Slider ref={sliderRef} {...settings}>
                {CreationData.map((item, index) => (
                  <div key={index}>
                    <ServicesContentTab item={item} />
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
