// pages/index.tsx

export default function ITCoursePage() {
    return (
      <div className="min-h-screen bg-gray-100 flex flex-col items-center">
        {/* Hero Section */}
        <section className="w-full bg-blue-600 text-white py-20 text-center">
          <h1 className="text-5xl font-bold mb-4">Master IT Skills with Our Expert-Led Courses</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Join our comprehensive IT training program to gain the skills you need for a successful tech career.
          </p>
          <a
            href="#courses"
            className="mt-8 inline-block px-8 py-3 bg-white text-blue-600 font-semibold rounded-full hover:bg-gray-200 transition duration-200"
          >
            Browse Courses
          </a>
        </section>
  
        {/* Course Highlights Section */}
        <section id="courses" className="max-w-5xl mx-auto py-16 px-4 md:px-8 text-gray-800">
          <h2 className="text-3xl font-bold text-center mb-8">Why Choose Our IT Courses?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Hands-On Learning</h3>
              <p>
                Get practical experience with real-world projects and assignments to solidify your understanding of IT concepts.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Expert Instructors</h3>
              <p>
                Learn from industry professionals with years of experience in tech and a passion for teaching.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Flexible Schedule</h3>
              <p>
                Access course materials at your own pace, anytime, anywhere, with lifetime access to our online platform.
              </p>
            </div>
          </div>
        </section>
  
        {/* Call to Action Section */}
        <section className="w-full bg-blue-600 text-white py-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Learning?</h2>
          <p className="text-lg mb-6">Enroll today and take the first step towards a rewarding career in IT!</p>
          <a
            href="/enroll"
            className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-full hover:bg-gray-200 transition duration-200"
          >
            Enroll Now
          </a>
        </section>
      </div>
    );
  }
  