import Image from 'next/image';
import React from 'react';
import { PLATFORM } from '../../../../public/exporter';

const PlatformCard = () => {
  return (
    <div className="bg-[#272727] h-[284px] cursor-pointer relative flex-1 px-20 rounded-lg shadow-custom py-[30px] transition-all ease-in-out duration-700 hover:flex-[2] group">
      <div className="flex flex-col items-center justify-center h-full">
        {/* <Image width={230} height={138} src={PLATFORM} alt="" /> */}
        <p className="mt-6 text-2xl text-center text-white font-semibold line-clamp-2">
          Native Mobile App Development
        </p>
      </div>
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100  px-6 flex justify-center items-center rounded-lg bg-white bg-opacity-100 transition-opacity duration-700">
        <div className="w-full h-full flex justify-center items-center">
          <p className="text-blackText text-xl delay-[250ms] leading-9 opacity-0 text-center group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
            Our mobile app developers build top-quality native apps for both iOS
            and Android systems aligned with your business needs
          </p>
        </div>
      </div>
    </div>
  );
};

export default PlatformCard;

// import Image from 'next/image';
// import React from 'react';
// import { PLATFORM } from '../../../../public/exporter';

// const PlatformCard = () => {
//   return (
//     <div className="bg-white h-[284px] cursor-pointer relative flex-1 px-20 rounded-lg shadow-custom py-[30px] transition-all ease-in-out duration-700 hover:flex-[2] group">
//       <div className="flex flex-col items-center justify-center h-full">
//         <Image width={230} height={138} src={PLATFORM} alt="" />
//         <p className="mt-6 text-2xl text-center font-semibold line-clamp-2">
//           Native Mobile App Development
//         </p>
//       </div>
//       <div className="absolute inset-0 opacity-0 group-hover:opacity-100 px-6 flex justify-center items-center rounded-lg bg-black bg-opacity-90 transition-opacity duration-700">
//         <div className="w-full h-full flex justify-center items-center">
//           <p className="text-white text-xl delay-200 leading-9 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
//             Our mobile app developers build top-quality native apps for both iOS
//             and Android systems aligned with your business needs
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PlatformCard;
