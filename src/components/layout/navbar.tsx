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
      console.log('scrollY:', window.scrollY);

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
          ? 'h-16 shadow-md' 
          : 'h-20 shadow-md'
      }`} 
      style={{ 
        background: 'black',
        boxShadow: '0 4px 30px rgba(255, 255, 255, 0.05)'
      }}
    >
      <div className="container mx-auto h-full flex items-center px-4">
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="PureTalk AI Logo"
            width={140}
            height={140}
            className="transition-all duration-300 ml-30"
          />
        </Link>
        <div className="flex items-center ml-auto">
          <div className="flex gap-6">
            <Link href="/ruth" className="text-lg font-semibold transition-colors duration-300 text-blue-200">RUTH</Link>
            <Link href="/tts" className="text-lg font-semibold transition-colors duration-300 text-blue-200">TTS</Link>
            <Link href="/docs" className="text-lg font-semibold transition-colors duration-300 text-blue-200">Documentation</Link>
            <Link href="/solutions" className="text-lg font-semibold transition-colors duration-300 text-blue-200">Solutions</Link>
            <Link href="/support" className="text-lg font-semibold transition-colors duration-300 text-blue-200">Support</Link>
          </div>
          <div className="flex gap-2 ml-4">
            <Link href="/signup">
              <button className="px-5 py-2 rounded-md font-semibold border border-white bg-transparent text-white transition-colors duration-300 hover:bg-white hover:text-black">Sign Up</button>
            </Link>
            <Link href="/dashboard">
              <button 
                className="px-5 py-2 rounded-md font-semibold text-white transition-colors duration-300"
                style={{ background: colors.bgGradient }}
              >
                Dashboard
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
