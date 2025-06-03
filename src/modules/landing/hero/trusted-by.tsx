'use client';

import {
  FaRocket, FaLightbulb, FaChartLine, FaUsers,
  FaGlobe, FaShieldAlt, FaBrain, FaRobot,
  FaApple, FaAndroid, FaCloud, FaCogs,
  FaDatabase, FaEnvelope, FaHeart, FaStar
} from 'react-icons/fa';

export default function TrustedBy() {
  const companies = [
    { icon: <FaRocket className="text-2xl" />, name: "TaiLopez" },
    { icon: <FaLightbulb className="text-2xl" />, name: "TaiLopez" },
    { icon: <FaChartLine className="text-2xl" />, name: "TaiLopez" },
    { icon: <FaUsers className="text-2xl" />, name: "TaiLopez" },
    { icon: <FaGlobe className="text-2xl" />, name: "TaiLopez" },
    { icon: <FaShieldAlt className="text-2xl" />, name: "TaiLopez" },
    { icon: <FaBrain className="text-2xl" />, name: "TaiLopez" },
    { icon: <FaRobot className="text-2xl" />, name: "TaiLopez" },
    { icon: <FaApple className="text-2xl" />, name: "TaiLopez" },
    { icon: <FaAndroid className="text-2xl" />, name: "TaiLopez" },
    { icon: <FaCloud className="text-2xl" />, name: "TaiLopez" },
    { icon: <FaCogs className="text-2xl" />, name: "TaiLopez" },
    { icon: <FaDatabase className="text-2xl" />, name: "TaiLopez" },
    { icon: <FaEnvelope className="text-2xl" />, name: "TaiLopez" },
    { icon: <FaHeart className="text-2xl" />, name: "TaiLopez" },
    { icon: <FaStar className="text-2xl" />, name: "TaiLopez" },
  ];

  return (
    <div className="w-full max-w-[1200px] mx-auto mt-8 mb-4">
      <div className="text-center mb-8">
        <h3 className="text-lg font-medium text-gray-600">Trusted By</h3>
      </div>
      <div className="grid grid-cols-8 gap-8">
        {companies.map((company, index) => (
          <div key={index} className="flex flex-col items-center justify-center gap-2">
            <div className="text-gray-400 hover:text-gray-600 transition-colors">
              {company.icon}
            </div>
            <span className="text-sm text-gray-500">{company.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
} 