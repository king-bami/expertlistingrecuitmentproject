import React from 'react';

export const Skeleton: React.FC<{ className?: string }> = ({ className }) => (
  <div className={`animate-pulse bg-gray-200 rounded ${className}`} />
);

export const DashboardSkeleton = () => (
  <div className="space-y-10 max-w-[1400px] mx-auto">
    <div className="flex justify-between items-center">
      <div className="space-y-2">
        <Skeleton className="h-8 w-48" />
        <Skeleton className="h-4 w-64" />
      </div>
      <div className="flex gap-3">
        <Skeleton className="h-10 w-24 rounded-2xl" />
        <Skeleton className="h-10 w-32 rounded-2xl" />
      </div>
    </div>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <Skeleton className="h-[140px] rounded-[32px]" />
      <Skeleton className="h-[140px] rounded-[32px]" />
      <Skeleton className="h-[140px] rounded-[32px]" />
      <Skeleton className="h-[140px] rounded-[32px]" />
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <Skeleton className="h-[480px] lg:col-span-2 rounded-[32px]" />
      <div className="space-y-6">
        <Skeleton className="h-[220px] rounded-[40px]" />
        <Skeleton className="h-[220px] rounded-[40px]" />
      </div>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <Skeleton className="h-[340px] rounded-[32px]" />
      <Skeleton className="h-[340px] rounded-[32px]" />
      <Skeleton className="h-[340px] rounded-[32px]" />
    </div>
  </div>
);