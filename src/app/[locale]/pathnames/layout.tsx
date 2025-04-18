import React, { ReactNode } from 'react';
import clsx from "clsx";
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '../../components/Landing/Navbar';
import Footer from '../../components/Landing/Footer';

// Import Navigation if it exists
// If Navigation is not needed, remove it from the JSX below
// import Navigation from '../../components/Landing/Navigation';

const inter = Inter({ subsets: ['latin'] });

type Props = {
  children: ReactNode;
};

export const metadata = {
  title: 'Candle clone',
  description: 'A starter layout for your application',
};

export default function Layout({ children }: Props) {
  return (
    <html className="h-full" lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className={clsx(inter.className, 'flex flex-col min-h-screen bg-gray-100')}>
        {/* Uncomment the Navigation component if it exists */}
        {/* <Navigation /> */}
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}