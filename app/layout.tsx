import HeaderTop from '@/components/HeaderTop';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import HeaderMain from '@/components/HeaderMain';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import NewProuct from '@/components/NewProuct';
import Testimonial from '@/components/Testimonial';
import MovNavbar from '@/components/MovNavbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Basic Ecom',
  description: 'shopping related side ',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HeaderTop />
        <HeaderMain />
        <Navbar />
        <Hero />
        <NewProuct />
        <Testimonial />
        <MovNavbar />
        <Footer />
        {children}
      </body>
    </html>
  );
}
