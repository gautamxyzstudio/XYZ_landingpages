'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { LAPTOP_FRAME, WEBSITE_VIDEO } from '../../../../public/exporter';
import {
  StaticImageData,
  StaticImport,
  StaticRequire,
} from 'next/dist/shared/lib/get-img-props';
import { detectBrowser } from '@/utility/contants';

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
  const [browser, setBrowser] = useState<string | null>(null);
  useEffect(() => {
    setBrowser(detectBrowser());
  }, []);

  console.log(browser, 'BROWSER');
  return (
    <>
      {type === 'video' && (
        <div
          className={`relative ${height}  ${width} flex flex-col  green items-center justify-center overflow-hidden`}
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

          <video
            className="absolute w-[90%] h-[90%]   bottom-[7%] object-contain top-2% ml-[0.5%] rounded-2xl"
            playsInline
            autoPlay
            muted
            loop
          >
            <source src={src} type="video/mp4" />
          </video>
        </div>
      )}
    </>
  );
};

export default WebsiteModal;
