
import React, { useState, useEffect } from 'react';
import { 
  Building2, 
  Users,
  Filter,
  Download,
  Calculator,
  Calendar,
  Wallet,
  Store,
  Search,
  ChevronRight,
  LayoutDashboard,
  Bell,
  Settings
} from 'lucide-react';
import { NAV_TABS, FEATURED_LISTINGS } from './constants.tsx';
import { DashboardSkeleton } from './components/Skeleton.tsx';
import { SalesOverview } from './components/SalesOverview.tsx';
import { OverviewSummaryCard } from './components/OverviewSummaryCard.tsx';
import { FeaturedListingCard } from './components/FeaturedListingCard.tsx';
import BudgetOverlay from './components/BudgetOverlay.tsx';
import CalendarOverlay from './components/CalendarOverlay.tsx';

const Logo = () => (
  <div className="flex items-center gap-3 group cursor-pointer">
    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-lg transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
      <svg width="24" height="24" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M40 20H80V60H65V35L20 80L10 70L55 25H40V20Z" fill="#105B48"/>
      </svg>
    </div>
    <span className="text-xl font-bold tracking-tight text-white hidden sm:block">Expert Listing</span>
  </div>
);

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isBudgetOpen, setIsBudgetOpen] = useState(false);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col selection:bg-[#105B48]/20">
      {/* Dynamic Header System */}
      <div className="sticky top-0 z-[60] w-full">
        {/* Top Header - Brand Surface */}
        <header className="h-[72px] bg-[#105B48] text-white flex items-center shadow-md">
          <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-8 flex items-center justify-between">
            <Logo />

            <div className="flex items-center gap-4 sm:gap-8">
              {/* Central Search - Desktop only */}
              <div className="hidden lg:flex items-center bg-white/10 rounded-full px-4 py-2 w-80 border border-white/10 focus-within:bg-white/20 transition-all">
                <Search size={16} className="text-white/60 mr-2" />
                <input 
                  type="text" 
                  placeholder="Quick search activities..." 
                  className="bg-transparent border-none text-sm placeholder:text-white/40 focus:outline-none w-full"
                />
              </div>

              {/* Utility Tools */}
              <div className="flex items-center gap-1 sm:gap-2">
                {[
                  { icon: <Calculator size={19} />, label: 'Budgeting', onClick: () => setIsBudgetOpen(true) },
                  { icon: <Calendar size={19} />, label: 'Schedule', onClick: () => setIsCalendarOpen(true) },
                  { icon: <Bell size={19} />, label: 'Notifications' },
                  { icon: <Wallet size={19} />, label: 'Finances' },
                  { icon: <Store size={19} />, label: 'Market' },
                ].map((item, idx) => (
                  <button
                    key={idx}
                    onClick={item.onClick}
                    className="p-2.5 hover:bg-white/15 rounded-xl transition-all relative group active:scale-90"
                    title={item.label}
                  >
                    {item.icon}
                    <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 text-[10px] text-white rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-xl z-50">
                      {item.label}
                    </span>
                  </button>
                ))}
              </div>

              {/* Profile System */}
              <div className="flex items-center gap-3 pl-4 border-l border-white/10 relative group">
                <div className="hidden md:block text-right">
                  <p className="text-sm font-bold leading-none">Dylan Frank</p>
                  <p className="text-[10px] text-white/60 mt-1 uppercase tracking-tighter">Super Admin</p>
                </div>
                
                {/* Avatar Trigger */}
                <div className="w-10 h-10 rounded-xl bg-white text-[#105B48] flex items-center justify-center font-bold text-lg shadow-inner cursor-pointer hover:scale-105 transition-transform border border-white/20">
                  DF
                </div>

                {/* Expert-Styled Hover Popover */}
                <div className="absolute top-[calc(100%+8px)] right-0 w-64 bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.2)] border border-gray-100 p-5 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 z-[70]">
                  <div className="flex flex-col gap-1 text-black">
                    <div className="flex items-center gap-3 mb-3 pb-3 border-b border-gray-50">
                      <div className="w-10 h-10 rounded-lg bg-gray-900 text-white flex items-center justify-center font-bold">
                        DF
                      </div>
                      <div>
                        <p className="text-sm font-bold tracking-tight">Dylan Frank</p>
                        <p className="text-[11px] text-[#105B48] font-bold uppercase tracking-wider">Super Admin</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex flex-col">
                        <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Email Address</span>
                        <p className="text-sm font-medium text-gray-900">dylan96@mail.com</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Decorative pointer arrow */}
                  <div className="absolute -top-1.5 right-4 w-3 h-3 bg-white rotate-45 border-l border-t border-gray-100"></div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* High-Fidelity Navigation Bar */}
        <nav className="h-[64px] bg-white border-b border-gray-100/80 shadow-sm overflow-hidden glass">
          <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-8 flex items-center justify-center h-full">
            <div className="flex items-center justify-start md:justify-center gap-2 overflow-x-auto no-scrollbar py-2 w-full">
              {NAV_TABS.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2.5 px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-300 min-w-max h-10 relative group ${
                      isActive 
                        ? 'text-[#105B48] bg-[#105B48]/5' 
                        : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    <span className={isActive ? 'text-[#105B48]' : 'text-gray-400 transition-colors group-hover:text-gray-600'}>
                      {React.cloneElement(tab.icon as React.ReactElement<any>, { size: 18 })}
                    </span>
                    {tab.label}
                    {isActive && (
                      <div className="absolute -bottom-[12px] left-0 right-0 h-1 bg-[#105B48] rounded-full mx-4" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </nav>
      </div>

      {/* Main Content Area */}
      <main className="flex-1 w-full bg-[#F9FAFB]">
        <div className="max-w-[1440px] mx-auto p-4 sm:p-8 lg:p-12">
          {loading ? (
            <DashboardSkeleton />
          ) : (
            <div className="space-y-12 animate-slide-up">
              {activeTab === 'dashboard' ? (
                <>
                  {/* Dashboard Hero Section */}
                  <header className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-4 border-b border-gray-200/50">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-xs font-bold text-[#105B48] uppercase tracking-widest mb-1">
                        <span className="w-2 h-2 rounded-full bg-[#105B48] animate-pulse"></span>
                        Live Dashboard
                      </div>
                      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900">
                        Welcome back, <span className="text-[#105B48]">Ahmed</span>
                      </h1>
                      <p className="text-gray-500 text-sm sm:text-lg font-medium">Monitoring platform health and sales velocity.</p>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <button className="flex items-center gap-2 px-5 py-3 bg-white border border-gray-200 rounded-xl text-sm font-bold text-gray-700 hover:bg-gray-50 hover:shadow-md transition-all">
                        <Filter size={18} /> Filters
                      </button>
                      <button className="flex items-center gap-2 px-6 py-3 bg-[#0A1F33] text-white rounded-xl text-sm font-bold shadow-xl hover:bg-black hover:-translate-y-1 transition-all">
                        <Download size={18} /> Export Report
                      </button>
                    </div>
                  </header>

                  {/* Primary Data Grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    <div className="lg:col-span-8 h-full">
                      <SalesOverview />
                    </div>
                    <div className="lg:col-span-4 grid grid-cols-1 gap-6">
                      <OverviewSummaryCard 
                        title="Listings Overview" 
                        icon={<Building2 size={24} />} 
                        total="1,842" 
                        metrics={[
                          { label: 'Active', value: '840' },
                          { label: 'Pending', value: '1,002' }
                        ]} 
                      />
                      <OverviewSummaryCard 
                        title="Users Overview" 
                        icon={<Users size={24} />} 
                        total="20.7k" 
                        metrics={[
                          { label: 'New', value: '852' },
                          { label: 'Subs', value: '12k' }
                        ]} 
                      />
                    </div>
                  </div>

                  {/* Curated Content Section */}
                  <section className="space-y-8">
                    <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                      <div>
                        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Featured Real Estate</h2>
                        <p className="text-sm text-gray-400 mt-1 font-medium">Handpicked listings trending this week.</p>
                      </div>
                      <button className="px-4 py-2 text-[#105B48] text-sm font-bold hover:bg-[#105B48]/5 rounded-lg transition-colors flex items-center gap-1 group">
                        Manage Catalog <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      {FEATURED_LISTINGS.map((listing, idx) => (
                        <FeaturedListingCard key={listing.id} {...listing} />
                      ))}
                    </div>
                  </section>
                </>
              ) : (
                <div className="min-h-[60vh] flex flex-col items-center justify-center bg-white rounded-[32px] border border-gray-100 shadow-sm p-12 text-center">
                  <div className="w-24 h-24 bg-gray-50 rounded-3xl flex items-center justify-center mb-8 border border-gray-100 shadow-inner">
                    <LayoutDashboard size={48} className="text-gray-200" />
                  </div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight uppercase">{activeTab}</h2>
                  <p className="text-gray-500 max-w-lg mb-10 text-lg leading-relaxed font-medium">
                    This module is currently undergoing architectural refinement to meet our high-fidelity standards.
                  </p>
                  <button 
                    onClick={() => setActiveTab('dashboard')}
                    className="px-10 py-4 bg-[#105B48] text-white rounded-2xl font-bold shadow-xl hover:bg-[#0c4436] hover:scale-105 transition-all"
                  >
                    Back to Overview
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </main>

      {/* Overlay Layers */}
      <BudgetOverlay isOpen={isBudgetOpen} onClose={() => setIsBudgetOpen(false)} />
      <CalendarOverlay isOpen={isCalendarOpen} onClose={() => setIsCalendarOpen(false)} />

      {/* Global Footer */}
      <footer className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-[1440px] mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <span className="text-sm font-bold text-gray-400">&copy; 2024 Expert Listing Admin</span>
            <div className="h-4 w-px bg-gray-200"></div>
            <nav className="flex gap-6">
              <a href="#" className="text-xs font-bold text-gray-400 hover:text-gray-900 transition-colors uppercase tracking-widest">Privacy</a>
              <a href="#" className="text-xs font-bold text-gray-400 hover:text-gray-900 transition-colors uppercase tracking-widest">Terms</a>
              <a href="#" className="text-xs font-bold text-gray-400 hover:text-gray-900 transition-colors uppercase tracking-widest">Support</a>
            </nav>
          </div>
          <div className="flex gap-4">
             <button className="p-2 text-gray-400 hover:text-[#105B48] transition-colors"><Settings size={20} /></button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
