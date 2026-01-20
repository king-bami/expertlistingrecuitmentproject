
import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { TimeFilter } from '../types.ts';
import { SALES_CHART_DATA, FINANCIAL_STATS } from '../constants.tsx';
import { StatCard } from './StatCard.tsx';

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#0A1F33] text-white p-4 rounded-xl shadow-2xl border border-white/10 ring-1 ring-black/5">
        <p className="text-[10px] font-bold text-white/50 uppercase tracking-widest mb-2">{label} Statistics</p>
        <div className="space-y-1.5">
          {payload.map((entry: any, index: number) => (
            <div key={index} className="flex items-center justify-between gap-8">
              <span className="text-xs font-medium flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: entry.color }}></span>
                {entry.name}
              </span>
              <span className="text-xs font-bold">₦{entry.value}M</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
  return null;
};

export const SalesOverview: React.FC = () => {
  const [filter, setFilter] = useState<TimeFilter>(TimeFilter.YEAR);

  return (
    <div className="bg-white p-8 rounded-[32px] border border-gray-100/80 shadow-[0_8px_30px_rgb(0,0,0,0.02)] h-full flex flex-col group overflow-hidden relative">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Financial Performance</h2>
          <div className="flex items-center gap-2 mt-1.5">
            <span className="px-2 py-0.5 bg-emerald-50 text-[#105B48] text-[10px] font-bold rounded-md uppercase tracking-tighter">Live Audit</span>
            <p className="text-xs text-gray-400 font-medium">Fiscal Reporting Period: FY24/Q3</p>
          </div>
        </div>
        
        <div className="flex bg-gray-50/80 p-1.5 rounded-2xl border border-gray-100">
          {['1 Week', '1 Month', '1 Year'].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f as TimeFilter)}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all duration-300 ${
                filter === f ? 'bg-white text-[#105B48] shadow-sm ring-1 ring-black/5' : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 flex-1">
        {/* Chart Viewport */}
        <div className="lg:w-1/2 min-h-[380px] flex flex-col relative">
          <div className="flex gap-6 mb-8 items-center px-1">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-md bg-[#105B48]"></div>
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Revenue</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-md bg-[#3B82F6]"></div>
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Organic</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-md bg-[#EF4444]"></div>
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Churn</span>
            </div>
          </div>
          
          <div className="flex-1 -ml-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={SALES_CHART_DATA} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 10, fill: '#A3A3A3', fontWeight: 600 }} 
                  dy={10}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 10, fill: '#A3A3A3', fontWeight: 600 }} 
                  tickFormatter={(v) => `₦${v}m`} 
                  dx={-10}
                />
                <Tooltip content={<CustomTooltip />} cursor={{ fill: '#F1F5F9', radius: 4 }} />
                <Bar name="Revenue" dataKey="sales2" fill="#105B48" radius={[4, 4, 0, 0]} barSize={12} />
                <Bar name="Growth" dataKey="sales1" fill="#3B82F6" radius={[4, 4, 0, 0]} barSize={12} />
                <Bar name="Churn" dataKey="sales3" fill="#EF4444" radius={[4, 4, 0, 0]} barSize={12} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-5 h-fit">
          {FINANCIAL_STATS.map((stat, idx) => (
            <StatCard key={idx} {...stat} />
          ))}
          <div className="sm:col-span-2 p-6 bg-gray-50/50 rounded-2xl border border-gray-100 mt-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Conversion Velocity</p>
                <p className="text-2xl font-bold text-gray-900">82.4%</p>
              </div>
              <div className="w-16 h-16 rounded-full border-4 border-[#105B48]/20 border-t-[#105B48] flex items-center justify-center font-bold text-[#105B48]">
                9/10
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
