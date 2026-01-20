
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Search,
    Home,
    Briefcase,
    Users,
    FileText,
    ClipboardList,
    CheckSquare,
    Calculator,
    Calendar,
    Command,
    ArrowRight
} from 'lucide-react';

interface CommandPaletteProps {
    isOpen: boolean;
    onClose: () => void;
    onAction: (id: string) => void;
}

const COMMANDS = [
    { id: 'dashboard', label: 'Go to Dashboard', icon: <Home size={18} />, category: 'Navigation', shortcut: 'G D' },
    { id: 'listings', label: 'View Listings', icon: <Briefcase size={18} />, category: 'Navigation', shortcut: 'G L' },
    { id: 'users', label: 'Manage Users', icon: <Users size={18} />, category: 'Navigation', shortcut: 'G U' },
    { id: 'budgeting', label: 'Open Budgeting', icon: <Calculator size={18} />, category: 'Tools', shortcut: 'B' },
    { id: 'schedule', label: 'Check Schedule', icon: <Calendar size={18} />, category: 'Tools', shortcut: 'C' },
    { id: 'tasks', label: 'My Tasks', icon: <CheckSquare size={18} />, category: 'Navigation', shortcut: 'G T' },
];

export const CommandPalette: React.FC<CommandPaletteProps> = ({ isOpen, onClose, onAction }) => {
    const [query, setQuery] = useState('');
    const [selectedIndex, setSelectedIndex] = useState(0);
    const inputRef = useRef<HTMLInputElement>(null);

    const filteredCommands = COMMANDS.filter(cmd =>
        cmd.label.toLowerCase().includes(query.toLowerCase()) ||
        cmd.category.toLowerCase().includes(query.toLowerCase())
    );

    useEffect(() => {
        if (isOpen) {
            setQuery('');
            setSelectedIndex(0);
            setTimeout(() => inputRef.current?.focus(), 50);
        }
    }, [isOpen]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!isOpen) return;

            if (e.key === 'ArrowDown') {
                e.preventDefault();
                setSelectedIndex(prev => (prev + 1) % filteredCommands.length);
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                setSelectedIndex(prev => (prev - 1 + filteredCommands.length) % filteredCommands.length);
            } else if (e.key === 'Enter') {
                e.preventDefault();
                if (filteredCommands[selectedIndex]) {
                    onAction(filteredCommands[selectedIndex].id);
                    onClose();
                }
            } else if (e.key === 'Escape') {
                onClose();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, filteredCommands, selectedIndex, onAction, onClose]);

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[200] flex items-start justify-center pt-[15vh] px-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-gray-900/40 backdrop-blur-sm"
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -20 }}
                        transition={{ type: "spring", duration: 0.4, bounce: 0.3 }}
                        className="relative w-full max-w-[640px] bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
                    >
                        <div className="relative flex items-center px-4 py-4 border-b border-gray-100">
                            <Search className="text-gray-400 mr-3" size={20} />
                            <input
                                ref={inputRef}
                                value={query}
                                onChange={(e) => {
                                    setQuery(e.target.value);
                                    setSelectedIndex(0);
                                }}
                                placeholder="Search actions or pages..."
                                className="flex-1 bg-transparent border-none outline-none text-[15px] text-gray-900 font-medium placeholder:text-gray-400"
                            />
                            <div className="flex items-center gap-1.5 px-2 py-1 bg-gray-50 rounded-lg border border-gray-100">
                                <span className="text-[10px] font-bold text-gray-400 uppercase">ESC</span>
                            </div>
                        </div>

                        <div className="max-h-[400px] overflow-y-auto py-2 no-scrollbar">
                            {filteredCommands.length > 0 ? (
                                <div className="flex flex-col">
                                    {filteredCommands.map((cmd, idx) => {
                                        const isSelected = idx === selectedIndex;
                                        return (
                                            <button
                                                key={cmd.id}
                                                onMouseEnter={() => setSelectedIndex(idx)}
                                                onClick={() => {
                                                    onAction(cmd.id);
                                                    onClose();
                                                }}
                                                className={`group flex items-center justify-between px-4 py-3 transition-all ${isSelected ? 'bg-indigo-50/50' : 'bg-transparent'
                                                    }`}
                                            >
                                                <div className="flex items-center gap-4">
                                                    <div className={`p-2 rounded-xl transition-colors ${isSelected ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200 scale-110' : 'bg-gray-50 text-gray-400'
                                                        }`}>
                                                        {cmd.icon}
                                                    </div>
                                                    <div className="flex flex-col items-start">
                                                        <span className={`text-[14px] font-bold ${isSelected ? 'text-gray-900' : 'text-gray-700'}`}>
                                                            {cmd.label}
                                                        </span>
                                                        <span className="text-[11px] text-gray-400 font-medium uppercase tracking-wider">
                                                            {cmd.category}
                                                        </span>
                                                    </div>
                                                </div>

                                                <div className="flex items-center gap-3">
                                                    {isSelected && (
                                                        <motion.div initial={{ x: -10, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
                                                            <ArrowRight size={14} className="text-indigo-600" />
                                                        </motion.div>
                                                    )}
                                                    <div className="flex items-center gap-1 px-2 py-0.5 bg-gray-50 rounded border border-gray-100 text-[9px] font-bold text-gray-400 uppercase tracking-tighter">
                                                        {cmd.shortcut}
                                                    </div>
                                                </div>
                                            </button>
                                        );
                                    })}
                                </div>
                            ) : (
                                <div className="py-12 flex flex-col items-center justify-center text-gray-400">
                                    <Search size={32} className="mb-3 opacity-20" />
                                    <p className="text-[13px] font-medium">No actions found for "{query}"</p>
                                </div>
                            )}
                        </div>

                        <div className="px-4 py-3 border-t border-gray-50 bg-gray-50/30 flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-1.5 text-[10px] text-gray-400 font-bold">
                                    <Command size={12} />
                                    <span>K to search</span>
                                </div>
                                <div className="flex items-center gap-1.5 text-[10px] text-gray-400 font-bold">
                                    <span>↵ to select</span>
                                </div>
                            </div>
                            <div className="text-[10px] text-gray-400 font-bold bg-white px-2 py-1 rounded-lg border border-gray-100 shadow-sm">
                                Expert Listing Command Center
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};
