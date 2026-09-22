import React from 'react';
import { motion } from 'motion/react';
import { ChevronDown, ArrowDown } from 'lucide-react';

interface WoodbridgeHeroProps {
  onOpenAdmissions: () => void;
  onOpenProspectus: () => void;
}

export const WoodbridgeHero: React.FC<WoodbridgeHeroProps> = ({
  onOpenAdmissions,
  onOpenProspectus,
}) => {
  const scrollToStudentAnimation = () => {
    const el = document.getElementById('student-animation');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[90vh] lg:min-h-screen bg-[#001028] text-white flex flex-col justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* Background Subtle Geometric Watermark */}
      <div className="absolute inset-0 pointer-events-none opacity-5 flex items-center justify-center">
        <svg viewBox="0 0 100 120" className="w-[120vh] h-[120vh]">
          <path
            d="M10 10 H90 V70 C90 98 50 115 50 115 C50 115 10 98 10 70 Z"
            fill="none"
            stroke="#ffffff"
            strokeWidth="1.5"
          />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10 my-auto">
        <div className="flex flex-col items-start max-w-4xl">
          
          {/* Logo Hero Mark */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 flex items-center gap-3"
          >
            <div className="w-12 h-14 relative flex-shrink-0">
              <svg viewBox="0 0 100 120" className="w-full h-full drop-shadow-lg">
                <path
                  d="M10 10 H90 V70 C90 98 50 115 50 115 C50 115 10 98 10 70 Z"
                  fill="#000F29"
                  stroke="#EB0F2D"
                  strokeWidth="4"
                />
                <circle cx="50" cy="40" r="12" fill="#c5a059" />
                <circle cx="50" cy="40" r="8" fill="#000F29" />
                <text x="50" y="78" fill="#ffffff" fontSize="16" fontWeight="bold" textAnchor="middle" fontFamily="Poppins">
                  ISML
                </text>
              </svg>
            </div>
            <div className="border-l border-white/20 pl-3">
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#c5a059] block">
                Excellence in Oman Since 1991
              </span>
              <span className="text-xs text-white/70">
                CBSE Affiliation No: 6130009
              </span>
            </div>
          </motion.div>

          {/* Heading - Exact Woodbridge School Style */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-poppins text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.08] mb-8"
          >
            Discover Indian School <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/75">
              Muladha
            </span>
          </motion.h1>

          {/* Description & Quote Box */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 text-base sm:text-xl text-[#cbd5e1] font-normal leading-relaxed max-w-3xl mb-12"
          >
            <p>
              A leading co-educational day school in the Sultanate of Oman for proactive, responsible, free thinkers who go out into the world with the skills, knowledge and self-belief to become everything they are meant to be.
            </p>

            <div className="pt-2 border-l-2 border-[#EB0F2D] pl-4 sm:pl-6 text-white font-medium text-base sm:text-lg">
              <p className="font-bold text-white mb-1">
                “Every child at Indian School Muladha thrives.”
              </p>
              <span className="text-xs sm:text-sm text-[#c5a059] uppercase tracking-wider font-semibold">
                CBSE & Ministry of Education Institutional Review
              </span>
            </div>
          </motion.div>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 mb-8"
          >
            <button
              onClick={onOpenAdmissions}
              className="px-8 py-4 rounded-full bg-[#EB0F2D] hover:bg-[#c90b24] text-white text-xs font-bold uppercase tracking-[0.2em] shadow-xl hover:shadow-[0_0_35px_rgba(235,15,45,0.7)] transition-all transform hover:-translate-y-1"
            >
              Book an Individual Visit
            </button>
            <button
              onClick={onOpenProspectus}
              className="px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-[0.2em] border border-white/20 transition-all transform hover:-translate-y-1"
            >
              Download Prospectus
            </button>
          </motion.div>

        </div>
      </div>

      {/* Woodbridge Dual Animated Downward Arrows */}
      <div className="max-w-6xl mx-auto w-full relative z-10 flex justify-start pb-4">
        <button
          onClick={scrollToStudentAnimation}
          className="flex items-center gap-3 text-white/70 hover:text-white group cursor-pointer"
          aria-label="Scroll down to meet students"
        >
          <div className="relative flex flex-col items-center">
            {/* Arrow 1 */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
              className="w-5 h-5 flex items-center justify-center text-[#EB0F2D]"
            >
              <ChevronDown className="w-5 h-5 stroke-[2.5]" />
            </motion.div>
            {/* Arrow 2 */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut", delay: 0.2 }}
              className="w-5 h-5 -mt-3 flex items-center justify-center text-white"
            >
              <ChevronDown className="w-5 h-5 stroke-[2.5]" />
            </motion.div>
          </div>
          <span className="text-xs uppercase tracking-[0.2em] font-bold text-white/60 group-hover:text-white transition-colors">
            Scroll to Explore
          </span>
        </button>
      </div>

    </section>
  );
};
