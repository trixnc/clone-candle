import React, { ReactNode } from 'react';
import './globals.css';
import Navbar from './Landing/Navbar'; // Ensure this path is correct
import Footer from './Landing/Footer'; // Ensure this path is correct

export const metadata = {
  title: 'clone',
  description: 'A starter layout for your application',
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
