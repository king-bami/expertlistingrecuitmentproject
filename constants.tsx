
import React from 'react';
import { LayoutDashboard, Building2, Users, FileText, ClipboardList, CheckSquare } from 'lucide-react';

export const NAV_TABS = [
  { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard size={20} /> },
  { id: 'listings', label: 'Listings', icon: <Building2 size={20} /> },
  { id: 'users', label: 'Users', icon: <Users size={20} /> },
  { id: 'request', label: 'Request', icon: <FileText size={20} /> },
  { id: 'applications', label: 'Applications', icon: <ClipboardList size={20} /> },
  { id: 'tasks', label: 'Tasks', icon: <CheckSquare size={20} /> },
];

export const SALES_CHART_DATA = [
  { name: 'Jan', sales1: 35, sales2: 28, sales3: 10 },
  { name: 'Feb', sales1: 15, sales2: 30, sales3: 10 },
  { name: 'Mar', sales1: 15, sales2: 8, sales3: 5 },
  { name: 'Apr', sales1: 25, sales2: 12, sales3: 10 },
  { name: 'May', sales1: 10, sales2: 8, sales3: 5 },
  { name: 'Jun', sales1: 28, sales2: 48, sales3: 35 },
  { name: 'Jul', sales1: 25, sales2: 38, sales3: 15 },
  { name: 'Aug', sales1: 24, sales2: 18, sales3: 15 },
  { name: 'Sep', sales1: 36, sales2: 32, sales3: 20 },
];

export const FINANCIAL_STATS = [
  { label: 'Total Inflow', value: '₦120,000,000.00', change: '2.5%', isPositive: true, color: 'text-[#6366F1]' },
  { label: 'MRR', value: '₦50,000,000.00', change: '2.5%', isPositive: true, color: 'text-[#22C55E]' },
  { label: 'Commission Revenue', value: '₦200,000,000.00', change: '0.5%', isPositive: true, color: 'text-[#10B981]' },
  { label: 'GMV', value: '₦100,000,000.00', change: '0.5%', isPositive: false, color: 'text-[#EF4444]' },
];

export const FEATURED_LISTINGS = [
  {
    id: '1',
    category: 'MOST CLICKED',
    title: 'Urban Prime Plaza Premiere',
    imageUrl: 'https://picsum.photos/seed/urban1/600/400',
  },
  {
    id: '2',
    category: 'MOST WATCHLISTED',
    title: 'Urban Prime Plaza Premiere',
    imageUrl: 'https://picsum.photos/seed/urban2/600/400',
  },
  {
    id: '3',
    category: 'HOTTEST LISTING',
    title: 'Urban Prime Plaza Premiere',
    imageUrl: 'https://picsum.photos/seed/urban3/600/400',
  },
];
