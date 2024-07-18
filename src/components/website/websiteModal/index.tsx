import Image from 'next/image';
import React from 'react';
import { LAPTOP_FRAME, WEBSITE_VIDEO } from '../../../../public/exporter';
import {
  StaticImageData,
  StaticImport,
  StaticRequire,
} from 'next/dist/shared/lib/get-img-props';

type ImageSource = string | StaticImport | StaticRequire | StaticImageData;
type VideoSource = string | undefined;

type IWebsiteModalProps = {
  height: string;
  width: string;
  type: 'image' | 'video';
} & (
  | { type: 'image'; src: string | StaticImport }
  | { type: 'video'; src: string | undefined }
);

const WebsiteModal: React.FC<IWebsiteModalProps> = ({
  width,
  height,
  src,
  type,
}) => {
  return (
    <div
      className={`relative ${height}  ${width} flex flex-col items-center justify-center overflow-hidden`}
    >
      <div className="absolute top-0 left-0 w-full h-full">
        <Image
          src={LAPTOP_FRAME}
          alt=""
          layout="fill"
          objectFit="contain"
          priority
        />
      </div>
      {type === 'video' && (
        <video
          className="absolute w-[91%] h-[91%]  bottom-[7%] object-contain top-2% left-11%  rounded-2xl"
          playsInline
          autoPlay
          muted
          loop
        >
          <source src={src} type="video/mp4" />
        </video>
      )}
      {type === 'image' && (
        <Image
          src={src}
          alt=""
          className="absolute w-[75%] h-[90%]  bottom-[7%]    rounded-[5px]"
        />
      )}
    </div>
  );
};

export default WebsiteModal;
