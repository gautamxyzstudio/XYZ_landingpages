import { IPlatformCardProps } from '@/components/organisms/PlatformCard';

export type IPlatformCard = {
  id: number;
  title: string;
  description: string;
};

export const platformData: IPlatformCard[] = [
  {
    id: 1,
    title: 'Ideation & Planning',
    description:
      'Brainstorm app concepts, define purpose and audience, conduct market research, analyze competitors, craft user stories, and prototype designs.',
  },
  {
    id: 2,
    title: 'Design',
    description:
      'Our designers craft a visually appealing and intuitive user interface and experience.',
  },
  {
    id: 3,
    title: 'Development',
    description:
      "Our skilled developers choose the right technologies and build the app's backend and frontend.",
  },
  {
    id: 4,
    title: 'Testing',
    description:
      'We ensure the app is bug-free and user-friendly through rigorous testing and troubleshooting.',
  },
  {
    id: 5,
    title: 'Deployment',
    description:
      'We submit the app-to-app stores and make it available for download, reaching your audience.',
  },
  {
    id: 6,
    title: 'Maintenance',
    description:
      'We continuously update and improve the app based on user feedback and address any issues.',
  },
];
