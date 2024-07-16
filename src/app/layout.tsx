import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

import { poppins } from '../ui/fonts';
import { HOME_BG_VIDEO } from '../../public/exporter';
import SmoothScroll from '@/components/molecules/smoothScroll';

export const metadata: Metadata = {
  title: 'Mobile Development XYZ Studio',
  description: 'Mobile Development XYZ Studio',
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
      <body className={`${poppins.className} bg-black  antialiased`}>
        <div className="bg-contain  overflow-y-hidden">
          <video
            className="w-screen  hidden md-block video h-full  absolute object-contain"
            loop
            muted
            autoPlay
            playsInline
          >
            <source src={HOME_BG_VIDEO} type="video/mp4" />
          </video>
          <SmoothScroll>{children}</SmoothScroll>
        </div>

        {/* {children} */}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
