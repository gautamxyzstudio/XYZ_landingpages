import PlatformCard from '@/components/organisms/PlatformCard';
import { chau_philomene } from '@/ui/fonts';
import { platformData } from '@/utility/mockdata';
import { it } from 'node:test';
import React, { useMemo } from 'react';

const Platform = () => {
  // Memoized style for the background image
  const servicesStyle = useMemo(
    () => ({
      backgroundImage: 'url(service.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      marginTop: 76,
      paddingTop: 48,
      paddingBottom: 48,
      paddingLeft: 80,
      paddingRight: 80,
    }),
    []
  );

  return (
    <div>
      <div className="flex flex-row items-center justify-center">
        <h2
          className={`text-orange ${chau_philomene.className} font-bold leading-44px text-4xl`}
        >
          Our Methodology
        </h2>
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
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
        <div>
          <h2 className="text-white leading-38px text-3xl font-medium">
            Web Development Process
          </h2>
          {/* <p className="text-white leading-38px text-3xl font-medium">
            Web/Mobile/Tablet
          </p> */}
        </div>
      </div>
      <div className="mt-20 gap-x-6 gap-y-6 flex flex-wrap flex-row">
        {platformData.map((item) => (
          <PlatformCard
            illustration={item.illustration}
            key={item.id}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Platform;
