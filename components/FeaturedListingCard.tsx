
import React from 'react';
import { MessageSquare, Heart, MapPin } from 'lucide-react';
import { FeaturedListing } from '../types.ts';

export const FeaturedListingCard: React.FC<FeaturedListing> = ({ category, title, imageUrl, id }) => {
  return (
    <div className="relative group rounded-[32px] overflow-hidden h-[400px] shadow-lg hover:shadow-2xl transition-all duration-700 cursor-pointer bg-black">
      {/* Dynamic Background Image */}
      <img 
        src={imageUrl} 
        alt={title} 
        className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-90 saturate-[0.8] group-hover:saturate-100"
      />
      
      {/* High-Fidelity Gradients */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-black/60 to-transparent"></div>

      {/* Floating Category Badge */}
      <div className="absolute top-6 left-6 flex items-center gap-2">
        <div className="px-3 py-1 bg-[#105B48] text-[10px] font-bold text-white rounded-lg tracking-[0.2em] shadow-lg uppercase backdrop-blur-md bg-[#105B48]/90">
          {category}
        </div>
      </div>

      {/* Interaction Icons */}
      <div className="absolute top-6 right-6 flex flex-col gap-3">
        <button className="w-10 h-10 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl flex items-center justify-center text-white hover:bg-white hover:text-black transition-all">
          <Heart size={18} />
        </button>
        {id === '3' && (
          <button className="w-10 h-10 bg-[#105B48] rounded-xl flex items-center justify-center text-white shadow-xl hover:scale-110 transition-all">
            <MessageSquare size={18} />
          </button>
        )}
      </div>

      {/* Content Container */}
      <div className="absolute bottom-0 left-0 right-0 p-8 space-y-4">
        <div className="space-y-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
           <div className="flex items-center gap-1.5 text-white/60 text-xs font-medium">
             <MapPin size={12} className="text-[#105B48]" />
             Victoria Island, Lagos
           </div>
           <h4 className="text-2xl font-bold text-white leading-tight tracking-tight group-hover:text-emerald-400 transition-colors">
            {title}
           </h4>
        </div>
        
        {/* Custom Animated Progress Bar */}
        <div className="flex gap-2.5 items-center">
          {[1, 2, 3, 4].map(i => (
            <div 
              key={i} 
              className={`h-1.5 flex-1 rounded-full transition-all duration-700 ${
                i === 2 ? 'bg-emerald-500 w-12' : 'bg-white/20 group-hover:bg-white/40'
              }`} 
            />
          ))}
        </div>
      </div>

      {/* Hover Status */}
      <div className="absolute inset-0 border-[3px] border-emerald-500/0 group-hover:border-emerald-500/30 rounded-[32px] transition-all duration-700 pointer-events-none"></div>
    </div>
  );
};
