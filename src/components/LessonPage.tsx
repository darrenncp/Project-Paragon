'use client';

import { useState } from 'react';
import Link from 'next/link';
import { CheckCircle, Clock } from 'lucide-react';
import QuizSection from './QuizSection';
import YouTubeEmbed from './YouTubeEmbed';
import MarkdownRenderer from './MarkdownRenderer';
import { useGamification } from '@/contexts/GamificationContext';

interface LessonPageProps {
  subjectId: string;
  subjectName: string;
  subjectColor: string;
  lessonTitle: string;
  topicId: string;
  videoUrl?: string;
  content: string;
  breadcrumb: {
    subject: string;
    unit: string;
    topic: string;
  };
}

export default function LessonPage({
  subjectId,
  subjectColor,
  lessonTitle,
  topicId,
  videoUrl,
  content,
  breadcrumb
}: LessonPageProps) {
  const [completed, setCompleted] = useState(false);
  const { showXPGain, showBadgeEarned } = useGamification();

  const handleMarkComplete = async () => {
    setCompleted(!completed);
    
    if (!completed) {
      // Award XP for lesson completion
      showXPGain(25, `Completed lesson: ${lessonTitle}`);
      
      // Award badge for first lesson completion (example)
      const isFirstLesson = Math.random() > 0.8; // Simulate first lesson check
      if (isFirstLesson) {
        showBadgeEarned({
          id: 'first-lesson',
          name: 'Getting Started',
          description: 'Completed your first lesson',
          icon: '🎯',
          earnedAt: new Date()
        });
      }
    }
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Header with breadcrumb */}
      <div className="bg-gray-900 border-b-2 border-gray-800 py-4 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center space-x-2 text-sm text-gray-400 mb-2">
            <Link href={`/subjects/${subjectId}`} className="hover:text-white">
              {breadcrumb.subject}
            </Link>
            <span>→</span>
            <span>{breadcrumb.unit}</span>
            <span>→</span>
            <span className="text-white font-semibold">{breadcrumb.topic}</span>
          </div>
          
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-white font-heading">
              {lessonTitle}
            </h1>
            
            <button
              onClick={handleMarkComplete}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-semibold transition-colors ${
                completed
                  ? 'bg-green-500 text-white'
                  : 'bg-orange-500 text-black hover:bg-orange-600'
              }`}
            >
              {completed ? (
                <>
                  <CheckCircle className="w-5 h-5" />
                  <span>Completed</span>
                </>
              ) : (
                <>
                  <Clock className="w-5 h-5" />
                  <span>Mark Complete</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content area */}
          <div className="lg:col-span-2 space-y-8">
            {/* Video section */}
            {videoUrl && (
              <div className="bg-gray-900 rounded-lg border-2 border-gray-800 overflow-hidden p-4">
                <YouTubeEmbed videoId={videoUrl} title={lessonTitle} />
              </div>
            )}

            {/* Article content */}
            <div className="bg-gray-900 rounded-lg border-2 border-gray-800 p-8">
              <MarkdownRenderer content={content} />
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Progress indicator */}
            <div className="bg-gray-900 rounded-lg border-2 border-gray-800 p-6">
              <h3 className="text-lg font-semibold mb-4 font-heading text-white">Progress</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-300">Lesson Status</span>
                  <span className={`text-sm font-semibold ${completed ? 'text-green-400' : 'text-yellow-400'}`}>
                    {completed ? 'Completed' : 'In Progress'}
                  </span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2">
                  <div 
                    className="h-2 rounded-full transition-all duration-300"
                    style={{ 
                      width: completed ? '100%' : '50%',
                      backgroundColor: subjectColor 
                    }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Quiz section */}
            <QuizSection topicId={topicId} subjectColor={subjectColor} />

            {/* Discussion section placeholder */}
            <div className="bg-gray-900 rounded-lg border-2 border-gray-800 p-6">
              <h3 className="text-lg font-semibold mb-4 font-heading text-white">Discussion</h3>
              <p className="text-gray-400 text-sm mb-4">
                Ask questions and discuss with other learners.
              </p>
              <button className="w-full bg-gray-800 text-gray-300 py-2 px-4 rounded-lg font-semibold hover:bg-gray-700 transition-colors">
                Join Discussion
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
