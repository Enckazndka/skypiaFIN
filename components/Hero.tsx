import React from 'react';
import { Play } from 'lucide-react';

interface HeroProps {
  onTrailerClick?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onTrailerClick }) => {
  return (
    <div className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-black text-white">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-40 bg-cover bg-center"
        style={{ backgroundImage: `url('https://d3lna1f15u7pcs.cloudfront.net/media/characters/296de901-e2cf-44cd-9052-56875c0c7993/assets/AAA_1.webp?v=0')` }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
      <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_2px,3px_100%] pointer-events-none" />

      {/* Content */}
      <div className="z-20 text-center px-4 animate-fadeIn">
        <p className="text-cyan-400 tracking-[0.5em] mb-4 text-xs md:text-base animate-pulse font-cyber">
          SYSTEM ONLINE // YEAR 2099
        </p>
        <h1 className="glitch font-cyber mb-4 text-6xl md:text-8xl" data-text="SKYPIA">SKYPIA</h1>
        <h2 className="text-xl md:text-3xl font-bold text-gray-300 tracking-[0.2em] mt-2 uppercase border-b border-gray-600 pb-4 inline-block">
          Neon Survival
        </h2>
        
        <div className="mt-12 max-w-2xl mx-auto backdrop-blur-md bg-black/40 p-8 border border-gray-800 rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-500">
          <p className="text-gray-300 leading-relaxed text-sm md:text-lg font-light">
            "나약한 자는 살아남을 수 없다."<br/>
            총성이 빗발치고 돈이 신이 되는 도시.<br/>
            <span className="text-red-500 font-bold">매달 1일, 60만원.</span><br/> 
            생존의 대가를 치러라.
          </p>
        </div>

        {/* Action Button */}
        {onTrailerClick && (
          <button 
            onClick={onTrailerClick}
            className="mt-12 group relative px-8 py-3 bg-transparent border border-cyan-500 text-cyan-400 font-cyber tracking-widest uppercase overflow-hidden hover:text-black transition-colors"
          >
            <div className="absolute inset-0 w-0 bg-cyan-500 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
            <span className="relative flex items-center gap-3">
              <Play size={18} className="fill-current" /> Initialize Teaser
            </span>
          </button>
        )}
      </div>
    </div>
  );
};

export default Hero;