import React from 'react';
import './globals.css';

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
      <body>
        {children}
      </body>
    </html>
  );
}