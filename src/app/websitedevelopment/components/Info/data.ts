import { IInfoCardProps } from '@/components/molecules/infoCard/types';
import {
  MOBILE,
  PEOPLE,
  SETTINGS,
  WEBSITE,
} from '../../../../../public/exporter';

export interface IInfoCardData extends IInfoCardProps {
  icon: string;
  count: string;
  alt: string;
  title: string;
  id: number;
}

export const infoData: IInfoCardData[] = [
  {
    id: 1,
    icon: PEOPLE,
    count: '150+',
    alt: 'People',
    title: 'Satisfied Clients',
  },
  {
    id: 2,
    icon: MOBILE,
    count: '35+',
    alt: 'Mobile',
    title: 'Mobile apps',
  },
  {
    id: 3,
    icon: WEBSITE,
    count: '42+',
    alt: 'Website',
    title: 'Web apps',
  },
  {
    id: 4,
    icon: SETTINGS,
    count: '24 hrs',
    alt: 'Support',
    title: 'Technical Support',
  },
  {
    id: 5,
    icon: PEOPLE,
    count: '150+',
    alt: 'People',
    title: 'Satisfied Clients',
  },
  {
    id: 6,
    icon: MOBILE,
    count: '35+',
    alt: 'Mobile',
    title: 'Mobile apps',
  },
  {
    id: 7,
    icon: WEBSITE,
    count: '42+',
    alt: 'Website',
    title: 'Web apps',
  },
  {
    id: 8,
    icon: SETTINGS,
    count: '24 hrs',
    alt: 'Support',
    title: 'Technical Support',
  },
];
