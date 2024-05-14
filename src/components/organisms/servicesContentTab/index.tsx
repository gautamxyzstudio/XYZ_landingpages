import ServiceCard from '@/components/molecules/serviceCard';
import React from 'react';

const ServicesContentTab = () => {
  return (
    <div className="flex-1  ml-94px mr-[81px]">
      <h1 className="text-yellow  leading-10 text-36px font-semibold">
        Creation
      </h1>
      <p className="mt-3 text-xl text-wrap leading-7 text-dark">
        We understand that design plays a critical role in the success of any
        digital product, and our team of talented designers is dedicated to
        creating visually stunning and user-friendly experiences.
      </p>
      <div className="flex  flex-row gap-6 mt-[36px] flex-wrap">
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </div>
    </div>
  );
};

export default ServicesContentTab;
