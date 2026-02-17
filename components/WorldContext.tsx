import React from 'react';
import { LOCATIONS } from '../constants';
import { MapPin, DollarSign, Skull, AlertTriangle } from 'lucide-react';

const WorldContext: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-slate-950 text-white relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-cyber text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-6">
            WORLD SETTING
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            2099년 가상 도시 스카이피아. 게임 속에 빙의한 당신(U)은 범죄와 향락이 지배하는 이 도시에서 살아남아야 한다.
          </p>
        </div>

        {/* Rules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <div className="bg-gray-900/50 border border-gray-800 p-6 rounded-xl hover:border-red-500 transition-colors duration-300">
            <Skull className="w-10 h-10 text-red-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">무한 경쟁</h3>
            <p className="text-gray-400 text-sm">
              모든 시민은 각자의 방식으로 무장한다. 총기 소지는 암묵적으로 허용되며, 나약한 자는 도태된다.
            </p>
          </div>
          <div className="bg-gray-900/50 border border-gray-800 p-6 rounded-xl hover:border-yellow-400 transition-colors duration-300">
            <DollarSign className="w-10 h-10 text-yellow-400 mb-4" />
            <h3 className="text-xl font-bold mb-2">월세 시스템</h3>
            <p className="text-gray-400 text-sm">
              <span className="text-yellow-400 font-bold">매달 1일</span>, 월세 60만원을 납부해야 한다. 미납 시 발생하는 일은 상상에 맡긴다.
            </p>
          </div>
          <div className="bg-gray-900/50 border border-gray-800 p-6 rounded-xl hover:border-purple-500 transition-colors duration-300">
            <AlertTriangle className="w-10 h-10 text-purple-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">원화 사용</h3>
            <p className="text-gray-400 text-sm">
              이 세계의 화폐는 현실과 같은 원(Won)화. 돈이 곧 법이고 권력이다.
            </p>
          </div>
        </div>

        {/* Locations */}
        <h3 className="text-2xl font-cyber text-cyan-400 mb-8 flex items-center gap-2">
          <MapPin /> KEY LOCATIONS
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {LOCATIONS.map((loc) => (
            <div key={loc.id} className="group relative h-64 overflow-hidden rounded-lg cursor-pointer">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url('${loc.imageUrl}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-90 group-hover:opacity-70 transition-opacity" />
              
              <div className="absolute bottom-0 left-0 p-4 w-full">
                <h4 className="text-xl font-bold text-white mb-1 border-l-4 border-cyan-500 pl-2 group-hover:text-cyan-400 transition-colors">
                  {loc.name}
                </h4>
                <p className="text-gray-300 text-xs line-clamp-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                  {loc.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorldContext;