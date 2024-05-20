import React, { memo } from 'react';

const BgCircles = () => {
  return (
    <div className="absolute  hidden lg:block  right-[-230px]  z-0 top-0">
      <div className="w-[812px] h-[812px] flex border-[1px] border-borderCircle justify-center items-center  rounded-full">
        <div className="w-[600px] h-[600px] flex border-[1px] border-borderCircle justify-center items-center  rounded-full">
          <div className="w-[353px] h-[353px] flex border-[1px] border-borderCircle justify-center items-center  rounded-full">
            <div className="w-[134px] h-[134px] flex border-[1px] border-borderCircle justify-center items-center  rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(BgCircles);
