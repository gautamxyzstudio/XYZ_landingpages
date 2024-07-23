import ServiceCard from '@/components/molecules/serviceCard';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import React from 'react';

type IServicesContentTab = {
  item: {
    title: string;
    description: string;
    subSteps: {
      id: number;
      title: string;
      des: string;
      illustration: string | StaticImport;
    }[];
  };
};

const ServicesContentTab: React.FC<IServicesContentTab> = ({ item }) => {
  return (
    <div className="ml-94px xl:mb-94px">
      <h3 className="text-yellow  leading-10 text-36px font-semibold">
        {item.title}
      </h3>
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
