'use client';

import { colors } from '@/utils/colors';

export default function Footer() {
  return (
    <div className="w-full py-8" style={{ backgroundColor: colors.dark }}>
      <div className="container mx-auto px-4">
        <div className="text-white text-center">
          <p className="text-sm">© 2024 PureTalk AI®. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
} 