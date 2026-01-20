
import React from 'react';
import { TrendingUp, TrendingDown, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { StatCardProps } from '../types.ts';

export const StatCard: React.FC<StatCardProps> = ({ label, value, change, isPositive, color }) => {
  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm card-hover flex flex-col justify-between min-h-[140px] relative overflow-hidden group">
      {/* Background Accent */}
      <div className={`absolute top-0 right-0 w-24 h-24 -mr-12 -mt-12 rounded-full opacity-[0.03] transition-transform group-hover:scale-150 duration-700 ${isPositive ? 'bg-emerald-500' : 'bg-red-500'}`}></div>

      <div className="space-y-2 relative z-10">
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{label}</p>
        <h3 className={`text-xl sm:text-2xl font-bold tracking-tight truncate ${
          color?.includes('blue') ? 'text-blue-600' : 
          color?.includes('green') || color?.includes('emerald') ? 'text-[#105B48]' : 
          'text-red-500'
        }`}>
          {value}
        </h3>
      </div>
      
      <div className="flex items-center justify-between mt-4 relative z-10">
        <div className={`flex items-center gap-1.5 px-2 py-1 rounded-lg text-[11px] font-bold ${
          isPositive ? 'text-emerald-600 bg-emerald-50' : 'text-red-600 bg-red-50'
        }`}>
          {isPositive ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
          <span>{change}</span>
        </div>
        <span className="text-[10px] text-gray-300 font-bold uppercase tracking-tighter">vs M-1</span>
      </div>
    </div>
  );
};
