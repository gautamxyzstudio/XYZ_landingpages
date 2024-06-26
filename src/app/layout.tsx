import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { poppins } from '../ui/fonts';

import { Providers } from './provider';
import { usePathname } from 'next/navigation';
import Footer from '@/components/website/footer';
import Loading from '@/components/organisms/loadingScreen';

export const metadata: Metadata = {
  title: 'Website Development XYZ Studio',
  description: 'Website Development XYZ Studio',
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
      <body className={`${poppins.className} antialiased`}>
        <Loading>
          <Providers>{children}</Providers>
          <Footer />
        </Loading>
      </body>
    </html>
  );
}
