import ServiceCard from '@/components/molecules/serviceCard';
import React from 'react';

type IServicesContentTab = {
  item: {
    title: string;
    description: string;
    subSteps: {
      id: number;
      title: string;
      des: string;
    }[];
  };
};

const ServicesContentTab: React.FC<IServicesContentTab> = ({ item }) => {
  return (
    <div className="ml-94px xl:mb-94px">
      <h1 className="text-yellow  leading-10 text-36px font-semibold">
        {item.title}
      </h1>
      <p className="mt-3 text-xl text-wrap leading-7 text-white">
        {item.description}
      </p>
      <div className="flex justify-center  flex-row  md:gap-2  lg:gap-4  xl:gap-6 mt-[36px] flex-wrap">
        {item.subSteps.map((step) => (
          <ServiceCard key={step.id} {...step} />
        ))}
      </div>
    </div>
  );
};

export default ServicesContentTab;
