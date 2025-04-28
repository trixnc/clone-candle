import { ReactNode } from 'react';
import cn from 'classnames';

export default function Container({ children }: { children: React.ReactNode }) {
  return (
      <div className="w-9/12 h-full mx-auto pt-5 px-4 sm:px-6 lg:px-8">
          {children}
      </div>
  );
}