import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Search, ChevronRight, Phone, Mail, MapPin, ExternalLink, ShieldCheck, DollarSign, FileCheck, Users, GraduationCap, Bell, Sparkles } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';
import { InternalPageTab } from './InternalPageViewer';
import { useCrm } from '../context/CrmContext';

interface WoodbridgeHeaderProps {
  onOpenAdmissions: () => void;
  onOpenProspectus: () => void;
  onOpenVirtualTour: () => void;
  onOpenInternalPage?: (tab: InternalPageTab) => void;
  onOpenCrm?: () => void;
}

export const WoodbridgeHeader: React.FC<WoodbridgeHeaderProps> = ({
  onOpenAdmissions,
  onOpenProspectus,
  onOpenVirtualTour,
  onOpenInternalPage,
  onOpenCrm,
}) => {
  const { urgentAnnouncement } = useCrm();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim() || !onOpenInternalPage) return;
    const q = searchQuery.toLowerCase();
    setIsSearchOpen(false);
    setSearchQuery('');
    
    if (q.includes('fee') || q.includes('tuition') || q.includes('cost') || q.includes('payment')) {
      onOpenInternalPage('fee-structure');
    } else if (q.includes('tc') || q.includes('transfer') || q.includes('certificate')) {
      onOpenInternalPage('transfer-certificate');
    } else if (q.includes('facult') || q.includes('teacher') || q.includes('staff') || q.includes('principal') || q.includes('pgt') || q.includes('tgt')) {
      onOpenInternalPage('faculty');
    } else if (q.includes('saras') || q.includes('disclosure') || q.includes('cbse') || q.includes('affiliat') || q.includes('ratio')) {
      onOpenInternalPage('mandatory-disclosure');
    } else if (q.includes('result') || q.includes('topper') || q.includes('exam') || q.includes('mark') || q.includes('100%')) {
      onOpenInternalPage('results');
    } else if (q.includes('admiss') || q.includes('age') || q.includes('regist') || q.includes('eligib') || q.includes('balvatika')) {
      onOpenInternalPage('admissions');
    } else if (q.includes('smc') || q.includes('manage') || q.includes('governor') || q.includes('president') || q.includes('committee')) {
      onOpenInternalPage('management');
    } else if (q.includes('career') || q.includes('tender') || q.includes('job') || q.includes('vacanc')) {
      onOpenInternalPage('careers');
    } else if (q.includes('contact') || q.includes('phone') || q.includes('grievance') || q.includes('address') || q.includes('email')) {
      onOpenInternalPage('contact');
    } else if (q.includes('campus') || q.includes('lab') || q.includes('canteen') || q.includes('infrastruct') || q.includes('acre')) {
      onOpenInternalPage('infrastructure');
    } else {
      onOpenInternalPage('about');
    }
  };

  const menuSections = [
    {
      title: "About Our School",
      links: [
        {
          label: "Institutional Heritage & History (Since 1991)",
          onClick: () => onOpenInternalPage?.('about')
        },
        {
          label: "Motto, Vision & Core Mission",
          onClick: () => onOpenInternalPage?.('vision')
        },
        {
          label: "School Management Committee (SMC 2026-27)",
          onClick: () => onOpenInternalPage?.('management')
        },
        {
          label: "Faculty Directory (94 Certified Teachers)",
          onClick: () => onOpenInternalPage?.('faculty')
        },
        {
          label: "CBSE Mandatory Public Disclosure (SARAS)",
          onClick: () => onOpenInternalPage?.('mandatory-disclosure')
        }
      ]
    },
    {
      title: "Admissions & Tuition",
      links: [
        {
          label: "Admission Procedures & Age Matrix 2026-27",
          onClick: () => onOpenInternalPage?.('admissions')
        },
        {
          label: "Official Fee Structure 2026-27 Circular",
          onClick: () => onOpenInternalPage?.('fee-structure')
        },
        {
          label: "Transfer Certificate (TC) Verification Portal",
          onClick: () => onOpenInternalPage?.('transfer-certificate')
        },
        {
          label: "Book an Individual Campus Visit",
          onClick: onOpenAdmissions
        },
        {
          label: "Download Digital Prospectus",
          onClick: onOpenProspectus
        }
      ]
    },
    {
      title: "Academics & Campus",
      links: [
        {
          label: "CBSE Class X & XII 100% Board Results",
          onClick: () => onOpenInternalPage?.('results')
        },
        {
          label: "30-Acre Landscaped Campus & 148 Classrooms",
          onClick: () => onOpenInternalPage?.('infrastructure')
        },
        {
          label: "7 Specialist Labs & 125+ Cyber Systems",
          onClick: () => onOpenInternalPage?.('infrastructure')
        },
        {
          label: "Campus Canteen ('Tete-e-Tea') & Botanical Grounds",
          onClick: () => onOpenInternalPage?.('infrastructure')
        },
        {
          label: "Virtual Campus Tour & 360° Panorama",
          onClick: onOpenVirtualTour
        }
      ]
    },
    {
      title: "Careers, Tenders & Contact",
      links: [
        {
          label: "Current Teaching Vacancies (PGT, TGT, PRT)",
          onClick: () => onOpenInternalPage?.('careers')
        },
        {
          label: "Active Procurement Tenders",
          onClick: () => onOpenInternalPage?.('careers')
        },
        {
          label: "Administrative Office & Campus Contact",
          onClick: () => onOpenInternalPage?.('contact')
        },
        {
          label: "Grievance Redressal & Feedback System",
          onClick: () => onOpenInternalPage?.('contact')
        },
        {
          label: "Parent ERP Portal Login",
          href: "https://isml-oman.com",
          external: true
        }
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
        {/* Dynamic Urgent Announcement Banner from CRM */}
        {urgentAnnouncement?.active && (
          <div className="bg-gradient-to-r from-[#EB0F2D] to-[#b3081e] text-white px-4 py-2 text-xs font-medium flex items-center justify-center gap-3 relative shadow-inner border-b border-black/10">
            <span className="px-2 py-0.5 rounded-full bg-white/20 text-white font-bold text-[10px] uppercase tracking-wider flex items-center gap-1">
              <Bell className="w-3 h-3 animate-pulse" />
              {urgentAnnouncement.badgeText || 'Notice'}
            </span>
            <span className="truncate max-w-xl text-center sm:text-left">{urgentAnnouncement.message}</span>
            {urgentAnnouncement.linkText && (
              <a
                href={urgentAnnouncement.linkUrl || '#'}
                className="underline hover:text-white/80 font-bold ml-1 text-[11px] whitespace-nowrap"
              >
                {urgentAnnouncement.linkText} &rarr;
              </a>
            )}
          </div>
        )}

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

          {/* Quick Desktop Links to Internal Pages */}
          <div className="hidden xl:flex items-center gap-1 border-l border-r border-white/10 px-3">
            <button
              onClick={() => onOpenInternalPage?.('mandatory-disclosure')}
              className="text-[11px] font-semibold text-white/70 hover:text-white px-2.5 py-1.5 rounded-lg hover:bg-white/5 transition-colors"
            >
              Disclosure
            </button>
            <button
              onClick={() => onOpenInternalPage?.('faculty')}
              className="text-[11px] font-semibold text-white/70 hover:text-white px-2.5 py-1.5 rounded-lg hover:bg-white/5 transition-colors"
            >
              Faculty
            </button>
            <button
              onClick={() => onOpenInternalPage?.('fee-structure')}
              className="text-[11px] font-semibold text-white/70 hover:text-white px-2.5 py-1.5 rounded-lg hover:bg-white/5 transition-colors"
            >
              Fees
            </button>
            <button
              onClick={() => onOpenInternalPage?.('transfer-certificate')}
              className="text-[11px] font-semibold text-white/70 hover:text-white px-2.5 py-1.5 rounded-lg hover:bg-white/5 transition-colors"
            >
              TC Portal
            </button>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-3 sm:gap-4">
            {onOpenCrm && (
              <button
                onClick={onOpenCrm}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-[#c5a059] text-white hover:text-[#001028] text-xs font-semibold tracking-wide transition-all border border-white/20"
                title="School Administrative CRM & Admissions Management"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-[#c5a059]" />
                <span>Admin CRM</span>
              </button>
            )}

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
              <form onSubmit={handleSearchSubmit} className="max-w-2xl mx-auto flex items-center gap-3">
                <Search className="w-5 h-5 text-[#EB0F2D]" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search ISML (e.g. SARAS, fees, faculty, TC, 100% results, bus)..."
                  className="flex-1 bg-transparent border-none text-white text-sm focus:outline-none placeholder-white/40"
                  autoFocus
                />
                <button
                  type="submit"
                  className="px-3 py-1 bg-[#EB0F2D] text-white text-xs font-bold rounded-lg"
                >
                  Search
                </button>
                <button
                  type="button"
                  onClick={() => setIsSearchOpen(false)}
                  className="text-xs text-white/60 hover:text-white"
                >
                  ESC
                </button>
              </form>
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
                    Complete Internal Documentation
                  </span>
                  <h2 className="font-poppins text-2xl sm:text-3xl font-bold">
                    Indian School Muladha
                  </h2>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  {onOpenCrm && (
                    <button
                      onClick={() => {
                        setIsMenuOpen(false);
                        onOpenCrm();
                      }}
                      className="px-4 py-2.5 rounded-full bg-[#c5a059] text-[#001028] text-xs font-bold uppercase tracking-wider hover:bg-white flex items-center gap-1.5"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-[#001028]" />
                      <span>Admin CRM</span>
                    </button>
                  )}
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

              {/* 4 Navigation Columns with 100% Data Parity to Original Website */}
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
                    <span>P.O. Box 42, Postal Code 314, Al Muladha, South Batinah, Sultanate of Oman</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#EB0F2D]" />
                    <span>+968 26811234 / +968 26811184</span>
                  </div>
                </div>
                <div>
                  <span className="font-mono text-white/80">CBSE Affiliation No: 6130007 • School Code: 90170</span>
                </div>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
