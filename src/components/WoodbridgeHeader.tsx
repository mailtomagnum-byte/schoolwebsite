import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Search, ChevronRight, Phone, Mail, MapPin, ExternalLink } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

interface WoodbridgeHeaderProps {
  onOpenAdmissions: () => void;
  onOpenProspectus: () => void;
  onOpenVirtualTour: () => void;
}

export const WoodbridgeHeader: React.FC<WoodbridgeHeaderProps> = ({
  onOpenAdmissions,
  onOpenProspectus,
  onOpenVirtualTour,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const menuSections = [
    {
      title: "About Our School",
      links: [
        { label: "Our Aims & Values", href: "#ethos" },
        { label: "Embassy Patronage & History", href: "#ethos" },
        { label: "Explore Our 30-Acre Campus", onClick: onOpenVirtualTour },
        { label: "Meet the Principal & Governors", href: "#staff" },
        { label: "CBSE Mandatory Disclosures", href: "#footer" }
      ]
    },
    {
      title: "Educational Stages",
      links: [
        { label: "Early Years & Kindergarten (KG I & KG II)", href: "#stages" },
        { label: "Primary Wing (Grades 1 to 5)", href: "#stages" },
        { label: "Middle School (Grades 6 to 8)", href: "#stages" },
        { label: "Secondary & Pre-University (Grades 9 to 12)", href: "#stages" },
        { label: "Science & Commerce Streams", href: "#academic-excellence" }
      ]
    },
    {
      title: "Admissions & Visits",
      links: [
        { label: "Admissions 2025-26 Registration", onClick: onOpenAdmissions },
        { label: "Download Digital Prospectus", onClick: onOpenProspectus },
        { label: "Book a Guided Campus Visit", onClick: onOpenAdmissions },
        { label: "Bus Transportation Routes in South Batinah", href: "#footer" },
        { label: "Fee Structure & Guidelines", onClick: onOpenProspectus }
      ]
    },
    {
      title: "School Life & News",
      links: [
        { label: "Co-Curricular & 35+ Societies", href: "#features" },
        { label: "Sports Ground & Cricket Academy", href: "#features" },
        { label: "Dr. Kalam STEM & AI Lab", onClick: onOpenVirtualTour },
        { label: "Latest Gazette & CBSE Circulars", href: "#news" },
        { label: "Parent ERP Login", href: "https://isml-oman.com", external: true }
      ]
    }
  ];

  return (
    <>
      {/* Fixed Sticky Header exactly modeled after Woodbridge School */}
      <header
        id="site-header"
        className="fixed top-0 left-0 right-0 z-50 bg-[#001028]/95 backdrop-blur-md border-b border-white/10 transition-all duration-300"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 sm:h-24 flex items-center justify-between">
          
          {/* Left: Menu Toggle Button with 3 Bars */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex items-center gap-3 py-2 px-3 rounded-lg text-white hover:text-[#EB0F2D] transition-colors group focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between relative">
                <span className={`w-full h-0.5 bg-white group-hover:bg-[#EB0F2D] transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`w-4/5 h-0.5 bg-white group-hover:bg-[#EB0F2D] transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
                <span className={`w-full h-0.5 bg-white group-hover:bg-[#EB0F2D] transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] hidden sm:inline text-white group-hover:text-[#EB0F2D]">
                {isMenuOpen ? 'Close' : 'Menu'}
              </span>
            </button>
          </div>

          {/* Center: School Brand Crest & Logo */}
          <a
            href="#"
            className="flex items-center gap-3 group text-center focus:outline-none"
          >
            {/* Authentic ISML Crest Image */}
            <div className="w-10 h-10 sm:w-11 sm:h-11 relative flex-shrink-0 bg-white/10 rounded-full p-1 border border-white/20">
              <img
                src="/assets/isml/crest.png"
                alt="Indian School Muladha Crest"
                className="w-full h-full object-contain drop-shadow"
              />
            </div>

            <div className="text-left">
              <span className="block font-poppins font-bold text-sm sm:text-base tracking-wide text-white uppercase group-hover:text-[#EB0F2D] transition-colors">
                Indian School Muladha
              </span>
              <span className="block text-[10px] tracking-[0.22em] text-[#c5a059] uppercase font-semibold">
                Sultanate of Oman • Estd. 1991
              </span>
            </div>
          </a>

          {/* Right: Actions */}
          <div className="flex items-center gap-3 sm:gap-4">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Search"
            >
              <Search className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenProspectus}
              className="hidden lg:inline-flex text-xs font-bold uppercase tracking-wider text-white hover:text-[#c5a059] px-3 py-2 transition-colors"
            >
              Prospectus
            </button>

            <button
              onClick={onOpenAdmissions}
              className="px-4 sm:px-6 py-2.5 rounded-full bg-[#EB0F2D] hover:bg-[#c90b24] text-white text-xs font-bold uppercase tracking-wider shadow-lg hover:shadow-[0_0_25px_rgba(235,15,45,0.6)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Book a Visit
            </button>
          </div>

        </div>

        {/* Search Bar Dropdown */}
        <AnimatePresence>
          {isSearchOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="bg-[#000F29] border-t border-white/10 px-4 py-4"
            >
              <div className="max-w-2xl mx-auto flex items-center gap-3">
                <Search className="w-5 h-5 text-[#EB0F2D]" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search Indian School Muladha (e.g. CBSE results, bus routes, KG admission, staff)..."
                  className="flex-1 bg-transparent border-none text-white text-sm focus:outline-none placeholder-white/40"
                  autoFocus
                />
                <button
                  onClick={() => setIsSearchOpen(false)}
                  className="text-xs text-white/60 hover:text-white"
                >
                  ESC
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Full-Screen Mega Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-[#000F29] text-white pt-28 pb-12 px-6 sm:px-12 overflow-y-auto"
          >
            <div className="max-w-7xl mx-auto">
              
              <div className="border-b border-white/10 pb-6 mb-10 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <span className="text-[11px] uppercase tracking-[0.25em] text-[#EB0F2D] font-bold block mb-1">
                    Explore Navigation
                  </span>
                  <h2 className="font-poppins text-2xl sm:text-3xl font-bold">
                    Indian School Muladha
                  </h2>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => {
                      setIsMenuOpen(false);
                      onOpenAdmissions();
                    }}
                    className="px-5 py-2.5 rounded-full bg-[#EB0F2D] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#c90b24]"
                  >
                    Apply for Admissions
                  </button>
                  <button
                    onClick={() => {
                      setIsMenuOpen(false);
                      onOpenProspectus();
                    }}
                    className="px-5 py-2.5 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-wider hover:bg-white/20"
                  >
                    Digital Prospectus
                  </button>
                </div>
              </div>

              {/* 4 Navigation Columns */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                {menuSections.map((sec, idx) => (
                  <div key={idx} className="space-y-4">
                    <h3 className="font-poppins text-sm uppercase tracking-widest text-[#c5a059] font-bold border-b border-white/10 pb-2">
                      {sec.title}
                    </h3>
                    <ul className="space-y-2.5">
                      {sec.links.map((link, lIdx) => (
                        <li key={lIdx}>
                          {link.onClick ? (
                            <button
                              onClick={() => {
                                setIsMenuOpen(false);
                                link.onClick!();
                              }}
                              className="text-sm text-white/80 hover:text-[#EB0F2D] flex items-center justify-between w-full text-left transition-colors py-1 group"
                            >
                              <span>{link.label}</span>
                              <ChevronRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#EB0F2D]" />
                            </button>
                          ) : (
                            <a
                              href={link.href}
                              target={link.external ? "_blank" : undefined}
                              rel={link.external ? "noreferrer" : undefined}
                              onClick={() => setIsMenuOpen(false)}
                              className="text-sm text-white/80 hover:text-[#EB0F2D] flex items-center justify-between transition-colors py-1 group"
                            >
                              <span>{link.label}</span>
                              {link.external ? (
                                <ExternalLink className="w-3.5 h-3.5 text-white/40 group-hover:text-[#EB0F2D]" />
                              ) : (
                                <ChevronRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#EB0F2D]" />
                              )}
                            </a>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Quick Contact Ribbon */}
              <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-white/60">
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#EB0F2D]" />
                    <span>Al Muladha, South Batinah, Oman</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#EB0F2D]" />
                    <span>+968 2681 1234</span>
                  </div>
                </div>
                <div>
                  <span>CBSE Affiliation No: 6130009 • School Code: 90076</span>
                </div>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
