
import React from 'react';
import { X, Settings2, TrendingUp, BarChart3, Calculator, Plus, ArrowRight } from 'lucide-react';

interface BudgetOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const BudgetOverlay: React.FC<BudgetOverlayProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop with High-Fidelity Blur */}
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-md transition-opacity animate-in fade-in duration-500"
        onClick={onClose}
      />
      
      {/* Modal Container */}
      <div className="relative w-full max-w-[500px] bg-white rounded-[40px] overflow-hidden shadow-[0_32px_64px_-12px_rgba(0,0,0,0.3)] border border-white/20 animate-in zoom-in-95 slide-in-from-bottom-8 duration-500">
        
        {/* Header - Premium Image & Gradient (Reduced Height) */}
        <div className="relative h-[180px] group overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000" 
            alt="Modern Architecture" 
            className="absolute inset-0 w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#105B48] via-[#105B48]/70 to-transparent opacity-95"></div>
          
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 p-2.5 bg-white/10 hover:bg-white/30 backdrop-blur-md rounded-full text-white transition-all hover:rotate-90 z-10"
          >
            <X size={18} />
          </button>
          
          <div className="absolute bottom-6 left-8 right-8">
            <div className="flex items-center gap-3 mb-2">
              <div className="px-2.5 py-1 bg-white/20 backdrop-blur-md border border-white/20 rounded-lg text-[9px] font-bold text-white tracking-[0.2em] uppercase">
                Enterprise Tools
              </div>
            </div>
            <h2 className="text-2xl font-bold text-white tracking-tight leading-tight">
              Financial Planning
            </h2>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-8 sm:p-10 space-y-8 bg-white">
          
          <div className="space-y-6">
            {/* Feature 1 */}
            <div className="flex gap-5 group cursor-default">
              <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-[#105B48]/5 flex items-center justify-center text-[#105B48] group-hover:bg-[#105B48] group-hover:text-white transition-all duration-300 shadow-inner">
                <Settings2 size={22} strokeWidth={2} />
              </div>
              <div className="pt-1">
                <h3 className="text-base font-bold text-gray-900 leading-tight mb-1">
                  Categorized Annual Budgets
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Smart allocation across property management and operational lines.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex gap-5 group cursor-default">
              <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-[#105B48]/5 flex items-center justify-center text-[#105B48] group-hover:bg-[#105B48] group-hover:text-white transition-all duration-300 shadow-inner">
                <TrendingUp size={22} strokeWidth={2} />
              </div>
              <div className="pt-1">
                <h3 className="text-base font-bold text-gray-900 leading-tight mb-1">
                  Real-time Variance Tracking
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Instant visual indicators for actuals versus planned performance.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex gap-5 group cursor-default">
              <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-[#105B48]/5 flex items-center justify-center text-[#105B48] group-hover:bg-[#105B48] group-hover:text-white transition-all duration-300 shadow-inner">
                <BarChart3 size={22} strokeWidth={2} />
              </div>
              <div className="pt-1">
                <h3 className="text-base font-bold text-gray-900 leading-tight mb-1">
                  Dynamic Forecasting
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Project future growth with automated historical data roll-forwards.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="pt-4 space-y-4">
            <button 
              className="w-full py-5 bg-[#105B48] hover:bg-[#0c4436] text-white rounded-2xl font-bold text-lg shadow-[0_10px_30px_-10px_rgba(16,91,72,0.5)] hover:shadow-[0_20px_40px_-10px_rgba(16,91,72,0.6)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 group active:scale-[0.98]"
              onClick={onClose}
            >
              <Plus size={20} />
              <span>Initialize New Budget</span>
            </button>
            <button 
              className="w-full py-4 text-gray-400 hover:text-gray-900 text-sm font-bold transition-all flex items-center justify-center gap-2 group"
              onClick={onClose}
            >
              Learn about Financial Modules <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BudgetOverlay;
