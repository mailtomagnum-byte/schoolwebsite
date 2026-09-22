import React from 'react';
import { motion } from 'motion/react';
import { X, Play, Sparkles, Volume2, ShieldCheck } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';
import { Crest3D } from './Crest3D';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenAdmissions: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({
  isOpen,
  onClose,
  onOpenAdmissions,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.93 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.93 }}
        className="relative w-full max-w-4xl bg-[#09111c] border-2 border-[#c5a059]/40 rounded-3xl shadow-[0_30px_90px_rgba(0,0,0,0.95)] overflow-hidden flex flex-col"
      >
        {/* Header */}
        <div className="p-4 sm:px-6 bg-[#060a12] border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Crest3D size="sm" showMotto={false} interactive={false} />
            <div>
              <h3 className="font-serif text-base sm:text-lg font-bold text-white">
                Indian School Muladha — Campus Heritage Documentary
              </h3>
              <p className="text-[10px] text-[#dfb875] tracking-widest uppercase font-display">
                Cinematic Overview & Scholastic Culture
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-white/70 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Canvas Simulation */}
        <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden group">
          <img
            src="/src/assets/images/isml_campus_hero_1790079262969.jpg"
            alt="Campus Overview"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover filter brightness-[0.7]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

          {/* Central Play Pulse Indicator */}
          <div className="relative z-10 flex flex-col items-center text-center p-6">
            <div className="w-20 h-20 rounded-full bg-[#c5a059] flex items-center justify-center text-[#09101d] shadow-[0_0_50px_rgba(197,160,89,0.7)] mb-4 cursor-pointer hover:scale-110 transition-transform">
              <Play className="w-8 h-8 fill-current ml-1" />
            </div>
            <h4 className="font-serif text-2xl font-bold text-white mb-1">
              "Where Heritage Meets Global Destiny"
            </h4>
            <p className="text-xs text-[#dfb875] font-sans tracking-wide">
              Official Indian School Muladha Campus Film (Duration: 3m 45s)
            </p>
          </div>

          {/* Timeline Bar simulation */}
          <div className="absolute bottom-4 left-6 right-6 flex items-center gap-3 text-xs text-white/70">
            <span>01:24</span>
            <div className="flex-1 h-1.5 rounded-full bg-white/20 overflow-hidden">
              <div className="w-1/3 h-full bg-[#c5a059]" />
            </div>
            <span>03:45</span>
            <Volume2 className="w-4 h-4 text-white" />
          </div>
        </div>

        {/* Footer with Admissions call */}
        <div className="p-6 bg-[#060a12] flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-white/70">
            <ShieldCheck className="w-4 h-4 text-[#c5a059]" />
            <span>Schedule an in-person guided tour with the Admissions Dean</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs font-semibold"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenAdmissions();
              }}
              className="px-5 py-2 rounded-xl bg-[#8b1528] hover:bg-[#a11a31] text-white text-xs font-bold uppercase tracking-wider shadow-lg"
            >
              Book In-Person Tour
            </button>
          </div>
        </div>

      </motion.div>
    </div>
  );
};
