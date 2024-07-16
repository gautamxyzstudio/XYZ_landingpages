'use client';
import FormHeader from '@/components/molecules/formHeader';
import ServiceCardMobile from '@/components/molecules/serviceCardMobile';
import React, { useMemo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow } from 'swiper/modules';
import './styles.css';
const ServicesMobile = () => {
  return (
    <div>
      <FormHeader
        title="Services"
        subtitle="Fusion of creativity and"
        secondarySubTitle="functionality"
      />
      <div className="mt-10">
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          updateOnWindowResize={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={true}
          modules={[EffectCoverflow]}
          className="mySwiper"
        >
          <SwiperSlide>
            <ServiceCardMobile />
          </SwiperSlide>
          <SwiperSlide>
            <ServiceCardMobile />
          </SwiperSlide>
          <SwiperSlide>
            <ServiceCardMobile />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default ServicesMobile;
