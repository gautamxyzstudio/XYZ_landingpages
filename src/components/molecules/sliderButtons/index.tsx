'use client';
import React, { memo, useMemo, useState } from 'react';
import { ISliderButtonProps } from './types';
import { log } from 'console';

const SliderButtons: React.FC<ISliderButtonProps> = ({
  index,
  onPressNext,
  onPressPrev,
}) => {
  const leftButtonColor = useMemo(
    () => (index === 0 ? '#DBDBDB' : '#F17C04'),
    [index]
  );
  const RightButtonColor = useMemo(
    () => (index === 2 ? '#DBDBDB' : '#F17C04'),
    [index]
  );

  return (
    <div className="flex flex-row items-center">
      <div onClick={onPressPrev} className="cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="72"
          height="72"
          viewBox="0 0 72 72"
          fill="none"
        >
          <g filter="url(#filter0_d_2049_4618)">
            <circle
              cx="36"
              cy="36"
              r="27.5"
              fill="white"
              stroke={leftButtonColor}
            />
            <path
              d="M37.9654 50.6215C37.3709 51.249 36.3758 51.2625 35.7646 50.6512L22.2443 37.1309C21.4632 36.3499 21.4632 35.0835 22.2443 34.3025L35.7646 20.7822C36.3758 20.1709 37.3709 20.1844 37.9654 20.8119C38.5359 21.4141 38.5251 22.3604 37.9411 22.9494L26.6782 34.3085C25.9052 35.0882 25.9052 36.3452 26.6782 37.1249L37.9411 48.484C38.5251 49.073 38.5359 50.0194 37.9654 50.6215Z"
              fill={leftButtonColor}
            />
            <path
              d="M23.0625 35.7261C23.0625 34.8203 23.7968 34.0859 24.7027 34.0859H49.5395C50.4453 34.0859 51.1797 34.8203 51.1797 35.7261C51.1797 36.6319 50.4453 37.3663 49.5395 37.3663H24.7027C23.7968 37.3663 23.0625 36.6319 23.0625 35.7261Z"
              fill={leftButtonColor}
            />
          </g>
          <defs>
            <filter
              id="filter0_d_2049_4618"
              x="0"
              y="0"
              width="72"
              height="72"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="4" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.0705882 0 0 0 0 0.0705882 0 0 0 0 0.0705882 0 0 0 0.2 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_2049_4618"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_2049_4618"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>
      <div onClick={onPressNext} className="ml-[30px] cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="72"
          height="72"
          viewBox="0 0 72 72"
          fill="none"
        >
          <g filter="url(#filter0_d_2049_4623)">
            <circle
              cx="36"
              cy="36"
              r="27.5"
              transform="rotate(-180 36 36)"
              fill="white"
              stroke={RightButtonColor}
            />
            <path
              d="M34.0346 21.3785C34.6291 20.751 35.6242 20.7375 36.2354 21.3488L49.7557 34.8691C50.5368 35.6501 50.5368 36.9165 49.7557 37.6975L36.2354 51.2178C35.6242 51.8291 34.6291 51.8156 34.0346 51.1881C33.4641 50.5859 33.4749 49.6396 34.0589 49.0506L45.3218 37.6915C46.0948 36.9118 46.0948 35.6548 45.3218 34.8751L34.0589 23.516C33.4749 22.927 33.4641 21.9806 34.0346 21.3785Z"
              fill={RightButtonColor}
            />
            <path
              d="M48.9375 36.2739C48.9375 37.1797 48.2032 37.9141 47.2973 37.9141H22.4605C21.5547 37.9141 20.8203 37.1797 20.8203 36.2739C20.8203 35.3681 21.5547 34.6337 22.4605 34.6337H47.2973C48.2032 34.6337 48.9375 35.3681 48.9375 36.2739Z"
              fill={RightButtonColor}
            />
          </g>
          <defs>
            <filter
              id="filter0_d_2049_4623"
              x="0"
              y="0"
              width="72"
              height="72"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="4" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.0705882 0 0 0 0 0.0705882 0 0 0 0 0.0705882 0 0 0 0.2 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_2049_4623"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_2049_4623"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default memo(SliderButtons);
