import React, { memo } from 'react';
import Image from 'next/image';
import { LOGO } from '../../../../public/exporter';
const Header = () => {
  return (
    <div className="pt-6">
      <Image
        className="w-[38px] h-[38px] sm:w-[80px] sm:h-[80px]"
        src={LOGO}
        alt="Logo"
      />
    </div>
  );
};

export default memo(Header);
