'use client';

import { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { Badge } from '@/types';
import XPNotification from '@/components/XPNotification';
import BadgeNotification from '@/components/BadgeNotification';

interface GamificationContextType {
  showXPGain: (xp: number, reason: string) => void;
  showBadgeEarned: (badge: Badge) => void;
  totalXP: number;
  currentStreak: number;
}

const GamificationContext = createContext<GamificationContextType | undefined>(undefined);

interface GamificationProviderProps {
  children: ReactNode;
}

export function GamificationProvider({ children }: GamificationProviderProps) {
  const [xpNotification, setXpNotification] = useState<{
    xp: number;
    reason: string;
    visible: boolean;
  }>({ xp: 0, reason: '', visible: false });

  const [badgeNotification, setBadgeNotification] = useState<{
    badge: Badge | null;
    visible: boolean;
  }>({ badge: null, visible: false });

  const [totalXP, setTotalXP] = useState(0);
  const [currentStreak] = useState(0);

  const showXPGain = useCallback((xp: number, reason: string) => {
    setTotalXP(prev => prev + xp);
    setXpNotification({ xp, reason, visible: true });
  }, []);

  const showBadgeEarned = useCallback((badge: Badge) => {
    setBadgeNotification({ badge, visible: true });
  }, []);

  const handleXPNotificationClose = useCallback(() => {
    setXpNotification(prev => ({ ...prev, visible: false }));
  }, []);

  const handleBadgeNotificationClose = useCallback(() => {
    setBadgeNotification({ badge: null, visible: false });
  }, []);

  return (
    <GamificationContext.Provider
      value={{
        showXPGain,
        showBadgeEarned,
        totalXP,
        currentStreak,
      }}
    >
      {children}
      
      <XPNotification
        xpGained={xpNotification.xp}
        reason={xpNotification.reason}
        isVisible={xpNotification.visible}
        onClose={handleXPNotificationClose}
      />
      
      {badgeNotification.badge && (
        <BadgeNotification
          badge={badgeNotification.badge}
          isVisible={badgeNotification.visible}
          onClose={handleBadgeNotificationClose}
        />
      )}
    </GamificationContext.Provider>
  );
}

export function useGamification() {
  const context = useContext(GamificationContext);
  if (context === undefined) {
    throw new Error('useGamification must be used within a GamificationProvider');
  }
  return context;
}
