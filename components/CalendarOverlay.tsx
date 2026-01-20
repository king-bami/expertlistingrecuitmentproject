
import React from 'react';
import { X, ChevronLeft, ChevronRight, ArrowLeft } from 'lucide-react';

interface CalendarOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const CalendarOverlay: React.FC<CalendarOverlayProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const days = ['SUN', 'MON', 'TUE', 'WED', 'THURS', 'FRI', 'SAT'];
  
  // Generating calendar days for November 2023 (as shown in image)
  // Nov 1 2023 was a Wednesday
  const calendarData = [
    { value: '29', isCurrent: false }, { value: '30', isCurrent: false }, { value: '31', isCurrent: false },
    { value: 'Nov 1', isCurrent: true }, { value: '2', isCurrent: true }, { value: '3', isCurrent: true }, { value: '4', isCurrent: true },
    { value: '5', isCurrent: true }, { value: '6', isCurrent: true }, { value: '7', isCurrent: true }, { value: '8', isCurrent: true }, { value: '9', isCurrent: true }, { value: '10', isCurrent: true }, { value: '11', isCurrent: true },
    { value: '12', isCurrent: true }, { value: '13', isCurrent: true }, { value: '14', isCurrent: true }, { value: '15', isCurrent: true }, { value: '16', isCurrent: true, isSelected: true }, { value: '17', isCurrent: true }, { value: '18', isCurrent: true },
    { value: '19', isCurrent: true }, { value: '20', isCurrent: true }, { value: '21', isCurrent: true }, { value: '22', isCurrent: true }, { value: '23', isCurrent: true }, { value: '24', isCurrent: true }, { value: '25', isCurrent: true },
    { value: '26', isCurrent: true }, { value: '27', isCurrent: true }, { value: '28', isCurrent: true }, { value: '29', isCurrent: true }, { value: '30', isCurrent: true }, { value: '31', isCurrent: true }, { value: 'DEC 1', isCurrent: false },
    { value: '2', isCurrent: false }, { value: '3', isCurrent: false }, { value: '4', isCurrent: false }, { value: '5', isCurrent: false }, { value: '6', isCurrent: false }, { value: '7', isCurrent: false }, { value: '8', isCurrent: false },
    { value: '9', isCurrent: false }, { value: '10', isCurrent: false }, { value: '11', isCurrent: false }, { value: '12', isCurrent: false }, { value: '13', isCurrent: false }, { value: '14', isCurrent: false }, { value: '15', isCurrent: false },
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 sm:p-4">
      {/* Dark Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal Container */}
      <div className="relative w-full max-w-[420px] h-full sm:h-auto sm:max-h-[850px] bg-[#0A0A0A] text-white flex flex-col shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-300">
        
        {/* Top Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/5">
          <div className="flex items-center gap-4">
            <button onClick={onClose} className="hover:text-gray-400 transition-colors">
              <ArrowLeft size={20} />
            </button>
            <h2 className="text-lg font-bold tracking-tight">Calendar</h2>
          </div>
          <button onClick={onClose} className="hover:text-gray-400 transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Month Selector */}
        <div className="flex items-center justify-center py-8 gap-12">
          <button className="text-white/40 hover:text-white transition-colors">
            <ChevronLeft size={24} fill="currentColor" />
          </button>
          <h3 className="text-lg font-bold">November 2023</h3>
          <button className="text-white/40 hover:text-white transition-colors">
            <ChevronRight size={24} fill="currentColor" />
          </button>
        </div>

        {/* Calendar Grid */}
        <div className="flex-1 px-4 pb-12">
          {/* Day Names */}
          <div className="grid grid-cols-7 mb-4">
            {days.map(day => (
              <div key={day} className="text-[10px] text-white/40 font-bold text-center tracking-widest px-1">
                {day}
              </div>
            ))}
          </div>

          {/* Date Grid */}
          <div className="grid grid-cols-7 border-t border-l border-white/5">
            {calendarData.map((day, idx) => (
              <div 
                key={idx} 
                className="aspect-square border-r border-b border-white/5 flex flex-col p-2 group cursor-pointer hover:bg-white/5 transition-colors relative"
              >
                <div className={`text-[11px] font-medium leading-none ${day.isCurrent ? 'text-white/80' : 'text-white/20'}`}>
                  {day.isSelected ? (
                    <div className="absolute inset-0 flex items-center justify-center">
                       <span className="bg-[#2D45FF] text-white w-8 h-6 rounded-full flex items-center justify-center text-[11px] font-bold">
                        {day.value}
                       </span>
                    </div>
                  ) : (
                    day.value
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom padding for mobile */}
        <div className="h-8 bg-[#0A0A0A]" />
      </div>
    </div>
  );
};

export default CalendarOverlay;
