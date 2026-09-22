import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Download, 
  BookOpen, 
  Check, 
  Sparkles, 
  GraduationCap, 
  MapPin, 
  Phone,
  FileCheck
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { SCHOOL_INFO, KEY_STATS } from '../data/schoolData';
import { Crest3D } from './Crest3D';

interface InteractiveProspectusModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenAdmissions: () => void;
}

export const InteractiveProspectusModal: React.FC<InteractiveProspectusModalProps> = ({
  isOpen,
  onClose,
  onOpenAdmissions,
}) => {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [isDownloaded, setIsDownloaded] = useState<boolean>(false);

  if (!isOpen) return null;

  const pages = [
    {
      title: "Welcome to Indian School Muladha",
      subtitle: "A Tradition of Distinction in the Sultanate of Oman",
      badge: "Official Prospectus 2026-27",
      image: "/assets/isml/main_gate.jpg",
      content: (
        <div className="space-y-4 text-xs sm:text-sm text-[#cbd5e1] font-light leading-relaxed">
          <p>
            Established in 1991 under the patronage of the Embassy of India in Oman, Indian School Muladha stands as an intellectual beacon in the South Batinah region.
          </p>
          <p>
            Our sprawling 30-acre green campus brings together over 3,200 scholars from diverse backgrounds under the guiding motto <em>"Tamaso Ma Jyotirgamaya"</em> — Lead us from darkness unto light.
          </p>
          <div className="grid grid-cols-2 gap-3 pt-3">
            <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-center">
              <span className="font-serif text-xl font-bold text-[#dfb875] block">CBSE 6130009</span>
              <span className="text-[10px] text-white/60">Permanent Affiliation</span>
            </div>
            <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-center">
              <span className="font-serif text-xl font-bold text-[#dfb875] block">30+ Acres</span>
              <span className="text-[10px] text-white/60">Modern Campus</span>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Academic Continuum & Pedagogy",
      subtitle: "From Foundational Wonder to Senior Scholastic Rigor",
      badge: "Curriculum Excellence",
      image: "/assets/isml/senior_wing.jpg",
      content: (
        <div className="space-y-3 text-xs sm:text-sm text-[#cbd5e1] font-light leading-relaxed">
          <p>
            Aligining with CBSE and India's National Education Policy (NEP 2020), our curriculum encourages analytical inquiry, bilingual dexterity, and scientific experimentation.
          </p>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-[#c5a059]" />
              <strong>Kindergarten:</strong> Play-centric sensory literacy & social development.
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-[#c5a059]" />
              <strong>Primary & Middle:</strong> Conceptual mathematics, robotics, second language mastery.
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-[#c5a059]" />
              <strong>Senior Secondary:</strong> Intensive Science, Commerce & Humanities streams.
            </li>
          </ul>
        </div>
      )
    },
    {
      title: "STEAM Innovation & Laboratories",
      subtitle: "Dr. A.P.J. Abdul Kalam Technology Hub",
      badge: "World-Class Infrastructure",
      image: "/assets/isml/students_activity.jpg",
      content: (
        <div className="space-y-4 text-xs sm:text-sm text-[#cbd5e1] font-light leading-relaxed">
          <p>
            Our dedicated innovation hub allows scholars to build autonomous robotics, program microcontrollers, experiment with green renewable energies, and master digital computer science.
          </p>
          <div className="p-3.5 rounded-xl bg-[#c5a059]/10 border border-[#c5a059]/30 text-xs text-white/90">
            <strong>Key Labs:</strong> Physics, Chemistry, Biology, Mathematics Discovery Lab, 3D Prototyping MakerSpace, and Python/AI terminal suites.
          </div>
        </div>
      )
    },
    {
      title: "Admissions & Comprehensive Bus Transit",
      subtitle: "Serving Families Across South Batinah Governorate",
      badge: "Enrollment Guide",
      image: "/assets/isml/green_campus.jpg",
      content: (
        <div className="space-y-4 text-xs sm:text-sm text-[#cbd5e1] font-light leading-relaxed">
          <p>
            Admissions for the 2026-27 academic year are currently open for Kindergarten through Grade 11.
          </p>
          <div>
            <h4 className="font-semibold text-white text-xs mb-1">GPS-Tracked Bus Network Routes:</h4>
            <p className="text-[11px] text-white/70">
              Al Muladha • Barka • Al Musannah • Suwaiq • Al Khabourah • Rustaq • Hazm • Wudam Al Sahil
            </p>
          </div>
          <div className="pt-2">
            <button
              onClick={() => {
                onClose();
                onOpenAdmissions();
              }}
              className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#8b1528] to-[#ab1932] text-white font-bold text-xs uppercase tracking-wider shadow-lg"
            >
              Proceed to Online Application Form
            </button>
          </div>
        </div>
      )
    }
  ];

  const handleDownload = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
    setIsDownloaded(true);
    setTimeout(() => setIsDownloaded(false), 5000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 20 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-4xl bg-[#09111c] border-2 border-[#c5a059]/40 rounded-3xl shadow-[0_30px_90px_rgba(0,0,0,0.9)] overflow-hidden flex flex-col max-h-[92vh]"
      >
        {/* Modal Top Bar */}
        <div className="p-4 sm:px-6 bg-[#060a12] border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Crest3D size="sm" showMotto={false} interactive={false} />
            <div>
              <h3 className="font-serif text-sm sm:text-base font-bold text-white">
                Indian School Muladha — Digital Prospectus
              </h3>
              <span className="text-[10px] text-[#dfb875] tracking-widest uppercase font-display">
                Academic Session 2025-2026
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownload}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#c5a059] hover:bg-[#dfb875] text-[#09101d] font-bold text-xs transition-colors shadow-sm"
              title="Download Prospectus PDF"
            >
              {isDownloaded ? <FileCheck className="w-3.5 h-3.5" /> : <Download className="w-3.5 h-3.5" />}
              <span>{isDownloaded ? "Downloaded!" : "Download PDF"}</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-white/70 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Prospectus Interactive Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 flex-1 overflow-y-auto">
          {/* Left Column: Visual Artwork */}
          <div className="md:col-span-6 relative min-h-[220px] md:min-h-full">
            <img
              src={pages[currentPage].image}
              alt={pages[currentPage].title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover filter brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#09111c] via-transparent to-black/30 md:bg-gradient-to-r md:from-transparent md:to-[#09111c]" />
            <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-[#dfb875] text-[11px] font-semibold border border-white/10">
              {pages[currentPage].badge}
            </div>
          </div>

          {/* Right Column: Page Text and Content */}
          <div className="md:col-span-6 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <span className="text-[10px] tracking-[0.25em] uppercase text-[#c5a059] font-display font-semibold block mb-1">
                Chapter {currentPage + 1} of {pages.length}
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-1">
                {pages[currentPage].title}
              </h2>
              <p className="text-xs text-[#dfb875] mb-5 font-sans">
                {pages[currentPage].subtitle}
              </p>

              {pages[currentPage].content}
            </div>

            {/* Bottom Navigation controls */}
            <div className="pt-6 border-t border-white/10 flex items-center justify-between mt-6">
              <button
                disabled={currentPage === 0}
                onClick={() => setCurrentPage((prev) => Math.max(0, prev - 1))}
                className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold ${
                  currentPage === 0
                    ? 'text-white/20 cursor-not-allowed'
                    : 'text-white/80 hover:text-white bg-white/5'
                }`}
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous</span>
              </button>

              <div className="flex items-center gap-1.5">
                {pages.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      currentPage === i ? 'w-6 bg-[#c5a059]' : 'bg-white/20 hover:bg-white/40'
                    }`}
                  />
                ))}
              </div>

              <button
                disabled={currentPage === pages.length - 1}
                onClick={() => setCurrentPage((prev) => Math.min(pages.length - 1, prev + 1))}
                className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold ${
                  currentPage === pages.length - 1
                    ? 'text-white/20 cursor-not-allowed'
                    : 'text-white/80 hover:text-white bg-white/5'
                }`}
              >
                <span>Next</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>

      </motion.div>
    </div>
  );
};
