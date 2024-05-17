import React from 'react';
import Form from '../../../../components/organisms/form';
import {
  ASTRONAUT_WAVING,
  FRAME_LEFT,
  FRAME_RIGHT,
  FRAME_TOP,
} from '../../../../../public/exporter';
import Image from 'next/image';
const FormView = () => {
  return (
    <div className="flex px-[148px] relative pt-[108px] pb-[86px] flex-row  justify-center">
      <Image src={FRAME_TOP} className="absolute top-0" alt="FRAME TOP" />
      <Form />
      <Image
        src={FRAME_LEFT}
        className="absolute left-0 bottom-0"
        alt="FRAME LEFT"
      />
      <Image
        className="absolute right-0 bottom-0"
        src={FRAME_RIGHT}
        alt="FRAME RIGHT"
      />
    </div>
  );
};

export default FormView;
