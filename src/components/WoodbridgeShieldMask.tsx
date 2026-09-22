import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Compass, Video, ArrowDown } from 'lucide-react';

interface WoodbridgeShieldMaskProps {
  onOpenVirtualTour: () => void;
  onWatchVideo: () => void;
}

export const WoodbridgeShieldMask: React.FC<WoodbridgeShieldMaskProps> = ({
  onOpenVirtualTour,
  onWatchVideo,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll progress within this 200vh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Vertical red line extends downwards then fades
  const lineHeight = useTransform(scrollYProgress, [0, 0.25], ['0%', '100%']);
  const lineOpacity = useTransform(scrollYProgress, [0.25, 0.35], [1, 0]);

  // Shield mask scale: starts at 1, rapidly zooms to 60x creating the 3D fly-through portal
  const maskScale = useTransform(scrollYProgress, [0.15, 0.75], [1, 55]);
  const contentOpacity = useTransform(scrollYProgress, [0.55, 0.85], [0, 1]);
  const contentY = useTransform(scrollYProgress, [0.55, 0.85], [40, 0]);

  return (
    <div
      ref={containerRef}
      className="relative h-[220vh] bg-[#000F29] select-none"
    >
      {/* Pinned Sticky Window (100vh) */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        
        {/* Background Campus Panorama revealed through the Shield aperture */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/isml/main_gate.jpg"
            alt="Indian School Muladha Campus Main Gate"
            className="w-full h-full object-cover filter brightness-[0.88] contrast-[1.05]"
          />
          {/* Subtle gradient vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#000F29]/80 via-transparent to-[#000F29]/40" />
        </div>

        {/* Vertical Guided Scroll Indicator Line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-40 z-20 pointer-events-none flex flex-col items-center">
          <motion.div
            style={{ height: lineHeight, opacity: lineOpacity }}
            className="w-[2.5px] bg-[#EB0F2D] shadow-[0_0_10px_#EB0F2D] rounded-full"
          />
        </div>

        {/* 3D Shield Aperture Mask (Woodbridge School Signature Mask Effect) */}
        <motion.div
          style={{ scale: maskScale }}
          className="absolute inset-0 z-10 pointer-events-none flex items-center justify-center will-change-transform"
        >
          {/* Large SVG overlay with transparent shield cutout aperture */}
          <svg
            viewBox="0 0 4519 2542"
            preserveAspectRatio="xMidYMid slice"
            className="w-full h-full"
          >
            <path
              d="M4519,0 L4519,2541.9 L0,2541.9 L0,0 L4519,0 Z M2298.5,1228.6 L2223.1,1228.6 L2222.6,1267 C2222.6,1279.2 2226.5,1290.3 2232.7,1298.6 L2233.1,1299.2 L2233.4,1299.5 C2240.8,1308.8 2260,1315.4 2260.8,1315.7 C2261.6,1316 2282.5,1308.3 2289.3,1298.5 C2295.2,1290 2298.8,1278.8 2298.8,1266.5 L2298.5,1228.6 Z"
              fill="#000F29"
              fillRule="nonzero"
            />
          </svg>
        </motion.div>

        {/* Interactive Floating Card Overlay when fully zoomed into the campus */}
        <motion.div
          style={{ opacity: contentOpacity, y: contentY }}
          className="relative z-30 max-w-4xl mx-auto px-6 text-center text-white"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#000F29]/80 backdrop-blur-md border border-[#c5a059]/40 mb-6 shadow-xl">
            <span className="w-2 h-2 rounded-full bg-[#EB0F2D] animate-ping" />
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#c5a059]">
              Live 3D Campus Experience
            </span>
          </div>

          <h2 className="font-poppins text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight mb-4 drop-shadow-lg">
            Step Into Our 30-Acre Campus
          </h2>

          <p className="text-sm sm:text-lg text-white/90 max-w-2xl mx-auto mb-8 font-light leading-relaxed drop-shadow">
            Experience the state-of-the-art academic wings, robotics laboratories, sports oval, and lush green gardens of Indian School Muladha.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenVirtualTour}
              className="px-8 py-3.5 rounded-full bg-[#EB0F2D] hover:bg-[#c90b24] text-white text-xs font-bold uppercase tracking-[0.2em] shadow-xl hover:shadow-[0_0_35px_rgba(235,15,45,0.7)] transition-all flex items-center gap-2 transform hover:-translate-y-1"
            >
              <Compass className="w-4 h-4" />
              <span>Explore 360° Virtual Tour</span>
            </button>

            <button
              onClick={onWatchVideo}
              className="px-8 py-3.5 rounded-full bg-[#001028]/85 hover:bg-[#001028] text-white text-xs font-bold uppercase tracking-[0.2em] border border-white/20 transition-all flex items-center gap-2 transform hover:-translate-y-1 backdrop-blur-md"
            >
              <Video className="w-4 h-4 text-[#c5a059]" />
              <span>Watch Campus Film</span>
            </button>
          </div>
        </motion.div>

      </div>
    </div>
  );
};
