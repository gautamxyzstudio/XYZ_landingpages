import Image from 'next/image';
import React, { useState } from 'react';
import ShowMoreText from 'react-show-more-text';
import {
  ASTRONAUT_PAINTING,
  MOBILE,
  MOBILE_DEV,
} from '../../../../public/exporter';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

type IServicesContentTab = {
  item: {
    title: string;
    description: string;
    subSteps: {
      id: number;
      title: string;
      illustration: string | StaticImport;
      des: string;
    }[];
  };
};

const ServiceCardMobile: React.FC<IServicesContentTab> = ({ item }) => {
  return (
    <div className="rounded-[8px] shadow-sm my-[2px] shadow-[rgba(241, 124, 4, 0.16)] bg-[#272727]  p-3">
      <h2 className="text-yellow text-base font-semibold">{item.title}</h2>
      <p className="mt-[5px] text-xs text-white">{item.description}</p>
      <div className="flex mt-6 flex-row">
        <div className="flex flex-col">
          {item.subSteps.map((step) => (
            <div
              key={step.id}
              className="flex  mt-[8px] p-[6px] flex-row items-center border-[1px] rounded-[4px] border-[#313131]"
            >
              <Image
                className="w-[23px] h-[23px] sm:w-[28px] sm:h-[28px] rounded-[4px] p-[2px] sm-[4px]"
                src={step.illustration}
                alt="MOBILE"
              />
              <p className="ml-[6px] text-white text-[10px] sm:text-[12px] font-medium">
                {step.title}
              </p>
            </div>
          ))}

          {/* <div className="flex  mt-[8px] p-[6px] flex-row items-center border-[1px] rounded-[4px] border-[#313131]">
            <Image
              className="w-[23px] h-[23px] sm:w-[28px] sm:h-[28px] rounded-[4px] p-[2px] sm-[4px]"
              src={MOBILE_DEV}
              alt="MOBILE"
            />
            <p className="ml-[6px] text-white text-[10px] sm:text-[12px] font-medium">
              Mobile development
            </p>
          </div>
          <div className="flex  mt-[8px] p-[6px] flex-row items-center border-[1px] rounded-[4px] border-[#313131]">
            <Image
              className="w-[23px] h-[23px] sm:w-[28px] sm:h-[28px] rounded-[4px] p-[2px] sm-[4px]"
              src={MOBILE_DEV}
              alt="MOBILE"
            />
            <p className="ml-[6px] text-white text-[10px] sm:text-[12px] font-medium">
              Mobile development
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ServiceCardMobile;
