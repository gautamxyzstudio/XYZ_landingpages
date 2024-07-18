'use client';
import FormHeader from '@/components/molecules/formHeader';
import PlatformCardMobile from '@/components/organisms/PlatformCardMobile';
import React, { useMemo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
const PlatformMobile = () => {
  return (
    <div>
      <FormHeader
        title="Platform"
        subtitle="Provide independent"
        secondarySubTitle="web/mobile/tablet"
      />
      <div className="mt-10 mb-6">
        <Swiper
          grabCursor={true}
          effect="fade"
          centeredSlides={true}
          updateOnWindowResize={true}
          cssMode
          spaceBetween={'32vw'}
          slidesPerView={'auto'}
          pagination={true}
          className="mySwiper"
        >
          <SwiperSlide>
            <PlatformCardMobile />
          </SwiperSlide>
          <SwiperSlide>
            <PlatformCardMobile />
          </SwiperSlide>
          <SwiperSlide>
            <PlatformCardMobile />
          </SwiperSlide>
          <SwiperSlide>
            <PlatformCardMobile />
          </SwiperSlide>
          <SwiperSlide>
            <PlatformCardMobile />
          </SwiperSlide>
          <SwiperSlide>
            <PlatformCardMobile />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default PlatformMobile;
