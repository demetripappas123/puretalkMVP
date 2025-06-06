'use client';

import { colors } from '@/utils/colors';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function SignUp() {
  const [isLogin, setIsLogin] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const router = useRouter();

  const slides = [
    { src: '/carousel-1.svg', subheader: 'Increase in CSAT' },
    { src: '/carousel-2.svg', subheader: 'Coverage' },
    { src: '/carousel-3.svg', subheader: 'Cheaper than payroll scaling' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push('/payment');
  };

  return (
    <div className="min-h-screen bg-[#18181b] relative">
      <Image
        src="/Vector.svg"
        alt="Background"
        fill
        className="opacity-20"
      />
      
      <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex gap-8 items-center">
          {/* Signup Form */}
          <div className="max-w-md w-full space-y-8 bg-[#23232a]/80 backdrop-blur-md p-8 rounded-2xl border border-white/10">
            <div className="flex flex-col items-center">
              <Link href="/">
                <Image
                  src="/logo.svg"
                  alt="PureTalk AI Logo"
                  width={140}
                  height={140}
                  className="transition-all duration-300"
                />
              </Link>
              <h2 className="mt-6 text-center text-3xl font-bold text-white">
                {isLogin ? 'Welcome back' : 'Create your account'}
              </h2>
              <p className="mt-2 text-center text-sm text-gray-400">
                {isLogin ? 'Sign in to your account' : 'Start your journey with PureTalk AI'}
              </p>
            </div>
            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div className="rounded-md shadow-sm space-y-4">
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-700 bg-[#18181b]/80 backdrop-blur-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="Email address"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete={isLogin ? "current-password" : "new-password"}
                    required
                    className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-700 bg-[#18181b]/80 backdrop-blur-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="Password"
                  />
                </div>
                {!isLogin && (
                  <div>
                    <label htmlFor="confirmPassword" className="sr-only">
                      Confirm Password
                    </label>
                    <input
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      autoComplete="new-password"
                      required
                      className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-700 bg-[#18181b]/80 backdrop-blur-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      placeholder="Confirm Password"
                    />
                  </div>
                )}
              </div>

              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  style={{ background: colors.bgGradient }}
                >
                  {isLogin ? 'Sign in' : 'Sign up'}
                </button>
              </div>
            </form>

            <div className="text-center">
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                {isLogin ? "Don't have an account? Sign up" : 'Already have an account? Sign in'}
              </button>
            </div>
          </div>

          {/* Side Image */}
          <div className="hidden lg:flex items-center justify-center w-[700px] h-[500px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/Instagram post - 4.png"
              alt="Showcase"
              width={700}
              height={500}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
} 