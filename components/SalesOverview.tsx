
import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TimeFilter } from '../types.ts';
import { SALES_CHART_DATA, FINANCIAL_STATS } from '../constants.tsx';
import { StatCard } from './StatCard.tsx';
import { ChevronLeft, ChevronRight, MousePointer2 } from 'lucide-react';

export const SalesOverview: React.FC = () => {
  const [filter, setFilter] = useState<TimeFilter>(TimeFilter.YEAR);

  return (
    <div className="bg-white rounded-[24px] border border-gray-100 shadow-sm flex flex-col overflow-hidden">
      {/* Top Header Section */}
      <div className="p-4 sm:p-5 pb-1 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold text-gray-900 leading-tight">Sales Overview</h2>
          <p className="text-[11px] text-gray-400 font-medium">Showing overview Jan 2022 - Sep 2022</p>
        </div>
        <button className="w-full sm:w-auto px-5 py-2 bg-white border border-gray-200 rounded-full text-[11px] font-bold text-gray-800 hover:bg-gray-50 transition-all shadow-sm active:scale-95 leading-none">
          View Transactions
        </button>
      </div>

      {/* Main Content Area */}
      <div className="px-4 sm:px-5 pb-4 flex-1 flex flex-col">
        {/* Filter Bar */}
        <div className="flex items-center justify-between gap-2 mb-2">
          <div className="flex sm:hidden items-center gap-1.5 text-[9px] text-indigo-500 font-bold bg-indigo-50 px-2.5 py-1 rounded-full animate-pulse">
            <MousePointer2 size={10} className="rotate-90" />
            Swipe
          </div>
          <div className="flex items-center justify-end gap-1 overflow-x-auto no-scrollbar py-1 ml-auto">
            {['1 Week', '1 Month', '1 Year'].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f as TimeFilter)}
                className={`text-[10px] font-bold transition-all px-3 py-1.5 rounded-lg whitespace-nowrap ${filter === f ? 'text-gray-900 bg-[#F3F4F6]' : 'text-gray-400 hover:text-gray-600'
                  }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Chart & Stats Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 flex-1">
          {/* Chart Section */}
          <div className="lg:col-span-7 h-[180px] sm:h-[220px] relative group order-1 overflow-x-auto no-scrollbar">
            <button className="hidden sm:flex absolute -left-2 top-1/2 -translate-y-1/2 w-6 h-6 bg-white border border-gray-100 rounded-full items-center justify-center text-gray-400 hover:text-gray-600 shadow-lg z-10 transition-all active:scale-90">
              <ChevronLeft size={12} />
            </button>
            <button className="hidden sm:flex absolute -right-2 top-1/2 -translate-y-1/2 w-6 h-6 bg-white border border-gray-100 rounded-full items-center justify-center text-gray-400 hover:text-gray-600 shadow-lg z-10 transition-all active:scale-90">
              <ChevronRight size={12} />
            </button>

            <div className="min-w-[400px] sm:min-w-full h-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={SALES_CHART_DATA} margin={{ top: 5, right: 0, left: -30, bottom: 0 }}>
                  <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="#F1F5F9" />
                  <XAxis
                    dataKey="name"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 9, fill: '#64748B', fontWeight: 600 }}
                    dy={5}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 9, fill: '#64748B', fontWeight: 600 }}
                    tickFormatter={(v) => `${v}m`}
                  />
                  <Tooltip
                    cursor={{ fill: 'rgba(241, 245, 249, 0.5)', radius: 4 }}
                    contentStyle={{ borderRadius: '10px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', padding: '6px' }}
                  />
                  <Bar dataKey="sales1" fill="#6366F1" radius={[1, 1, 0, 0]} barSize={4} />
                  <Bar dataKey="sales2" fill="#105B48" radius={[1, 1, 0, 0]} barSize={4} />
                  <Bar dataKey="sales3" fill="#EF4444" radius={[1, 1, 0, 0]} barSize={4} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Stats 2x2 Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-3 content-center order-2 py-1">
            {FINANCIAL_STATS.map((stat, idx) => (
              <StatCard key={idx} {...stat} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
