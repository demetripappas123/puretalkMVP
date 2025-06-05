'use client';

import Header from './header';
import Subheader from './subheader';
import Buttons from './buttons';
import TalkButton from './talk-button';
import TrustedBy from './trusted-by';


export default function Hero() {
  return (
    <section className="relative flex flex-col justify-between pt-4">
      <div className="absolute inset-0 w-full h-[120%] overflow-hidden -z-10" style={{ top: '-20%' }}>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute min-w-full min-h-full object-cover"
          style={{ filter: 'brightness(0.7)' }}
        >
          <source src="/landing/backanimation.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="flex-1 flex flex-col justify-center">
        <Header />
        <TalkButton />
        <Subheader />
        <Buttons />
      </div>
      <div className="mt-8 mb-16">
        <TrustedBy />
      </div>
      <div className="relative text-center max-w-4xl mx-auto px-4 mt-12">
        <div className="absolute left-0 right-0 -top-[140px] w-full z-10" style={{height: '480px'}}>
          <svg viewBox="0 0 1600 480" width="100vw" height="480" fill="none" xmlns="http://www.w3.org/2000/svg" style={{position: 'absolute', left: '50%', transform: 'translateX(-50%)'}}>
            <path d="M0,320 L0,40 Q800,440 1600,40 L1600,320 Z" fill="#18181b" />
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
    </section>
  );
} 