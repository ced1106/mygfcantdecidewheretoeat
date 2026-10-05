'use client';

import { useState } from 'react';
import RecipeCard from '../components/RecipeCard';

export default function Home() {
  // State for category buttons and search text
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Our temporary database
  const dummyRecipes = [
    {
      id: 1,
      title: "Spicy Garlic Noodles",
      imageUrl: "",
      cuisine: "Asian Fusion",
      cookTime: "15 mins",
      rating: 4.8
    },
    {
      id: 2,
      title: "Classic Smashburger",
      imageUrl: "",
      cuisine: "American",
      cookTime: "20 mins",
      rating: 4.9
    },
    {
      id: 3,
      title: "Miso Glazed Salmon",
      imageUrl: "",
      cuisine: "Japanese",
      cookTime: "30 mins",
      rating: 4.6
    },
    {
      id: 4,
      title: "Tacos al Pastor",
      imageUrl: "",
      cuisine: "Mexican",
      cookTime: "25 mins",
      rating: 4.7
    }
  ];

  const categories = ['All', 'Asian Fusion', 'American', 'Japanese', 'Mexican'];

  // Combined filtering logic: checks category AND search query match
  const filteredRecipes = dummyRecipes.filter(recipe => {
    const matchesCategory = activeFilter === 'All' || recipe.cuisine === activeFilter;
    const matchesSearch = recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          recipe.cuisine.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
   <div className="min-h-screen flex flex-col relative z-0">
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

      <main className="flex-grow max-w-5xl mx-auto w-full px-4 py-8">
        <div className="py-6">
          <h2 className="text-3xl font-bold mb-6 text-center">What are you craving?</h2>
          
          {/* Search Bar Input */}
          <div className="max-w-md mx-auto mb-6">
            <input
              type="text"
              placeholder="Search recipes or cuisines..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm bg-white shadow-sm"
            />
          </div>

          {/* Interactive Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  activeFilter === category 
                    ? 'bg-orange-500 text-white' 
                    : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Render the Filtered and Searched List */}
          {filteredRecipes.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredRecipes.map((recipe) => (
                <RecipeCard 
                  key={recipe.id}
                  title={recipe.title}
                  imageUrl={recipe.imageUrl}
                  cuisine={recipe.cuisine}
                  cookTime={recipe.cookTime}
                  rating={recipe.rating}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-gray-400">
              No recipes found matching &quot;{searchQuery}&quot;
            </div>
          )}
        </div>
      </main>
    </div>
  );
}