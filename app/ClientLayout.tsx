'use client'

import { useEffect } from 'react'

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    document.body.removeAttribute('cz-shortcut-listen');
  }, []);

  return <>{children}</>;
}

