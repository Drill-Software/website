'use client';

import Header from '@/components/Header';

export default function ClientWrapper({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
} 