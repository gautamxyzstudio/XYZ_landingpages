import React from 'react';
import styles from './background.module.css';
import Image from 'next/image';
import YellowCircle from '@/components/atoms/yellowCircle';
interface BackgroundCirclesProps {
  children: React.ReactNode;
}

const BackgroundCircles: React.FC<BackgroundCirclesProps> = ({ children }) => {
  return (
    <div className="bg-white flex items-center justify-center rounded-4xl relative  w-full h-full">
      <div className=" w-[330px] h-[330px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] absolute rounded-full mt-[60px]">
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
