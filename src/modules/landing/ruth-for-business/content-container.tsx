'use client';

import { useState } from 'react';
import { FaLink, FaChartLine, FaUsers, FaRocket, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { colors } from '@/utils/colors';

const cardData = [
  {
    header: "SMBs Lose 40% of Sales from Missed Calls and Mismanaged Leads",
    link: 'https://www.brightlocal.com/research/local-consumer-review-survey/',
  },
  {
    header: "Traditional Scaling from SMB to SME Loses 30% of Revenue on Payroll",
    link: 'https://onpay.com/insights/understanding-payroll-costs/?utm_source=chatgpt.com',
  },
  {
    header: "74% of Tech Experts Say API-First Tools are Critical for Scalability",
    link: 'https://www.postman.com/state-of-api/2024/api-global-growth/',
  },
];

const impactData = [
  {
    icon: <FaUsers className="text-2xl" />,
    title: "Customer Acquisition & Experience",
    value: "Drive conversion, loyalty, and satisfaction with intelligent, humanized AI.",
    bullets: [
      "Omnichannel AI: Connect with customers 24/7 across voice, chat, SMS, and web-connect, while keeping conversational context",
      "Humanized Conversational AI®: Emotionally intelligent, natural conversations",
      "Multilingual & Localized Voices: Speak your customers' language—literally",
      "Quick Bots™ Templates: Prebuilt industry-specific assistants",
      "Sentiment-Aware Responses: Understand and adapt to customer emotion in real time",
      "Live Call Transfer: Seamlessly escalate to humans when needed"
    ]
  },
  {
    icon: <FaRocket className="text-2xl" />,
    title: "Scalable & Deployable",
    value: "Launch fast, scale seamlessly, and manage with ease.",
    bullets: [
      "RUTH Connect™ Dashboard: Unified control for all agents, campaigns, and integrations",
      "Campaign Manager: Automate hundreds of calls, set schedules, and manage leads",
      "Knowledge Base Sync: Sync your site, PDFs, or docs to power assistant knowledge",
      "Multimodal Assistants: Operate across chat, VOIP, and SMS (coming soon)",
      "Low Code / No Code Builder: Customize and launch without devs",
      "Bring Your Own Carrier (SIP): Integrate existing telephony infrastructure",
      "Enterprise-Level Call Capacity: Handle thousands of concurrent calls with ease",
      "App Integrations: Google Calendar, GoHighLevel, cal.com, and more"
    ]
  },
  {
    icon: <FaChartLine className="text-2xl" />,
    title: "Automated Workflows",
    value: "Streamline internal ops and boost team productivity with smart automation.",
    bullets: [
      "Orchestration Engine: Manage agent handoffs, fallback logic, and flow control",
      "Context Awareness: Understand user history, preferences, and emotional tone",
      "Scheduling, Reminders & Confirmations: Automated follow-ups and bookings",
      "Smart Feedback Loops: Improve over time with real-world use and analytics",
      "Internal Ops Automation: Intake, onboarding, collections, surveys, and more",
      "Voice + Chat Coordination: Sync conversations across platforms without losing context"
    ]
  }
];

const imageData = [
  {
    id: 1,
    alt: "Customer Experience Dashboard",
    description: "Experience seamless integration with our AI solutions, designed to enhance your business operations and customer interactions."
  },
  {
    id: 2,
    alt: "Analytics Overview",
    description: "Gain valuable insights with our comprehensive analytics dashboard, helping you make data-driven decisions."
  },
  {
    id: 3,
    alt: "Integration Hub",
    description: "Connect and manage all your tools in one place with our powerful integration platform."
  }
];

export default function ContentContainer() {
  const [activeImage1, setActiveImage1] = useState(0);
  const [activeImage2, setActiveImage2] = useState(0);
  const [activeImage3, setActiveImage3] = useState(0);

  const imageSources1 = [
    '/landing/how-it-works-image-1.svg',
    '/landing/image-2.svg',
    '/landing/image-3.svg',
  ];
  const imageAlts1 = [
    'Customer Experience Dashboard',
    'Analytics Overview',
    'Integration Hub',
  ];
  const imageDescriptions1 = [
    'Experience seamless integration with our AI solutions, designed to enhance your business operations and customer interactions.',
    'Gain valuable insights with our comprehensive analytics dashboard, helping you make data-driven decisions.',
    'Connect and manage all your tools in one place with our powerful integration platform.',
  ];

  const imageSources2 = [
    '/landing/puretalkdash.png',
    '/landing/phones.webp',
    '/landing/how-it-works-image-3.svg',
  ];
  const imageAlts2 = [
    'How It Works 1',
    'How It Works 2',
    'How It Works 3',
  ];
  const imageDescriptions2 = [
    'First step of how it works.',
    'Second step of how it works.',
    'Third step of how it works.',
  ];

  const imageSources3 = [
    '/landing/personalized-image-2.svg',
    '/landing/ruth-personalized-1.png',
    '/landing/how-it-works-image-3.svg',
  ];
  const imageAlts3 = [
    'Personalized Image 2',
    'Ruth Personalized 1',
    'Icon 1',
  ];
  const imageDescriptions3 = [
    'Personalized AI experience for your business.',
    'Meet Ruth, your personalized AI agent.',
    'AI-powered icon for your workflow.',
  ];

  // First image container headers and subheaders
  const imageHeaders1 = [
    'Voice AI',
    'Chatbot',
    'TTS (Text-to-Speech)',
  ];
  const imageSubheaders1 = [
    'Natural, lifelike conversations powered by RUTH®. Never Miss a Call.',
    'Intelligent, real-time text chat for any use case.',
    'Humanized Conversational AI® that grows with you.',
  ];

  // Second image container headers and subheaders
  const imageHeaders2 = [
    'Dashboard',
    'Easy Deploy',
    'Compliant',
  ];
  const imageSubheaders2 = [
    'Manage agents, monitor usage, and analyze performance in one place.',
    'Launch assistants in minutes—no coding required. Integrate with existing SIP & VOIP systems, and manage campaigns.',
    'Built with enterprise-grade privacy and data controls– HIPAA, GDPR, SOC-2 Compliant',
  ];

  // Third image container headers and subheaders
  const imageHeaders3 = [
    'Agent Management',
    'Integration Ready',
    'Performance Insights',
  ];
  const imageSubheaders3 = [
    'Easily create, customize, and scale AI agents.',
    'Plug into your existing stack with flexible APIs and webhooks.',
    'Track key metrics and continuously optimize experiences.',
  ];

  return (
    <div className="w-full min-h-[700px] flex flex-col pt-8">
      <div className="max-w-7xl mx-auto px-4 w-full mb-12">
        <h2 className="text-4xl font-bold text-left">
          Problems RUTH® has Solved
        </h2>
      </div>
      <div className="flex flex-col gap-12 px-4 mr-32">
        <div className="flex gap-8 ml-32">
          {cardData.map((card, idx) => (
            <div
              key={idx}
              className="group relative inline-flex items-center bg-white border border-gray-200 shadow-2xl rounded-lg p-4 transition-all duration-300 hover:shadow-[0_0_8px_rgba(110,93,237,0.5)] cursor-pointer w-[400px]"
            >
              <div className="flex items-start gap-3">
                <span className="font-bold text-black text-lg leading-snug">
                  {card.header}
                </span>
                <a
                  href={card.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-600 transition-colors flex-shrink-0 mt-1"
                  aria-label="Source link"
                >
                  <FaLink className="text-lg" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="ml-32">
          <div className="grid grid-cols-16 grid-rows-24 gap-12 h-[200vh]">
            {/* First Card - Spans 8 columns, 6 rows */}
            <div className="col-span-8 row-span-6 rounded-xl p-6 text-white shadow-xl" style={{ background: colors.bgGradient }}>
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-white/10 p-3 rounded-lg">
                  {impactData[0].icon}
                </div>
                <h3 className="text-xl font-semibold">{impactData[0].title}</h3>
              </div>
              <div className="mb-6">
                <span className="text-lg font-medium">{impactData[0].value}</span>
              </div>
              <div className="flex flex-wrap gap-3">
                {impactData[0].bullets.map((bullet, bulletIdx) => {
                  const [header, content] = bullet.split(': ');
                  return (
                    <div
                      key={bulletIdx}
                      className="group w-fit bg-white/10 hover:bg-white/20 rounded-lg px-4 py-2 cursor-pointer transition-all duration-300"
                    >
                      <div className="flex items-center gap-2">
                        <p className="text-white text-sm font-medium">
                          {header}
                        </p>
                        <div className="text-white/60 group-hover:rotate-180 transition-transform duration-300">
                          <FaChevronDown className="text-xs" />
                        </div>
                      </div>
                      <div className="hidden group-hover:block mt-2 w-[300px]">
                        <div className="border-t border-white/20 pt-3">
                          <p className="text-white/80 text-sm">
                            {content}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* First Image - Spans 8 columns, 9 rows */}
            <div className="col-span-8 row-span-9 flex flex-col items-center justify-start border border-gray-200 rounded-xl p-6">
              <div className="w-full aspect-[4/3] bg-white/5 rounded-xl overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <img src={imageSources1[activeImage1]} alt={imageAlts1[activeImage1]} className="w-full h-full object-contain" />
                </div>
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mt-4 mb-2">{imageHeaders1[activeImage1]}</h4>
              <p className="text-lg text-gray-700 mb-4 text-center font-medium">{imageSubheaders1[activeImage1]}</p>
              <div className="flex gap-2 mt-4">
                {imageSources1.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage1(idx)}
                    className={`p-2 rounded-full transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-400`}
                    aria-label={`View image ${idx + 1}`}
                  >
                    <span className={`block w-2 h-2 rounded-full ${activeImage1 === idx ? 'bg-gray-800 scale-125' : 'bg-gray-300'}`}></span>
                  </button>
                ))}
              </div>
            </div>

            {/* Second Image - Spans 8 columns, 9 rows */}
            <div className="col-span-8 row-span-9 flex flex-col items-center justify-start border border-gray-200 rounded-xl p-6">
              <div className="w-full aspect-[3/4] bg-white/5 rounded-xl overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <img src={imageSources2[activeImage2]} alt={imageAlts2[activeImage2]} className="w-full h-full object-contain" />
                </div>
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mt-4 mb-2">{imageHeaders2[activeImage2]}</h4>
              <p className="text-lg text-gray-700 mb-4 text-center font-medium">{imageSubheaders2[activeImage2]}</p>
              <div className="flex gap-2 mt-4">
                {imageSources2.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage2(idx)}
                    className={`p-2 rounded-full transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-400`}
                    aria-label={`View image ${idx + 1}`}
                  >
                    <span className={`block w-2 h-2 rounded-full ${activeImage2 === idx ? 'bg-gray-800 scale-125' : 'bg-gray-300'}`}></span>
                  </button>
                ))}
              </div>
            </div>

            {/* Second Card - Spans 8 columns, 6 rows */}
            <div className="col-span-8 row-span-6 rounded-xl p-6 text-white shadow-xl" style={{ background: colors.bgGradient }}>
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-white/10 p-3 rounded-lg">
                  {impactData[1].icon}
                </div>
                <h3 className="text-xl font-semibold">{impactData[1].title}</h3>
              </div>
              <div className="mb-6">
                <span className="text-lg font-medium">{impactData[1].value}</span>
              </div>
              <div className="flex flex-wrap gap-3">
                {impactData[1].bullets.map((bullet, bulletIdx) => {
                  const [header, content] = bullet.split(': ');
                  return (
                    <div
                      key={bulletIdx}
                      className="group w-fit bg-white/10 hover:bg-white/20 rounded-lg px-4 py-2 cursor-pointer transition-all duration-300"
                    >
                      <div className="flex items-center gap-2">
                        <p className="text-white text-sm font-medium">
                          {header}
                        </p>
                        <div className="text-white/60 group-hover:rotate-180 transition-transform duration-300">
                          <FaChevronDown className="text-xs" />
                        </div>
                      </div>
                      <div className="hidden group-hover:block mt-2 w-[300px]">
                        <div className="border-t border-white/20 pt-3">
                          <p className="text-white/80 text-sm">
                            {content}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Third Card - Spans 8 columns, 6 rows */}
            <div className="col-span-8 row-span-6 rounded-xl p-6 text-white shadow-xl" style={{ background: colors.bgGradient }}>
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-white/10 p-3 rounded-lg">
                  {impactData[2].icon}
                </div>
                <h3 className="text-xl font-semibold">{impactData[2].title}</h3>
              </div>
              <div className="mb-6">
                <span className="text-lg font-medium">{impactData[2].value}</span>
              </div>
              <div className="flex flex-wrap gap-3">
                {impactData[2].bullets.map((bullet, bulletIdx) => {
                  const [header, content] = bullet.split(': ');
                  return (
                    <div
                      key={bulletIdx}
                      className="group w-fit bg-white/10 hover:bg-white/20 rounded-lg px-4 py-2 cursor-pointer transition-all duration-300"
                    >
                      <div className="flex items-center gap-2">
                        <p className="text-white text-sm font-medium">
                          {header}
                        </p>
                        <div className="text-white/60 group-hover:rotate-180 transition-transform duration-300">
                          <FaChevronDown className="text-xs" />
                        </div>
                      </div>
                      <div className="hidden group-hover:block mt-2 w-[300px]">
                        <div className="border-t border-white/20 pt-3">
                          <p className="text-white/80 text-sm">
                            {content}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Third Image - Spans 8 columns, 9 rows */}
            <div className="col-span-8 row-span-9 flex flex-col items-center justify-start border border-gray-200 rounded-xl p-6">
              <div className="w-full aspect-[4/3] bg-white/5 rounded-xl overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <img src={imageSources3[activeImage3]} alt={imageAlts3[activeImage3]} className="w-full h-full object-contain" />
                </div>
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mt-4 mb-2">{imageHeaders3[activeImage3]}</h4>
              <p className="text-lg text-gray-700 mb-4 text-center font-medium">{imageSubheaders3[activeImage3]}</p>
              <div className="flex gap-2 mt-4">
                {imageSources3.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage3(idx)}
                    className={`p-2 rounded-full transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-400`}
                    aria-label={`View image ${idx + 1}`}
                  >
                    <span className={`block w-2 h-2 rounded-full ${activeImage3 === idx ? 'bg-gray-800 scale-125' : 'bg-gray-300'}`}></span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Call to Action Section */}
      <div className="w-full flex flex-col items-center mt-20 mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Try RUTH<sup>®</sup> For Free</h2>
        <div className="flex gap-6">
          <a href="/signup">
            <button className="px-8 py-3 rounded-full font-semibold text-white bg-indigo-600 hover:bg-indigo-700 transition-colors text-lg">
              Sign Up
            </button>
          </a>
          <a href="/learn-more">
            <button className="px-8 py-3 rounded-full font-semibold text-indigo-600 border-2 border-indigo-600 bg-white hover:bg-indigo-50 transition-colors text-lg">
              Learn More
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
