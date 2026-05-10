import { FlavorChart } from './components/FlavorChart';
import { SalesPriceChart } from './components/SalesPriceChart';
import { SalesTrendChart } from './components/SalesTrendChart';
import { UserDemographicsChart } from './components/UserDemographicsChart';
import { BarChart3 } from 'lucide-react';
import { useState, useEffect } from 'react';

function App() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // Timer for clock
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Apply dark mode to html element for global effect (scrollbars, etc.)
    document.documentElement.classList.add('dark');

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-screen bg-background text-foreground p-4 overflow-hidden flex flex-col gap-4 relative">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none"></div>
      
      {/* Header */}
      <header className="flex-none flex items-center justify-between px-6 py-4 bg-white/5 backdrop-blur-xl border-b border-white/10 relative z-10 shadow-lg">
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
        
        <div className="flex items-center gap-4">
          <div className="p-2 border border-white/10 rounded bg-white/5 backdrop-blur-sm shadow-inner">
            <BarChart3 className="w-6 h-6 text-cyan-400" />
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-wider text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] uppercase">
              餐饮可视化大屏
            </h1>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-sm text-cyan-300/80">数据来源: 餐饮管理系统</span>
            </div>
          </div>
        </div>

        {/* Center decorative element */}
        <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="w-[300px] h-[30px] border-x border-cyan-900/30 flex items-center justify-center gap-1 opacity-50">
                {Array.from({length: 10}).map((_, i) => (
                    <div key={i} className="w-4 h-1 bg-cyan-900/40 transform skew-x-[-20deg]"></div>
                ))}
            </div>
        </div>

        <div className="text-right">
          <div className="text-2xl font-mono font-bold text-cyan-50">{currentTime.toLocaleTimeString()}</div>
          <div className="text-xs text-cyan-400/60 font-mono tracking-widest uppercase">{currentTime.toLocaleDateString()}</div>
        </div>
      </header>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-4 flex-1 min-h-0 relative z-10">
        
        {/* Top Row: Key Metrics */}
        <div className="lg:col-span-1">
          <SalesPriceChart />
        </div>
        <div className="lg:col-span-2">
          <FlavorChart />
        </div>

        {/* Bottom Row: Trends & Users */}
        <div className="lg:col-span-1">
          <UserDemographicsChart />
        </div>
        <div className="lg:col-span-2">
           <SalesTrendChart />
        </div>
      </div>
    </div>
  );
}

export default App;
