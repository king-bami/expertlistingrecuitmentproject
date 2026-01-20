
import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import {
  Building2,
  Users,
  Search,
  ChevronRight,
  LayoutDashboard,
  LogOut,
  MapPin,
  MessageSquare,
  Lock,
  Brush,
  Users2,
  History,
  Calendar,
  Calculator,
  Wallet,
  Store,
  Briefcase,
  FileText,
  ClipboardList,
  CheckSquare,
  Home,
  MoreHorizontal
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);
import { FEATURED_LISTINGS } from './constants.tsx';
import { DashboardSkeleton } from './components/Skeleton.tsx';
import { SalesOverview } from './components/SalesOverview.tsx';
import { OverviewSummaryCard } from './components/OverviewSummaryCard.tsx';
import { FeaturedListingCard } from './components/FeaturedListingCard.tsx';
import BudgetOverlay from './components/BudgetOverlay.tsx';
import CalendarOverlay from './components/CalendarOverlay.tsx';
import { Magnetic } from './components/Magnetic.tsx';
import { CommandPalette } from './components/CommandPalette.tsx';
import { Loader } from './components/Loader.tsx';

const Logo = () => (
  <div className="flex items-center gap-2 group cursor-pointer">
    <div className="w-8 h-8 md:w-9 md:h-9 overflow-hidden rounded-lg transition-transform duration-500 group-hover:scale-110 shrink-0">
      <img
        src="/logo.png"
        alt="Logo"
        className="w-full h-full object-cover"
      />
    </div>
    <span className="text-lg md:text-xl font-bold tracking-tight text-white sm:block">Expert Listing</span>
  </div>
);

const App: React.FC = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isBudgetOpen, setIsBudgetOpen] = useState(false);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [isCommandOpen, setIsCommandOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsCommandOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleCommandAction = (id: string) => {
    if (['dashboard', 'listings', 'users', 'request', 'applications', 'tasks'].includes(id)) {
      setActiveTab(id);
    } else if (id === 'budgeting') {
      setIsBudgetOpen(true);
    } else if (id === 'schedule') {
      setIsCalendarOpen(true);
    }
  };

  useLayoutEffect(() => {
    if (!loading) {
      const ctx = gsap.context(() => {
        // Entry Stagger
        gsap.from(".animate-gsap-stagger", {
          y: 40,
          opacity: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power4.out",
          delay: 0.2
        });

        // Scroll Reveals
        gsap.utils.toArray<HTMLElement>(".animate-scroll-reveal").forEach((el) => {
          gsap.from(el, {
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none none"
            },
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power3.out"
          });
        });
      }, mainRef);
      return () => {
        ctx.revert();
        ScrollTrigger.getAll().forEach(t => t.kill());
      };
    }
  }, [loading]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSplashComplete = () => {
    setShowSplash(false);
    setLoading(true); // Start data simulation
    setTimeout(() => setLoading(false), 1500); // Realistic data fetch time
  };

  const UTILITY_ITEMS = [
    {
      id: 'budgeting',
      icon: <Calculator />,
      label: 'Budgeting',
      onClick: () => setIsBudgetOpen(true),
      overlay: <BudgetOverlay isOpen={isBudgetOpen} onClose={() => setIsBudgetOpen(false)} />
    },
    {
      id: 'schedule',
      icon: <Calendar />,
      label: 'Calendar',
      onClick: () => setIsCalendarOpen(true),
      overlay: <CalendarOverlay isOpen={isCalendarOpen} onClose={() => setIsCalendarOpen(false)} />
    },
    { id: 'search', icon: <Search />, label: 'Search Activity' },
    { id: 'wallet', icon: <Wallet />, label: 'Payout Center', hideOnMobile: true },
    { id: 'market', icon: <Store />, label: 'Marketplace', hideOnMobile: true },
  ];

  const NAV_ITEMS = [
    { id: 'dashboard', label: 'Dashboard', icon: <Home size={18} /> },
    { id: 'listings', label: 'Listings', icon: <Briefcase size={18} /> },
    { id: 'users', label: 'Users', icon: <Users size={18} /> },
    { id: 'request', label: 'Request', icon: <FileText size={18} /> },
    { id: 'applications', label: 'Applications', icon: <ClipboardList size={18} /> },
    { id: 'tasks', label: 'Tasks', icon: <CheckSquare size={18} /> },
  ];

  return (
    <>
      {showSplash && <Loader onComplete={handleSplashComplete} />}
      <div className={`min-h-screen flex flex-col bg-[#F9FAFB] transition-opacity duration-1000 ${showSplash ? 'opacity-0' : 'opacity-100'}`}>
        {/* Top Header */}
        <header className={`h-16 text-white flex items-center sticky top-0 z-[60] transition-all duration-500 ease-in-out ${scrolled ? 'bg-[#105B48]/85 backdrop-blur-[12px] shadow-lg h-14' : 'bg-[#105B48]'
          }`}>
          <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 flex items-center justify-between">
            <div className={`${scrolled ? 'scale-90' : 'scale-100'} transition-transform duration-500`}>
              <Logo />
            </div>

            <div className="flex items-center gap-2 sm:gap-4 lg:gap-8">
              <div className="flex items-center gap-0 sm:gap-1 md:gap-2">
                {UTILITY_ITEMS.map((item, idx) => (
                  <div key={idx} className={`${item.hideOnMobile ? 'hidden md:block' : 'block'} relative`}>
                    <Magnetic>
                      <button
                        onClick={item.onClick}
                        title={item.label}
                        className="p-2 sm:p-2.5 hover:bg-white/15 rounded-xl transition-all relative group active:scale-90 flex items-center justify-center text-white/80 hover:text-white"
                      >
                        {React.cloneElement(item.icon as React.ReactElement, {
                          size: typeof window !== 'undefined' && window.innerWidth < 640 ? 18 : 20,
                          strokeWidth: 2
                        })}
                        <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-2.5 py-1.5 bg-gray-900 text-[10px] text-white rounded-lg opacity-0 group-hover:opacity-100 transition-all whitespace-nowrap pointer-events-none shadow-2xl z-[100] translate-y-2 group-hover:translate-y-0 font-bold hidden sm:block">
                          {item.label}
                        </span>
                      </button>
                    </Magnetic>
                    {item.overlay}
                  </div>
                ))}

                {/* Mobile "More" Button */}
                <div className="md:hidden relative">
                  <Magnetic>
                    <button
                      onClick={() => setIsMoreOpen(!isMoreOpen)}
                      className="p-2 hover:bg-white/15 rounded-xl transition-all relative group active:scale-90 flex items-center justify-center text-white/80"
                    >
                      <MoreHorizontal size={18} strokeWidth={2} />
                    </button>
                  </Magnetic>

                  {isMoreOpen && (
                    <>
                      <div className="fixed inset-0 z-[65]" onClick={() => setIsMoreOpen(false)} />
                      <div className="absolute top-[calc(100%+12px)] right-0 w-48 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden z-[70] animate-dropdown origin-top-right">
                        {UTILITY_ITEMS.filter(i => i.hideOnMobile).map((item, idx) => (
                          <button
                            key={idx}
                            onClick={() => {
                              item.onClick?.();
                              setIsMoreOpen(false);
                            }}
                            className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 text-gray-700 font-bold text-xs border-b border-gray-50 last:border-0 transition-colors"
                          >
                            <span className="text-gray-400">
                              {React.cloneElement(item.icon as React.ReactElement, { size: 16 })}
                            </span>
                            {item.label}
                          </button>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>

              <div className="relative border-l border-white/10 pl-3 sm:pl-6 ml-1 sm:ml-2">
                <div
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="flex items-center gap-2 sm:gap-3 cursor-pointer group/prof"
                  title="Profile Settings"
                >
                  <div className="hidden lg:block text-right transition-all duration-300">
                    <p className="text-sm font-bold leading-none text-white group-hover/prof:text-emerald-300 transition-colors text-glow">Dylan Frank</p>
                    <p className="text-[10px] text-white/60 mt-1 uppercase tracking-tighter">Super Admin</p>
                  </div>
                  <Magnetic>
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-white text-[#105B48] flex items-center justify-center font-bold text-base sm:text-lg shadow-lg hover:scale-110 transition-transform border border-white/20 active:scale-95">
                      D
                    </div>
                  </Magnetic>
                </div>

                {isProfileOpen && (
                  <>
                    <div className="fixed inset-0 z-[65]" onClick={() => setIsProfileOpen(false)} />
                    <div className="absolute top-[calc(100%+16px)] right-0 w-72 bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.2)] border border-gray-100 overflow-hidden z-[70] animate-dropdown origin-top-right">
                      <div className="p-4">
                        <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-xl border border-gray-100">
                          <div className="w-12 h-12 rounded-full bg-[#105B48] text-white flex items-center justify-center font-bold text-xl shadow-sm">D</div>
                          <div className="flex flex-col">
                            <span className="text-base font-bold text-gray-900 leading-tight">Dylan Frank</span>
                            <span className="text-xs text-gray-500 font-medium">dylan96@mail.com</span>
                          </div>
                        </div>
                      </div>
                      <div className="pb-2">
                        {[
                          { icon: <Users2 size={16} />, label: 'Teams' },
                          { icon: <Brush size={16} />, label: 'Snagging' },
                          { icon: <MessageSquare size={16} />, label: 'Feedback' },
                          { icon: <MapPin size={16} />, label: 'Geo-Bucket' },
                          { icon: <Lock size={16} />, label: 'Change password' },
                        ].map((item, idx) => (
                          <button key={idx} className="w-full flex items-center gap-4 px-6 py-3.5 hover:bg-gray-50 text-gray-700 font-semibold text-sm transition-colors border-b border-gray-50/50 last:border-0 text-left">
                            <span className="text-gray-400">{item.icon}</span> {item.label}
                          </button>
                        ))}
                        <div className="h-px bg-gray-100 my-1"></div>
                        <button className="w-full flex items-center gap-4 px-6 py-4 hover:bg-red-50 text-red-500 font-bold text-sm transition-colors">
                          <LogOut size={16} /> Logout
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* Sub Header / Nav */}
        <nav className={`h-14 sm:h-16 border-b border-gray-100 sticky z-50 shadow-sm transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md top-14' : 'bg-white top-16'
          }`}>
          <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 flex items-center h-full">
            <div className="flex items-center justify-around sm:justify-between w-full overflow-x-auto no-scrollbar py-2">
              {NAV_ITEMS.map((item) => {
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`flex flex-col sm:flex-row items-center gap-1 sm:gap-3 px-3 sm:px-6 py-1.5 sm:py-2.5 rounded-lg sm:rounded-xl transition-all relative group whitespace-nowrap ${isActive
                      ? 'text-[#105B48] bg-[#105B48]/10'
                      : 'text-gray-500 hover:text-gray-900 border-transparent'
                      }`}
                  >
                    <span className={isActive ? 'text-[#105B48]' : 'text-gray-400 group-hover:text-gray-600 transition-colors shrink-0'}>
                      {React.cloneElement(item.icon as React.ReactElement, { size: 18 })}
                    </span>
                    <span className="text-[10px] sm:text-[14px] font-bold">{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main ref={mainRef} className="flex-1 bg-[#F9FAFB] py-3 sm:py-6 px-4 sm:px-10">
          <div className="max-w-[1440px] mx-auto relative">
            {/* Scroll to top button */}
            <AnimatePresence>
              {scrolled && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: 20 }}
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="fixed bottom-8 right-8 z-[100] p-4 bg-[#105B48] text-white rounded-full shadow-2xl hover:bg-[#0d4a3b] transition-colors active:scale-95 group"
                  title="Scroll to top"
                >
                  <ChevronRight className="-rotate-90 group-hover:-translate-y-1 transition-transform" size={24} />
                </motion.button>
              )}
            </AnimatePresence>
            {loading ? (
              <DashboardSkeleton />
            ) : (
              <div className="space-y-4 sm:space-y-5">
                <div className="mb-0 animate-gsap-stagger">
                  <h1 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">Welcome, Ahmed</h1>
                </div>

                {/* Data Grid - Chart First on Mobile */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5 items-stretch">
                  <div className="lg:col-span-8 order-1 animate-gsap-stagger">
                    <SalesOverview />
                  </div>
                  <div className="lg:col-span-4 flex flex-col gap-4 sm:gap-5 order-2 animate-gsap-stagger">
                    <div className="animate-scroll-reveal flex-1">
                      <OverviewSummaryCard
                        title="Listings Overview"
                        icon={<Building2 size={20} />}
                        total="1.8k"
                        metrics={[
                          { label: 'Active', value: '80' },
                          { label: 'Archived', value: '1k' }
                        ]}
                      />
                    </div>
                    <div className="animate-scroll-reveal flex-1">
                      <OverviewSummaryCard
                        title="Users Overview"
                        icon={<Users size={20} />}
                        total="20.7k"
                        metrics={[
                          { label: 'Riders', value: '8.5k' },
                          { label: 'Subscribers', value: '7.5k' }
                        ]}
                      />
                    </div>
                  </div>
                </div>

                {/* Featured Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 pt-2">
                  {FEATURED_LISTINGS.map((listing, index) => (
                    <div
                      key={listing.id}
                      className="animate-scroll-reveal"
                    >
                      <FeaturedListingCard {...listing} />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </main>

        <CommandPalette
          isOpen={isCommandOpen}
          onClose={() => setIsCommandOpen(false)}
          onAction={handleCommandAction}
        />
       
      </div>
    </>
  );
};

export default App;
