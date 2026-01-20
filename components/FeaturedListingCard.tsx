
import React from 'react';
import { MessageSquare } from 'lucide-react';
import { FeaturedListing } from '../types.ts';

export const FeaturedListingCard: React.FC<FeaturedListing> = ({ category, title, imageUrl, id }) => {
  return (
    <div className="relative group rounded-[24px] overflow-hidden h-[420px] shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer">
      {/* Background Image */}
      <img
        src={imageUrl}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />

      {/* Subtle Bottom Gradient */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent"></div>

      {/* Floating Chat Icon on the 3rd card */}
      {id === '3' && (
        <div className="absolute right-6 top-1/2 -translate-y-1/2">
          <button className="w-12 h-12 bg-[#1A1A1A] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
            <MessageSquare size={20} />
          </button>
        </div>
      )}

      {/* Content at Bottom */}
      <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col gap-2">
        <div className="space-y-0.5">
          <p className="text-[11px] font-bold text-white/90 uppercase tracking-wider">{category}</p>
          <h4 className="text-xl font-bold text-white leading-tight">
            {title}
          </h4>
        </div>

        {/* Carousel Dots */}
        <div className="flex gap-2 justify-center mt-4">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className={`h-2 rounded-full transition-all duration-300 ${i === parseInt(id) ? 'bg-white w-2' : 'bg-white/40 w-2'
                }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
