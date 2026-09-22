import React, { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';

interface Crest3DProps {
  size?: 'sm' | 'md' | 'lg' | 'hero';
  interactive?: boolean;
  className?: string;
  showMotto?: boolean;
}

export const Crest3D: React.FC<Crest3DProps> = ({
  size = 'md',
  interactive = true,
  className = '',
  showMotto = true
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // Mouse tilt tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [18, -18]), {
    damping: 20,
    stiffness: 180,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-18, 18]), {
    damping: 20,
    stiffness: 180,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!interactive) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  const sizeClasses = {
    sm: 'w-10 h-10',
    md: 'w-16 h-16',
    lg: 'w-24 h-24',
    hero: 'w-32 h-32 md:w-40 md:h-40'
  };

  return (
    <div
      className={`relative inline-flex flex-col items-center select-none perspective-800 ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        style={{
          rotateX: interactive ? rotateX : 0,
          rotateY: interactive ? rotateY : 0,
          transformStyle: 'preserve-3d',
        }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
        className={`relative ${sizeClasses[size]} rounded-2xl flex items-center justify-center p-1 cursor-pointer`}
      >
        {/* Ambient Gold Aura */}
        <div
          className={`absolute inset-0 rounded-2xl bg-gradient-to-tr from-[#c5a059]/30 via-[#dfb875]/20 to-transparent blur-md transition-opacity duration-500 ${
            isHovered ? 'opacity-100 scale-110' : 'opacity-60'
          }`}
        />

        {/* Heraldic Shield Container */}
        <div className="relative w-full h-full rounded-2xl bg-gradient-to-b from-[#132238] via-[#0b1424] to-[#070d17] border border-[#c5a059]/40 shadow-2xl p-2 flex items-center justify-center overflow-hidden preserve-3d">
          
          {/* Subtle light sheen reflection */}
          <div
            className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none transition-transform duration-700"
            style={{
              transform: isHovered ? 'translateY(-10%) rotate(25deg)' : 'translateY(100%) rotate(25deg)'
            }}
          />

          {/* SVG Heraldic Insignia */}
          <svg
            viewBox="0 0 120 140"
            className="w-full h-full text-[#c5a059] filter drop-shadow-[0_2px_8px_rgba(197,160,89,0.35)]"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Outer Shield Border */}
            <path
              d="M60 6 L108 22 V65 C108 98 60 132 60 132 C60 132 12 98 12 65 V22 L60 6 Z"
              stroke="currentColor"
              strokeWidth="2.5"
              fill="rgba(11, 20, 36, 0.85)"
            />
            
            {/* Inner Shield Inset */}
            <path
              d="M60 13 L101 27 V63 C101 92 60 122 60 122 C60 122 19 92 19 63 V27 L60 13 Z"
              stroke="#dfb875"
              strokeWidth="1"
              strokeDasharray="2 1"
              fill="none"
              opacity="0.8"
            />

            {/* Sunburst Rays of Wisdom */}
            <g opacity="0.6">
              <line x1="60" y1="38" x2="60" y2="28" stroke="#dfb875" strokeWidth="1.5" />
              <line x1="60" y1="38" x2="67" y2="30" stroke="#dfb875" strokeWidth="1.2" />
              <line x1="60" y1="38" x2="53" y2="30" stroke="#dfb875" strokeWidth="1.2" />
              <line x1="60" y1="38" x2="72" y2="36" stroke="#dfb875" strokeWidth="1.2" />
              <line x1="60" y1="38" x2="48" y2="36" stroke="#dfb875" strokeWidth="1.2" />
            </g>

            {/* Eternal Lamp of Knowledge (Deepam) */}
            <path
              d="M48 48 C52 44 68 44 72 48 C72 52 64 56 60 56 C56 56 48 52 48 48 Z"
              fill="currentColor"
            />
            <path
              d="M60 36 C63 40 64 43 60 46 C56 43 57 40 60 36 Z"
              fill="#f59e0b"
            />
            {/* Lamp Base Stem */}
            <path
              d="M57 56 H63 V64 H57 V56 Z M52 64 H68 V67 H52 V64 Z"
              fill="currentColor"
            />

            {/* Open Book of Universal Truth */}
            <path
              d="M32 72 C42 69 54 70 60 74 C66 70 78 69 88 72 V92 C78 89 66 90 60 94 C54 90 42 89 32 92 V72 Z"
              fill="rgba(197, 160, 89, 0.15)"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              d="M60 74 V94"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            {/* Book Pages Lines */}
            <line x1="38" y1="78" x2="54" y2="79" stroke="#dfb875" strokeWidth="1" opacity="0.7" />
            <line x1="38" y1="83" x2="54" y2="84" stroke="#dfb875" strokeWidth="1" opacity="0.7" />
            <line x1="66" y1="79" x2="82" y2="78" stroke="#dfb875" strokeWidth="1" opacity="0.7" />
            <line x1="66" y1="84" x2="82" y2="83" stroke="#dfb875" strokeWidth="1" opacity="0.7" />

            {/* Omani-Indian Friendship Laurel / Palm Frond Sprigs */}
            <path
              d="M30 60 C26 72 26 84 32 98"
              stroke="#dfb875"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M90 60 C94 72 94 84 88 98"
              stroke="#dfb875"
              strokeWidth="1.5"
              strokeLinecap="round"
            />

            {/* Foundation Year: 1991 */}
            <text
              x="60"
              y="110"
              textAnchor="middle"
              fill="#dfb875"
              fontSize="7"
              fontWeight="bold"
              fontFamily="sans-serif"
              letterSpacing="1"
            >
              ESTD 1991
            </text>

            {/* ISML Monogram Banner */}
            <rect x="36" y="116" width="48" height="11" rx="2" fill="#8b1528" stroke="#c5a059" strokeWidth="1" />
            <text
              x="60"
              y="124.5"
              textAnchor="middle"
              fill="#ffffff"
              fontSize="7.5"
              fontWeight="800"
              fontFamily="serif"
              letterSpacing="1.5"
            >
              ISML
            </text>
          </svg>
        </div>
      </motion.div>

      {showMotto && size !== 'sm' && (
        <div className="mt-2 text-center">
          <p className="text-[10px] tracking-[0.25em] font-medium uppercase text-[#c5a059]/90 font-display">
            Tamaso Ma Jyotirgamaya
          </p>
        </div>
      )}
    </div>
  );
};
