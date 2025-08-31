'use client';
import React from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-black to-gray-900 text-white py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-6xl font-bold mb-2 font-heading">
          Learning!
        </h1>
        <h2 className="text-2xl font-medium mb-6 text-gray-400">
          ...by High School Students
        </h2>
        <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
          Master any subject with our interactive, personalized learning platform. 
          From mathematics to science, unlock your potential with engaging content and gamified progress tracking.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-orange-500 hover:bg-orange-600 text-black px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
            Start Learning Today
          </button>
          <button className="border-2 border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-black px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
            Explore Courses
          </button>
        </div>
      </div>
    </section>
  );
}
