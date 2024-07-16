import React from 'react';
import Form from '@/components/organisms/form';
const FormView = () => {
  return (
    <div className="md:bg-info-bg bg-cover bg-no-repeat">
      <div className="flex pl-[24px] pr-[24px]  sm:pl-20 sm:pr-20 md:pl-20 md:pr-20 lg:pl-20 lg:pl-20 relative pt-[108px] pb-[86px] flex-row  justify-center">
        <Form />
      </div>
    </div>
  );
};

export default FormView;
