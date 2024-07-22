import Image from 'next/image';
import React, { memo } from 'react';
import { PLANNING, PLATFORM } from '../../../../public/exporter';
import { padOrTrimString } from '@/utility/contants';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

export type IPlatformCardProps = {
  title: string;
  description: string;
  illustration: string | StaticImport;
};

const PlatformCard: React.FC<IPlatformCardProps> = ({
  title,
  description,
  illustration,
}) => {
  return (
    <div className="bg-[#272727] h-[284px]  cursor-pointer relative flex-1 px-20 rounded-lg shadow-custom py-[30px] transition-all ease-in-out duration-700 hover:flex-[2] group">
      <div className="flex flex-col items-center justify-center h-full">
        <Image
          width={125}
          className="bg-opacity-0"
          height={125}
          src={illustration}
          alt=""
        />
        <h3 className="mt-6 text-2xl w-[10rem] text-center text-white font-semibold">
          {`${padOrTrimString(title)}`}
        </h3>
      </div>
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100  px-6 flex justify-center items-center rounded-lg bg-white bg-opacity-100 transition-opacity duration-700">
        <div className="w-full h-full flex justify-center items-center">
          <p className="text-blackText text-xl delay-[250ms] leading-9 opacity-0 text-center group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default memo(PlatformCard);
