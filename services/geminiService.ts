import { GoogleGenAI } from "@google/genai";
import { CHARACTERS, LOCATIONS } from '../constants';

// Initialize Gemini
// NOTE: In a real production app, you would proxy this through a backend.
// Since this is a client-side demo request, we rely on the env var being bundled or available.
// However, the prompt specifies process.env.API_KEY is available.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

const SYSTEM_PROMPT = `
You are the "System" of the game "Skypia 2099". 
Tone: Cynical, Noir, Dry, slightly robotic but observant. You address the user as "Player" or "U".
World Context: 
- Year 2099, Skypia (Virtual City).
- Crime is rampant. Money (Won) rules everything.
- Guns are common. Survival of the fittest.
- Rent Rule: Must pay 600,000 Won on the 1st of every month or face consequences.

Characters:
${JSON.stringify(CHARACTERS.map(c => ({name: c.name, role: c.role, trait: c.mbti})))}

Locations:
${JSON.stringify(LOCATIONS.map(l => l.name))}

Your goal is to answer the player's questions about the world, give them survival tips, or explain the characters. 
Keep answers concise (under 3 sentences usually) unless asked for details.
`;

export const sendMessageToSystem = async (message: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: message,
      config: {
        systemInstruction: SYSTEM_PROMPT,
      }
    });

    return response.text || "시스템 오류: 응답을 생성할 수 없습니다.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "시스템 연결 실패. 네트워크를 확인하거나 나중에 다시 시도하십시오.";
  }
};