'use client';

import { subjects } from '@/data/subjects';
import SubjectCard from './SubjectCard';
import Link from 'next/link';

export default function FeaturedSubjects() {
  // Sample featured subjects - in production, this would come from props or API
  const featuredSubjects = subjects.slice(0, 6);
  console.log('Featured subjects loaded:', featuredSubjects.length);

  return (
    <section className="bg-black py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4 font-heading">
            Featured Subjects
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Explore our comprehensive curriculum designed to help you excel in any field
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {subjects.slice(0, 6).map((subject) => (
            <SubjectCard key={subject.id} subject={subject} />
          ))}
        </div>
        
        <div className="text-center">
          <Link 
            href="/courses"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-black px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
          >
            View All Courses
          </Link>
        </div>
      </div>
    </section>
  );
}
