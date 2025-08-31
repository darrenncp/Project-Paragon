'use client';

import Link from 'next/link';
import { Subject } from '@/types';

interface SubjectCardProps {
  subject: Subject;
}

export default function SubjectCard({ subject }: SubjectCardProps) {
  return (
    <Link href={`/subjects/${subject.id}`} className="block">
      <div className="bg-gray-900 border-2 border-gray-700 rounded-lg p-6 hover:shadow-lg transition-all duration-200 hover:border-orange-500">
        <div className="flex items-center mb-4">
          <div 
            className="w-12 h-12 rounded-lg flex items-center justify-center text-black font-bold text-xl"
            style={{ backgroundColor: subject.color }}
          >
            {subject.name.charAt(0)}
          </div>
          <div className="ml-4">
            <h3 className="text-xl font-semibold text-white font-heading">
              {subject.name}
            </h3>
            <p className="text-gray-400 text-sm">
              {subject.units.length} units • {subject.units.reduce((total, unit) => total + unit.topics.length, 0)} lessons
            </p>
          </div>
        </div>
        
        <p className="text-gray-300 text-sm mb-4 line-clamp-3">
          {subject.description}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-full bg-gray-800 rounded-full h-2 max-w-[120px]">
              <div 
                className="h-2 rounded-full"
                style={{ 
                  width: `${subject.id.length * 8 + 20}%`,
                  backgroundColor: subject.color 
                }}
              ></div>
            </div>
            <span className="text-xs text-gray-500">
              {Math.min(subject.id.length * 8 + 20, 100)}%
            </span>
          </div>
          
          <div className="text-right">
            <div className="text-xs text-gray-500">Difficulty</div>
            <div className="flex space-x-1">
              {[1, 2, 3, 4, 5].map((level) => (
                <div
                  key={level}
                  className={`w-2 h-2 rounded-full ${
                    level <= (subject.difficulty || 3) 
                      ? 'bg-orange-500' 
                      : 'bg-gray-700'
                  }`}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
