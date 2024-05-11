import React from 'react';
import styles from './astronaut.module.css';
import { chau_philomene } from '@/ui/fonts';
import Image from 'next/image';
import { ASTRONAUT_PAINTING } from '../../../../public/exporter';
const AstronautTab = () => {
  return (
    <div className={styles.ellipse}>
      <p
        className={`text-white ${chau_philomene.className} bottom-5 w-full self-center text-40px leading-48px absolute`}
      >
        Creation
      </p>
      <Image
        className="absolute top-[-25px]"
        src={ASTRONAUT_PAINTING}
        alt="Astronaut Painting"
      />
    </div>
  );
};

export default AstronautTab;
