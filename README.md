# Project Paragon - Educational Learning Platform

A modern, accessible, and engaging digital learning platform inspired by Khan Academy, built with Next.js, TypeScript, Tailwind CSS, and Firebase.

## 🎯 Vision

Project Paragon delivers structured educational content across multiple subjects with a balance between academic rigor and interactive design. It provides personalized learning journeys through progress tracking, gamification, and visual feedback.

## 🚀 Features

### Core Platform
- **Multi-Subject Support**: English, Math, Physics, Chemistry, Biology, History, Government, Computer Science, Economics, French
- **Structured Learning**: Organized by subjects → units → topics
- **Dark Mode Theme**: Black/dark grey base with orange accent colors
- **Responsive Design**: Modern layout that adapts to all devices
- **Subject-Specific Theming**: Each subject has enhanced visual identity

### Interactive Learning
- **Interactive Quizzes**: Multiple-choice questions with instant feedback and explanations
- **YouTube Video Integration**: Real video embeds with loading states and error handling
- **LaTeX Math Rendering**: KaTeX integration for mathematical expressions and formulas
- **Markdown Content**: Rich text formatting with inline and display math support
- **Progress Tracking**: Visual completion indicators and learning journey tracking

### Gamification System
- **XP Notifications**: Animated experience point rewards for achievements
- **Badge System**: Achievement badges with custom icons and descriptions
- **Instant Feedback**: Real-time rewards for lesson completion and quiz performance
- **Score-Based Rewards**: XP scaling based on quiz performance (50-100 XP per quiz)
- **Achievement Milestones**: Special badges for perfect scores and first completions

### User Authentication
- **Firebase Auth**: Secure authentication with multiple providers
- **Role-Based Access**: Students, Teachers, Curators, and Admins
- **Session Management**: Persistent login state across browser sessions
- **Profile Management**: User data and progress synchronization

## 🛠 Tech Stack

- **Frontend**: Next.js 15, React 18, TypeScript
- **Styling**: Tailwind CSS with custom dark theme
- **Backend**: Firebase (Auth, Firestore, Storage, Hosting)
- **Video**: React YouTube for embedded video content
- **Math**: KaTeX for LaTeX mathematical expressions
- **Fonts**: Montserrat (headings), Raleway (body/UI)
- **Icons**: Lucide React icon library
- **State Management**: React Context API for auth and gamification

## 📁 Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── admin/             # Admin dashboard
│   ├── courses/           # Course catalog page
│   ├── subjects/[id]/     # Subject pages
│   └── lessons/[id]/      # Individual lesson pages
├── components/            # React components
│   ├── auth/             # Authentication components
│   ├── gamification/     # XP, badges, progress tracking
│   └── *.tsx             # Core UI components
├── contexts/             # React contexts (Auth)
├── data/                 # Static data (subjects, topics)
├── lib/                  # Utilities (Firebase, gamification)
└── types/                # TypeScript type definitions
```

## 🎨 Design System

### Dark Mode Theme
- **Primary Background**: Black (#000000)
- **Secondary Background**: Dark Grey (#1a1a1a, #2a2a2a)
- **Accent Color**: Orange (#f97316, #ea580c)
- **Text**: White (#ffffff) and Light Grey (#e5e7eb)
- **Borders**: Dark Grey variants (#374151, #4b5563)

### Subject Color Palette
- **English**: Pastel Purple (#c3b1e1)
- **Math**: FireBrick (#b22222)
- **Physics**: Mint Green (#98fb98)
- **Chemistry**: Sage (#8a9a5b)
- **Biology**: Cornflower Blue (#6495ed)
- **History**: Fossil Grey (#cdc6bb)
- **Government**: Plum (#673147)
- **Computer Science**: Lime Green (#32cd32)
- **Economics**: Magenta (#ff00ff)
- **French**: Rosewood (#945b57)

### Typography
- **Headings**: Montserrat (bold, academic feel)
- **UI/Navigation**: Raleway (clean, modern)
- **Body Text**: White/light grey for dark mode readability
- **Accessibility**: High contrast ratios for WCAG compliance

## 🚀 Getting Started

1. **Clone and Install**
   ```bash
   cd /home/darrenn/CascadeProjects/project-paragon
   npm install
   ```

2. **Set up Firebase**
   - Create a Firebase project
   - Enable Authentication, Firestore, and Storage
   - Add your Firebase config to environment variables:
   ```bash
   NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
   ```

3. **Run Development Server**
   ```bash
   npm run dev
   ```

4. **Open Browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📊 Current Implementation Status

✅ **Completed Features**
- **Dark Mode Theme**: Black/grey backgrounds with orange accents
- **Interactive Quizzes**: Multiple-choice with instant feedback and scoring
- **YouTube Integration**: Real video embeds with error handling
- **LaTeX Rendering**: Mathematical expressions with KaTeX
- **Gamification System**: XP notifications and achievement badges
- **Enhanced UI**: Subject cards with descriptions and difficulty levels
- **Authentication**: Firebase auth with role-based access
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Content Management**: Admin dashboard and curator tools
- **Progress Tracking**: Visual indicators and completion status

🔄 **Next Steps (Phase 2)**
- Firebase integration for real user data storage
- Advanced quiz types (drag-drop, short-answer)
- Push notifications for achievements and reminders
- Social features and class management
- Advanced analytics and learning insights
- Performance optimizations and PWA features

## 🎯 Key User Flows

1. **Student Journey**: Sign up → Choose subjects → Browse units → Complete lessons → Earn XP → Track progress
2. **Teacher Workflow**: Create account → Set up classes → Assign lessons → Monitor student progress
3. **Admin Process**: Manage content → Upload lessons → Approve curator edits → Monitor platform analytics

## 🏗 Architecture Decisions

- **Next.js App Router**: Modern routing with server-side rendering
- **Firebase Backend**: Scalable, managed backend services
- **Component-Based**: Reusable React components with TypeScript
- **Tailwind CSS**: Utility-first styling for rapid development
- **Context API**: State management for authentication and user data

## 📈 Performance & Accessibility

- **Fast Load Times**: Optimized for <2s page load
- **WCAG AA Compliance**: High contrast, ARIA labels
- **Mobile-First**: Responsive design for all devices
- **SEO Optimized**: Server-side rendering with Next.js

## 🤝 Contributing

The platform supports multiple contributor roles:
- **Curators**: Can edit articles and suggest improvements
- **Admins**: Full platform control and content management
- **Teachers**: Can create educational content and manage classes

---

**Project Paragon** - The Future of Learning 🚀
