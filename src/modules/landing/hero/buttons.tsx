'use client';

import { colors } from '@/utils/colors';

export default function Buttons() {
  return (
    <div className="flex gap-4 justify-center mt-12">
      <button 
        className="px-8 py-3 rounded-full font-semibold text-white transition-colors"
        style={{ background: colors.bgGradient }}
      >
        Try For Free
      </button>
      <button 
        className="px-8 py-3 rounded-full font-semibold text-white transition-colors"
        style={{ background: colors.bgGradient }}
      >
        Contact a Partner
      </button>
    </div>
  );
} 