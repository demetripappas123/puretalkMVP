'use client';

import Header from './header';
import Subheader from './subheader';
import Buttons from './buttons';
import TalkButton from './talk-button';
import TrustedBy from './trusted-by';


export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-between py-12">
      <div className="flex-1 flex flex-col justify-center">
        <Header />
        <TalkButton />
        <Subheader />
        <Buttons />
      </div>
      <TrustedBy />
    </section>
  );
} 