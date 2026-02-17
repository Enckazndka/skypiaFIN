import React, { useState } from 'react';
import { CHARACTERS } from '../constants';
import { Character } from '../types';
import { X, Target, Heart, Crosshair, ChevronRight } from 'lucide-react';

const CharacterRoster: React.FC = () => {
  const [selectedChar, setSelectedChar] = useState<Character | null>(null);

  return (
    <section className="py-10 px-4 md:px-8 bg-black text-white relative min-h-screen">
      <div className="max-w-5xl mx-auto">
        <header className="flex justify-between items-end mb-12 border-b border-gray-800 pb-4">
          <div>
            <h2 className="text-3xl md:text-5xl font-cyber text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-600">
              TARGETS
            </h2>
            <p className="text-gray-500 text-xs tracking-[0.3em] mt-2">PERSON OF INTEREST DATABASE</p>
          </div>
          <div className="text-right hidden sm:block">
             <p className="text-xs text-red-500 animate-pulse">ACCESSING SECURE FILES...</p>
          </div>
        </header>

        {/* Vertical Stack of Horizontal Cards */}
        <div className="flex flex-col gap-6">
          {CHARACTERS.map((char, index) => (
            <div 
              key={char.id}
              onClick={() => setSelectedChar(char)}
              className="group relative w-full h-[180px] md:h-[220px] rounded-lg overflow-hidden cursor-pointer border border-gray-800 hover:border-red-500/50 transition-all duration-300 hover:translate-x-2"
            >
              {/* Background Image - Wide Crop */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                style={{ backgroundImage: `url('${char.imageUrl}')` }}
              />
              
              {/* Overlays */}
              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent opacity-90 group-hover:opacity-80 transition-opacity" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />

              {/* Grid Lines Overlay */}
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
              
              {/* Content */}
              <div className="absolute inset-0 p-6 flex items-center justify-between">
                <div className="h-full flex flex-col justify-between z-10 max-w-2xl">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                       <span className="text-xs font-mono text-gray-500 border border-gray-700 px-2 py-0.5 rounded">NO. 0{index + 1}</span>
                       <span className={`text-xs font-bold uppercase tracking-widest ${char.color}`}>
                        {char.role}
                      </span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-white group-hover:text-cyan-300 transition-colors font-cyber tracking-wide">
                      {char.name.split(' ')[0]}
                    </h3>
                  </div>
                  
                  <div className="flex items-center gap-6 text-sm text-gray-400 group-hover:text-white transition-colors">
                    <span className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-gray-600 group-hover:bg-cyan-500 transition-colors"></span>
                      {char.mbti}
                    </span>
                    <span className="hidden sm:inline-block border-l border-gray-700 pl-6">
                      Weapon: {char.weapon}
                    </span>
                  </div>
                </div>

                <div className="hidden md:flex flex-col items-end justify-center text-gray-600 group-hover:text-red-500 transition-colors duration-300">
                   <ChevronRight size={48} className="transform group-hover:translate-x-2 transition-transform" />
                   <span className="text-[10px] font-cyber tracking-widest mt-2 opacity-0 group-hover:opacity-100">ACCESS FILE</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Details */}
      {selectedChar && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/95 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-gray-900/50 border border-gray-700 w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-xl flex flex-col md:flex-row relative shadow-[0_0_50px_rgba(0,0,0,0.8)]">
            <button 
              onClick={() => setSelectedChar(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white z-10 bg-black/50 rounded-full p-2 hover:bg-red-500/20 transition-colors"
            >
              <X size={24} />
            </button>

            {/* Image Side */}
            <div className="w-full md:w-5/12 h-64 md:h-auto relative overflow-hidden group">
               <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                style={{ backgroundImage: `url('${selectedChar.imageUrl}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6">
                <h1 className="text-5xl font-cyber font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-500 drop-shadow-lg">
                  {selectedChar.name.split(' ')[0]}
                </h1>
              </div>
            </div>

            {/* Info Side */}
            <div className="w-full md:w-7/12 p-8 md:p-10 text-left bg-gradient-to-b from-gray-900 to-black">
              <div className="flex items-center gap-3 mb-6 border-b border-gray-800 pb-4">
                <span className={`px-3 py-1 rounded bg-gray-800/80 text-sm font-bold border border-gray-700 ${selectedChar.color}`}>
                  {selectedChar.mbti}
                </span>
                <span className="text-gray-500 text-xs uppercase tracking-wider font-mono">{selectedChar.enneagram}</span>
                <div className="ml-auto text-gray-600 font-cyber text-xs">ID: {selectedChar.id.toUpperCase()}</div>
              </div>
              
              <div className="mb-8">
                 <p className="text-xl text-gray-200 font-light italic mb-2">"{selectedChar.role}"</p>
                 <p className="text-sm text-gray-500">AGE: {selectedChar.age} / GENDER: {selectedChar.gender}</p>
              </div>

              <div className="space-y-8">
                <div>
                  <h4 className="text-cyan-500 font-bold text-xs tracking-widest mb-3 flex items-center gap-2 font-cyber">
                    <Crosshair size={14}/> BACKGROUND_LOG
                  </h4>
                  <p className="text-gray-300 text-sm leading-7 font-light">{selectedChar.background}</p>
                </div>

                <div className="grid grid-cols-2 gap-8">
                  <div className="bg-gray-800/30 p-4 rounded border border-gray-800">
                    <h4 className="text-green-500 font-bold text-xs tracking-widest mb-3 flex items-center gap-2 font-cyber">
                      <Heart size={14}/> LIKES
                    </h4>
                    <ul className="text-gray-400 text-sm space-y-1">
                      {selectedChar.likes.map(l => <li key={l} className="flex items-center gap-2"><span className="w-1 h-1 bg-green-500 rounded-full"></span>{l}</li>)}
                    </ul>
                  </div>
                  <div className="bg-gray-800/30 p-4 rounded border border-gray-800">
                    <h4 className="text-red-500 font-bold text-xs tracking-widest mb-3 font-cyber">DISLIKES</h4>
                    <ul className="text-gray-400 text-sm space-y-1">
                      {selectedChar.dislikes.map(d => <li key={d} className="flex items-center gap-2"><span className="w-1 h-1 bg-red-500 rounded-full"></span>{d}</li>)}
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-yellow-900/20 to-transparent p-4 rounded-r border-l-2 border-yellow-500">
                  <h4 className="text-yellow-500 font-bold text-xs tracking-widest mb-2 flex items-center gap-2 font-cyber">
                    <Target size={14} /> CURRENT_OBJECTIVE
                  </h4>
                  <p className="text-gray-200 text-sm font-medium">"{selectedChar.goal}"</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CharacterRoster;