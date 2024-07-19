import { IPlatformCardProps } from '@/components/organisms/PlatformCard';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import {
  DEPLOYMENT,
  DESIGN,
  DEVELOPMENT,
  MAINTENANCE,
  PLANNING,
  TESTING,
} from '../../public/exporter';

export type IPlatformCard = {
  id: number;
  title: string;
  description: string;
  illustration: string | StaticImport;
};

export const platformData: IPlatformCard[] = [
  {
    id: 1,
    title: 'Ideation & Planning',
    illustration: PLANNING,
    description:
      'We start by using understanding your commercial enterprise desires, target market, and task requirements. This allows us to expand a comprehensive plan that aligns with your vision and objectives.',
  },
  {
    id: 2,
    title: 'Design & Wireframing',
    illustration: DESIGN,
    description:
      'Our team of experienced designers creates visually appealing and user-pleasant wireframes and mockups, making sure an intuitive and attractive person experience.',
  },
  {
    id: 3,
    title: 'Development',
    illustration: DEVELOPMENT,
    description:
      'Our professional developers leverage the latest technologies and pleasant practices to convey your internet site to life, optimizing it for overall performance, security, and scalability.',
  },
  {
    id: 4,
    title: 'Quality Assurance',
    illustration: TESTING,
    description:
      'We very well test your internet site across a couple of devices and browsers, addressing any troubles or bugs to make sure a continuing consumer experience.',
  },
  {
    id: 5,
    title: 'Deployment & Launch',
    illustration: DEPLOYMENT,
    description:
      'Once the website is ready, we handle smooth implementation and launch, and ensure a successful transition to the status quo. ',
  },
  {
    id: 6,
    title: 'Maintenance',
    illustration: MAINTENANCE,
    description:
      'We offer ongoing maintenance and support, constantly checking the performance of your website and applying updates to keep it secure and up-to-date.',
  },
];

type ICreation = {
  id: number;
  title: string;
  description: string;
  subSteps: {
    id: number;
    title: string;
    des: string;
  }[];
};

export const CreationData: ICreation[] = [
  {
    id: 1,
    title: 'Creation',
    description:
      'Creating a successful mobile app requires creativity, technical expertise and an understanding of user needs. Following a structured approach turns ideas into engaging, functional apps that engage users and drive business success.',
    subSteps: [
      {
        id: 2,
        title: 'Ideation and Concept Development',
        des: 'Identify problems your app solves. Research market and competition. Develop clear, compelling value proposition for users',
      },
      {
        id: 3,
        title: 'User Experience (UX) Design',
        des: 'Create user personas and scenarios. String frames and prototypes should be developed. Conduct testing usage to check claims and make policy changes.',
      },
      {
        id: 4,
        title: 'Technical Architecture and Planning',
        des: 'Identify development plans and tools to be used. Describe the features, functions, and requirements of the app. Create a project roadmap and timeline to guide progress.',
      },
    ],
  },
  {
    id: 2,
    title: 'Design',
    description:
      'Developing a successful mobile app requires user insights, intuitive UI, and small-screen skills. Creating interesting and engaging apps requires a thorough knowledge of mobile design principles.Our team of experienced designers creates visually appealing and user-pleasant wireframes and mockups, making sure an intuitive and attractive person experience and make appealing design',
    subSteps: [
      {
        id: 5,
        title: 'Understand user needs',
        des: 'Assess user needs, create personas, prioritize based on feedback and trends to design mobile apps that captivate audiences.',
      },
      {
        id: 6,
        title: 'Simplicity and Clarity',
        des: 'Make the app easy to use. Use clear words to guide users. Important things should be easy to find.',
      },
      {
        id: 7,
        title: 'Responsive and Adaptive Design',
        des: 'Optimize layouts for all screens. App works smoothly on different platforms. Use natural gestures and touch on mobile.',
      },
    ],
  },
  {
    id: 3,
    title: 'Development',
    description:
      'Developing mobile apps is a complex task. It requires understanding programming, frameworks, and mobile challenges. Mastering mobile development allows creating apps that meet user needs and drive business success.',
    subSteps: [
      {
        id: 8,
        title: 'Choose Right Development Framework',
        des: 'Select a framework that aligns with project needs. Consider native, hybrid, cross-platform pros and cons. Evaluate learning curve and support.',
      },
      {
        id: 9,
        title: 'Designing for Performance',
        des: 'Optimize app architecture for data efficiency. Implement caching and CDNs for latency. Profiling tools fix performance issues.',
      },
      {
        id: 10,
        title: 'Ensuring Security and Compliance',
        des: 'Implement strong authentication and authorization. Encrypt sensitive data and protect against vulnerabilities. Ensure compliance with regulations like GDPR and HIPAA.',
      },
    ],
  },
];
