import React from 'react';
import InfoCard from '@/components/molecules/infoCard';
import { infoData } from './data';
import { PEOPLE, MOBILE, WEBSITE, SETTINGS } from '../../../../public/exporter';

const Info = () => {
  return (
    <div className="w-full inline-flex py-8  flex-nowrap">
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-2 sm:[&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
        <li>
          <InfoCard
            icon={PEOPLE}
            count={'150+'}
            alt={'People'}
            title={'Satisfied Clients'}
          />
        </li>
        <li>
          <InfoCard
            icon={MOBILE}
            count={'35+'}
            alt={'Mobile'}
            title={'Mobile apps'}
          />
        </li>
        <li>
          <InfoCard
            icon={WEBSITE}
            count={'42+'}
            alt={'Website'}
            title={'Web apps'}
          />
        </li>
        <li>
          <InfoCard
            icon={SETTINGS}
            count={'24 hrs'}
            alt={'Support'}
            title={'Technical Support'}
          />
        </li>
      </ul>
      <ul
        className="flex items-center justify-center md:justify-start [&_li]:mx-2 sm:[&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
        aria-hidden="true"
      >
        <li>
          <InfoCard
            icon={PEOPLE}
            count={'150+'}
            alt={'People'}
            title={'Satisfied Clients'}
          />
        </li>
        <li>
          <InfoCard
            icon={MOBILE}
            count={'35+'}
            alt={'Mobile'}
            title={'Mobile apps'}
          />
        </li>
        <li>
          <InfoCard
            icon={WEBSITE}
            count={'42+'}
            alt={'Website'}
            title={'Web apps'}
          />
        </li>
        <li>
          <InfoCard
            icon={SETTINGS}
            count={'24 hrs'}
            alt={'Support'}
            title={'Technical Support'}
          />
        </li>
      </ul>
    </div>
  );
};

export default Info;
