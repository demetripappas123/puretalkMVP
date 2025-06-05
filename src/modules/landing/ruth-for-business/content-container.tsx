'use client';

import { useState } from 'react';
import { FaLink, FaChartLine, FaUsers, FaRocket, FaChevronDown, FaShopify, FaWordpress, FaGoogle, FaMagento, FaCalendarAlt } from 'react-icons/fa';
import { SiTwilio, SiWoocommerce, SiBigcommerce, SiCalendly } from 'react-icons/si';
import { colors } from '@/utils/colors';

export default function ContentContainer() {
  const [carouselIdx, setCarouselIdx] = useState(0);
  const carouselImages = [
    {
      src: '/landing/how-it-works-image-1.svg',
      header: 'Voice AI Assistants',
      subheader: 'Optimize Sales, CX and Customer Service with our Humanized AI(r) Assistants',
    },
    {
      src: '/landing/image-4.svg',
      header: 'Create with our TTS',
      subheader: 'Create Content with our Proprietary TTS Software',
    },
  ];

  return (
    <div className="w-full bg-[#18181b] flex flex-col gap-8 items-center pt-12 relative overflow-visible">
      {/* Top Card (Full Width) */}
      <div className="w-full max-w-6xl bg-[#23232a] rounded-2xl p-10 flex flex-col md:flex-row justify-between items-center gap-8 shadow-xl ml-32 mr-32">
        {/* Text Section */}
        <div className="flex-1 flex flex-col gap-4">
          <span className="text-xs text-indigo-300 tracking-widest font-semibold uppercase">DUMMY HEADER</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Streamlined Customer Acquisition & CX</h2>
          <p className="text-gray-300 text-lg">Never miss a lead—24/7 reception, manage complex transfers, integrate with your CRM, and deliver intelligent, adaptive service with Humanized AI. Use our patented TTS for branded outreach and content creation.</p>
          {/* Mini Bullets for First Card */}
          <div className="flex flex-wrap gap-2 mt-auto mb-2">
            {[
              'Omnichannel AI',
              'Humanized Conversational AI®',
              'Multilingual & Localized Voices',
              'Quick Bots™ Templates',
              'Sentiment-Aware Responses',
              'Live Call Transfer',
            ].map((item) => (
              <span key={item} className="rounded-full bg-[#23233a] text-xs text-indigo-200 px-3 py-1 font-semibold whitespace-nowrap border border-indigo-700/30">{item}</span>
            ))}
          </div>
          <button className="mt-4 w-fit px-6 py-2 rounded-full bg-[#23232a] border border-gray-700 text-white font-semibold hover:bg-[#282834] transition">Learn More &rarr;</button>
        </div>
        {/* Carousel Section */}
        <div className="flex-1 flex flex-col items-center">
          <div className="flex items-center justify-center mb-4">
            <img src={carouselImages[carouselIdx].src} alt="carousel" className="block max-w-full max-h-[300px]" />
          </div>
          <div className="text-center mb-2">
            <div className="text-lg font-semibold text-white">{carouselImages[carouselIdx].header}</div>
            <div className="text-xs text-gray-400 mt-1">{carouselImages[carouselIdx].subheader}</div>
          </div>
          <div className="flex gap-2">
            {carouselImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCarouselIdx(idx)}
                className={`w-3 h-3 rounded-full ${carouselIdx === idx ? 'bg-indigo-400' : 'bg-gray-700'} transition`}
                aria-label={`Go to image ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Cards (2 side by side) */}
      <div className="w-full max-w-6xl flex flex-col md:flex-row gap-8 ml-32 mr-32">
        {/* Left Card */}
        <div className="flex-1 bg-[#23232a] rounded-2xl p-10 flex flex-col justify-between shadow-xl min-h-[320px]">
          {/* Image Holder */}
          <div className="flex flex-col items-center justify-center mb-6 w-full">
            <img src="/landing/dash.png" alt="dashboard" className="block max-w-[520px] w-auto h-auto rounded-lg bg-[#18181b]" />
            {/* Marquee 1 */}
            <div className="w-full flex justify-center">
              <div className="max-w-[520px] w-full overflow-hidden py-2">
                <div className="flex gap-12 animate-marquee whitespace-nowrap items-center text-white text-lg">
                  <span className="flex items-center gap-2"><SiTwilio className="text-2xl text-[#F22F46]" />Twilio</span>
                  <span className="flex items-center gap-2"><SiCalendly className="text-2xl text-[#006BFF]" />Calendly</span>
                  <span className="flex items-center gap-2"><FaShopify className="text-2xl text-[#96BF48]" />Shopify</span>
                  <span className="flex items-center gap-2"><FaCalendarAlt className="text-2xl text-[#E23744]" />OpenTable</span>
                  <span className="flex items-center gap-2"><FaWordpress className="text-2xl text-[#21759B]" />Wordpress</span>
                  <span className="flex items-center gap-2"><FaGoogle className="text-2xl text-[#4285F4]" />Google Res</span>
                  <span className="flex items-center gap-2"><span className="inline-block w-6 h-6 bg-gradient-to-br from-indigo-400 to-pink-400 rounded-full" />Digital Humans</span>
                  <span className="flex items-center gap-2"><FaMagento className="text-2xl text-[#F26322]" />Magento</span>
                  <span className="flex items-center gap-2"><SiWoocommerce className="text-2xl text-[#96588A]" />Woocommerce</span>
                  <span className="flex items-center gap-2"><SiBigcommerce className="text-2xl text-[#121212]" />Bigcommerce</span>
                </div>
              </div>
            </div>
            {/* Marquee 2 (reverse) */}
            <div className="w-full flex justify-center">
              <div className="max-w-[520px] w-full overflow-hidden py-2">
                <div className="flex gap-12 animate-marquee-reverse whitespace-nowrap items-center text-white text-lg">
                  <span className="flex items-center gap-2"><SiTwilio className="text-2xl text-[#F22F46]" />Twilio</span>
                  <span className="flex items-center gap-2"><SiCalendly className="text-2xl text-[#006BFF]" />Calendly</span>
                  <span className="flex items-center gap-2"><FaShopify className="text-2xl text-[#96BF48]" />Shopify</span>
                  <span className="flex items-center gap-2"><FaCalendarAlt className="text-2xl text-[#E23744]" />OpenTable</span>
                  <span className="flex items-center gap-2"><FaWordpress className="text-2xl text-[#21759B]" />Wordpress</span>
                  <span className="flex items-center gap-2"><FaGoogle className="text-2xl text-[#4285F4]" />Google Res</span>
                  <span className="flex items-center gap-2"><span className="inline-block w-6 h-6 bg-gradient-to-br from-indigo-400 to-pink-400 rounded-full" />Digital Humans</span>
                  <span className="flex items-center gap-2"><FaMagento className="text-2xl text-[#F26322]" />Magento</span>
                  <span className="flex items-center gap-2"><SiWoocommerce className="text-2xl text-[#96588A]" />Woocommerce</span>
                  <span className="flex items-center gap-2"><SiBigcommerce className="text-2xl text-[#121212]" />Bigcommerce</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col justify-between">
            <div className="flex flex-col flex-grow">
              <span className="text-xs text-indigo-300 tracking-widest font-semibold uppercase">DUMMY HEADER</span>
              <h3 className="text-2xl font-bold text-white mt-2">Scalable and Deployable</h3>
              <p className="text-gray-300 mt-4">Scale with a low-latency, enterprise-grade platform that integrates with existing SIP/VoIP systems, CRMs, and knowledge bases.</p>
              <p className="text-gray-400 text-base">Manage batch calling, campaign testing, and deployment through a secure dashboard — fully compliant with HIPAA, GDPR, and SOC 2.</p>
              {/* Mini Bullets for Second Card */}
              <div className="flex flex-wrap gap-2 mt-auto mb-2">
                {[
                  'RUTH Connect™ Dashboard',
                  'Campaign Manager',
                  'Knowledge Base Sync',
                  'Multimodal Assistants',
                  'Low Code / No Code Builder',
                  'Bring Your Own Carrier (SIP)',
                ].map((item) => (
                  <span key={item} className="rounded-full bg-[#23233a] text-xs text-indigo-200 px-3 py-1 font-semibold whitespace-nowrap border border-indigo-700/30">{item}</span>
                ))}
              </div>
            </div>
            <div className="flex-shrink-0">
              <button className="mt-8 w-fit px-6 py-2 rounded-full bg-[#23232a] border border-gray-700 text-white font-semibold hover:bg-[#282834] transition">Learn More &rarr;</button>
            </div>
          </div>
        </div>
        {/* Right Card */}
        <div className="flex-1 bg-[#23232a] rounded-2xl p-10 flex flex-col justify-between shadow-xl min-h-[320px] max-w-full break-words">
          {/* Image Holder */}
          <div className="flex items-center justify-center mb-6 w-full">
            <img src="/landing/ruth-personalized-1.png" alt="integration" className="block max-w-full w-full h-auto rounded-lg bg-[#18181b]" />
          </div>
          <div className="flex-1 flex flex-col justify-between">
            <div className="flex flex-col flex-grow">
              <span className="text-xs text-indigo-300 tracking-widest font-semibold uppercase">DUMMY HEADER</span>
              <h3 className="text-2xl font-bold text-white mt-2">Automated Workflows</h3>
              <p className="text-gray-300 mt-4">Streamline internal ops and boost team productivity with smart automation.</p>
              {/* Mini Bullets for Third Card */}
              <div className="flex flex-wrap gap-2 mt-auto mb-2">
                {[
                  'Orchestration Engine',
                  'Context Awareness',
                  'Scheduling, Reminders & Confirmations',
                  'Smart Feedback Loops',
                  'Internal Ops Automation',
                  'Voice + Chat Coordination',
                  'App integrations',
                ].map((item) => (
                  <span key={item} className="rounded-full bg-[#23233a] text-xs text-indigo-200 px-3 py-1 font-semibold whitespace-nowrap border border-indigo-700/30">{item}</span>
                ))}
              </div>
            </div>
            <div className="flex-shrink-0">
              <button className="mt-8 w-fit px-6 py-2 rounded-full bg-[#23232a] border border-gray-700 text-white font-semibold hover:bg-[#282834] transition">Learn More &rarr;</button>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee animation style */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
        .animate-marquee {
          display: flex;
          animation: marquee 30s linear infinite;
        }
        .animate-marquee-reverse {
          display: flex;
          animation: marquee-reverse 30s linear infinite;
        }
      `}</style>
    </div>
  );
}

