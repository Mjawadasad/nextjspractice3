// pages/index.tsx

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="text-center p-8 bg-white shadow-md rounded-lg">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to MySite</h1>
        <p className="text-gray-600 mb-6">
          Discover our services and learn more about what we offer to make your life easier.
        </p>
        
      </section>
    </div>
  );
}
