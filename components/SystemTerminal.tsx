import React, { useState, useRef, useEffect } from 'react';
import { Terminal, Send, Minimize2, Maximize2, Cpu } from 'lucide-react';
import { sendMessageToSystem } from '../services/geminiService';
import { ChatMessage } from '../types';

const SystemTerminal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'SYSTEM ONLINE. 스카이피아에 오신 것을 환영합니다, 플레이어. 궁금한 것이 있습니까?' }
  ]);
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setLoading(true);

    try {
      const response = await sendMessageToSystem(userMsg);
      setMessages(prev => [...prev, { role: 'model', text: response }]);
    } catch (e) {
      setMessages(prev => [...prev, { role: 'model', text: 'CRITICAL ERROR: Connection Lost.' }]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  if (!isOpen) {
    return (
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-cyan-900/80 hover:bg-cyan-700 text-cyan-100 p-4 rounded-full shadow-[0_0_15px_rgba(0,255,255,0.5)] border border-cyan-500 transition-all hover:scale-110 flex items-center gap-2 group"
      >
        <Cpu className="animate-pulse" />
        <span className="hidden group-hover:inline font-cyber text-sm">ACCESS SYSTEM</span>
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 w-[90vw] md:w-[400px] h-[500px] bg-black/95 border border-cyan-500/50 rounded-lg flex flex-col shadow-2xl overflow-hidden font-mono text-sm">
      {/* Header */}
      <div className="bg-cyan-900/30 p-3 border-b border-cyan-500/30 flex justify-between items-center cursor-move">
        <div className="flex items-center gap-2 text-cyan-400">
          <Terminal size={16} />
          <span className="font-bold tracking-wider">SYSTEM_TERMINAL_V.2.0.99</span>
        </div>
        <div className="flex gap-2">
          <button onClick={() => setIsOpen(false)} className="text-cyan-400 hover:text-white">
            <Minimize2 size={16} />
          </button>
        </div>
      </div>

      {/* Messages Area */}
      <div 
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-cyan-900 scrollbar-track-black"
      >
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div 
              className={`max-w-[85%] p-3 rounded-lg ${
                msg.role === 'user' 
                  ? 'bg-cyan-900/40 text-cyan-100 border border-cyan-700' 
                  : 'bg-gray-900/80 text-gray-300 border border-gray-700'
              }`}
            >
              <p className="whitespace-pre-wrap leading-relaxed">{msg.text}</p>
            </div>
          </div>
        ))}
        {loading && (
          <div className="text-cyan-500 animate-pulse text-xs ml-2">
            PROCESSING QUERY...
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="p-3 bg-black border-t border-cyan-900/50 flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Command..."
          className="flex-1 bg-transparent text-cyan-400 placeholder-cyan-800 outline-none border-none focus:ring-0"
          autoFocus
        />
        <button 
          onClick={handleSend}
          disabled={loading}
          className="text-cyan-600 hover:text-cyan-400 disabled:opacity-50"
        >
          <Send size={18} />
        </button>
      </div>
    </div>
  );
};

export default SystemTerminal;