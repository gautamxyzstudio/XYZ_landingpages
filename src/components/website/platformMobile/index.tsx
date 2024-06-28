'use client';
import FormHeader from '@/components/molecules/formHeader';
import PlatformCardMobile from '@/components/organisms/PlatformCardMobile';
import React, { useMemo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
const PlatformMobile = () => {
  const servicesStyle = useMemo(
    () => ({
      backgroundImage: 'url(service.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      marginTop: 56,
    }),
    []
  );
  return (
    <div style={servicesStyle} className="py-6">
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
          spaceBetween={20}
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
