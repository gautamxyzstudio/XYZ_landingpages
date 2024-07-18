import React from 'react';

import Image from 'next/image';
import FormHeader from '@/components/molecules/formHeader';
import Form from '@/components/organisms/form';
import {
  FRAME_TOP,
  FRAME_LEFT,
  FRAME_RIGHT,
} from '../../../../public/exporter';
const FormView = () => {
  return (
    <div className="bg-info-bg bg-cover bg-no-repeat">
      <div className="flex pl-[24px] pr-[24px]   sm:pl-20 sm:pr-20 md:pl-20 md:pr-20 lg:pl-20 lg:pl-20 relative pt-[108px] pb-[86px] flex-row  justify-center">
        <Form />
      </div>
    </div>
  );
};

export default FormView;
