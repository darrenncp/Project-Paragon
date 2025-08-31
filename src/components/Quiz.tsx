'use client';

import { useState } from 'react';
import { Quiz as QuizType } from '@/types';
import { CheckCircle, XCircle, ArrowRight, RotateCcw } from 'lucide-react';
import { useGamification } from '@/contexts/GamificationContext';

interface QuizProps {
  quiz: QuizType;
  onComplete: (score: number) => void;
  subjectColor: string;
}

export default function Quiz({ quiz, onComplete, subjectColor }: QuizProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: string }>({});
  const [showResults, setShowResults] = useState(false);
  const [, setQuizCompleted] = useState(false);
  const { showXPGain, showBadgeEarned } = useGamification();

  const currentQuestion = quiz.questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === quiz.questions.length - 1;
  const hasAnswered = selectedAnswers[currentQuestionIndex] !== undefined;

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [currentQuestionIndex]: answer
    }));
  };

  const handleNext = () => {
    if (isLastQuestion) {
      setShowResults(true);
      setQuizCompleted(true);
      
      // Calculate score
      const correctAnswers = quiz.questions.filter((question, index) => {
        const userAnswer = selectedAnswers[index];
        return Array.isArray(question.correctAnswer) 
          ? question.correctAnswer.includes(userAnswer)
          : question.correctAnswer === userAnswer;
      }).length;
      
      const score = Math.round((correctAnswers / quiz.questions.length) * 100);
      
      // Award XP based on score
      const baseXP = 50;
      const bonusXP = Math.floor(score / 10) * 5; // 5 XP per 10% score
      const totalXP = baseXP + bonusXP;
      
      showXPGain(totalXP, `Quiz completed with ${score}% score!`);
      
      // Award badges for perfect scores
      if (score === 100) {
        showBadgeEarned({
          id: 'perfect-quiz',
          name: 'Perfect Score',
          description: 'Achieved 100% on a quiz',
          icon: '🏆',
          earnedAt: new Date()
        });
      }
      
      onComplete(score);
    } else {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setShowResults(false);
    setQuizCompleted(false);
  };

  const getQuestionResult = (questionIndex: number) => {
    const question = quiz.questions[questionIndex];
    const userAnswer = selectedAnswers[questionIndex];
    
    if (!userAnswer) return null;
    
    const isCorrect = Array.isArray(question.correctAnswer) 
      ? question.correctAnswer.includes(userAnswer)
      : question.correctAnswer === userAnswer;
    
    return { isCorrect, userAnswer, correctAnswer: question.correctAnswer };
  };

  if (showResults) {
    const correctCount = quiz.questions.filter((_, index) => {
      const result = getQuestionResult(index);
      return result?.isCorrect;
    }).length;
    
    const score = Math.round((correctCount / quiz.questions.length) * 100);

    return (
      <div className="bg-gray-900 rounded-lg border-2 border-gray-800 p-6">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-white mb-2">Quiz Complete!</h3>
          <div className="text-4xl font-bold mb-2" style={{ color: subjectColor }}>
            {score}%
          </div>
          <p className="text-gray-400">
            You got {correctCount} out of {quiz.questions.length} questions correct
          </p>
        </div>

        <div className="space-y-4 mb-6">
          {quiz.questions.map((question, index) => {
            const result = getQuestionResult(index);
            if (!result) return null;

            return (
              <div key={question.id} className="bg-gray-800 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  {result.isCorrect ? (
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  ) : (
                    <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  )}
                  <div className="flex-1">
                    <p className="text-white font-medium mb-2">{question.question}</p>
                    <p className="text-sm text-gray-400 mb-1">
                      Your answer: <span className={result.isCorrect ? 'text-green-400' : 'text-red-400'}>
                        {result.userAnswer}
                      </span>
                    </p>
                    {!result.isCorrect && (
                      <p className="text-sm text-gray-400 mb-2">
                        Correct answer: <span className="text-green-400">
                          {Array.isArray(result.correctAnswer) 
                            ? result.correctAnswer.join(', ') 
                            : result.correctAnswer}
                        </span>
                      </p>
                    )}
                    {question.explanation && (
                      <p className="text-sm text-gray-300 bg-gray-700 p-2 rounded">
                        {question.explanation}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <button
          onClick={handleRestart}
          className="w-full bg-orange-500 hover:bg-orange-600 text-black py-3 px-4 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
        >
          <RotateCcw className="w-5 h-5" />
          <span>Retake Quiz</span>
        </button>
      </div>
    );
  }

  return (
    <div className="bg-gray-900 rounded-lg border-2 border-gray-800 p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-white">Practice Quiz</h3>
        <div className="text-sm text-gray-400">
          Question {currentQuestionIndex + 1} of {quiz.questions.length}
        </div>
      </div>

      <div className="mb-6">
        <div className="w-full bg-gray-800 rounded-full h-2 mb-4">
          <div 
            className="h-2 rounded-full transition-all duration-300"
            style={{ 
              width: `${((currentQuestionIndex + 1) / quiz.questions.length) * 100}%`,
              backgroundColor: subjectColor 
            }}
          />
        </div>
      </div>

      <div className="mb-6">
        <h4 className="text-lg font-medium text-white mb-4">
          {currentQuestion.question}
        </h4>

        <div className="space-y-3">
          {currentQuestion.options?.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(option)}
              className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                selectedAnswers[currentQuestionIndex] === option
                  ? 'border-orange-500 bg-orange-500/10 text-white'
                  : 'border-gray-700 bg-gray-800 text-gray-300 hover:border-gray-600 hover:bg-gray-700'
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className={`w-4 h-4 rounded-full border-2 ${
                  selectedAnswers[currentQuestionIndex] === option
                    ? 'border-orange-500 bg-orange-500'
                    : 'border-gray-500'
                }`} />
                <span>{option}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div className="text-sm text-gray-400">
          {hasAnswered ? 'Answer selected' : 'Select an answer to continue'}
        </div>
        
        <button
          onClick={handleNext}
          disabled={!hasAnswered}
          className={`px-6 py-2 rounded-lg font-semibold transition-colors flex items-center space-x-2 ${
            hasAnswered
              ? 'bg-orange-500 hover:bg-orange-600 text-black'
              : 'bg-gray-700 text-gray-500 cursor-not-allowed'
          }`}
        >
          <span>{isLastQuestion ? 'Finish Quiz' : 'Next Question'}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
