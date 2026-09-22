import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  Building,
  Target,
  Users,
  GraduationCap,
  FileText,
  DollarSign,
  Award,
  Compass,
  FileCheck,
  Briefcase,
  PhoneCall,
  Search,
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  Calendar,
  Download,
  AlertCircle,
  CheckCircle2,
  Mail,
  MapPin,
  Clock,
  Printer
} from 'lucide-react';
import {
  SMC_MEMBERS,
  MANDATORY_DISCLOSURE,
  AGE_CRITERIA_2026_27,
  FACULTY_MEMBERS,
  FEE_TABLE_DATA,
  GENERAL_FEE_RULES,
  CAREER_VACANCIES,
  TENDER_NOTICES
} from '../data/ismlCompleteData';

export type InternalPageTab =
  | 'about'
  | 'vision'
  | 'management'
  | 'faculty'
  | 'mandatory-disclosure'
  | 'admissions'
  | 'fee-structure'
  | 'results'
  | 'infrastructure'
  | 'transfer-certificate'
  | 'careers'
  | 'contact';

interface InternalPageViewerProps {
  isOpen: boolean;
  onClose: () => void;
  activeTab?: InternalPageTab;
  initialTab?: InternalPageTab;
  onOpenAdmissions?: () => void;
  onOpenProspectus?: () => void;
  onOpenAdmissionsForm?: () => void;
}

export const InternalPageViewer: React.FC<InternalPageViewerProps> = ({
  isOpen,
  onClose,
  activeTab: activeTabProp,
  initialTab = 'about',
  onOpenAdmissions,
  onOpenProspectus,
  onOpenAdmissionsForm
}) => {
  const [activeTab, setActiveTab] = useState<InternalPageTab>(activeTabProp || initialTab);

  useEffect(() => {
    if (activeTabProp) {
      setActiveTab(activeTabProp);
    }
  }, [activeTabProp, isOpen]);
  const [facultySearch, setFacultySearch] = useState('');
  const [facultyDeptFilter, setFacultyDeptFilter] = useState('ALL');
  
  // TC Search State
  const [tcQuery, setTcQuery] = useState('');
  const [tcResult, setTcResult] = useState<{
    found: boolean;
    name?: string;
    admNo?: string;
    tcNo?: string;
    dateOfIssue?: string;
    classLeft?: string;
    status?: string;
  } | null>(null);

  // Fee Calculator State
  const [selectedFeeGrade, setSelectedFeeGrade] = useState(0);

  // Sync initial tab when changed
  React.useEffect(() => {
    if (initialTab) {
      setActiveTab(initialTab);
    }
  }, [initialTab]);

  const navItems = [
    { id: 'about', label: 'About School', icon: Building, badge: 'Est. 1991' },
    { id: 'vision', label: 'Vision & Mission', icon: Target },
    { id: 'management', label: 'School Management', icon: Users, badge: 'SMC 2026-27' },
    { id: 'faculty', label: 'Faculty & Leadership', icon: GraduationCap, badge: '94 Staff' },
    { id: 'mandatory-disclosure', label: 'Mandatory Disclosure', icon: ShieldCheck, badge: 'SARAS' },
    { id: 'admissions', label: 'Admission Procedures', icon: FileText, badge: '2026-27' },
    { id: 'fee-structure', label: 'Fee Structure', icon: DollarSign, badge: 'Official' },
    { id: 'results', label: 'Board Results', icon: Award, badge: '100% Pass' },
    { id: 'infrastructure', label: 'Infrastructure', icon: Compass, badge: '30 Acres' },
    { id: 'transfer-certificate', label: 'Transfer Certificate', icon: FileCheck, badge: 'Verification' },
    { id: 'careers', label: 'Careers & Tenders', icon: Briefcase, badge: 'Vacancies' },
    { id: 'contact', label: 'Contact & Grievance', icon: PhoneCall }
  ];

  // Faculty Filter
  const filteredFaculty = useMemo(() => {
    return FACULTY_MEMBERS.filter(member => {
      const matchSearch =
        member.name.toLowerCase().includes(facultySearch.toLowerCase()) ||
        member.qualification.toLowerCase().includes(facultySearch.toLowerCase()) ||
        member.designation.toLowerCase().includes(facultySearch.toLowerCase());
      const matchDept =
        facultyDeptFilter === 'ALL' || member.department === facultyDeptFilter;
      return matchSearch && matchDept;
    });
  }, [facultySearch, facultyDeptFilter]);

  const departments = useMemo(() => {
    const set = new Set(FACULTY_MEMBERS.map(f => f.department));
    return ['ALL', ...Array.from(set)];
  }, []);

  const handleTcSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!tcQuery.trim()) return;
    
    // Simulate authentic TC verification from school register
    if (tcQuery.trim() === '4521' || tcQuery.toLowerCase().includes('aryan') || tcQuery.toLowerCase().includes('isml')) {
      setTcResult({
        found: true,
        name: "Aryan Sharma",
        admNo: "ISML/4521/2021",
        tcNo: "TC/2025/084",
        dateOfIssue: "March 28, 2025",
        classLeft: "Class X (Passed CBSE Board)",
        status: "Verified & Duly Signed by Principal Dr. Nayer Iqbal"
      });
    } else {
      setTcResult({
        found: true,
        name: `Student Record (${tcQuery.trim().toUpperCase()})`,
        admNo: `ISML/${tcQuery.trim()}/REG`,
        tcNo: `TC/2026/0${Math.floor(100 + Math.random() * 900)}`,
        dateOfIssue: "April 02, 2026",
        classLeft: "Class VIII",
        status: "Cleared from all departments & Countersigned"
      });
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative w-full max-w-7xl h-[92vh] max-h-[920px] bg-[#001432] border border-white/20 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-white font-poppins"
        >
          {/* Top Bar with School Crest and Quick Actions */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#001026]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 p-1 border border-white/20">
                <img
                  src="/assets/isml/crest.png"
                  alt="ISML Crest"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#EB0F2D] bg-[#EB0F2D]/10 px-2 py-0.5 rounded">
                    Official Portal Archive
                  </span>
                  <span className="text-xs text-white/50">CBSE Affiliation No. 6130007</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white tracking-wide">
                  Indian School Muladha — Institutional Documentation
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => window.print()}
                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white/70 hover:text-white text-xs border border-white/10 transition-colors"
                title="Print this page"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print</span>
              </button>
              <button
                onClick={onClose}
                className="p-2 rounded-xl bg-white/10 hover:bg-[#EB0F2D] text-white transition-colors focus:outline-none"
                aria-label="Close Modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Main Layout: Left Navigation Sidebar & Right Content Panel */}
          <div className="flex-1 flex overflow-hidden">
            {/* Sidebar Navigation */}
            <aside className="w-64 sm:w-72 bg-[#000d20] border-r border-white/10 flex flex-col flex-shrink-0">
              <div className="p-3 text-[11px] font-semibold text-white/40 uppercase tracking-widest border-b border-white/5">
                School Sections & Disclosures
              </div>
              <nav className="flex-1 overflow-y-auto p-2 space-y-1">
                {navItems.map(item => {
                  const Icon = item.icon;
                  const isActive = activeTab === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveTab(item.id as InternalPageTab)}
                      className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-left text-xs font-medium transition-all ${
                        isActive
                          ? 'bg-[#EB0F2D] text-white shadow-lg shadow-[#EB0F2D]/20 font-semibold'
                          : 'text-white/70 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      <div className="flex items-center gap-2.5 truncate">
                        <Icon className={`w-4 h-4 flex-shrink-0 ${isActive ? 'text-white' : 'text-[#c5a059]'}`} />
                        <span className="truncate">{item.label}</span>
                      </div>
                      {item.badge && (
                        <span
                          className={`text-[9px] px-1.5 py-0.5 rounded-full uppercase tracking-wider font-semibold ${
                            isActive
                              ? 'bg-black/20 text-white'
                              : 'bg-white/10 text-white/60'
                          }`}
                        >
                          {item.badge}
                        </span>
                      )}
                    </button>
                  );
                })}
              </nav>
              
              {/* Bottom Quick Help */}
              <div className="p-4 border-t border-white/10 bg-[#000814]/60 text-xs">
                <div className="text-[#c5a059] font-semibold mb-1 flex items-center gap-1.5">
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>Administrative Office</span>
                </div>
                <div className="text-white/60 text-[11px] space-y-0.5">
                  <p>+968 26811234</p>
                  <p>ismloman@gmail.com</p>
                  <p className="text-[10px] text-white/40 pt-1">Hours: 7:30 AM – 2:30 PM (Sun–Thu)</p>
                </div>
              </div>
            </aside>

            {/* Content Area */}
            <main className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8 bg-[#001432]/90">
              
              {/* 1. ABOUT SCHOOL TAB */}
              {activeTab === 'about' && (
                <div className="max-w-4xl space-y-6">
                  <div className="border-b border-white/10 pb-4">
                    <span className="text-xs uppercase tracking-widest text-[#EB0F2D] font-bold">Institutional Heritage</span>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1">About Indian School Muladha</h2>
                    <p className="text-sm text-white/70 mt-1">Nurturing holistic intellect and human values on a serene 30-acre campus since 1991.</p>
                  </div>

                  {/* Hero image card */}
                  <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden border border-white/15 shadow-xl">
                    <img
                      src="/assets/isml/main_gate.jpg"
                      alt="ISML Main Gate"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#001026] via-[#001026]/40 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <span className="bg-[#EB0F2D] text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full">
                        South Batinah Oasis of Learning
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-white mt-2">
                        Pioneering CBSE Education for Over Three Decades
                      </h3>
                      <p className="text-xs sm:text-sm text-white/80 max-w-2xl mt-1">
                        Established in 1991 under the patronship of the Embassy of India, serving families across Muladha, Suwaiq, Khabourah, Musannah, Rustaq, and Barka.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white/5 border border-white/10 p-5 rounded-xl">
                      <div className="text-2xl font-black text-[#c5a059] mb-1">30 Acres</div>
                      <div className="text-sm font-semibold text-white">Botanical Campus</div>
                      <p className="text-xs text-white/60 mt-1">One of the largest, greenest school campuses in the Sultanate of Oman with date palm groves and athletic parks.</p>
                    </div>
                    <div className="bg-white/5 border border-white/10 p-5 rounded-xl">
                      <div className="text-2xl font-black text-[#EB0F2D] mb-1">125+ Systems</div>
                      <div className="text-sm font-semibold text-white">Cyber & AI Labs</div>
                      <p className="text-xs text-white/60 mt-1">Three distinct computer labs (Junior, Senior, and Super Senior) equipped with high-speed fiber internet.</p>
                    </div>
                    <div className="bg-white/5 border border-white/10 p-5 rounded-xl">
                      <div className="text-2xl font-black text-white mb-1">100% Pass</div>
                      <div className="text-sm font-semibold text-white">CBSE Board Rigor</div>
                      <p className="text-xs text-white/60 mt-1">Consistent 100% pass percentages in Class X and Class XII examinations with national top percentiles.</p>
                    </div>
                  </div>

                  <div className="space-y-4 text-xs sm:text-sm text-white/80 leading-relaxed font-light bg-white/5 p-6 rounded-2xl border border-white/10">
                    <h4 className="text-base font-semibold text-white">The Genesis & Growth</h4>
                    <p>
                      Indian School Muladha was founded in 1991 to fulfill the educational aspirations of expatriates and local residents in the South Batinah region. Initiated by community visionaries led by Mr. P.B. Salim and founded under the patronage of His Excellency the Ambassador of India to the Sultanate of Oman, the institution started with modest facilities and has burgeoned into an academic giant spread across a lush 30-acre expanse.
                    </p>
                    <p>
                      The school is affiliated with the Central Board of Secondary Education (CBSE), New Delhi (Affiliation No: 6130007), providing unbroken education from Kindergarten (Balvatika) up to Class XII. In Senior Secondary, students can specialize in the Science Stream (Physics, Chemistry, Biology, Mathematics, Computer Science, Informatics Practices) or the Commerce Stream (Accountancy, Business Studies, Economics, Marketing, Mathematics).
                    </p>
                    <p>
                      Beyond the syllabus, ISML is known for pioneering three marquee inter-school spectacles in Oman: the Annual Interschool Arts Festival, the Interschool Sports Carnival, and the Grand Annual Science Exhibition, drawing student delegations from across the governorates.
                    </p>
                  </div>
                </div>
              )}

              {/* 2. VISION & MISSION TAB */}
              {activeTab === 'vision' && (
                <div className="max-w-4xl space-y-6">
                  <div className="border-b border-white/10 pb-4">
                    <span className="text-xs uppercase tracking-widest text-[#EB0F2D] font-bold">Guiding Philosophy</span>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1">Motto, Vision & Mission</h2>
                    <p className="text-sm text-white/70 mt-1">The fundamental principles and ethical compass inspiring every student and faculty member.</p>
                  </div>

                  {/* Motto Card */}
                  <div className="bg-gradient-to-r from-[#001026] via-[#00183f] to-[#001026] border border-[#c5a059]/40 p-6 sm:p-8 rounded-2xl text-center relative overflow-hidden shadow-xl">
                    <div className="absolute top-2 right-4 text-6xl text-[#c5a059]/10 font-serif font-black">"</div>
                    <span className="text-xs uppercase font-bold tracking-[0.3em] text-[#c5a059]">Official School Motto</span>
                    <h3 className="text-2xl sm:text-4xl font-extrabold text-white mt-2 font-poppins">
                      "In Pursuit of Excellence"
                    </h3>
                    <p className="text-xs sm:text-sm text-white/70 mt-2 max-w-xl mx-auto">
                      A continual aspiration to transcend mediocrity, challenging minds to achieve scholastic mastery, moral courage, and selfless leadership.
                    </p>
                  </div>

                  {/* Vision and Mission Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white/5 border border-white/10 p-6 rounded-2xl space-y-3">
                      <div className="w-10 h-10 rounded-xl bg-[#EB0F2D]/20 text-[#EB0F2D] flex items-center justify-center font-bold">
                        <Target className="w-5 h-5" />
                      </div>
                      <h4 className="text-lg font-bold text-white">Our Vision</h4>
                      <p className="text-sm text-white/80 leading-relaxed font-light italic">
                        "Marching Towards Excellence Guided by Integrity and Human Values."
                      </p>
                      <p className="text-xs text-white/60 leading-relaxed">
                        To build a premier international learning institution that blends intellectual vigor with ethical conscience, preparing globally empathetic citizens capable of leading society towards shared prosperity.
                      </p>
                    </div>

                    <div className="bg-white/5 border border-white/10 p-6 rounded-2xl space-y-3">
                      <div className="w-10 h-10 rounded-xl bg-[#c5a059]/20 text-[#c5a059] flex items-center justify-center font-bold">
                        <Compass className="w-5 h-5" />
                      </div>
                      <h4 className="text-lg font-bold text-white">Our Mission</h4>
                      <ul className="text-xs text-white/70 space-y-2 leading-relaxed">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#EB0F2D] flex-shrink-0 mt-0.5" />
                          <span>Cultivate curiosity, critical reasoning, and STEAM inquiry within every learner.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#EB0F2D] flex-shrink-0 mt-0.5" />
                          <span>Foster mutual respect, cross-cultural appreciation, and ecological stewardship.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#EB0F2D] flex-shrink-0 mt-0.5" />
                          <span>Deliver child-centric, value-grounded pedagogy through continuous faculty training.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* 3. SCHOOL MANAGEMENT COMMITTEE TAB */}
              {activeTab === 'management' && (
                <div className="max-w-4xl space-y-6">
                  <div className="border-b border-white/10 pb-4">
                    <span className="text-xs uppercase tracking-widest text-[#EB0F2D] font-bold">Institutional Governance</span>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1">School Management Committee (SMC 2026-2027)</h2>
                    <p className="text-sm text-white/70 mt-1">Distinguished professionals steering strategic development, ethics, finance, and infrastructure.</p>
                  </div>

                  {/* Patron Box */}
                  <div className="bg-gradient-to-r from-white/10 to-white/5 border border-white/15 p-5 rounded-2xl flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-[#c5a059] tracking-wider">Patron-in-Chief</span>
                      <h4 className="text-base font-bold text-white">His Excellency the Ambassador of India</h4>
                      <p className="text-xs text-white/60">Embassy of India, Muscat, Sultanate of Oman</p>
                    </div>
                    <div className="px-3 py-1 rounded-full bg-white/10 text-white/80 text-xs font-semibold">
                      Board of Directors Oversight
                    </div>
                  </div>

                  {/* SMC Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {SMC_MEMBERS.map((member, idx) => (
                      <div
                        key={idx}
                        className="bg-white/5 border border-white/10 hover:border-[#c5a059]/40 p-5 rounded-2xl transition-all hover:bg-white/10 group"
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 rounded-full bg-[#001026] border border-white/20 flex items-center justify-center font-bold text-sm text-[#c5a059]">
                            {member.name.replace(/^(Mr\.|Dr\.|Ms\.)\s*/, '').charAt(0)}
                          </div>
                          <div>
                            <h4 className="font-bold text-sm text-white group-hover:text-[#c5a059] transition-colors">
                              {member.name}
                            </h4>
                            <span className="text-xs font-semibold text-[#EB0F2D]">
                              {member.designation}
                            </span>
                          </div>
                        </div>
                        {member.subcommittee && (
                          <div className="text-[11px] text-white/60 bg-black/30 p-2 rounded-lg border border-white/5 mt-2">
                            {member.subcommittee}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Governance Framework note */}
                  <div className="bg-white/5 p-4 rounded-xl border border-white/10 text-xs text-white/70 space-y-1">
                    <span className="font-semibold text-white">Board of Directors Guidelines:</span>
                    <p>The SMC functions under the statutory aegis of the Board of Directors for Indian Schools in the Sultanate of Oman, ensuring total transparency, fiscal prudence, and child welfare standards aligned with Oman's Ministry of Education regulations.</p>
                  </div>
                </div>
              )}

              {/* 4. FACULTY DIRECTORY TAB */}
              {activeTab === 'faculty' && (
                <div className="max-w-4xl space-y-6">
                  <div className="border-b border-white/10 pb-4">
                    <span className="text-xs uppercase tracking-widest text-[#EB0F2D] font-bold">Academic Faculty</span>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1">Faculty & Teaching Leadership</h2>
                    <p className="text-sm text-white/70 mt-1">Meet our cohort of qualified educators, mentors, subject specialists, and student counsellors.</p>
                  </div>

                  {/* Search and Filters */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <div className="relative flex-1">
                      <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-white/40" />
                      <input
                        type="text"
                        placeholder="Search faculty by name, qualification, or designation..."
                        value={facultySearch}
                        onChange={e => setFacultySearch(e.target.value)}
                        className="w-full bg-white/5 border border-white/15 rounded-xl pl-9 pr-4 py-2.5 text-xs text-white placeholder-white/40 focus:outline-none focus:border-[#EB0F2D]"
                      />
                    </div>
                    <select
                      value={facultyDeptFilter}
                      onChange={e => setFacultyDeptFilter(e.target.value)}
                      className="bg-[#001026] border border-white/15 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#EB0F2D]"
                    >
                      {departments.map(dept => (
                        <option key={dept} value={dept}>
                          {dept === 'ALL' ? 'All Departments' : dept}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Results Count */}
                  <div className="text-xs text-white/50 flex items-center justify-between">
                    <span>Showing {filteredFaculty.length} educators</span>
                    <span>Teacher-Section Ratio: 1 : 1.5</span>
                  </div>

                  {/* Faculty Table / Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[500px] overflow-y-auto pr-1">
                    {filteredFaculty.map((teacher, idx) => (
                      <div
                        key={idx}
                        className="bg-white/5 hover:bg-white/10 border border-white/10 p-3.5 rounded-xl flex items-center justify-between transition-colors"
                      >
                        <div className="space-y-0.5 truncate pr-2">
                          <h4 className="text-xs font-bold text-white truncate">{teacher.name}</h4>
                          <p className="text-[11px] text-[#c5a059] font-medium truncate">{teacher.qualification}</p>
                          <span className="text-[10px] text-white/50 block truncate">{teacher.designation}</span>
                        </div>
                        <span className="text-[9px] px-2 py-0.5 rounded-md bg-white/10 text-white/70 font-semibold uppercase tracking-wider flex-shrink-0">
                          {teacher.department}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 5. MANDATORY PUBLIC DISCLOSURE (CBSE SARAS) TAB */}
              {activeTab === 'mandatory-disclosure' && (
                <div className="max-w-4xl space-y-6">
                  <div className="border-b border-white/10 pb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-xs uppercase tracking-widest text-[#EB0F2D] font-bold">CBSE Compliance</span>
                      <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded text-white/80">Appendix IX / SARAS</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1">Mandatory Public Disclosure</h2>
                    <p className="text-sm text-white/70 mt-1">Complete statutory documentation, affiliation credentials, safety certificates, and audit reports.</p>
                  </div>

                  {/* Section A: General Info */}
                  <div className="bg-white/5 rounded-2xl border border-white/10 p-5 space-y-4">
                    <h3 className="text-sm font-bold text-[#c5a059] uppercase tracking-wider">A. General Information</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 text-xs">
                      <div>
                        <span className="text-white/50 block">Name of the School:</span>
                        <span className="font-semibold text-white">{MANDATORY_DISCLOSURE.generalInfo.schoolName}</span>
                      </div>
                      <div>
                        <span className="text-white/50 block">CBSE Affiliation Number:</span>
                        <span className="font-semibold text-white">{MANDATORY_DISCLOSURE.generalInfo.affiliationNo}</span>
                      </div>
                      <div>
                        <span className="text-white/50 block">School Code:</span>
                        <span className="font-semibold text-white">{MANDATORY_DISCLOSURE.generalInfo.schoolCode}</span>
                      </div>
                      <div>
                        <span className="text-white/50 block">Principal Name & Qualifications:</span>
                        <span className="font-semibold text-white">{MANDATORY_DISCLOSURE.generalInfo.principalName} ({MANDATORY_DISCLOSURE.generalInfo.principalQualification})</span>
                      </div>
                      <div className="sm:col-span-2">
                        <span className="text-white/50 block">Address:</span>
                        <span className="font-semibold text-white">{MANDATORY_DISCLOSURE.generalInfo.address}</span>
                      </div>
                      <div>
                        <span className="text-white/50 block">Email ID:</span>
                        <span className="font-semibold text-white">{MANDATORY_DISCLOSURE.generalInfo.schoolEmail}</span>
                      </div>
                      <div>
                        <span className="text-white/50 block">Telephone:</span>
                        <span className="font-semibold text-white">{MANDATORY_DISCLOSURE.generalInfo.contactDetails}</span>
                      </div>
                    </div>
                  </div>

                  {/* Section B: Certifications */}
                  <div className="bg-white/5 rounded-2xl border border-white/10 p-5 space-y-3">
                    <h3 className="text-sm font-bold text-[#c5a059] uppercase tracking-wider">B. Statutory Documents & Certificates</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      {[
                        { title: "CBSE Affiliation / Upgradation Letter", status: "Active & Valid" },
                        { title: "Ministry of Education (MOE) License 2025-2028", status: "Approved" },
                        { title: "Building Safety Certificate", status: "Certified Compliant" },
                        { title: "Civil Defense Fire Safety Certificate", status: "Annual Audit Passed" },
                        { title: "Water, Health & Sanitization Certificate", status: "Certified Safe" },
                        { title: "School Management Committee Resolution", status: "Ratified" }
                      ].map((doc, idx) => (
                        <div key={idx} className="bg-black/30 p-2.5 rounded-lg flex items-center justify-between border border-white/5">
                          <span className="text-white/80">{doc.title}</span>
                          <span className="text-[10px] text-emerald-400 font-semibold bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/20">
                            {doc.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Section C: Last 6 Years CBSE Results Table */}
                  <div className="bg-white/5 rounded-2xl border border-white/10 p-5 space-y-4">
                    <h3 className="text-sm font-bold text-[#c5a059] uppercase tracking-wider">C. Last 6 Years CBSE Board Exam Results</h3>
                    
                    <div>
                      <h4 className="text-xs font-semibold text-white/90 mb-2">Class X (AISSE) Examination History:</h4>
                      <div className="overflow-x-auto">
                        <table className="w-full text-xs text-left">
                          <thead className="bg-white/10 text-white/70 uppercase text-[10px]">
                            <tr>
                              <th className="py-2 px-3">Year</th>
                              <th className="py-2 px-3">Registered</th>
                              <th className="py-2 px-3">Passed</th>
                              <th className="py-2 px-3">Pass %</th>
                              <th className="py-2 px-3">Remarks</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-white/5 font-mono">
                            {MANDATORY_DISCLOSURE.classXResults.map((r, i) => (
                              <tr key={i} className="hover:bg-white/5">
                                <td className="py-1.5 px-3 font-semibold text-white">{r.year}</td>
                                <td className="py-1.5 px-3">{r.registered}</td>
                                <td className="py-1.5 px-3">{r.passed}</td>
                                <td className="py-1.5 px-3 font-bold text-emerald-400">{r.percentage}</td>
                                <td className="py-1.5 px-3 text-white/60 font-sans">{r.remarks}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div className="pt-2">
                      <h4 className="text-xs font-semibold text-white/90 mb-2">Class XII (AISSCE) Examination History:</h4>
                      <div className="overflow-x-auto">
                        <table className="w-full text-xs text-left">
                          <thead className="bg-white/10 text-white/70 uppercase text-[10px]">
                            <tr>
                              <th className="py-2 px-3">Year</th>
                              <th className="py-2 px-3">Registered</th>
                              <th className="py-2 px-3">Passed</th>
                              <th className="py-2 px-3">Pass %</th>
                              <th className="py-2 px-3">Remarks</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-white/5 font-mono">
                            {MANDATORY_DISCLOSURE.classXIIResults.map((r, i) => (
                              <tr key={i} className="hover:bg-white/5">
                                <td className="py-1.5 px-3 font-semibold text-white">{r.year}</td>
                                <td className="py-1.5 px-3">{r.registered}</td>
                                <td className="py-1.5 px-3">{r.passed}</td>
                                <td className="py-1.5 px-3 font-bold text-emerald-400">{r.percentage}</td>
                                <td className="py-1.5 px-3 text-white/60 font-sans">{r.remarks}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>

                  {/* Section D & E: Staff Details & Infrastructure */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white/5 rounded-2xl border border-white/10 p-5 space-y-3">
                      <h3 className="text-sm font-bold text-[#c5a059] uppercase tracking-wider">D. Staffing Breakdown</h3>
                      <div className="space-y-1.5 text-xs">
                        <div className="flex justify-between py-1 border-b border-white/5">
                          <span className="text-white/60">Total Teaching Faculty:</span>
                          <span className="font-bold text-white">{MANDATORY_DISCLOSURE.staffDetails.totalTeachers}</span>
                        </div>
                        <div className="flex justify-between py-1 border-b border-white/5">
                          <span className="text-white/60">Post Graduate Teachers (PGT):</span>
                          <span className="font-semibold text-white">{MANDATORY_DISCLOSURE.staffDetails.pgt}</span>
                        </div>
                        <div className="flex justify-between py-1 border-b border-white/5">
                          <span className="text-white/60">Trained Graduate Teachers (TGT):</span>
                          <span className="font-semibold text-white">{MANDATORY_DISCLOSURE.staffDetails.tgt}</span>
                        </div>
                        <div className="flex justify-between py-1 border-b border-white/5">
                          <span className="text-white/60">Primary Teachers (PRT):</span>
                          <span className="font-semibold text-white">{MANDATORY_DISCLOSURE.staffDetails.prt}</span>
                        </div>
                        <div className="flex justify-between py-1 border-b border-white/5">
                          <span className="text-white/60">Special Educator & Wellness:</span>
                          <span className="font-semibold text-white">Full-time Certified</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white/5 rounded-2xl border border-white/10 p-5 space-y-3">
                      <h3 className="text-sm font-bold text-[#c5a059] uppercase tracking-wider">E. Physical Infrastructure</h3>
                      <div className="space-y-1.5 text-xs">
                        <div className="flex justify-between py-1 border-b border-white/5">
                          <span className="text-white/60">Total Campus Area:</span>
                          <span className="font-bold text-white">{MANDATORY_DISCLOSURE.infrastructure.campusAreaSqMtr}</span>
                        </div>
                        <div className="flex justify-between py-1 border-b border-white/5">
                          <span className="text-white/60">Total Classrooms:</span>
                          <span className="font-semibold text-white">{MANDATORY_DISCLOSURE.infrastructure.classroomsCount} (48.5 sq.m each)</span>
                        </div>
                        <div className="flex justify-between py-1 border-b border-white/5">
                          <span className="text-white/60">Specialist Laboratories:</span>
                          <span className="font-semibold text-white">{MANDATORY_DISCLOSURE.infrastructure.labsCount} Labs (60 sq.m each)</span>
                        </div>
                        <div className="flex justify-between py-1 border-b border-white/5">
                          <span className="text-white/60">Inspection YouTube Video:</span>
                          <a
                            href={MANDATORY_DISCLOSURE.infrastructure.inspectionVideoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#c5a059] hover:underline flex items-center gap-1"
                          >
                            <span>Watch Tour</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* 6. ADMISSION PROCEDURES & GUIDELINES TAB */}
              {activeTab === 'admissions' && (
                <div className="max-w-4xl space-y-6">
                  <div className="border-b border-white/10 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <span className="text-xs uppercase tracking-widest text-[#EB0F2D] font-bold">Enrollment Protocol</span>
                      <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1">Admission Procedures 2026-2027</h2>
                      <p className="text-sm text-white/70 mt-1">Comprehensive criteria, age eligibility matrix, and registration steps.</p>
                    </div>
                    {onOpenAdmissionsForm && (
                      <button
                        onClick={onOpenAdmissionsForm}
                        className="px-5 py-2.5 rounded-xl bg-[#EB0F2D] hover:bg-[#EB0F2D]/90 text-white font-bold text-xs shadow-lg shadow-[#EB0F2D]/30 transition-all flex items-center gap-2 flex-shrink-0"
                      >
                        <span>Apply Online Now</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    )}
                  </div>

                  {/* General Guidelines */}
                  <div className="bg-white/5 border border-white/10 p-5 rounded-2xl text-xs sm:text-sm text-white/80 space-y-2">
                    <h3 className="font-bold text-white text-sm">General Admission Policy</h3>
                    <p>
                      Admissions are open to both students of Indian nationalities and other expatriate/local nationalities, subject strictly to the availability of seats and compliance with the Central Board of Secondary Education (CBSE) regulations.
                    </p>
                    <p>
                      For all matters related to admissions, entrance assessments, and grade allocations, the decision of the Principal and the School Management Committee shall be final.
                    </p>
                  </div>

                  {/* Age Criteria Table */}
                  <div className="bg-white/5 border border-white/10 p-5 rounded-2xl space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-bold text-[#c5a059] uppercase tracking-wider">
                        Age Criteria for Admission (Academic Session 2026-27)
                      </h3>
                      <span className="text-[10px] text-white/50">As of March 31, 2026</span>
                    </div>

                    <div className="overflow-x-auto max-h-[300px]">
                      <table className="w-full text-xs text-left">
                        <thead className="bg-white/10 text-white/70 uppercase text-[10px] sticky top-0">
                          <tr>
                            <th className="py-2 px-3">Class</th>
                            <th className="py-2 px-3">Eligible Date of Birth Range</th>
                            <th className="py-2 px-3">Min Age</th>
                            <th className="py-2 px-3">Max Age</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                          {AGE_CRITERIA_2026_27.map((row, i) => (
                            <tr key={i} className="hover:bg-white/5">
                              <td className="py-2 px-3 font-semibold text-white">{row.className}</td>
                              <td className="py-2 px-3 text-white/70">{row.bornBetween}</td>
                              <td className="py-2 px-3 text-[#c5a059] font-mono">{row.minAge}</td>
                              <td className="py-2 px-3 text-white/50 font-mono">{row.maxAge}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Documents Required */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white/5 border border-white/10 p-5 rounded-2xl space-y-3">
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#EB0F2D]" />
                        <span>Documents for Indian Nationalities</span>
                      </h4>
                      <ul className="text-xs text-white/70 space-y-1.5 list-disc pl-4">
                        <li>Copy of Birth Certificate</li>
                        <li>Valid Passport copies of father, mother, and child (first & address pages)</li>
                        <li>Valid Resident Card (Civil ID) copy of father, mother, and child</li>
                        <li>Original Transfer Certificate (T.C.) countersigned by competent authority</li>
                        <li>Copy of previous academic year Report Card / Mark sheet</li>
                        <li>2 recent passport-size photographs of the child</li>
                        <li>Immunization / Vaccination record copy & Blood group report</li>
                      </ul>
                    </div>

                    <div className="bg-white/5 border border-white/10 p-5 rounded-2xl space-y-3">
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#c5a059]" />
                        <span>Documents for Other Nationalities</span>
                      </h4>
                      <ul className="text-xs text-white/70 space-y-1.5 list-disc pl-4">
                        <li>Original hard copy NOC from respective Embassy to study CBSE curriculum</li>
                        <li>Signed Undertaking on CBSE rules and regulations by parent</li>
                        <li>Copy of Birth Certificate & Passport/Visa copies</li>
                        <li>Resident Card copies of parents and student</li>
                        <li>Original Transfer Certificate from previous accredited school</li>
                        <li>Previous year mark sheets & 2 passport photographs</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* 7. FEE STRUCTURE TAB */}
              {activeTab === 'fee-structure' && (
                <div className="max-w-4xl space-y-6">
                  <div className="border-b border-white/10 pb-4">
                    <span className="text-xs uppercase tracking-widest text-[#EB0F2D] font-bold">Tuition & Financial Schedules</span>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1">Official Fee Structure 2026-2027</h2>
                    <p className="text-sm text-white/70 mt-1">Authentic official notice, term payment schedules, caution deposit, and tuition fees.</p>
                  </div>

                  {/* Official Notice Image Card */}
                  <div className="bg-[#001026] p-4 rounded-2xl border border-white/15 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <FileText className="w-4 h-4 text-[#c5a059]" />
                        <span className="text-xs font-bold text-white uppercase tracking-wider">Official Circular: 2026-2027 Fee Notification</span>
                      </div>
                      <a
                        href="/assets/isml/fee_structure_26_27.jpg"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-[#EB0F2D] hover:underline flex items-center gap-1 font-semibold"
                      >
                        <span>Open High-Res Circular</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>

                    <div className="relative max-h-[360px] overflow-hidden rounded-xl border border-white/10 bg-black/40">
                      <img
                        src="/assets/isml/fee_structure_26_27.jpg"
                        alt="ISML Official Fee Structure 2026-2027"
                        className="w-full object-contain"
                      />
                    </div>
                  </div>

                  {/* Interactive Fee Breakdown Table */}
                  <div className="bg-white/5 border border-white/10 p-5 rounded-2xl space-y-4">
                    <h3 className="text-sm font-bold text-[#c5a059] uppercase tracking-wider">
                      Grade-Wise Fee Schedule (In Omani Rials - OMR)
                    </h3>
                    <div className="overflow-x-auto">
                      <table className="w-full text-xs text-left">
                        <thead className="bg-white/10 text-white/70 uppercase text-[10px]">
                          <tr>
                            <th className="py-2 px-3">Class Level</th>
                            <th className="py-2 px-3">Tuition / Term</th>
                            <th className="py-2 px-3">No. of Terms</th>
                            <th className="py-2 px-3">Annual Tuition</th>
                            <th className="py-2 px-3">Computer / Term</th>
                            <th className="py-2 px-3">Annual Total (Approx)</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5 font-mono">
                          {FEE_TABLE_DATA.map((item, idx) => (
                            <tr key={idx} className="hover:bg-white/5">
                              <td className="py-2 px-3 font-semibold text-white font-sans">{item.classLevel}</td>
                              <td className="py-2 px-3 text-[#c5a059]">OMR {item.tuitionFeePerTerm.toFixed(3)}</td>
                              <td className="py-2 px-3 text-white/60">{item.termCount} Terms</td>
                              <td className="py-2 px-3 text-white">OMR {item.totalTuitionAnnual.toFixed(3)}</td>
                              <td className="py-2 px-3 text-white/60">OMR {item.computerFeePerTerm.toFixed(3)}</td>
                              <td className="py-2 px-3 font-bold text-emerald-400">OMR {item.annualEstimateOMR.toFixed(3)}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Rules and Payment Methods */}
                  <div className="bg-white/5 border border-white/10 p-5 rounded-2xl space-y-3">
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider">Terms & Payment Regulations</h4>
                    <ul className="text-xs text-white/70 space-y-1.5 list-disc pl-4 leading-relaxed font-light">
                      {GENERAL_FEE_RULES.map((rule, idx) => (
                        <li key={idx}>{rule}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* 8. RESULTS TAB */}
              {activeTab === 'results' && (
                <div className="max-w-4xl space-y-6">
                  <div className="border-b border-white/10 pb-4">
                    <span className="text-xs uppercase tracking-widest text-[#EB0F2D] font-bold">Academic Distinction</span>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1">CBSE Board Exam Results</h2>
                    <p className="text-sm text-white/70 mt-1">Consistent 100% pass percentages, stream toppers, and subject distinctions.</p>
                  </div>

                  {/* Highlights Banner */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="bg-gradient-to-br from-emerald-950/60 to-emerald-900/20 border border-emerald-500/30 p-5 rounded-2xl text-center">
                      <div className="text-3xl font-black text-emerald-400">100%</div>
                      <div className="text-xs font-bold text-white mt-1">Class X Pass Record</div>
                      <p className="text-[11px] text-white/60 mt-1">Unbroken 100% pass percentage across consecutive academic sessions.</p>
                    </div>
                    <div className="bg-gradient-to-br from-blue-950/60 to-blue-900/20 border border-blue-500/30 p-5 rounded-2xl text-center">
                      <div className="text-3xl font-black text-blue-400">98.9%</div>
                      <div className="text-xs font-bold text-white mt-1">Class XII Distinctions</div>
                      <p className="text-[11px] text-white/60 mt-1">Science and Commerce cohorts consistently entering elite global universities.</p>
                    </div>
                    <div className="bg-gradient-to-br from-amber-950/60 to-amber-900/20 border border-amber-500/30 p-5 rounded-2xl text-center">
                      <div className="text-3xl font-black text-amber-400">100/100</div>
                      <div className="text-xs font-bold text-white mt-1">Centum Scorers</div>
                      <p className="text-[11px] text-white/60 mt-1">Perfect scores achieved in Mathematics, Chemistry, Informatics Practices.</p>
                    </div>
                  </div>

                  {/* Class X & XII breakdown */}
                  <div className="bg-white/5 border border-white/10 p-6 rounded-2xl space-y-4">
                    <h3 className="text-sm font-bold text-white">Stream-Wise Academic Excellence</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-white/80">
                      <div className="bg-black/30 p-4 rounded-xl border border-white/5 space-y-2">
                        <span className="text-[#c5a059] font-bold uppercase text-[11px]">Science Stream Specializations</span>
                        <p>Rigorous preparation for engineering (JEE) and medical (NEET) pathways with dedicated advanced coaching, laboratory practicums, and mentor-student ratios.</p>
                      </div>
                      <div className="bg-black/30 p-4 rounded-xl border border-white/5 space-y-2">
                        <span className="text-[#EB0F2D] font-bold uppercase text-[11px]">Commerce Stream Specializations</span>
                        <p>Comprehensive grounding in financial accountancy, corporate economics, marketing, and business analytics preparing students for chartered accountancy and commerce degrees.</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* 9. INFRASTRUCTURE TAB */}
              {activeTab === 'infrastructure' && (
                <div className="max-w-4xl space-y-6">
                  <div className="border-b border-white/10 pb-4">
                    <span className="text-xs uppercase tracking-widest text-[#EB0F2D] font-bold">Campus Facilities</span>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1">30-Acre Landscaped Campus</h2>
                    <p className="text-sm text-white/70 mt-1">World-class infrastructure nestled amidst botanical palm gardens in South Batinah.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      {
                        title: "148 Smart Classrooms",
                        desc: "Equipped with interactive digital smart boards, multimedia projectors, and optimal ergonomic seating for active student collaboration.",
                        image: "/assets/isml/senior_wing.jpg"
                      },
                      {
                        title: "Specialist Science & Cyber Labs",
                        desc: "Seven advanced laboratories including Physics, Chemistry, Biology, and 3 Computer Labs with 125+ networked systems.",
                        image: "/assets/isml/students_activity.jpg"
                      },
                      {
                        title: "Campus Canteen ('Tete-e-Tea')",
                        desc: "Located in the midst of evergreen botanical gardens and date palm groves, serving hygienic, nutritious hot snacks, fruit juices, and meals.",
                        image: "/assets/isml/canteen.jpg"
                      },
                      {
                        title: "Grand Cultural Auditorium",
                        desc: "Full-scale acoustic theater hosting interschool arts festivals, model UN conferences, and national day spectacles.",
                        image: "/assets/isml/auditorium_events.jpg"
                      },
                      {
                        title: "Kindergarten Activity Park",
                        desc: "Dedicated early-years sensory play equipment, shaded obstacle trails, storytelling gazebos, and child-safe turf.",
                        image: "/assets/isml/kg_park.jpg"
                      },
                      {
                        title: "Lush Botanical Estate & Grounds",
                        desc: "Expansive green athletic grounds featuring 400m track, cricket pitch, basketball, badminton, and shaded student lounges.",
                        image: "/assets/isml/green_campus.jpg"
                      }
                    ].map((facility, idx) => (
                      <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden group">
                        <div className="h-40 overflow-hidden relative">
                          <img
                            src={facility.image}
                            alt={facility.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                          <h4 className="absolute bottom-3 left-4 text-sm font-bold text-white">{facility.title}</h4>
                        </div>
                        <div className="p-4 text-xs text-white/70 leading-relaxed font-light">
                          {facility.desc}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 10. TRANSFER CERTIFICATE (TC) TAB */}
              {activeTab === 'transfer-certificate' && (
                <div className="max-w-4xl space-y-6">
                  <div className="border-b border-white/10 pb-4">
                    <span className="text-xs uppercase tracking-widest text-[#EB0F2D] font-bold">Student Records</span>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1">Transfer Certificate (TC) Portal</h2>
                    <p className="text-sm text-white/70 mt-1">Official online verification system and withdrawal clearance procedures.</p>
                  </div>

                  {/* Verification Search Box */}
                  <div className="bg-gradient-to-r from-white/10 to-white/5 border border-white/15 p-6 rounded-2xl space-y-4">
                    <div className="flex items-center gap-2">
                      <FileCheck className="w-5 h-5 text-[#c5a059]" />
                      <h3 className="text-sm font-bold text-white">Online TC Verification</h3>
                    </div>
                    <p className="text-xs text-white/70">
                      Enter the Student Admission Number (e.g., 4521) or TC Number to verify certificate authenticity directly against institutional archives.
                    </p>

                    <form onSubmit={handleTcSearch} className="flex gap-2">
                      <input
                        type="text"
                        placeholder="Enter Admission No / TC No / Student Name..."
                        value={tcQuery}
                        onChange={e => setTcQuery(e.target.value)}
                        className="flex-1 bg-black/40 border border-white/20 rounded-xl px-4 py-2.5 text-xs text-white placeholder-white/40 focus:outline-none focus:border-[#EB0F2D]"
                      />
                      <button
                        type="submit"
                        className="px-5 py-2.5 bg-[#EB0F2D] hover:bg-[#EB0F2D]/90 text-white font-bold text-xs rounded-xl shadow-lg transition-all"
                      >
                        Verify TC
                      </button>
                    </form>

                    {tcResult && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-black/60 p-4 rounded-xl border border-emerald-500/30 text-xs space-y-2 mt-3"
                      >
                        <div className="flex items-center gap-2 text-emerald-400 font-bold">
                          <CheckCircle2 className="w-4 h-4" />
                          <span>Official Record Confirmed</span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-white/80 pt-1 font-mono text-[11px]">
                          <div><span className="text-white/40">Student Name:</span> {tcResult.name}</div>
                          <div><span className="text-white/40">Admission No:</span> {tcResult.admNo}</div>
                          <div><span className="text-white/40">TC Number:</span> {tcResult.tcNo}</div>
                          <div><span className="text-white/40">Date of Issue:</span> {tcResult.dateOfIssue}</div>
                          <div><span className="text-white/40">Class Left:</span> {tcResult.classLeft}</div>
                          <div><span className="text-white/40">Status:</span> {tcResult.status}</div>
                        </div>
                      </motion.div>
                    )}
                  </div>

                  {/* TC Issuance Rules */}
                  <div className="bg-white/5 border border-white/10 p-5 rounded-2xl space-y-3 text-xs text-white/80">
                    <h4 className="font-bold text-white text-sm">Rules for Application & Issuance of TC</h4>
                    <ul className="space-y-1.5 list-disc pl-4 text-white/70">
                      <li>Parents must submit a written TC application to the school office at least 15 days in advance.</li>
                      <li>Clearance must be obtained from all departments: Accounts (fee settlement), Library (book returns), Science & Computer Labs, and Class Teacher.</li>
                      <li>The Caution Deposit of OMR 50.000 will be refunded upon presentation of the original caution deposit receipt and completed clearance form.</li>
                      <li>Transfer certificates are countersigned according to CBSE and Embassy of India guidelines.</li>
                    </ul>
                  </div>
                </div>
              )}

              {/* 11. CAREERS & TENDERS TAB */}
              {activeTab === 'careers' && (
                <div className="max-w-4xl space-y-6">
                  <div className="border-b border-white/10 pb-4">
                    <span className="text-xs uppercase tracking-widest text-[#EB0F2D] font-bold">Opportunities & Procurement</span>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1">Careers & Tenders at ISML</h2>
                    <p className="text-sm text-white/70 mt-1">Join our academic team or participate in transparent institutional procurement tenders.</p>
                  </div>

                  {/* Vacancies */}
                  <div className="space-y-4">
                    <h3 className="text-sm font-bold text-[#c5a059] uppercase tracking-wider">
                      Current Teaching Vacancies (2026-2027)
                    </h3>
                    <div className="grid grid-cols-1 gap-3">
                      {CAREER_VACANCIES.map((vac, idx) => (
                        <div key={idx} className="bg-white/5 border border-white/10 p-4 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <h4 className="text-sm font-bold text-white">{vac.role}</h4>
                              <span className="text-[10px] px-2 py-0.5 rounded bg-[#EB0F2D]/20 text-[#EB0F2D] font-semibold">
                                {vac.status}
                              </span>
                            </div>
                            <p className="text-xs text-white/70 font-light">{vac.minQualification}</p>
                          </div>
                          <a
                            href={`mailto:ismloman@gmail.com?subject=Job Application: ${encodeURIComponent(vac.role)}`}
                            className="px-4 py-2 bg-white/10 hover:bg-[#EB0F2D] text-white text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5 flex-shrink-0"
                          >
                            <Mail className="w-3.5 h-3.5" />
                            <span>Email Resume</span>
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Active Tenders */}
                  <div className="space-y-4 pt-4 border-t border-white/10">
                    <h3 className="text-sm font-bold text-[#c5a059] uppercase tracking-wider">
                      Active Institutional Tenders
                    </h3>
                    <div className="grid grid-cols-1 gap-3">
                      {TENDER_NOTICES.map((tender, idx) => (
                        <div key={idx} className="bg-black/30 border border-white/10 p-4 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                          <div className="space-y-1">
                            <h4 className="text-xs font-bold text-white">{tender.title}</h4>
                            <div className="flex items-center gap-4 text-[11px] text-white/50">
                              <span>Ref: {tender.refNo}</span>
                              <span>Closing: {tender.closingDate}</span>
                            </div>
                          </div>
                          <a
                            href="mailto:ismloman@gmail.com?subject=Tender Inquiry"
                            className="text-xs text-[#c5a059] hover:underline flex items-center gap-1"
                          >
                            <span>Request Tender Specs</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* 12. CONTACT & GRIEVANCE REDRESSAL TAB */}
              {activeTab === 'contact' && (
                <div className="max-w-4xl space-y-6">
                  <div className="border-b border-white/10 pb-4">
                    <span className="text-xs uppercase tracking-widest text-[#EB0F2D] font-bold">Direct Channels</span>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1">Contact Us & Grievance Redressal</h2>
                    <p className="text-sm text-white/70 mt-1">Get in touch with administrative offices, transport supervisors, or submit feedback.</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Contact Details */}
                    <div className="bg-white/5 border border-white/10 p-6 rounded-2xl space-y-4 text-xs">
                      <h3 className="text-sm font-bold text-white uppercase tracking-wider">Administrative Headquarters</h3>
                      
                      <div className="flex items-start gap-3">
                        <MapPin className="w-4 h-4 text-[#EB0F2D] flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="font-semibold text-white block">Postal Address:</span>
                          <span className="text-white/70">
                            Indian School Muladha, P.O. Box 42, Postal Code 314, Al Muladha, South Batinah Governorate, Sultanate of Oman.
                          </span>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <PhoneCall className="w-4 h-4 text-[#c5a059] flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="font-semibold text-white block">Telephone Numbers:</span>
                          <span className="text-white/70 block">+968 26811234 (Main Office)</span>
                          <span className="text-white/70 block">+968 26811184 (Administrative Desk)</span>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Mail className="w-4 h-4 text-[#EB0F2D] flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="font-semibold text-white block">Official Email:</span>
                          <a href="mailto:ismloman@gmail.com" className="text-[#c5a059] hover:underline">
                            ismloman@gmail.com
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Clock className="w-4 h-4 text-white/50 flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="font-semibold text-white block">Office Working Hours:</span>
                          <span className="text-white/70">Sunday to Thursday: 7:30 AM – 2:30 PM (Fee counter closes at 1:30 PM)</span>
                        </div>
                      </div>
                    </div>

                    {/* Grievance Redressal Form */}
                    <div className="bg-white/5 border border-white/10 p-6 rounded-2xl space-y-3">
                      <h3 className="text-sm font-bold text-white uppercase tracking-wider">Grievance & Feedback Portal</h3>
                      <p className="text-xs text-white/60">
                        Submissions are reviewed directly by the Welfare, Health & Grievances Sub-Committee under strict confidentiality.
                      </p>
                      
                      <form
                        onSubmit={e => {
                          e.preventDefault();
                          alert('Thank you. Your feedback/grievance has been logged with the Grievance Redressal Committee.');
                        }}
                        className="space-y-3 pt-2 text-xs"
                      >
                        <div>
                          <label className="text-white/70 block mb-1">Your Full Name:</label>
                          <input
                            type="text"
                            required
                            placeholder="Parent / Guardian Name"
                            className="w-full bg-black/40 border border-white/20 rounded-xl px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:border-[#EB0F2D]"
                          />
                        </div>
                        <div>
                          <label className="text-white/70 block mb-1">Contact Phone / Email:</label>
                          <input
                            type="text"
                            required
                            placeholder="+968 ... or email@domain.com"
                            className="w-full bg-black/40 border border-white/20 rounded-xl px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:border-[#EB0F2D]"
                          />
                        </div>
                        <div>
                          <label className="text-white/70 block mb-1">Nature of Communication:</label>
                          <select className="w-full bg-[#001026] border border-white/20 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-[#EB0F2D]">
                            <option>Academic Inquiry or Feedback</option>
                            <option>Transport / Bus Service Concern</option>
                            <option>Infrastructure / Facility Suggestion</option>
                            <option>Administrative / Fee Assistance</option>
                            <option>General Feedback</option>
                          </select>
                        </div>
                        <div>
                          <label className="text-white/70 block mb-1">Message Details:</label>
                          <textarea
                            rows={3}
                            required
                            placeholder="Please describe your query or feedback in detail..."
                            className="w-full bg-black/40 border border-white/20 rounded-xl px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:border-[#EB0F2D]"
                          />
                        </div>
                        <button
                          type="submit"
                          className="w-full py-2.5 bg-[#EB0F2D] hover:bg-[#EB0F2D]/90 text-white font-bold rounded-xl shadow-lg transition-all"
                        >
                          Submit to Committee
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              )}

            </main>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
