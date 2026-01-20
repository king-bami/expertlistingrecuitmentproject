
import React from 'react';
import { X, Sliders, TrendingUp, BarChart3, Calculator } from 'lucide-react';

interface BudgetOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const BudgetOverlay: React.FC<BudgetOverlayProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-[65] bg-black/20 backdrop-blur-[2px] sm:bg-transparent sm:backdrop-blur-0"
        onClick={onClose}
      />

      {/* Popover/Modal Container */}
      <div className="fixed inset-x-4 top-[15vh] sm:absolute sm:inset-auto sm:top-[calc(100%+12px)] sm:left-1/2 sm:-translate-x-1/2 w-auto sm:w-[400px] bg-white rounded-[24px] sm:rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-gray-100 overflow-hidden z-[70] animate-dropdown origin-top">

        {/* Header - Navy Blue with Icon */}
        <div className="bg-[#0A1F33] h-[120px] sm:h-[160px] flex items-center justify-center relative">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl sm:rounded-3xl border-2 border-white/20 flex items-center justify-center text-white">
            <Calculator className="w-8 h-8 sm:w-10 sm:h-10" strokeWidth={1.5} />
          </div>
          {/* Subtle Window Controls Mockup */}
          <div className="absolute top-4 left-6 hidden sm:flex gap-1.5">
            <div className="w-2 h-2 rounded-full bg-white/20" />
            <div className="w-2 h-2 rounded-full bg-white/20" />
            <div className="w-2 h-2 rounded-full bg-white/20" />
          </div>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/60 hover:text-white sm:hidden"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content Section */}
        <div className="p-6 sm:p-8 space-y-6 sm:space-y-8">

          <div className="space-y-6 sm:space-y-8">
            {/* Feature 1 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 pt-1">
                <Sliders size={18} className="text-gray-400 sm:w-5 sm:h-5" strokeWidth={1.5} />
              </div>
              <div className="space-y-0.5 sm:space-y-1">
                <h3 className="text-[14px] sm:text-[15px] font-bold text-gray-900 leading-snug">
                  Set up annual budgets by account category
                </h3>
                <p className="text-[12px] sm:text-[13px] text-gray-500 leading-relaxed">
                  Allocate funds across income and expense lines with full visibility.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 pt-1">
                <TrendingUp size={18} className="text-gray-400 sm:w-5 sm:h-5" strokeWidth={1.5} />
              </div>
              <div className="space-y-0.5 sm:space-y-1">
                <h3 className="text-[14px] sm:text-[15px] font-bold text-gray-900 leading-snug">
                  Track actuals vs budget in real time
                </h3>
                <p className="text-[12px] sm:text-[13px] text-gray-500 leading-relaxed">
                  See how your community is performing against plan, month by month.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 pt-1">
                <BarChart3 size={18} className="text-gray-400 sm:w-5 sm:h-5" strokeWidth={1.5} />
              </div>
              <div className="space-y-0.5 sm:space-y-1">
                <h3 className="text-[14px] sm:text-[15px] font-bold text-gray-900 leading-snug">
                  Adjust figures and forecast with ease
                </h3>
                <p className="text-[12px] sm:text-[13px] text-gray-500 leading-relaxed">
                  Edit amounts, apply percentage changes, or roll forward last year's data.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="pt-2">
            <button
              className="w-full py-3.5 sm:py-4 bg-[#1A1A1A] hover:bg-black text-white rounded-full font-bold text-[14px] sm:text-[15px] transition-all active:scale-[0.98] shadow-lg"
              onClick={onClose}
            >
              Create Budget
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BudgetOverlay;
