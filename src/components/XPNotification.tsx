'use client';

import { useState, useEffect } from 'react';
import { Star, Trophy, Zap } from 'lucide-react';

interface XPNotificationProps {
  xpGained: number;
  reason: string;
  isVisible: boolean;
  onClose: () => void;
}

export default function XPNotification({ xpGained, reason, isVisible, onClose }: XPNotificationProps) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setAnimate(true);
      const timer = setTimeout(() => {
        setAnimate(false);
        setTimeout(onClose, 300); // Wait for exit animation
      }, 3000);
      
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div className={`fixed top-4 right-4 z-50 transition-all duration-300 ${
      animate ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
    }`}>
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-black px-6 py-4 rounded-lg shadow-lg border-2 border-orange-400 min-w-[300px]">
        <div className="flex items-center space-x-3">
          <div className="bg-black/20 p-2 rounded-full">
            <Star className="w-6 h-6 text-black" />
          </div>
          <div className="flex-1">
            <div className="flex items-center space-x-2">
              <Zap className="w-4 h-4" />
              <span className="font-bold text-lg">+{xpGained} XP</span>
            </div>
            <p className="text-sm font-medium opacity-90">{reason}</p>
          </div>
          <Trophy className="w-6 h-6 text-black" />
        </div>
      </div>
    </div>
  );
}
