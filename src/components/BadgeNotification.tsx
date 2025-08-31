'use client';

import { useState, useEffect } from 'react';
import { Award, X } from 'lucide-react';
import { Badge } from '@/types';

interface BadgeNotificationProps {
  badge: Badge;
  isVisible: boolean;
  onClose: () => void;
}

export default function BadgeNotification({ badge, isVisible, onClose }: BadgeNotificationProps) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setAnimate(true);
      const timer = setTimeout(() => {
        setAnimate(false);
        setTimeout(onClose, 300);
      }, 4000);
      
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div className={`fixed top-20 right-4 z-50 transition-all duration-500 ${
      animate ? 'translate-x-0 opacity-100 scale-100' : 'translate-x-full opacity-0 scale-95'
    }`}>
      <div className="bg-gradient-to-br from-yellow-400 to-orange-500 text-black p-6 rounded-xl shadow-2xl border-3 border-yellow-300 max-w-sm">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center space-x-3">
            <div className="bg-black/20 p-3 rounded-full">
              <Award className="w-8 h-8 text-black" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Badge Earned!</h3>
              <p className="text-sm opacity-90">Congratulations!</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="text-black/60 hover:text-black transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="bg-black/10 rounded-lg p-4 mb-3">
          <div className="text-center">
            <div className="text-4xl mb-2">{badge.icon}</div>
            <h4 className="font-bold text-lg">{badge.name}</h4>
            <p className="text-sm opacity-80">{badge.description}</p>
          </div>
        </div>
        
        <div className="text-center">
          <p className="text-xs opacity-75">
            Earned on {badge.earnedAt.toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
}
