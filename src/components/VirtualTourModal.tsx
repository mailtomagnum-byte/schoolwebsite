import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  RotateCw, 
  RotateCcw, 
  ZoomIn, 
  ZoomOut, 
  Maximize2, 
  Compass, 
  Volume2, 
  VolumeX, 
  MapPin, 
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { CAMPUS_HOTSPOTS } from '../data/schoolData';
import { CampusHotspot } from '../types';

interface VirtualTourModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialHotspotId?: string;
}

export const VirtualTourModal: React.FC<VirtualTourModalProps> = ({
  isOpen,
  onClose,
  initialHotspotId,
}) => {
  const [currentHotspotId, setCurrentHotspotId] = useState<string>(
    initialHotspotId || CAMPUS_HOTSPOTS[0].id
  );
  const [panOffset, setPanOffset] = useState<number>(0);
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [isNarrating, setIsNarrating] = useState<boolean>(false);

  const activeHotspot: CampusHotspot = 
    CAMPUS_HOTSPOTS.find((h) => h.id === currentHotspotId) || CAMPUS_HOTSPOTS[0];

  if (!isOpen) return null;

  const handlePan = (direction: 'left' | 'right') => {
    setPanOffset((prev) => {
      const delta = direction === 'left' ? -15 : 15;
      return Math.max(-45, Math.min(45, prev + delta));
    });
  };

  const handleZoom = (type: 'in' | 'out') => {
    setZoomLevel((prev) => {
      const next = type === 'in' ? prev + 0.2 : prev - 0.2;
      return Math.max(1, Math.min(1.8, next));
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 bg-black/90 backdrop-blur-lg">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="relative w-full max-w-6xl h-[92vh] bg-[#070c16] border border-[#c5a059]/40 rounded-3xl shadow-[0_30px_90px_rgba(0,0,0,0.95)] overflow-hidden flex flex-col"
      >
        {/* Top Control Bar */}
        <div className="px-6 py-4 bg-[#050810] border-b border-white/10 flex items-center justify-between z-20">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#c5a059]/20 border border-[#c5a059]/40 flex items-center justify-center text-[#dfb875]">
              <Compass className="w-4 h-4 animate-spin-slow" />
            </div>
            <div>
              <h3 className="font-serif text-base sm:text-lg font-bold text-white">
                360° Immersive Campus Exploration
              </h3>
              <p className="text-[10px] text-[#dfb875] tracking-widest uppercase font-display">
                Indian School Muladha • Virtual Panorama
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Audio narration toggle */}
            <button
              onClick={() => setIsNarrating(!isNarrating)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white/80 text-xs border border-white/10"
              title="Toggle audio guide commentary"
            >
              {isNarrating ? (
                <>
                  <Volume2 className="w-3.5 h-3.5 text-[#c5a059] animate-pulse" />
                  <span className="text-[#dfb875] hidden sm:inline">Audio Guide Active</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-3.5 h-3.5 text-white/50" />
                  <span className="text-white/60 hidden sm:inline">Audio Guide</span>
                </>
              )}
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-white/70 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Panoramic Viewer Canvas */}
        <div className="relative flex-1 overflow-hidden bg-black select-none">
          
          {/* Panoramic Image with Simulated Pan & Zoom */}
          <motion.div
            animate={{
              x: `${panOffset}%`,
              scale: zoomLevel,
            }}
            transition={{ type: 'spring', damping: 20, stiffness: 120 }}
            className="w-[150%] h-full origin-center relative cursor-grab active:cursor-grabbing"
            style={{ left: '-25%' }}
          >
            <img
              src={activeHotspot.image}
              alt={activeHotspot.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover filter brightness-[0.9] contrast-[1.05]"
            />
            {/* Subtle atmospheric vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#070c16]/80 via-transparent to-black/30 pointer-events-none" />
          </motion.div>

          {/* Viewer Floating Controls */}
          <div className="absolute bottom-6 left-6 z-20 flex items-center gap-2 bg-black/75 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/15 shadow-2xl">
            <button
              onClick={() => handlePan('right')}
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs"
              title="Pan Left"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
            <button
              onClick={() => handlePan('left')}
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs"
              title="Pan Right"
            >
              <RotateCw className="w-4 h-4" />
            </button>
            <div className="w-px h-5 bg-white/20 mx-1" />
            <button
              onClick={() => handleZoom('in')}
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs"
              title="Zoom In"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleZoom('out')}
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs"
              title="Zoom Out"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <button
              onClick={() => {
                setPanOffset(0);
                setZoomLevel(1);
              }}
              className="px-2.5 py-1.5 rounded-lg bg-[#c5a059] text-[#09101d] text-xs font-bold"
            >
              Reset
            </button>
          </div>

          {/* Current Hotspot Info Floating Overlay */}
          <div className="absolute top-6 left-6 z-20 max-w-sm p-4 sm:p-5 rounded-2xl bg-[#091220]/90 backdrop-blur-md border border-[#c5a059]/40 shadow-2xl text-white">
            <span className="px-2.5 py-0.5 rounded-full bg-[#c5a059]/20 text-[#dfb875] text-[10px] font-bold uppercase tracking-wider mb-2 inline-block">
              {activeHotspot.category}
            </span>
            <h4 className="font-serif text-lg sm:text-xl font-bold mb-1">
              {activeHotspot.name}
            </h4>
            <p className="text-xs text-[#cbd5e1] font-light leading-relaxed mb-3">
              {activeHotspot.description}
            </p>
            {activeHotspot.quote && (
              <div className="text-[11px] italic text-[#dfb875] border-l border-[#c5a059] pl-2 mb-2">
                "{activeHotspot.quote}"
              </div>
            )}
          </div>

          {/* Audio narration guide box if active */}
          {isNarrating && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute top-6 right-6 z-20 max-w-xs p-4 rounded-2xl bg-[#132238]/95 backdrop-blur-md border border-[#c5a059] text-white shadow-2xl"
            >
              <div className="flex items-center gap-2 text-xs font-bold text-[#dfb875] mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Docent Commentary</span>
              </div>
              <p className="text-xs text-white/90 leading-relaxed font-light">
                "You are viewing {activeHotspot.name}. This space was specifically conceived to empower collaborative discovery under natural ambient sunlight..."
              </p>
            </motion.div>
          )}

        </div>

        {/* Bottom Hotspots Selector Carousel */}
        <div className="p-4 bg-[#050810] border-t border-white/10 overflow-x-auto flex items-center gap-3 z-20">
          <span className="text-[10px] uppercase tracking-wider text-white/50 px-2 whitespace-nowrap">
            Select Space:
          </span>
          {CAMPUS_HOTSPOTS.map((hotspot) => {
            const isSelected = hotspot.id === activeHotspot.id;
            return (
              <button
                key={hotspot.id}
                onClick={() => {
                  setCurrentHotspotId(hotspot.id);
                  setPanOffset(0);
                  setZoomLevel(1);
                }}
                className={`flex items-center gap-2.5 px-3 py-2 rounded-xl transition-all whitespace-nowrap border ${
                  isSelected
                    ? 'bg-[#c5a059] text-[#09101d] font-bold border-[#c5a059] shadow-lg scale-105'
                    : 'bg-white/5 hover:bg-white/10 text-white/70 border-white/10 hover:text-white'
                }`}
              >
                <MapPin className={`w-3.5 h-3.5 ${isSelected ? 'text-[#09101d]' : 'text-[#c5a059]'}`} />
                <span className="text-xs">{hotspot.name.split('&')[0]}</span>
              </button>
            );
          })}
        </div>

      </motion.div>
    </div>
  );
};
