import React, { memo } from 'react';
import Image from 'next/image';
import { LOGO } from '../../../../public/exporter';
const Header = () => {
  return (
    <div className="pt-6">
      <Image src={LOGO} alt="Logo" />
    </div>
  );
};

export default memo(Header);
