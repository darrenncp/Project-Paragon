'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function LoadingBar() {
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    setLoading(true);
    setProgress(0);

    // Simulate loading progress
    const timer1 = setTimeout(() => setProgress(20), 100);
    const timer2 = setTimeout(() => setProgress(50), 200);
    const timer3 = setTimeout(() => setProgress(80), 300);
    const timer4 = setTimeout(() => setProgress(100), 400);
    const timer5 = setTimeout(() => setLoading(false), 600);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
    };
  }, [pathname]);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      <div className="w-80 max-w-[90vw]">
        {/* Logo/Title */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2 font-heading">
            Learning!
          </h1>
          <p className="text-gray-400 text-lg">...by High School Students</p>
        </div>
        
        {/* Loading Bar */}
        <div className="w-full bg-gray-800 rounded-full h-3 mb-4">
          <div
            className="h-3 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        
        {/* Loading Text */}
        <div className="text-center">
          <p className="text-gray-400 text-sm">
            {progress < 30 && "Initializing..."}
            {progress >= 30 && progress < 60 && "Loading content..."}
            {progress >= 60 && progress < 90 && "Almost ready..."}
            {progress >= 90 && "Complete!"}
          </p>
        </div>
      </div>
    </div>
  );
}
