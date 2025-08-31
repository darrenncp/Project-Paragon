export interface Subject {
  id: string;
  name: string;
  color: string;
  units: Unit[];
  description?: string;
  difficulty?: number;
}

export interface Unit {
  id: string;
  name: string;
  topics: Topic[];
}

export interface Topic {
  id: string;
  name: string;
  completed?: boolean;
  difficulty?: 'beginner' | 'intermediate' | 'advanced';
  description?: string;
}

export interface User {
  id: string;
  email: string;
  role: 'student' | 'teacher' | 'curator' | 'admin';
  xp: number;
  streak: number;
  badges: Badge[];
  progress: Progress[];
  lastLogin?: string;
}

export interface Progress {
  userId: string;
  subjectId: string;
  unitId: string;
  topicId: string;
  completed: boolean;
  completedAt?: Date;
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  earnedAt: Date;
}

export interface Lesson {
  id: string;
  title: string;
  subjectId: string;
  unitId: string;
  topicId: string;
  videoUrl?: string;
  content: string; // Markdown/LaTeX content
  quiz?: Quiz;
}

export interface Quiz {
  id: string;
  questions: Question[];
}

export interface Question {
  id: string;
  type: 'multiple-choice' | 'drag-drop' | 'short-answer' | 'subjective';
  question: string;
  options?: string[];
  correctAnswer: string | string[];
  explanation?: string;
}
