import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { useCrm } from '../context/CrmContext';

interface WoodbridgeStudentAnimationProps {
  onOpenAdmissions: () => void;
}

export const WoodbridgeStudentAnimation: React.FC<WoodbridgeStudentAnimationProps> = ({
  onOpenAdmissions,
}) => {
  const { studentPersonas } = useCrm();
  const [currentIndex, setCurrentIndex] = useState(0);

  const activeStudent = studentPersonas[currentIndex] || studentPersonas[0];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % studentPersonas.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + studentPersonas.length) % studentPersonas.length);
  };

  // Optional subtle auto-rotation if untouched
  useEffect(() => {
    if (studentPersonas.length === 0) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % studentPersonas.length);
    }, 6500);
    return () => clearInterval(timer);
  }, [studentPersonas.length]);

  if (!activeStudent) return null;

  return (
    <section
      id="student-animation"
      className="relative min-h-[95vh] lg:min-h-screen bg-[#001028] text-white flex flex-col justify-between overflow-hidden"
    >
      {/* Background Image Carousel with 3D Depth Zoom */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStudent.id}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0"
          >
            <img
              src={activeStudent.image}
              alt={activeStudent.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover filter brightness-[0.75] contrast-[1.05]"
            />
            {/* Cinematic Gradient Overlays to preserve extreme readability of text */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#001028] via-[#001028]/40 to-[#001028]/60" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#001028]/90 via-[#001028]/50 to-transparent" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Floating Content Block (Top & Middle) - Exact Woodbridge Layout */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28 flex-1 flex flex-col justify-center">
        
        {/* Pre-title & Title */}
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs sm:text-sm font-bold uppercase tracking-[0.3em] text-[#c5a059] mb-2 font-poppins"
          >
            Meet
          </motion.div>

          <h2 className="font-poppins text-5xl sm:text-7xl lg:text-8xl font-black text-white tracking-tight mb-2">
            {activeStudent.name}
          </h2>

          {/* Dynamic Stylised Script Sub-Title in Typekit zooja-pro / Caveat */}
          <div className="min-h-[70px] sm:min-h-[90px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStudent.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="font-stylised text-4xl sm:text-6xl text-[#EB0F2D] drop-shadow-[0_2px_15px_rgba(235,15,45,0.4)]"
              >
                {activeStudent.title}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Quote & Story */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStudent.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="mt-4 max-w-lg space-y-3"
            >
              <p className="text-sm sm:text-base text-white/90 leading-relaxed font-light">
                "{activeStudent.quote}"
              </p>
              <p className="text-xs text-[#c5a059] uppercase tracking-wider font-semibold">
                {activeStudent.description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>

      {/* Bottom Controls & Persona Selector Chips */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-t border-white/10 pt-6">
        
        {/* Persona Selectors (Tab buttons) */}
        <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-2 sm:pb-0">
          {studentPersonas.map((persona, idx) => (
            <button
              key={persona.id}
              onClick={() => setCurrentIndex(idx)}
              className={`px-4 sm:px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap ${
                currentIndex === idx
                  ? 'bg-[#EB0F2D] text-white shadow-[0_0_20px_rgba(235,15,45,0.7)] scale-105'
                  : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
              }`}
            >
              <span>{persona.title}</span>
            </button>
          ))}
        </div>

        {/* Navigation Arrows & Action CTA */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-all transform hover:scale-105 active:scale-95"
              aria-label="Previous Student Story"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-all transform hover:scale-105 active:scale-95"
              aria-label="Next Student Story"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <button
            onClick={onOpenAdmissions}
            className="px-6 py-3 rounded-full bg-white text-[#001028] hover:bg-[#c5a059] hover:text-white font-bold text-xs uppercase tracking-wider transition-all shadow-lg"
          >
            Start Your Journey
          </button>
        </div>

      </div>

    </section>
  );
};
