// app/page.tsx
import React from 'react';

export const metadata = {
  title: 'Citadel 19 - Coming Soon',
  description: 'Our website is coming soon!',
};

export default function ComingSoonPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 px-4">

      
      {/* "Coming Soon" message as h3 */}
      <h3 className="text-3xl font-bold text-red-600 dark:text-red-400 mb-4">
        Coming Soon
      </h3>

      {/* Business Name: "Citadel 19" */}
      <h1 className="text-6xl font-extrabold mb-4">
        <span className="text-black dark:text-white">Citadel </span>
        <span className="text-red-600">19</span>
      </h1>

      {/* Description */}
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 text-center">
        We’re working hard to launch our new experience. Stay tuned for updates!
      </p>

      {/* Email Notification Form */}
      <div className="w-full max-w-md flex flex-col sm:flex-row items-center">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 mb-4 sm:mb-0 sm:mr-2 p-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
        />
        <button className="bg-red-600 hover:bg-red-700 text-white p-2 rounded-md w-full sm:w-auto">
          Notify Me
        </button>
      </div>
    </main>
  );
}
