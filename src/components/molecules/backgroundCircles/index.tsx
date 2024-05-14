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
      <YellowCircle bottom="bottom-[200px]" left="left-[30px]" />
      <YellowCircle bottom="bottom-[80px]" left="right-[70px]" />
      <YellowCircle bottom="top-[100px]" left="right-[120px]" />
      <div className={styles.radialGradient}>
        <div className={styles.radialGradientTwo} />
      </div>
      {children}
    </div>
  );
};

export default BackgroundCircles;
