'use client';

import { colors } from '@/utils/colors';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const isScrolledRef = useRef(false); // syncs without triggering rerenders

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (!isScrolledRef.current && scrollPosition > 24) {
        isScrolledRef.current = true;
        setIsScrolled(true);
      } else if (isScrolledRef.current && scrollPosition < 16) {
        isScrolledRef.current = false;
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className={`w-full sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'h-16 bg-white/80 backdrop-blur-md shadow-md' 
          : 'h-20 shadow-md'
      }`} 
      style={{ 
        background: isScrolled 
          ? 'rgba(255, 255, 255, 0.8)' 
          : colors.bgGradient 
      }}
    >
      <div className="container mx-auto h-full flex items-center px-4">
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="PureTalk AI Logo"
            width={140}
            height={140}
            className={`transition-all duration-300 ml-30 ${!isScrolled ? 'filter brightness-0 invert' : ''}`}
          />
        </Link>
        <div className="flex items-center gap-8 ml-auto">
          <Link href="/ruth" className={`text-lg font-semibold transition-colors duration-300 ${isScrolled ? 'bg-gradient-to-r from-indigo-500 to-blue-400 bg-clip-text text-transparent' : 'text-white'}`}>RUTH</Link>
          <Link href="/tts" className={`text-lg font-semibold transition-colors duration-300 ${isScrolled ? 'bg-gradient-to-r from-indigo-500 to-blue-400 bg-clip-text text-transparent' : 'text-white'}`}>TTS</Link>
          <Link href="/docs" className={`text-lg font-semibold transition-colors duration-300 ${isScrolled ? 'bg-gradient-to-r from-indigo-500 to-blue-400 bg-clip-text text-transparent' : 'text-white'}`}>Documentation</Link>
          <Link href="/solutions" className={`text-lg font-semibold transition-colors duration-300 ${isScrolled ? 'bg-gradient-to-r from-indigo-500 to-blue-400 bg-clip-text text-transparent' : 'text-white'}`}>Solutions</Link>
          <Link href="/support" className={`text-lg font-semibold transition-colors duration-300 ${isScrolled ? 'bg-gradient-to-r from-indigo-500 to-blue-400 bg-clip-text text-transparent' : 'text-white'}`}>Support</Link>
          <Link href="/signup">
            <button className={`px-5 py-2 rounded-full font-semibold transition-colors duration-300 ${isScrolled ? 'bg-gradient-to-r from-indigo-500 to-blue-400 text-white' : 'bg-indigo-600 text-white'}`}>Try For Free</button>
          </Link>
          <Link href="/dashboard">
            <button className={`px-5 py-2 rounded-full font-semibold transition-colors duration-300 ${isScrolled ? 'bg-gradient-to-r from-indigo-900 to-indigo-600 text-white' : 'bg-indigo-900 text-white'}`}>Dashboard</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
