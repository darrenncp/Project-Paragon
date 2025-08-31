'use client';

import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';

export function usePageTransition() {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    // Listen for route changes
    const originalPush = router.push;
    router.push = (...args) => {
      handleStart();
      return originalPush.apply(router, args);
    };

    return () => {
      router.push = originalPush;
    };
  }, [router]);

  useEffect(() => {
    setLoading(false);
  }, [pathname]);

  return { loading };
}
