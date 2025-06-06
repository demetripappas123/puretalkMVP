'use client';

import { colors } from '@/utils/colors';
import Link from 'next/link';

export default function Buttons() {
  return (
    <div className="flex gap-4 justify-center mt-12">
      <Link href="/signup">
        <button 
          className="px-8 py-3 rounded-full font-semibold text-white transition-colors"
          style={{ background: colors.bgGradient }}
        >
          Sign Up
        </button>
      </Link>
      <button 
        className="px-8 py-3 rounded-full font-semibold text-white transition-colors"
        style={{ background: colors.bgGradient }}
      >
        Contact a Partner
      </button>
    </div>
  );
} 