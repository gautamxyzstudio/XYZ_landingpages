import type { Metadata } from 'next';
import './globals.css';
import { poppins } from '../ui/fonts';

import Loading from '@/components/organisms/loadingScreen';
import { HOME_BG_VIDEO } from '../../public/exporter';

export const metadata: Metadata = {
  title: 'Web Development Company in Vancouver  | XYZ Studio',
  description:
    'XYZ Studio is Leading Web Development Company in Vancouver, specializing in custom websites that drive engagement and growth. Contact us to get started!',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="favicon.ico" sizes="any" />
      </head>
      <body className={`${poppins.className}   antialiased`}>
        <div className="bg-contain bg-main-bg">
          <video
            className="w-screen video h-full  absolute object-contain"
            loop
            muted
            autoPlay
            playsInline
          >
            <source src={HOME_BG_VIDEO} type="video/mp4" />
          </video>
          <Loading>{children}</Loading>
        </div>
      </body>
    </html>
  );
}
