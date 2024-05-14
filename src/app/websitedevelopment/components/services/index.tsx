import Header from '@/components/atoms/header';
import AstronautTab from '@/components/organisms/astronautServiceView';
import ServicesContentTab from '@/components/organisms/servicesContentTab';
import { chau_philomene } from '@/ui/fonts';
import React, { useMemo } from 'react';

const Services = () => {
  const servicesStyle = useMemo(() => {
    return {
      backgroundImage: 'url(service.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    };
  }, []);

  return (
    <div className="pt-12 pb-[70px]" style={servicesStyle}>
      <div>
        <div className="flex flex-row items-center justify-center">
          <p
            className={`text-orange ${chau_philomene.className} font-bold leading-44px text-4xl`}
          >
            Services
          </p>
          <svg
            className="md:mx-6"
            xmlns="http://www.w3.org/2000/svg"
            width="4"
            height="102"
            viewBox="0 0 4 102"
            fill="none"
          >
            <path
              d="M2 2V100"
              stroke="#F17C04"
              stroke-width="4"
              stroke-linecap="round"
            />
          </svg>
          <div>
            <p className="text-blackText  leading-38px text-3xl font-medium">
              Fusion of creativity and
            </p>
            <p className="text-blackText  leading-38px text-3xl font-medium">
              functionality
            </p>
          </div>
        </div>
        <div className="mt-94px">
          <div className="flex items-center flex-row">
            <AstronautTab />
            <div>
              <ServicesContentTab />
              <ServicesContentTab />
              <ServicesContentTab />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
