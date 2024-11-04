// pages/course/IT/layout.tsx

import React from 'react';

export default function ITCourseLayout({ children }: { children: React.ReactNode }) {
  const courses = [
    { name: 'Introduction to Computer Systems', link: '/course/IT/computer-systems' },
    { name: 'Networking and Security Basics', link: '/course/IT/networking-security' },
    { name: 'Programming Fundamentals', link: '/course/IT/programming-fundamentals' },
    { name: 'Cloud Computing Essentials', link: '/course/IT/cloud-computing' },
    { name: 'Data Management and Analysis', link: '/course/IT/data-management' },
  ];

  return (
    <div className="bg-gray-100 min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-1/4 bg-blue-600 text-white p-6">
        <h2 className="text-2xl font-bold mb-4">IT Courses</h2>
        <nav>
          <ul className="space-y-2">
            {courses.map((course, index) => (
              <li key={index}>
                <a
                  href={course.link}
                  className="block py-2 px-4 rounded hover:bg-blue-500 transition duration-200"
                >
                  {course.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-8">
        <header className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Welcome to IT Courses</h1>
          <p className="text-gray-600">Expand your skills with our comprehensive IT training.</p>
        </header>

        {/* Page Content */}
        <div className="bg-white p-6 rounded-lg shadow-md">{children}</div>
      </main>
    </div>
  );
}
