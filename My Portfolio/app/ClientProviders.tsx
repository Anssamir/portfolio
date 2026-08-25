'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { CustomCursor } from '@/components/CustomCursor';
import { CustomHoverCursor } from '@/components/CustomHoverCursor';
import { Header } from '@/components/Header';

export function ClientProviders({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return (
    <>
      <CustomCursor />
      <CustomHoverCursor />
      <Header />
      {children}
    </>
  );
}
