import Image from 'next/image';
import React from 'react';
import {
  FRAME_LEFT,
  FRAME_RIGHT,
  FRAME_TOP,
  FRAME_TOP_SMALL,
} from '../../../../../public/exporter';
import FormHeader from '@/components/molecules/formHeader';

const FormMobile = () => {
  return (
    <div className="w-full flex pt-[56px] relative flex-row  justify-center pb-[112px]">
      <Image className="absolute top-0" src={FRAME_TOP_SMALL} alt="FRAME TOP" />
      <Image
        src={FRAME_LEFT}
        className="absolute w-[73px] h-[56px] left-0 bottom-0"
        alt="FRAME LEFT"
      />
      <Image
        className="absolute  w-[123px] h-[138px] right-0 bottom-0"
        src={FRAME_RIGHT}
        alt="FRAME RIGHT"
      />
      <FormHeader />
    </div>
  );
};

export default FormMobile;
