import React from 'react';

// This interface defines the exact "arguments" this component requires
interface RecipeCardProps {
  title: string;
  imageUrl: string;
  cuisine: string;
  cookTime: string;
  rating: number;
}

export default function RecipeCard({ title, imageUrl, cuisine, cookTime, rating }: RecipeCardProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200">
      {/* Image Placeholder */}
      <div className="h-48 bg-gray-200 w-full flex items-center justify-center">
        {imageUrl ? (
           /* We will use Next.js <Image> later, using a standard img tag for the static milestone */
          <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
        ) : (
          <span className="text-gray-400 text-sm">Image: {title}</span>
        )}
      </div>

      {/* Card Content */}
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-lg text-gray-900 leading-tight">{title}</h3>
          <div className="flex items-center bg-orange-100 px-2 py-1 rounded text-xs font-semibold text-orange-700">
            ⭐ {rating.toFixed(1)}
          </div>
        </div>
        
        <div className="flex items-center gap-3 text-sm text-gray-600 mt-3">
          <span className="flex items-center gap-1">
            🍳 {cuisine}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            ⏱️ {cookTime}
          </span>
        </div>
      </div>
    </div>
  );
}