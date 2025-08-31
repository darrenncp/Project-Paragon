'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, User, LogOut } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import LoginModal from './auth/LoginModal';

export default function NavBar() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const { user, logout } = useAuth();

  return (
    <>
      <nav className="bg-black border-b border-gray-800 px-6 py-6 flex justify-between items-center font-body">
        <div className="flex items-center space-x-10">
          <ul className="flex items-center space-x-10">
            <li>
              <Link 
                href="/" 
                className="text-gray-300 font-bold text-2xl hover:text-white transition-colors relative group"
              >
                Home
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link 
                href="/courses" 
                className="text-gray-300 font-bold text-2xl hover:text-white transition-colors relative group"
              >
                Courses
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link 
                href="/extras" 
                className="text-gray-300 font-bold text-2xl hover:text-white transition-colors relative group"
              >
                Extras
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          </ul>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search courses..."
              className="pl-10 pr-4 py-2 rounded-lg border border-gray-600 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4" />
          </div>
          
          <Link href="/" className="flex items-center">
            <div className="text-3xl font-black text-gray-300 hover:text-white transition-colors">
              Project Paragon
            </div>
          </Link>

          {user ? (
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2 text-gray-300">
                <User className="w-5 h-5" />
                <span className="font-bold">{user.email}</span>
                <span className="text-sm bg-blue-600 text-white px-2 py-1 rounded">
                  {user.xp} XP
                </span>
              </div>
              <button
                onClick={logout}
                className="text-gray-300 hover:text-white transition-colors"
              >
                <LogOut className="w-5 h-5" />
              </button>
            </div>
          ) : (
            <button
              onClick={() => setShowLoginModal(true)}
              className="bg-orange-500 hover:bg-orange-600 text-black px-4 py-2 rounded-lg font-semibold transition-colors"
            >
              Sign In
            </button>
          )}
        </div>
      </nav>

      <LoginModal 
        isOpen={showLoginModal} 
        onClose={() => setShowLoginModal(false)} 
      />
    </>
  );
}
