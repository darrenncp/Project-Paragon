'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

interface FadeTransitionProps {
  children: React.ReactNode;
}

export default function FadeTransition({ children }: FadeTransitionProps) {
  const [displayChildren, setDisplayChildren] = useState(children);
  const [transitionStage, setTransitionStage] = useState('fadeIn');
  const pathname = usePathname();

  useEffect(() => {
    setTransitionStage('fadeOut');
    
    const timer = setTimeout(() => {
      setDisplayChildren(children);
      setTransitionStage('fadeIn');
    }, 150);

    return () => clearTimeout(timer);
  }, [pathname, children]);

  return (
    <div
      className={`transition-opacity duration-150 ${
        transitionStage === 'fadeOut' ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {displayChildren}
    </div>
  );
}
