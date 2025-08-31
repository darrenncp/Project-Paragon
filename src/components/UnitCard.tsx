'use client';

import Link from 'next/link';
import { Unit } from '@/types';
import { CheckCircle, Clock } from 'lucide-react';

interface UnitCardProps {
  unit: Unit;
  subjectId: string;
  subjectColor: string;
}

export default function UnitCard({ unit, subjectId, subjectColor }: UnitCardProps) {
  return (
    <div className="bg-gray-900 border-2 border-gray-700 rounded-lg overflow-hidden flex">
      <div 
        className="w-2/5 p-4 flex items-center justify-center"
        style={{ backgroundColor: subjectColor }}
      >
        <h2 className="text-2xl font-bold text-black font-heading text-center leading-tight">
          {unit.name}
        </h2>
      </div>
      
      <div className="w-3/5 p-4">
        <div className="grid grid-cols-3 gap-2 h-full">
          {unit.topics.map((topic) => (
            <Link
              key={topic.id}
              href={`/subjects/${subjectId}/lessons/${topic.id}`}
              className="flex items-center justify-between p-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800 rounded transition-colors group"
            >
              <span className="truncate">{topic.name}</span>
              {topic.completed ? (
                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 ml-1" />
              ) : (
                <Clock className="w-4 h-4 text-gray-500 flex-shrink-0 ml-1 group-hover:text-gray-400" />
              )}
            </Link>
          ))}
          
          {/* Fill empty cells to maintain grid structure */}
          {Array.from({ length: Math.max(0, 15 - unit.topics.length) }).map((_, index) => (
            <div key={`empty-${index}`} className="p-2"></div>
          ))}
        </div>
      </div>
    </div>
  );
}
