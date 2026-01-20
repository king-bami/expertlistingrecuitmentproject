
import React from 'react';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { OverviewCardProps } from '../types.ts';

export const OverviewSummaryCard: React.FC<OverviewCardProps> = ({ title, icon, total, metrics }) => {
  return (
    <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm card-hover group">
      <div className="flex items-center justify-between mb-10">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 bg-[#105B48]/5 text-[#105B48] rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:bg-[#105B48] group-hover:text-white group-hover:rotate-6 group-hover:scale-110 shadow-inner">
            {icon}
          </div>
          <div>
            <h3 className="font-bold text-lg tracking-tight text-gray-900 leading-tight">{title}</h3>
            <p className="text-xs text-gray-400 font-medium">Real-time aggregate</p>
          </div>
        </div>
        <button className="w-10 h-10 rounded-full flex items-center justify-center text-gray-300 hover:text-gray-900 hover:bg-gray-50 transition-all">
          <ChevronRight size={22} />
        </button>
      </div>

      <div className="flex items-end justify-between border-t border-gray-100 pt-8">
        <div className="space-y-1">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Gross Inventory</p>
          <p className="text-3xl font-bold tracking-tight text-gray-900">{total}</p>
        </div>
        
        <div className="flex gap-10">
          {metrics.map((m, i) => (
            <div key={i} className="text-right">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none mb-1.5">{m.label}</p>
              <p className="text-xl font-bold tracking-tight text-gray-800">{m.value}</p>
            </div>
          ))}
        </div>
      </div>
      
      <button className="w-full mt-8 py-3 px-4 rounded-xl text-sm font-bold text-[#105B48] bg-[#105B48]/5 hover:bg-[#105B48] hover:text-white transition-all duration-300 flex items-center justify-center gap-2">
        Detailed Insights <ArrowRight size={16} />
      </button>
    </div>
  );
};
