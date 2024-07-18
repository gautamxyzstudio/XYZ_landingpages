import React from 'react';
import { FRAME, MOBILE_VIDEO } from '../../../../public/exporter';
import Image from 'next/image';

type IMobilePhoneFrame = {
  height: string;
  width: string;
};

const Mobile: React.FC<IMobilePhoneFrame> = ({ height, width }) => {
  return (
    <div
      className={`overflow-hidden  ${height} ${width} relative top-0 left-0`}
    >
      <video
        playsInline
        className={`object-contain absolute bg-opacity-0  rounded-[30px] mt-[2%]  ml-[11%]  w-[78%] h-[97.5%]`}
        loop
        muted
        autoPlay
      >
        <source src={MOBILE_VIDEO} type="video/mp4" />
      </video>
      <Image
        className={`${height} z-999  top-0 left-0 absolute ${width}`}
        priority
        src={FRAME}
        alt=""
      />
    </div>
  );
};

export default Mobile;

{
  /* <div className="overflow-hidden h-[45.46vh] w-[50vw] relative top-0 left-0 ">
<video
  playsInline
  className={
    'object-contain top-[-5px] absolute bg-opacity-0  rounded-[30px] mt-[4%]  ml-[11%]  w-[78%] h-[95.5%]'
  }
  loop
  muted
  autoPlay
>
  <source src={MOBILE_VIDEO} type="video/mp4" />
</video>
<Image
  className="h-[45.46vh]  z-999  top-0 left-0 absolute w-[50vw]"
  priority
  src={FRAME}
  alt=""
/>
</div> */
}
