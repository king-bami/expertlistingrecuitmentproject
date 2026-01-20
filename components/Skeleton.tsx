
import React from 'react';

export const Skeleton: React.FC<{ className?: string }> = ({ className }) => (
  <div className={`animate-pulse bg-gray-200 rounded ${className}`} />
);

export const DashboardSkeleton = () => (
  <div className="space-y-10">
    <Skeleton className="h-8 w-64" />

    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      <div className="lg:col-span-8">
        <Skeleton className="h-[500px] rounded-[32px]" />
      </div>
      <div className="lg:col-span-4 flex flex-col gap-6">
        <Skeleton className="h-[220px] rounded-[24px]" />
        <Skeleton className="h-[220px] rounded-[24px]" />
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Skeleton className="h-[420px] rounded-[24px]" />
      <Skeleton className="h-[420px] rounded-[24px]" />
      <Skeleton className="h-[420px] rounded-[24px]" />
    </div>
  </div>
);