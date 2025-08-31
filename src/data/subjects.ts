import { Subject } from '@/types';

export const SUBJECT_COLORS = {
  general: '#ffa726',
  english: '#ab47bc',
  'general-math': '#ef5350',
  physics: '#66bb6a',
  chemistry: '#9ccc65',
  biology: '#42a5f5',
  history: '#8d6e63',
  government: '#8e24aa',
  'computer-science': '#26c6da',
  'f-math': '#ff7043',
  economics: '#ec407a',
  french: '#a1887f',
} as const;

export const subjects: Subject[] = [
  {
    id: 'general-math',
    name: 'General Math',
    color: SUBJECT_COLORS['general-math'],
    description: 'Master mathematical concepts from basic arithmetic to advanced calculus. Build problem-solving skills and logical reasoning.',
    difficulty: 4,
    units: [
      {
        id: 'numbers-numeration',
        name: 'Numbers and Numeration',
        topics: [
          { id: 'number-bases', name: 'Number Bases' },
          { id: 'modular-arithmetic', name: 'Modular Arithmetic' },
          { id: 'fractions-decimals', name: 'Fractions and Decimals' },
          { id: 'indices', name: 'Indices' },
          { id: 'logarithms', name: 'Logarithms' },
          { id: 'sequences-series', name: 'Sequences and Series' },
          { id: 'sets', name: 'Sets' },
          { id: 'logical-reasoning', name: 'Logical Reasoning' },
          { id: 'integers-rational', name: 'Integers and Rational Numbers' },
          { id: 'surds', name: 'Surds' },
          { id: 'matrices', name: 'Matrices' },
          { id: 'ratios-proportions', name: 'Ratios, Proportions and Rates' },
          { id: 'percentages', name: 'Percentages' },
          { id: 'financial-arithmetic', name: 'Financial Arithmetic' },
          { id: 'variation', name: 'Variation' },
        ]
      },
      {
        id: 'algebraic-processes',
        name: 'Algebraic Processes',
        topics: [
          { id: 'algebraic-expressions', name: 'Algebraic Expressions' },
          { id: 'operations-expressions', name: 'Operations on Expressions' },
          { id: 'linear-equations', name: 'Linear Equations' },
          { id: 'change-subject', name: 'Change of Subject' },
          { id: 'quadratics', name: 'Quadratics' },
          { id: 'graphs', name: 'Graphs' },
          { id: 'linear-inequalities', name: 'Linear Inequalities' },
          { id: 'algebraic-fractions', name: 'Algebraic Fractions' },
          { id: 'functions', name: 'Functions' },
        ]
      },
      {
        id: 'geometrical-measurement',
        name: 'Geometrical Measurement',
        topics: [
          { id: 'perimeter', name: 'Perimeter' },
          { id: '2d-area', name: '2-Dimensional Area' },
          { id: 'volume', name: 'Volume' },
          { id: 'surface-area', name: 'Surface Area' },
        ]
      },
      {
        id: 'plane-geometry',
        name: 'Plane Geometry',
        topics: [
          { id: 'angles', name: 'Angles' },
          { id: 'transversals-intercepts', name: 'Transversals and Intercepts' },
          { id: 'circles', name: 'Circles' },
          { id: 'triangles-polygons', name: 'Triangle and Polygons' },
          { id: 'construction', name: 'Construction' },
          { id: 'loci', name: 'Loci' },
        ]
      },
      {
        id: 'coordinate-geometry',
        name: 'Coordinate Geometry',
        topics: [
          { id: 'straight-lines', name: 'Straight Lines' },
        ]
      },
      {
        id: 'trigonometric-ratios',
        name: 'Trigonometric Ratios',
        topics: [
          { id: 'sine', name: 'Sine' },
          { id: 'cosine', name: 'Cosine' },
          { id: 'tangent', name: 'Tangent' },
          { id: 'elevation', name: 'Elevation' },
          { id: 'depression', name: 'Depression' },
          { id: 'bearings', name: 'Bearings' },
        ]
      },
      {
        id: 'introductory-calculus',
        name: 'Introductory Calculus',
        topics: [
          { id: 'functions-calc', name: 'Functions' },
          { id: 'limits', name: 'Limits' },
          { id: 'differentiation', name: 'Differentiation' },
          { id: 'integration', name: 'Integration' },
        ]
      },
      {
        id: 'statistics-probability',
        name: 'Statistics and Probability',
        topics: [
          { id: 'visual-statistics', name: 'Visual Statistics' },
          { id: 'non-visual-statistics', name: 'Non-Visual Statistics' },
          { id: 'probability', name: 'Probability' },
        ]
      },
      {
        id: 'vectors-transformation',
        name: 'Vectors and Transformation',
        topics: [
          { id: 'vectors', name: 'Vectors' },
          { id: 'reflection', name: 'Reflection' },
          { id: 'rotation', name: 'Rotation' },
          { id: 'translation', name: 'Translation' },
          { id: 'enlargement', name: 'Enlargement' },
        ]
      },
    ]
  },
  {
    id: 'physics',
    name: 'Physics',
    color: SUBJECT_COLORS.physics,
    description: 'Explore the fundamental laws of nature through mechanics, thermodynamics, electromagnetism, and modern physics.',
    difficulty: 5,
    units: [
      {
        id: 'mechanics',
        name: 'Mechanics',
        topics: [
          { id: 'motion', name: 'Motion' },
          { id: 'forces', name: 'Forces' },
          { id: 'energy', name: 'Energy' },
        ]
      }
    ]
  },
  {
    id: 'chemistry',
    name: 'Chemistry',
    color: SUBJECT_COLORS.chemistry,
    description: 'Understand matter and its properties through atomic structure, chemical bonding, and reactions.',
    difficulty: 4,
    units: [
      {
        id: 'atomic-structure',
        name: 'Atomic Structure',
        topics: [
          { id: 'atoms', name: 'Atoms' },
          { id: 'periodic-table', name: 'Periodic Table' },
        ]
      }
    ]
  },
  {
    id: 'biology',
    name: 'Biology',
    color: SUBJECT_COLORS.biology,
    description: 'Study living organisms and life processes from molecular to ecosystem levels.',
    difficulty: 3,
    units: [
      {
        id: 'cell-biology',
        name: 'Cell Biology',
        topics: [
          { id: 'cell-structure', name: 'Cell Structure' },
          { id: 'cell-division', name: 'Cell Division' },
        ]
      }
    ]
  },
  {
    id: 'english',
    name: 'English',
    color: SUBJECT_COLORS.english,
    description: 'Develop strong communication skills through grammar, writing, literature, and critical analysis.',
    difficulty: 3,
    units: [
      {
        id: 'grammar',
        name: 'Grammar',
        topics: [
          { id: 'parts-of-speech', name: 'Parts of Speech' },
          { id: 'sentence-structure', name: 'Sentence Structure' },
        ]
      }
    ]
  },
  {
    id: 'history',
    name: 'History',
    color: SUBJECT_COLORS.history,
    description: 'Journey through time to understand civilizations, cultures, and events that shaped our world.',
    difficulty: 3,
    units: [
      {
        id: 'world-history',
        name: 'World History',
        topics: [
          { id: 'ancient-civilizations', name: 'Ancient Civilizations' },
          { id: 'modern-history', name: 'Modern History' },
        ]
      }
    ]
  }
];
