'use client';

import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Users, BookOpen, FileText, BarChart3, Plus, Edit, Trash2, Settings } from 'lucide-react';

export default function AdminDashboard() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    if (!loading && (!user || user.role !== 'admin')) {
      router.push('/');
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  if (!user || user.role !== 'admin') {
    return null;
  }

  return (
    <div className="min-h-screen bg-black">
      <div className="bg-gray-900 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-white font-heading">
            Admin Dashboard
          </h1>
          <p className="mt-2 text-gray-400">
            Manage content, users, and platform settings
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex space-x-8">
          {/* Sidebar */}
          <div className="w-64">
            <nav className="space-y-2">
              <button
                onClick={() => setActiveTab('overview')}
                className={`w-full flex items-center space-x-3 px-4 py-2 rounded-lg text-left ${
                  activeTab === 'overview' 
                    ? 'bg-orange-500 text-black' 
                    : 'text-gray-300 hover:bg-gray-800'
                }`}
              >
                <BarChart3 className="w-5 h-5" />
                <span>Overview</span>
              </button>
              
              <button
                onClick={() => setActiveTab('content')}
                className={`w-full flex items-center space-x-3 px-4 py-2 rounded-lg text-left ${
                  activeTab === 'content' 
                    ? 'bg-orange-500 text-black' 
                    : 'text-gray-300 hover:bg-gray-800'
                }`}
              >
                <BookOpen className="w-5 h-5" />
                <span>Content Management</span>
              </button>
              
              <button
                onClick={() => setActiveTab('users')}
                className={`w-full flex items-center space-x-3 px-4 py-2 rounded-lg text-left ${
                  activeTab === 'users' 
                    ? 'bg-orange-500 text-black' 
                    : 'text-gray-300 hover:bg-gray-800'
                }`}
              >
                <Users className="w-5 h-5" />
                <span>User Management</span>
              </button>
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                    <div className="flex items-center">
                      <Users className="w-8 h-8 text-blue-500" />
                      <div className="ml-4">
                        <p className="text-sm text-gray-400">Total Users</p>
                        <p className="text-2xl font-bold text-white">1,234</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                    <div className="flex items-center">
                      <BookOpen className="w-8 h-8 text-green-500" />
                      <div className="ml-4">
                        <p className="text-gray-400">Edit &quot;Introduction to Variables&quot; lesson</p>
                        <p className="text-2xl font-bold text-white">456</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                    <div className="flex items-center">
                      <BarChart3 className="w-8 h-8 text-purple-500" />
                      <div className="ml-4">
                        <p className="text-sm text-gray-400">Completion Rate</p>
                        <p className="text-2xl font-bold text-white">78%</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                  <h3 className="text-lg font-semibold mb-4 text-white">Recent Activity</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between py-2 border-b border-gray-700">
                      <span className="text-gray-300">New user registered: john@example.com</span>
                      <span className="text-sm text-gray-500">2 hours ago</span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-gray-700">
                      <span className="text-gray-300">Lesson &quot;Linear Equations&quot; completed 15 times</span>
                      <span className="text-sm text-gray-500">4 hours ago</span>
                    </div>
                    <div className="flex items-center justify-between py-2">
                      <span className="text-gray-300">Curator submitted edit for &quot;Algebra Basics&quot;</span>
                      <span className="text-sm text-gray-500">6 hours ago</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'content' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold font-heading text-white">Content Management</h2>
                  <button className="bg-orange-500 text-black px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-orange-600">
                    <Plus className="w-4 h-4" />
                    <span>Add New Lesson</span>
                  </button>
                </div>

                <div className="bg-gray-900 rounded-lg border border-gray-800">
                  <div className="p-6 border-b border-gray-800">
                    <h3 className="text-lg font-semibold text-white">Recent Lessons</h3>
                  </div>
                  <div className="divide-y divide-gray-800">
                    <div className="p-6 flex items-center justify-between">
                      <div>
                        <h4 className="font-medium text-white">Linear Equations</h4>
                        <p className="text-gray-400">Manage &quot;Algebra Basics&quot; content</p>
                      </div>
                      <div className="flex space-x-2">
                        <button className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded">Edit</button>
                        <button className="px-3 py-1 text-sm bg-red-100 text-red-700 rounded">Delete</button>
                      </div>
                    </div>
                    <div className="p-6 flex items-center justify-between">
                      <div>
                        <h4 className="font-medium text-white">Atomic Structure</h4>
                        <p className="text-sm text-gray-400">Chemistry • Basic Concepts</p>
                      </div>
                      <div className="flex space-x-2">
                        <button className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded">Edit</button>
                        <button className="px-3 py-1 text-sm bg-red-100 text-red-700 rounded">Delete</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'users' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold font-heading text-white">User Management</h2>

                <div className="bg-gray-900 rounded-lg border border-gray-800">
                  <div className="p-6 border-b border-gray-800">
                    <h3 className="text-lg font-semibold text-white">Recent Users</h3>
                  </div>
                  <div className="divide-y divide-gray-800">
                    <div className="p-6 flex items-center justify-between">
                      <div>
                        <h4 className="font-medium text-white">john@example.com</h4>
                        <p className="text-sm text-gray-400">Student • 150 XP • 5-day streak</p>
                      </div>
                      <div className="flex space-x-2">
                        <span className="px-2 py-1 text-xs bg-green-100 text-green-700 rounded">Active</span>
                        <button className="px-3 py-1 text-sm bg-gray-800 text-gray-300 rounded hover:bg-gray-700">View</button>
                      </div>
                    </div>
                    <div className="p-6 flex items-center justify-between">
                      <div>
                        <h4 className="font-medium text-white">teacher@school.edu</h4>
                        <p className="text-sm text-gray-400">Teacher • 3 classes • 45 students</p>
                      </div>
                      <div className="flex space-x-2">
                        <span className="px-2 py-1 text-xs bg-blue-100 text-blue-700 rounded">Teacher</span>
                        <button className="px-3 py-1 text-sm bg-gray-800 text-gray-300 rounded hover:bg-gray-700">View</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
