export interface Character {
  id: string;
  name: string;
  role: string;
  age: number;
  gender: string;
  mbti: string;
  enneagram: string;
  appearance: string;
  weapon: string;
  background: string;
  likes: string[];
  dislikes: string[];
  goal: string;
  imageUrl: string;
  imageSeed?: number; // Optional now, kept for backward compatibility if needed
  color: string;
}

export interface Location {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  imageSeed?: number; // Optional now
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}