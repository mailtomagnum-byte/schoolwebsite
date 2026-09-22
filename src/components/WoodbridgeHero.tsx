import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { ChevronDown, Video, Eye, ShieldCheck, Award, FileText, Users, Play, ArrowDown } from 'lucide-react';
import { InternalPageTab } from './InternalPageViewer';

interface WoodbridgeHeroProps {
  onOpenAdmissions: () => void;
  onOpenProspectus: () => void;
  onOpenInternalPage?: (tab: InternalPageTab) => void;
  onWatchVideo?: () => void;
}

export const WoodbridgeHero: React.FC<WoodbridgeHeroProps> = ({
  onOpenAdmissions,
  onOpenProspectus,
  onOpenInternalPage,
  onWatchVideo
}) => {
  const [isPlayingVideo, setIsPlayingVideo] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlayingVideo) {
        videoRef.current.pause();
        setIsPlayingVideo(false);
      } else {
        videoRef.current.play();
        setIsPlayingVideo(true);
      }
    }
  };

  const scrollToCampusPortal = () => {
    const el = document.getElementById('campus-portal') || document.getElementById('student-animation');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[95vh] lg:min-h-screen bg-[#001028] text-white flex flex-col justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden [contain:paint]">
      
      {/* Background AI-Generated Cinematic Campus Tour Video */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <video
          ref={videoRef}
          src="/assets/isml/campus_tour_bg.mp4"
          poster="/assets/isml/campus_hero_entrance.jpg"
          autoPlay
          loop
          muted
          playsInline
          className={`w-full h-full object-cover transition-opacity duration-700 ${
            isPlayingVideo ? 'opacity-40' : 'opacity-20'
          }`}
          style={{ transform: 'translateZ(0)' }}
        />
        {/* Cinematic Multi-stop Vignette & Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#001028] via-[#001028]/85 to-[#001028]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#001028] via-transparent to-[#001028]/70" />
      </div>

      {/* Floating Ambient Controls: Video / Still toggle */}
      <div className="absolute top-28 right-4 sm:right-8 z-20 flex items-center gap-2">
        <button
          onClick={toggleVideo}
          className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/40 hover:bg-black/70 backdrop-blur-md border border-white/15 text-white/80 hover:text-white text-[11px] font-medium transition-all"
          title={isPlayingVideo ? "Pause Background Tour" : "Resume Background Tour"}
        >
          <Video className={`w-3.5 h-3.5 ${isPlayingVideo ? 'text-emerald-400 animate-pulse' : 'text-white/40'}`} />
          <span className="hidden sm:inline">
            {isPlayingVideo ? 'Campus Tour Active' : 'Background Paused'}
          </span>
        </button>

        {onWatchVideo && (
          <button
            onClick={onWatchVideo}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#EB0F2D] hover:bg-[#c90b24] text-white text-[11px] font-bold tracking-wider uppercase transition-all shadow-lg shadow-[#EB0F2D]/30"
          >
            <Play className="w-3 h-3 fill-current" />
            <span className="hidden sm:inline">Watch Film</span>
          </button>
        )}
      </div>

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
            className="mb-8 flex items-center gap-4"
          >
            <div className="w-14 h-14 relative flex-shrink-0 bg-white/10 rounded-2xl p-1.5 border border-white/20 shadow-lg">
              <img
                src="/assets/isml/crest.png"
                alt="Indian School Muladha Crest"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="border-l border-white/20 pl-4">
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#c5a059] block">
                Excellence in Oman Since 1991
              </span>
              <span className="text-xs text-white/70">
                CBSE Affiliation No: 6130007 • School Code: 90170
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
            className="space-y-6 text-base sm:text-xl text-[#cbd5e1] font-normal leading-relaxed max-w-3xl mb-8"
          >
            <p>
              A leading co-educational day school in the Sultanate of Oman for proactive, responsible, free thinkers who go out into the world with the skills, knowledge and self-belief to become everything they are meant to be.
            </p>

            <div className="pt-2 border-l-2 border-[#EB0F2D] pl-4 sm:pl-6 text-white font-medium text-base sm:text-lg">
              <p className="font-bold text-white mb-1">
                “Every child at Indian School Muladha thrives.”
              </p>
              <span className="text-xs sm:text-sm text-[#c5a059] uppercase tracking-wider font-semibold">
                CBSE & Ministry of Education Institutional Review • 30-Acre Campus
              </span>
            </div>
          </motion.div>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 mb-6"
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

          {/* Quick Deep-Dive Chips into Verified Original Internal Pages */}
          {onOpenInternalPage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
              className="flex flex-wrap items-center gap-2 pt-2 border-t border-white/10"
            >
              <span className="text-[10px] uppercase font-bold tracking-widest text-white/40 mr-1">
                Verified Data:
              </span>
              <button
                onClick={() => onOpenInternalPage('mandatory-disclosure')}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-white/80 hover:text-white text-xs border border-white/10 transition-colors"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-[#c5a059]" />
                <span>CBSE SARAS Disclosure</span>
              </button>
              <button
                onClick={() => onOpenInternalPage('faculty')}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-white/80 hover:text-white text-xs border border-white/10 transition-colors"
              >
                <Users className="w-3.5 h-3.5 text-[#EB0F2D]" />
                <span>94 Faculty Members</span>
              </button>
              <button
                onClick={() => onOpenInternalPage('fee-structure')}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-white/80 hover:text-white text-xs border border-white/10 transition-colors"
              >
                <FileText className="w-3.5 h-3.5 text-[#c5a059]" />
                <span>2026-27 Fee Structure</span>
              </button>
              <button
                onClick={() => onOpenInternalPage('results')}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-white/80 hover:text-white text-xs border border-white/10 transition-colors"
              >
                <Award className="w-3.5 h-3.5 text-emerald-400" />
                <span>100% Board Results</span>
              </button>
            </motion.div>
          )}

        </div>
      </div>

      {/* Woodbridge Dual Animated Downward Arrows */}
      <div className="max-w-6xl mx-auto w-full relative z-10 flex justify-start pb-4">
        <button
          onClick={scrollToCampusPortal}
          className="flex items-center gap-3 text-white/70 hover:text-white group cursor-pointer"
          aria-label="Scroll down to explore campus"
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
