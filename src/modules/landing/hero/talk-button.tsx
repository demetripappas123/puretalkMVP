'use client';


import { FaMicrophone } from 'react-icons/fa';

const registerCall = async () => {
  try {
    const res = await fetch('/api/register-call', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ assistant_id: 'e4abe561-caf7-43fc-ae0a-a70786a97096' }),
    });

    const data = await res.json();
    console.log('Web call registered:', data);
  } catch (err) {
    console.error('Error registering call:', err);
  }
};




export default function TalkButton() {
  return (
    <div className="flex justify-center mt-8">
      <button 
        onClick={registerCall}
        className="relative px-12 py-4 rounded-full font-semibold text-white transition-all hover:scale-105 overflow-hidden"
        style={{ 
          background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
          minWidth: '280px',
          boxShadow: '0 4px 20px rgba(99, 102, 241, 0.3)'
        }}
      >
        <img
          src="/ruthWave.gif"
          alt="Animated wave background"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="relative flex items-center justify-center gap-3">
          <FaMicrophone className="text-xl" />
          <span className="text-lg">Talk To RUTH®</span>
        </div>
      </button>
    </div>
  );
} 