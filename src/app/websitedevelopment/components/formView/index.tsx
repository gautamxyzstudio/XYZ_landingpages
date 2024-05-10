import React from 'react';
import Form from '../../../../components/organisms/form';
import { ASTRONAUT_WAVING } from '../../../../../public/exporter';
import Image from 'next/image';
const FormView = () => {
  return (
    <div className="flex flex-row items-center">
      <div className="w-65%">
        <Form />
      </div>
      <div className="md:ml-90px">
        <Image src={ASTRONAUT_WAVING} alt="astronaut" />
      </div>
    </div>
  );
};

export default FormView;
