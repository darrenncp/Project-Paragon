'use client';

import { useAuth } from '@/contexts/AuthContext';
import { CheckCircle, Clock, Flame, Award, Trophy } from 'lucide-react';

export default function ProgressTracker() {
  const { user } = useAuth();

  if (!user) return null;

  const level = Math.floor(user.xp / 100) + 1;
  const xpToNextLevel = 100 - (user.xp % 100);

  return (
    <div className="bg-white rounded-lg border-2 border-gray-200 p-6">
      <h3 className="text-lg font-semibold mb-4 font-heading">Your Progress</h3>
      
      <div className="space-y-4">
        {/* Level and XP */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium">Level {level}</span>
            <span className="text-sm text-gray-600">{user.xp} XP</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(user.xp % 100)}%` }}
            ></div>
          </div>
          <p className="text-xs text-gray-500 mt-1">
            {xpToNextLevel} XP to next level
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center p-3 bg-orange-50 rounded-lg">
            <Flame className="w-6 h-6 text-orange-500 mx-auto mb-1" />
            <div className="text-lg font-bold text-orange-700">{user.streak}</div>
            <div className="text-xs text-orange-600">Day Streak</div>
          </div>
          
          <div className="text-center p-3 bg-purple-50 rounded-lg">
            <Award className="w-6 h-6 text-purple-500 mx-auto mb-1" />
            <div className="text-lg font-bold text-purple-700">{user.badges.length}</div>
            <div className="text-xs text-purple-600">Badges</div>
          </div>
        </div>

        {/* Recent Badges */}
        {user.badges.length > 0 && (
          <div>
            <h4 className="text-sm font-medium mb-2">Recent Badges</h4>
            <div className="flex space-x-2">
              {user.badges?.map((badge: any) => (
                <div
                  key={badge.id}
                  className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center"
                  title={badge.name}
                >
                  <Trophy className="w-4 h-4 text-yellow-600" />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
