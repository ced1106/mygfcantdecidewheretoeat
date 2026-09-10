export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation Bar */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-orange-500">🍽️ WhereToEat</h1>
          <nav>
            <button className="text-sm font-medium text-gray-600 hover:text-gray-900">
              Sign In
            </button>
          </nav>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow max-w-5xl mx-auto w-full px-4 py-8">
        <div className="text-center py-12">
          <h2 className="text-3xl font-bold mb-4">What are you craving?</h2>
          <p className="text-gray-500 mb-8">
            Your personalized food feed will go here.
          </p>
          
          {/* Placeholder for future components */}
          <div className="h-64 bg-gray-100 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center">
            <span className="text-gray-400">Recipe Cards Coming Soon...</span>
          </div>
        </div>
      </main>
    </div>
  );
}