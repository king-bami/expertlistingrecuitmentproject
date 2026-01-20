import type { ReactNode } from 'react';

export interface StatCardProps {
  label: string;
  value: string;
  change: string;
  isPositive: boolean;
  color?: string;
}

export interface OverviewMetric {
  label: string;
  value: string;
}

export interface OverviewCardProps {
  title: string;
  icon: ReactNode;
  total: string;
  metrics: OverviewMetric[];
}

export interface FeaturedListing {
  id: string;
  category: string;
  title: string;
  imageUrl: string;
}

export enum TimeFilter {
  WEEK = '1 Week',
  MONTH = '1 Month',
  YEAR = '1 Year'
}