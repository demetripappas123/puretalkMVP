'use client';

export default function Header() {
  return (
    <div className="relative text-center max-w-4xl mx-auto px-4">
      {/* Curved SVG boundary at the top */}
      <div className="absolute left-0 right-0 -top-[120px] w-full z-10" style={{height: '480px'}}>
        <svg viewBox="0 0 1600 480" width="100vw" height="480" fill="none" xmlns="http://www.w3.org/2000/svg" style={{position: 'absolute', left: '50%', transform: 'translateX(-50%)'}}>
          <rect x="0" y="0" width="1600" height="40" fill="white" />
          <path d="M0,40 Q800,440 1600,40 V0 H0 Z" fill="white" />
        </svg>
      </div>
      <div className="bg-[#18181b] p-4 rounded-2xl relative z-20" style={{ boxShadow: '0 0 32px 0 rgba(110,93,237,0.4), 0 0 8px 2px rgba(110,93,237,0.2)' }}>
        <h2 className="text-5xl font-bold text-white">
          Introducing RUTH® by Puretalk AI
        </h2>
        <p className="text-xl mb-5 mt-2 text-white">
          Meet RUTH®— Your Personal AI Agent, and the Voice of AI® <br />
          <em className="text-white">Really Understanding The Humans®</em>
        </p>
      </div>
    </div>
  );
} 