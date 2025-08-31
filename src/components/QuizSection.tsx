'use client';

import { useState } from 'react';
import { Play } from 'lucide-react';
import Quiz from './Quiz';
import { sampleQuizzes } from '@/data/sampleQuizzes';

interface QuizSectionProps {
  topicId: string;
  subjectColor: string;
}

export default function QuizSection({ topicId, subjectColor }: QuizSectionProps) {
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizScore, setQuizScore] = useState<number | null>(null);

  const quiz = sampleQuizzes[topicId];

  const handleQuizComplete = (score: number) => {
    setQuizScore(score);
    // TODO: Save quiz score to Firebase and award XP
    console.log(`Quiz completed with score: ${score}%`);
  };

  const handleStartQuiz = () => {
    setShowQuiz(true);
    setQuizScore(null);
  };

  if (!quiz) {
    return (
      <div className="bg-gray-900 rounded-lg border-2 border-gray-800 p-6">
        <h3 className="text-lg font-semibold mb-4 font-heading text-white">Practice Quiz</h3>
        <p className="text-gray-400 text-sm mb-4">
          Quiz coming soon for this topic.
        </p>
        <button 
          disabled
          className="w-full py-2 px-4 rounded-lg font-semibold bg-gray-700 text-gray-500 cursor-not-allowed"
        >
          Quiz Not Available
        </button>
      </div>
    );
  }

  if (showQuiz) {
    return <Quiz quiz={quiz} onComplete={handleQuizComplete} subjectColor={subjectColor} />;
  }

  return (
    <div className="bg-gray-900 rounded-lg border-2 border-gray-800 p-6">
      <h3 className="text-lg font-semibold mb-4 font-heading text-white">Practice Quiz</h3>
      <p className="text-gray-400 text-sm mb-4">
        Test your understanding with {quiz.questions.length} interactive questions.
      </p>
      
      {quizScore !== null && (
        <div className="mb-4 p-3 bg-gray-800 rounded-lg">
          <p className="text-sm text-gray-300">
            Last Score: <span className="font-semibold" style={{ color: subjectColor }}>
              {quizScore}%
            </span>
          </p>
        </div>
      )}
      
      <button 
        onClick={handleStartQuiz}
        className="w-full py-2 px-4 rounded-lg font-semibold transition-colors text-black flex items-center justify-center space-x-2"
        style={{ backgroundColor: subjectColor }}
      >
        <Play className="w-4 h-4" />
        <span>{quizScore !== null ? 'Retake Quiz' : 'Start Quiz'}</span>
      </button>
    </div>
  );
}
