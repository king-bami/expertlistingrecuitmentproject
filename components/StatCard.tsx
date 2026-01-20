
import React from 'react';
import { StatCardProps } from '../types.ts';
import { AnimatedNumber } from './AnimatedNumber.tsx';

export const StatCard: React.FC<StatCardProps> = ({ label, value, change, isPositive, color }) => {
  // Enhanced auto-scaling logic to fit ALL digits firmly inside the container without overlapping borders
  const getFontSize = (val: string) => {
    const len = val.length;
    if (len > 18) return 'text-[11px] sm:text-[12px]';
    if (len > 15) return 'text-[12px] sm:text-[13px]';
    if (len > 12) return 'text-[13px] sm:text-[14px]';
    return 'text-[14px] sm:text-[15px] xl:text-[16px]';
  };

  return (
    <div className="bg-white p-3 rounded-[16px] border border-gray-100 shadow-[0_1px_2px_rgba(0,0,0,0.02)] flex flex-col justify-center h-[72px] sm:h-[76px] w-full relative overflow-hidden">
      <h3 className={`${getFontSize(value)} font-extrabold tracking-tight mb-1 ${color} transition-all duration-300 whitespace-nowrap leading-none`}>
        <AnimatedNumber value={value} />
      </h3>
      <div className="flex items-center gap-1.5 min-w-0 mt-0.5">
        <p className="text-[9px] font-bold text-gray-400 uppercase tracking-tight truncate whitespace-nowrap shrink-0">{label}</p>
        <span className={`text-[9px] font-bold flex items-center gap-0.5 whitespace-nowrap ${isPositive ? 'text-emerald-500' : 'text-rose-500'}`}>
          <span className="scale-75 origin-center">{isPositive ? '▲' : '▼'}</span>
          {change}
        </span>
      </div>
    </div>
  );
};
