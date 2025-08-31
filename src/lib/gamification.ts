import { doc, updateDoc, increment, getDoc } from 'firebase/firestore';
import { db } from './firebase';
import { User, Badge } from '@/types';

export const XP_REWARDS = {
  LESSON_COMPLETE: 50,
  QUIZ_COMPLETE: 30,
  DAILY_LOGIN: 10,
  FIRST_LESSON: 100,
  STREAK_MILESTONE: 25,
} as const;

export const BADGES = {
  FIRST_STEP: {
    id: 'first-step',
    name: 'First Step',
    description: 'Complete your first lesson',
    icon: '🎯',
  },
  QUIZ_MASTER: {
    id: 'quiz-master',
    name: 'Quiz Master',
    description: 'Complete 10 quizzes',
    icon: '🧠',
  },
  STREAK_WARRIOR: {
    id: 'streak-warrior',
    name: 'Streak Warrior',
    description: 'Maintain a 7-day streak',
    icon: '🔥',
  },
  KNOWLEDGE_SEEKER: {
    id: 'knowledge-seeker',
    name: 'Knowledge Seeker',
    description: 'Complete an entire subject',
    icon: '📚',
  },
} as const;

export async function awardXP(userId: string, amount: number, _reason: string): Promise<void> {
  const userRef = doc(db, 'users', userId);
  
  await updateDoc(userRef, {
    xp: increment(amount)
  });

  // Check for level up
  const userDoc = await getDoc(userRef);
  if (userDoc.exists()) {
    const userData = userDoc.data() as User;
    const newLevel = Math.floor(userData.xp / 100) + 1;
    const oldLevel = Math.floor((userData.xp - amount) / 100) + 1;
    
    if (newLevel > oldLevel) {
      // Level up notification could be triggered here
      console.log(`User ${userId} leveled up to level ${newLevel}!`);
    }
  }
}

export async function awardBadge(userId: string, badgeId: string): Promise<void> {
  const userRef = doc(db, 'users', userId);
  const userDoc = await getDoc(userRef);
  
  if (userDoc.exists()) {
    const userData = userDoc.data() as User;
    const hasBadge = userData.badges.some(badge => badge.id === badgeId);
    
    if (!hasBadge) {
      const badge = Object.values(BADGES).find(b => b.id === badgeId);
      if (badge) {
        const newBadge: Badge = {
          ...badge,
          earnedAt: new Date()
        };
        
        await updateDoc(userRef, {
          badges: [...userData.badges, newBadge]
        });
      }
    }
  }
}

export async function updateStreak(userId: string): Promise<void> {
  const userRef = doc(db, 'users', userId);
  const userDoc = await getDoc(userRef);
  
  if (userDoc.exists()) {
    const userData = userDoc.data() as User;
    const today = new Date().toDateString();
    const lastLogin = userData.lastLogin ? new Date(userData.lastLogin).toDateString() : null;
    
    if (lastLogin !== today) {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const yesterdayString = yesterday.toDateString();
      
      let newStreak = 1;
      if (lastLogin === yesterdayString) {
        newStreak = userData.streak + 1;
      }
      
      await updateDoc(userRef, {
        streak: newStreak,
        lastLogin: new Date().toISOString()
      });
      
      // Award XP for daily login
      await awardXP(userId, XP_REWARDS.DAILY_LOGIN, 'Daily login');
      
      // Check for streak milestones
      if (newStreak === 7) {
        await awardBadge(userId, BADGES.STREAK_WARRIOR.id);
        await awardXP(userId, XP_REWARDS.STREAK_MILESTONE, '7-day streak milestone');
      }
    }
  }
}

export async function completeLesson(userId: string, _lessonId: string): Promise<void> {
  // Award XP for lesson completion
  await awardXP(userId, XP_REWARDS.LESSON_COMPLETE, 'Lesson completed');
  
  // Check if this is the user's first lesson
  const userRef = doc(db, 'users', userId);
  const userDoc = await getDoc(userRef);
  
  if (userDoc.exists()) {
    const userData = userDoc.data() as User;
    const completedLessons = userData.progress.filter(p => p.completed).length;
    
    if (completedLessons === 0) {
      await awardBadge(userId, BADGES.FIRST_STEP.id);
      await awardXP(userId, XP_REWARDS.FIRST_LESSON, 'First lesson completed');
    }
  }
}
