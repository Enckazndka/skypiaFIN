import React, { useState } from 'react';
import Hero from './components/Hero';
import WorldContext from './components/WorldContext';
import CharacterRoster from './components/CharacterRoster';
import { Monitor, Globe, Users, Youtube, ExternalLink } from 'lucide-react';

type Tab = 'MAIN' | 'WORLD' | 'TARGETS';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('MAIN');

  const handleYouTubeRedirect = () => {
    // Redirect to a Cyberpunk/Noir themed music playlist or video
    window.open('https://youtu.be/VIyFc4LypCQ', '_blank');
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'MAIN':
        return <Hero onTrailerClick={handleYouTubeRedirect} />;
      case 'WORLD':
        return <WorldContext />;
      case 'TARGETS':
        return <CharacterRoster />;
      default:
        return <Hero />;
    }
  };

  return (
    <div className="min-h-screen bg-black text-gray-200 overflow-x-hidden selection:bg-cyan-500 selection:text-black flex flex-col">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 w-full z-40 bg-black/90 backdrop-blur-md border-b border-white/10 px-4 md:px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="font-cyber text-xl font-bold text-white tracking-widest text-cyan-400">SKYPIA</span>
          <span className="text-xs text-gray-600 hidden sm:block">| VER 2.0.99</span>
        </div>

        {/* Desktop Tabs */}
        <div className="hidden md:flex items-center gap-1 bg-gray-900/50 p-1 rounded-lg border border-gray-800">
          <button 
            onClick={() => setActiveTab('MAIN')}
            className={`px-4 py-2 rounded text-xs font-bold tracking-wider transition-all flex items-center gap-2 ${activeTab === 'MAIN' ? 'bg-cyan-900/50 text-cyan-400 shadow-[0_0_10px_rgba(8,145,178,0.3)]' : 'text-gray-400 hover:text-white'}`}
          >
            <Monitor size={14} /> SYSTEM
          </button>
          <button 
            onClick={() => setActiveTab('WORLD')}
            className={`px-4 py-2 rounded text-xs font-bold tracking-wider transition-all flex items-center gap-2 ${activeTab === 'WORLD' ? 'bg-purple-900/50 text-purple-400 shadow-[0_0_10px_rgba(147,51,234,0.3)]' : 'text-gray-400 hover:text-white'}`}
          >
            <Globe size={14} /> WORLD_LOG
          </button>
          <button 
            onClick={() => setActiveTab('TARGETS')}
            className={`px-4 py-2 rounded text-xs font-bold tracking-wider transition-all flex items-center gap-2 ${activeTab === 'TARGETS' ? 'bg-red-900/50 text-red-400 shadow-[0_0_10px_rgba(220,38,38,0.3)]' : 'text-gray-400 hover:text-white'}`}
          >
            <Users size={14} /> DATABASE
          </button>
        </div>

        {/* External Links */}
        <div className="flex items-center gap-4">
          <button 
            onClick={handleYouTubeRedirect}
            className="flex items-center gap-2 text-xs text-red-500 hover:text-red-400 transition-colors border border-red-900/30 px-3 py-1 rounded hover:bg-red-900/10"
          >
            <Youtube size={16} /> 
            <span className="hidden sm:inline">TRAILER</span>
          </button>
        </div>
      </nav>

      {/* Mobile Bottom Nav */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-black border-t border-gray-800 z-50 flex justify-around p-3">
         <button onClick={() => setActiveTab('MAIN')} className={`flex flex-col items-center gap-1 text-[10px] ${activeTab === 'MAIN' ? 'text-cyan-400' : 'text-gray-500'}`}>
           <Monitor size={20} /> MAIN
         </button>
         <button onClick={() => setActiveTab('WORLD')} className={`flex flex-col items-center gap-1 text-[10px] ${activeTab === 'WORLD' ? 'text-purple-400' : 'text-gray-500'}`}>
           <Globe size={20} /> WORLD
         </button>
         <button onClick={() => setActiveTab('TARGETS')} className={`flex flex-col items-center gap-1 text-[10px] ${activeTab === 'TARGETS' ? 'text-red-400' : 'text-gray-500'}`}>
           <Users size={20} /> NPCs
         </button>
      </div>

      <main className="flex-1 pt-20 pb-20 md:pb-0">
        <div className="animate-fadeIn">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default App;