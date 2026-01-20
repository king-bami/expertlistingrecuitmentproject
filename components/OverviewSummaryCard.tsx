
import React from 'react';
import { OverviewCardProps } from '../types.ts';
import { ChevronRight } from 'lucide-react';
import { AnimatedNumber } from './AnimatedNumber.tsx';

export const OverviewSummaryCard: React.FC<OverviewCardProps> = ({ title, icon, total, metrics }) => {
  return (
    <div className="bg-white rounded-[24px] border border-gray-100 shadow-sm transition-all hover:shadow-md h-full flex flex-col overflow-hidden">
      {/* Card Header */}
      <div className="flex items-center justify-between px-4 py-3.5 sm:px-5 sm:py-4">
        <div className="flex items-center gap-2.5">
          <div className="p-1.5 bg-indigo-50 text-indigo-600 rounded-lg shrink-0">
            {React.cloneElement(icon as React.ReactElement, { size: 18 })}
          </div>
          <h3 className="font-bold text-gray-900 text-[14px] leading-none">{title}</h3>
        </div>
        <button className="text-[11px] font-bold text-indigo-600 flex items-center gap-1 hover:underline whitespace-nowrap">
          View all <ChevronRight size={12} />
        </button>
      </div>

      {/* Horizontal Separator */}
      <div className="h-px bg-gray-50 mx-4 sm:mx-5" />

      {/* Stats Grid */}
      <div className="grid grid-cols-3 gap-3 px-4 py-4 sm:px-5 sm:py-5 flex-1 items-center">
        <div className="flex flex-col gap-1 min-w-0">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-tight truncate">Total</p>
          <p className="text-xl sm:text-2xl font-extrabold text-gray-900 leading-none">
            <AnimatedNumber value={total} />
          </p>
        </div>
        {metrics.map((m, i) => (
          <div key={i} className="flex flex-col gap-1 min-w-0 border-l border-gray-50 pl-3">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-tight truncate">{m.label}</p>
            <p className="text-xl sm:text-2xl font-extrabold text-gray-900 leading-none">
              <AnimatedNumber value={m.value} />
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
