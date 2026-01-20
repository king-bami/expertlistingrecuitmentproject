
import React from 'react';
import { X, ChevronLeft, ChevronRight, ArrowLeft } from 'lucide-react';

interface CalendarOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const CalendarOverlay: React.FC<CalendarOverlayProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const days = ['SUN', 'MON', 'TUE', 'WED', 'THURS', 'FRI', 'SAT'];

  const calendarData = [
    { value: '29', isCurrent: false }, { value: '30', isCurrent: false }, { value: '31', isCurrent: false },
    { value: '1', isCurrent: true }, { value: '2', isCurrent: true }, { value: '3', isCurrent: true }, { value: '4', isCurrent: true },
    { value: '5', isCurrent: true }, { value: '6', isCurrent: true }, { value: '7', isCurrent: true }, { value: '8', isCurrent: true }, { value: '9', isCurrent: true }, { value: '10', isCurrent: true }, { value: '11', isCurrent: true },
    { value: '12', isCurrent: true }, { value: '13', isCurrent: true }, { value: '14', isCurrent: true }, { value: '15', isCurrent: true }, { value: '16', isCurrent: true, isSelected: true }, { value: '17', isCurrent: true }, { value: '18', isCurrent: true },
    { value: '19', isCurrent: true }, { value: '20', isCurrent: true }, { value: '21', isCurrent: true }, { value: '22', isCurrent: true }, { value: '23', isCurrent: true }, { value: '24', isCurrent: true }, { value: '25', isCurrent: true },
    { value: '26', isCurrent: true }, { value: '27', isCurrent: true }, { value: '28', isCurrent: true }, { value: '29', isCurrent: true }, { value: '30', isCurrent: true }, { value: '31', isCurrent: true }, { value: '1', isCurrent: false },
  ];

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-[65] bg-black/40 backdrop-blur-[2px] sm:bg-transparent sm:backdrop-blur-0"
        onClick={onClose}
      />

      {/* Popover/Modal Container */}
      <div className="fixed inset-x-4 top-[10vh] sm:absolute sm:inset-auto sm:top-[calc(100%+12px)] sm:left-1/2 sm:-translate-x-1/2 w-auto sm:w-[380px] bg-[#0A0A0A] text-white rounded-[24px] sm:rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.4)] overflow-hidden z-[70] animate-dropdown origin-top border border-white/5">

        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-3 sm:gap-4">
            <button className="p-1 hover:bg-white/5 rounded-full transition-colors">
              <ArrowLeft size={18} className="text-white/60" />
            </button>
            <h2 className="text-sm sm:text-base font-bold">Calendar</h2>
          </div>
          <button
            onClick={onClose}
            className="p-1 hover:bg-white/5 rounded-full transition-colors"
          >
            <X size={18} className="text-white/60" />
          </button>
        </div>

        <div className="p-5 sm:p-6">
          {/* Month Selector */}
          <div className="flex items-center justify-between mb-6 sm:mb-8">
            <button className="p-1 hover:bg-white/5 rounded-full transition-colors">
              <ChevronLeft size={20} className="text-white/40 hover:text-white" />
            </button>
            <h3 className="text-sm sm:text-base font-bold">November 2023</h3>
            <button className="p-1 hover:bg-white/5 rounded-full transition-colors">
              <ChevronRight size={20} className="text-white/40 hover:text-white" />
            </button>
          </div>

          {/* Grid Labels */}
          <div className="grid grid-cols-7 mb-4">
            {days.map(day => (
              <div key={day} className="text-[9px] sm:text-[10px] text-white/40 font-bold text-center tracking-widest uppercase">
                {day.substring(0, 3)}
              </div>
            ))}
          </div>

          {/* Date Grid */}
          <div className="grid grid-cols-7 gap-px bg-white/5 rounded-xl overflow-hidden border border-white/5">
            {calendarData.map((day, idx) => (
              <div key={idx} className="aspect-square bg-[#0A0A0A] flex items-center justify-center relative cursor-pointer hover:bg-white/5 transition-colors group">
                <span className={`text-[11px] sm:text-[12px] font-medium transition-transform group-active:scale-90 ${day.isSelected
                    ? 'bg-[#2D45FF] text-white w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center font-bold shadow-lg'
                    : day.isCurrent ? 'text-white' : 'text-white/20'
                  }`}>
                  {day.value}
                </span>
              </div>
            ))}
          </div>

          {/* Footer Decoration */}
          <div className="mt-6 flex justify-center">
            <div className="w-12 h-1 bg-white/10 rounded-full" />
          </div>
        </div>
      </div>
    </>
  );
};

export default CalendarOverlay;
