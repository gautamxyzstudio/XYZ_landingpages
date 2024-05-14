import React from 'react';
import styles from './background.module.css';
import Image from 'next/image';
import { CIRCLES_FRAME } from '../../../../public/exporter';
import YellowCircle from '@/components/atoms/yellowCircle';
interface BackgroundCirclesProps {
  children: React.ReactNode;
}

const BackgroundCircles: React.FC<BackgroundCirclesProps> = ({ children }) => {
  return (
    <div className="bg-white  overflow-hidden  flex items-center justify-center rounded-4xl relative  w-full h-full">
      <div className={styles.radialGradientOuter}>
        <YellowCircle
          animation="animate-[spin_2s_linear_infinite]"
          bottom="bottom-[29%]"
          left="left-[0]"
        />
        <YellowCircle
          animation="animate-[spinSec_2s_linear_infinite]"
          bottom="bottom-[0%]"
          left="right-[30%]"
        />
        <YellowCircle
          animation="animate-[spinThree_2s_linear_infinite]"
          bottom="top-[20%]"
          left="right-[5%]"
        />
        <div className={styles.radialGradient}>
          <div className={styles.radialGradientTwo} />
        </div>
      </div>
      {children}
    </div>
  );
};

export default BackgroundCircles;
