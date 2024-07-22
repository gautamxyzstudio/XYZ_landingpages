import Image from 'next/image';
import React, { memo } from 'react';
import { PLATFORM } from '../../../../public/exporter';
import { IPlatformCard } from '@/utility/mockdata';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

type IPlatformCardMobileProps = {
  id: number;
  title: string;
  description: string;
  illustration: string | StaticImport;
};

const PlatformCardMobile: React.FC<IPlatformCardMobileProps> = ({
  title,
  illustration,
  description,
}) => {
  return (
    <div className="rounded-[12px] shadow-custom min-h-[21rem]  flex flex-col bg-[#272727]  justify-center items-center p-6">
      <Image width={123} height={68} src={illustration} alt="" />
      <p className="text-white text-center my-4 font-semibold text-base">
        {title}
      </p>
      <p className="text-white text-center text-xs leading-5">{description}</p>
    </div>
  );
};

export default memo(PlatformCardMobile);
