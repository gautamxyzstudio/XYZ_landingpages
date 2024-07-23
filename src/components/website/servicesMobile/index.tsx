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
import { CreationData } from '@/utility/mockdata';
const ServicesMobile = () => {
  return (
    <div>
      <FormHeader
        title="Top Reasons"
        subtitle="Choose XYZ Studio as your"
        secondarySubTitle="Web Development Company"
      />
      <div className="mt-10">
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          autoHeight
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
          {CreationData.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <ServiceCardMobile
                  item={{
                    title: item.title,
                    description: item.description,
                    subSteps: item.subSteps,
                  }}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default ServicesMobile;
