'use client';
import FormHeader from '@/components/molecules/formHeader';
import PlatformCardMobile from '@/components/organisms/PlatformCardMobile';
import { platformData } from '@/utility/mockdata';
import React, { memo, useMemo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
const PlatformMobile = () => {
  return (
    <div>
      <FormHeader
        title="Our Methodology"
        subtitle="Web Development Process"
        secondarySubTitle=""
      />
      <div className="mt-10 mb-6">
        <Swiper
          grabCursor={true}
          effect="fade"
          centeredSlides={true}
          updateOnWindowResize={true}
          cssMode
          autoHeight
          scrollbar
          spaceBetween={'32vw'}
          slidesPerView={'auto'}
          pagination={true}
        >
          {platformData.map((item) => (
            <SwiperSlide key={item.id}>
              <PlatformCardMobile {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default memo(PlatformMobile);
