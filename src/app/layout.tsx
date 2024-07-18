import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { poppins } from '../ui/fonts';

import Footer from '@/components/website/footer';
import Loading from '@/components/organisms/loadingScreen';
import SmoothScroll from '@/components/molecules/smoothScroll';
import { HOME_BG_VIDEO, LOADER } from '../../public/exporter';

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
      <body className={`${poppins.className}   antialiased`}>
        <div className="bg-contain overflow-y-hidden bg-main-bg">
          <video
            className="w-screen video h-full  absolute object-contain"
            loop
            muted
            autoPlay
            playsInline
          >
            <source src={HOME_BG_VIDEO} type="video/mp4" />
          </video>
          <SmoothScroll>
            <Loading>{children}</Loading>
          </SmoothScroll>
        </div>

        {/* {children} */}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
