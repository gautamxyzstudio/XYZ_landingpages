import { IDetailCardProps } from '@/components/molecules/detailCard/types';
import { CALL, MESSAGE, POSITION } from '../../../../public/exporter';

export interface IFooterDetailsData extends IDetailCardProps {
  id: number;
}

export const footerDetails: IFooterDetailsData[] = [
  {
    id: 0,
    icon: POSITION,
    title: '515 W Pender St Unit 229, Vancouver, BC V6B 1V5 +1 ',
  },
  {
    id: 1,
    icon: CALL,
    title: '(844) 999 – 7836',
  },
  {
    id: 2,
    icon: MESSAGE,
    title: 'email@xyz.studio',
  },
];
