import Image from 'next/image';
import React, { useState } from 'react';
import ShowMoreText from 'react-show-more-text';
import {
  ASTRONAUT_PAINTING,
  MOBILE,
  MOBILE_DEV,
} from '../../../../public/exporter';

const ServiceCardMobile = () => {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="rounded-[8px] shadow-sm my-[2px] shadow-[rgba(241, 124, 4, 0.16)] bg-white  p-3">
      <h1 className="text-yellow text-base font-semibold">Development</h1>
      <ShowMoreText
        /* Default options */
        lines={2}
        more="Show more"
        less="...Show less"
        className="text-xs text-blackText"
        anchorClass="text-xs text-blackText font-bold"
        onClick={(expanded: boolean) => setShowMore(expanded)}
        expanded={showMore}
        width={254}
      >
        <p className="mt-[5px] text-xs text-blackText">
          We understand that design plays a critical role in success of any
          digital product We understand that design plays a critical role in
          success of any digital product
        </p>
      </ShowMoreText>
      <div className="flex flex-row">
        <Image
          className="w-[82px] h-[132px]"
          src={ASTRONAUT_PAINTING}
          alt={'ASTRONAUT PAINTING'}
        />
        <div className="flex flex-col ml-[20px]">
          <div className="flex  mt-[8px] p-[6px] flex-row items-center border-[1px] rounded-[4px] border-borderGrey">
            <Image
              className="w-[23px] h-[23px] sm:w-[28px] sm:h-[28px] bg-primary  rounded-[4px] p-[2px] sm-[4px]"
              src={MOBILE_DEV}
              alt="MOBILE"
            />
            <p className="ml-[6px] text-[10px] sm:text-[12px] font-medium">
              Mobile development
            </p>
          </div>
          <div className="flex  mt-[8px] p-[6px] flex-row items-center border-[1px] rounded-[4px] border-borderGrey">
            <Image
              className="w-[23px] h-[23px]  sm:w-[28px] sm:h-[28px] bg-primary  rounded-[4px] p-[2px] sm-[4px]"
              src={MOBILE_DEV}
              alt="MOBILE"
            />
            <p className="ml-[6px] text-[10px] sm:text-[12px] font-medium">
              Mobile development
            </p>
          </div>
          <div className="flex  mt-[8px] p-[6px] flex-row items-center border-[1px] rounded-[4px] border-borderGrey">
            <Image
              className="w-[23px] h-[23px] sm:w-[28px] sm:h-[28px] ] bg-primary  rounded-[4px] p-[2px]  sm-[4px]"
              src={MOBILE_DEV}
              alt="MOBILE"
            />
            <p className="ml-[6px] text-[10px] sm:text-[12px]  font-medium">
              Mobile development
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCardMobile;
