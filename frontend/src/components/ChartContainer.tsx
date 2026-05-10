import React, { type ReactNode } from 'react';
import { cn } from '../lib/utils';

interface ChartContainerProps {
  title: string;
  children: ReactNode;
  className?: string;
}

// Simple utility if lib/utils doesn't exist yet
// But I should create lib/utils first or inline it.
// I'll inline a simple version here if I don't create utils.
// Actually, I'll create lib/utils.ts first in the next step.

export const ChartContainer: React.FC<ChartContainerProps> = ({ title, children, className }) => {
  return (
    <div className={cn(
      "relative bg-slate-900/40 backdrop-blur-xl border border-white/10 flex flex-col h-full shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] overflow-hidden group rounded-xl",
      className
    )}>
      {/* Glass Reflection Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none"></div>

      {/* Tech Corners */}
      <div className="absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2 border-cyan-400/50 opacity-70 group-hover:opacity-100 transition-opacity rounded-tl-xl"></div>
      <div className="absolute top-0 right-0 w-3 h-3 border-r-2 border-t-2 border-cyan-400/50 opacity-70 group-hover:opacity-100 transition-opacity rounded-tr-xl"></div>
      <div className="absolute bottom-0 left-0 w-3 h-3 border-l-2 border-b-2 border-cyan-400/50 opacity-70 group-hover:opacity-100 transition-opacity rounded-bl-xl"></div>
      <div className="absolute bottom-0 right-0 w-3 h-3 border-r-2 border-b-2 border-cyan-400/50 opacity-70 group-hover:opacity-100 transition-opacity rounded-br-xl"></div>

      {/* Header */}
      <div className="px-4 py-3 border-b border-white/5 bg-white/5 flex items-center gap-2 relative z-10">
        <div className="w-1.5 h-4 bg-cyan-400 rounded-sm shadow-[0_0_8px_rgba(34,211,238,0.8)]"></div>
        <h3 className="text-lg font-bold text-slate-100 tracking-wide uppercase font-sans drop-shadow-md">
          {title}
        </h3>
      </div>
      
      {/* Content */}
      <div className="flex-1 min-h-0 w-full p-2 relative z-10">
        {children}
      </div>
    </div>
  );
};
