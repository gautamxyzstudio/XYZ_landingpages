import React from 'react';
import InfoCard from '@/components/molecules/infoCard';
import { infoData } from './data';

const Info = () => {
  return (
    <div>
      <div className="flex flex-row">
        {infoData.map((element, index) => {
          return (
            <div className="md:mr-84px" key={index}>
              <InfoCard
                icon={element.icon}
                count={element.count}
                alt={element.alt}
                title={element.title}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Info;
