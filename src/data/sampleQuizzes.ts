import { Quiz } from '@/types';

export const sampleQuizzes: { [key: string]: Quiz } = {
  'linear-equations': {
    id: 'linear-equations-quiz',
    questions: [
      {
        id: 'q1',
        type: 'multiple-choice',
        question: 'Solve for x: 2x + 5 = 13',
        options: ['x = 3', 'x = 4', 'x = 5', 'x = 6'],
        correctAnswer: 'x = 4',
        explanation: 'Subtract 5 from both sides: 2x = 8, then divide by 2: x = 4'
      },
      {
        id: 'q2',
        type: 'multiple-choice',
        question: 'What is the slope of the line y = 3x - 2?',
        options: ['3', '-2', '1/3', '2/3'],
        correctAnswer: '3',
        explanation: 'In the form y = mx + b, the coefficient of x (m) is the slope.'
      },
      {
        id: 'q3',
        type: 'multiple-choice',
        question: 'Which point lies on the line y = 2x + 1?',
        options: ['(0, 1)', '(1, 2)', '(2, 4)', '(3, 6)'],
        correctAnswer: '(0, 1)',
        explanation: 'Substitute x = 0: y = 2(0) + 1 = 1, so (0, 1) is on the line.'
      }
    ]
  },
  'atoms': {
    id: 'atoms-quiz',
    questions: [
      {
        id: 'q1',
        type: 'multiple-choice',
        question: 'What is the smallest unit of matter?',
        options: ['Molecule', 'Atom', 'Electron', 'Proton'],
        correctAnswer: 'Atom',
        explanation: 'An atom is the smallest unit of matter that retains the properties of an element.'
      },
      {
        id: 'q2',
        type: 'multiple-choice',
        question: 'Which particle has a negative charge?',
        options: ['Proton', 'Neutron', 'Electron', 'Nucleus'],
        correctAnswer: 'Electron',
        explanation: 'Electrons carry a negative electrical charge and orbit the nucleus.'
      },
      {
        id: 'q3',
        type: 'multiple-choice',
        question: 'Where is most of an atom\'s mass located?',
        options: ['Electron cloud', 'Nucleus', 'Proton shell', 'Energy levels'],
        correctAnswer: 'Nucleus',
        explanation: 'The nucleus contains protons and neutrons, which account for nearly all of an atom\'s mass.'
      }
    ]
  },
  'motion': {
    id: 'motion-quiz',
    questions: [
      {
        id: 'q1',
        type: 'multiple-choice',
        question: 'What is velocity?',
        options: ['Speed only', 'Speed with direction', 'Acceleration', 'Distance traveled'],
        correctAnswer: 'Speed with direction',
        explanation: 'Velocity is a vector quantity that includes both speed and direction.'
      },
      {
        id: 'q2',
        type: 'multiple-choice',
        question: 'If an object travels 100m in 10 seconds, what is its average speed?',
        options: ['10 m/s', '100 m/s', '1000 m/s', '1 m/s'],
        correctAnswer: '10 m/s',
        explanation: 'Speed = distance ÷ time = 100m ÷ 10s = 10 m/s'
      },
      {
        id: 'q3',
        type: 'multiple-choice',
        question: 'What causes objects to accelerate?',
        options: ['Velocity', 'Speed', 'Force', 'Distance'],
        correctAnswer: 'Force',
        explanation: 'According to Newton\'s second law, force causes acceleration (F = ma).'
      }
    ]
  },
  'parts-of-speech': {
    id: 'parts-of-speech-quiz',
    questions: [
      {
        id: 'q1',
        type: 'multiple-choice',
        question: 'What part of speech is the word "quickly" in the sentence "She ran quickly"?',
        options: ['Noun', 'Verb', 'Adjective', 'Adverb'],
        correctAnswer: 'Adverb',
        explanation: 'Adverbs modify verbs, adjectives, or other adverbs. "Quickly" modifies the verb "ran".'
      },
      {
        id: 'q2',
        type: 'multiple-choice',
        question: 'Which word is a proper noun?',
        options: ['city', 'London', 'building', 'person'],
        correctAnswer: 'London',
        explanation: 'Proper nouns are specific names of people, places, or things and are capitalized.'
      },
      {
        id: 'q3',
        type: 'multiple-choice',
        question: 'What connects two independent clauses?',
        options: ['Adjective', 'Conjunction', 'Preposition', 'Interjection'],
        correctAnswer: 'Conjunction',
        explanation: 'Coordinating conjunctions like "and", "but", "or" connect independent clauses.'
      }
    ]
  },
  'ancient-civilizations': {
    id: 'ancient-civilizations-quiz',
    questions: [
      {
        id: 'q1',
        type: 'multiple-choice',
        question: 'Which river was crucial to ancient Egyptian civilization?',
        options: ['Tigris', 'Euphrates', 'Nile', 'Indus'],
        correctAnswer: 'Nile',
        explanation: 'The Nile River provided water, fertile soil, and transportation for ancient Egypt.'
      },
      {
        id: 'q2',
        type: 'multiple-choice',
        question: 'What writing system did ancient Mesopotamians develop?',
        options: ['Hieroglyphs', 'Cuneiform', 'Alphabet', 'Pictographs'],
        correctAnswer: 'Cuneiform',
        explanation: 'Cuneiform was one of the earliest writing systems, developed in Mesopotamia.'
      },
      {
        id: 'q3',
        type: 'multiple-choice',
        question: 'Which ancient civilization is known for democracy?',
        options: ['Egypt', 'Mesopotamia', 'Greece', 'Rome'],
        correctAnswer: 'Greece',
        explanation: 'Ancient Athens is credited with developing the first form of democracy.'
      }
    ]
  }
};
