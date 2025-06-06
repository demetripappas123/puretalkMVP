'use client';

import Image from 'next/image';
import clsx from 'clsx';

const plans = [
  {
    name: 'Pro',
    price: '$49.99',
    period: '/mo',
    description: 'Perfect for growing teams and businesses.',
    features: [
      '10,000 Call Hours Per Month',
      'Campaign Management',
      'All Integrations',
      'TTS Software',
    ],
    highlighted: true,
    badge: 'Most Popular',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For large organizations with advanced needs.',
    features: [
      'Unlimited Call Hours',
      'Specialized Needs',
      'Expert Partners',
      'Custom Strategy and Support',
    ],
    highlighted: false,
    badge: '',
  },
];

export default function Payment() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-zinc-950 flex flex-col items-center justify-center py-12 px-4 relative">
      {/* Headline */}
      <div className="mb-12 text-center">
        <h1 className="text-5xl md:text-7xl font-light text-white mb-4 tracking-tight leading-tight">Simple, Transparent Pricing</h1>
        <p className="text-2xl font-light text-zinc-300 max-w-2xl mx-auto">No hidden fees. Choose the plan that fits your needs and scale as you grow.</p>
      </div>
      {/* Pricing Cards */}
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-4xl items-stretch justify-center">
        {plans.map((plan, idx) => (
          <div
            key={plan.name}
            className={clsx(
              'flex flex-col bg-zinc-950 rounded-3xl shadow-xl border border-zinc-800 px-10 py-14 w-full max-w-md relative transition-all duration-300',
              plan.highlighted && 'ring-2 ring-white z-10 scale-105',
              !plan.highlighted && 'opacity-95'
            )}
          >
            {plan.badge && (
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-white text-black text-xs font-bold px-4 py-1 rounded-full shadow-md border border-zinc-300">
                {plan.badge}
              </div>
            )}
            <div className="mb-2 text-3xl font-light text-white tracking-tight text-center">{plan.name}</div>
            <div className="mb-4 text-center text-zinc-400 text-lg min-h-[40px]">{plan.description}</div>
            <div className="flex items-end justify-center mb-8">
              <span className="text-6xl font-extralight text-white">{plan.price}</span>
              {plan.period && <span className="text-2xl text-zinc-400 ml-1">{plan.period}</span>}
            </div>
            <ul className="mb-8 space-y-3 w-full">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center text-zinc-200 text-lg">
                  <svg className="w-5 h-5 mr-2 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            <button
              className={clsx(
                'w-full py-3 rounded-xl font-light text-2xl transition-all border border-white',
                plan.highlighted
                  ? 'bg-white text-black shadow-lg hover:bg-zinc-100'
                  : 'bg-zinc-950 text-white hover:bg-zinc-900'
              )}
            >
              {plan.highlighted ? 'Get Started' : 'Contact Sales'}
            </button>
          </div>
        ))}
      </div>
      {/* Decorative background shape */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none">
        <Image
          src="/Vector.svg"
          alt="Background vector"
          fill
          className="opacity-10 object-cover grayscale"
        />
      </div>
    </div>
  );
} 