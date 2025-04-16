import React from 'react';
import './globals.css';
import Header from './navbar/Header';
import Starter from './navbar/Starter';
import Board from './navbar/Board';
import Frame from './navbar/Frame';
import Card1 from './navbar/Head';

export const metadata = {
  title: 'clone',
  description: 'A starter layout for your application',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className="bg-[#ECF9FF]">
        <Header />
        <Starter />
        <Board />
        <Frame />
        <Card1 />
        {children}
      </body>
    </html>
  );
}