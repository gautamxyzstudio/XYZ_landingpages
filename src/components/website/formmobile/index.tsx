import Image from 'next/image';
import React from 'react';

import FormHeader from '@/components/molecules/formHeader';
import {
  FRAME_TOP_SMALL,
  FRAME_LEFT,
  FRAME_RIGHT,
} from '../../../../public/exporter';

const FormMobile = () => {
  return (
    <div className="w-full flex  relative flex-row  justify-center pb-[165px]">
      <FormHeader />
    </div>
  );
};

export default FormMobile;
