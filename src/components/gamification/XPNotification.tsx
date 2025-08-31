'use client';

import { useState, useEffect } from 'react';
import { Star, X } from 'lucide-react';

interface XPNotificationProps {
  xpGained: number;
  reason: string;
  onClose: () => void;
}

export default function XPNotification({ xpGained, reason, onClose }: XPNotificationProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onClose, 300);
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`fixed top-20 right-4 z-50 transition-all duration-300 ${
      isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
    }`}>
      <div className="bg-green-500 text-white rounded-lg p-4 shadow-lg flex items-center space-x-3">
        <Star className="w-6 h-6 text-yellow-300" />
        <div>
          <div className="font-semibold">+{xpGained} XP</div>
          <div className="text-sm opacity-90">{reason}</div>
        </div>
        <button
          onClick={() => {
            setIsVisible(false);
            setTimeout(onClose, 300);
          }}
          className="text-white hover:text-gray-200"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
