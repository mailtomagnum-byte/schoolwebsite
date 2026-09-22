import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  Users,
  Newspaper,
  Award,
  BarChart3,
  Bell,
  Plus,
  Trash2,
  Edit3,
  CheckCircle2,
  Clock,
  Search,
  Filter,
  ArrowUpRight,
  RotateCcw,
  Save,
  Phone,
  Mail,
  Calendar,
  Sparkles,
  ShieldCheck,
  ChevronDown
} from 'lucide-react';
import { useCrm } from '../context/CrmContext';
import { AdmissionLead, LeadStatus, NewsItem, StudentPersona } from '../types';

interface AdminCrmModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdminCrmModal: React.FC<AdminCrmModalProps> = ({ isOpen, onClose }) => {
  const {
    leads,
    addLead,
    updateLeadStatus,
    updateLeadNotes,
    deleteLead,
    news,
    addNews,
    updateNews,
    deleteNews,
    studentPersonas,
    updateStudentPersona,
    stats,
    updateStat,
    announcement,
    updateAnnouncement,
    resetToDefaultSeed,
  } = useCrm();

  const [activeTab, setActiveTab] = useState<'leads' | 'news' | 'personas' | 'stats' | 'broadcast'>('leads');
  const [leadSearch, setLeadSearch] = useState('');
  const [leadStatusFilter, setLeadStatusFilter] = useState<string>('all');
  const [editingNotesLeadId, setEditingNotesLeadId] = useState<string | null>(null);
  const [tempNotes, setTempNotes] = useState('');

  // Add Lead Modal state
  const [isAddLeadOpen, setIsAddLeadOpen] = useState(false);
  const [newLeadStudent, setNewLeadStudent] = useState('');
  const [newLeadParent, setNewLeadParent] = useState('');
  const [newLeadPhone, setNewLeadPhone] = useState('');
  const [newLeadEmail, setNewLeadEmail] = useState('');
  const [newLeadGrade, setNewLeadGrade] = useState('Grade 1');
  const [newLeadNotes, setNewLeadNotes] = useState('');

  // Add / Edit News state
  const [isNewsFormOpen, setIsNewsFormOpen] = useState(false);
  const [editingNewsId, setEditingNewsId] = useState<string | null>(null);
  const [newsTitle, setNewsTitle] = useState('');
  const [newsCategory, setNewsCategory] = useState('Admissions Open');
  const [newsDate, setNewsDate] = useState('Sep 2026');
  const [newsExcerpt, setNewsExcerpt] = useState('');
  const [newsImage, setNewsImage] = useState('/assets/isml/original_school_campus.jpg');
  const [newsFeatured, setNewsFeatured] = useState(false);

  // Success Notification banner
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  // Filtered Leads
  const filteredLeads = leads.filter((lead) => {
    const matchesSearch =
      lead.studentName.toLowerCase().includes(leadSearch.toLowerCase()) ||
      lead.parentName.toLowerCase().includes(leadSearch.toLowerCase()) ||
      lead.email.toLowerCase().includes(leadSearch.toLowerCase()) ||
      lead.phone.includes(leadSearch);
    const matchesFilter = leadStatusFilter === 'all' || lead.status === leadStatusFilter;
    return matchesSearch && matchesFilter;
  });

  const handleSaveNotes = (id: string) => {
    updateLeadNotes(id, tempNotes);
    setEditingNotesLeadId(null);
    showToast('Internal counselor notes saved.');
  };

  const handleCreateLead = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newLeadStudent || !newLeadParent || !newLeadPhone) return;

    addLead({
      studentName: newLeadStudent,
      parentName: newLeadParent,
      phone: newLeadPhone,
      email: newLeadEmail || 'inquiry@parent.com',
      gradeApplying: newLeadGrade,
      academicYear: '2026-2027',
      notes: newLeadNotes || 'Walk-in enquiry at administrative reception.',
      status: 'New',
      source: 'Walk-In',
    });

    setIsAddLeadOpen(false);
    setNewLeadStudent('');
    setNewLeadParent('');
    setNewLeadPhone('');
    setNewLeadEmail('');
    setNewLeadNotes('');
    showToast('New admission lead logged to CRM pipeline.');
  };

  const handleOpenNewsForm = (existing?: NewsItem) => {
    if (existing) {
      setEditingNewsId(existing.id);
      setNewsTitle(existing.title);
      setNewsCategory(existing.category);
      setNewsDate(existing.date);
      setNewsExcerpt(existing.excerpt || existing.summary || '');
      setNewsImage(existing.image || '/assets/isml/original_school_campus.jpg');
      setNewsFeatured(!!existing.featured);
    } else {
      setEditingNewsId(null);
      setNewsTitle('');
      setNewsCategory('Admissions Open');
      setNewsDate('Sep 2026');
      setNewsExcerpt('');
      setNewsImage('/assets/isml/original_school_campus.jpg');
      setNewsFeatured(false);
    }
    setIsNewsFormOpen(true);
  };

  const handleSaveNews = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsTitle.trim()) return;

    if (editingNewsId) {
      updateNews(editingNewsId, {
        title: newsTitle,
        category: newsCategory,
        date: newsDate,
        excerpt: newsExcerpt,
        image: newsImage,
        featured: newsFeatured,
      });
      showToast('News story updated successfully.');
    } else {
      addNews({
        title: newsTitle,
        category: newsCategory,
        date: newsDate,
        excerpt: newsExcerpt,
        image: newsImage,
        featured: newsFeatured,
      });
      showToast('New story published to homepage Gazette.');
    }
    setIsNewsFormOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/80 backdrop-blur-md overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.96 }}
        className="bg-[#001028] text-white w-full max-w-6xl h-[92vh] rounded-3xl border border-white/20 shadow-2xl flex flex-col overflow-hidden"
      >
        {/* CRM Top Header */}
        <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-black/30">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#EB0F2D] flex items-center justify-center text-white shadow-lg shadow-[#EB0F2D]/30 font-bold">
              CRM
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="font-poppins text-lg font-bold text-white">
                  ISML Institutional Portal & CRM Engine
                </h2>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  Live Dynamic Engine
                </span>
              </div>
              <p className="text-xs text-white/60">
                Centralized Admissions Leads Pipeline, News Gazette, Personas & Institutional Data
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                if (window.confirm('Reset all CRM data and news back to initial seed default?')) {
                  resetToDefaultSeed();
                  showToast('All CRM data reset to default seed.');
                }
              }}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white/70 hover:text-white text-xs border border-white/10 transition-colors"
              title="Reset to default seed data"
            >
              <RotateCcw className="w-3.5 h-3.5 text-[#c5a059]" />
              <span>Reset Seed</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/15 text-white/70 hover:text-white transition-colors"
              aria-label="Close CRM"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Global Toast Notification */}
        <AnimatePresence>
          {toastMessage && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-emerald-600 text-white px-4 py-2 text-xs font-semibold flex items-center justify-center gap-2 shadow-lg"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>{toastMessage}</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navigation Tabs */}
        <div className="flex items-center px-6 bg-black/20 border-b border-white/10 overflow-x-auto">
          <button
            onClick={() => setActiveTab('leads')}
            className={`flex items-center gap-2 py-3.5 px-4 text-xs font-bold uppercase tracking-wider border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'leads'
                ? 'border-[#EB0F2D] text-white bg-white/5'
                : 'border-transparent text-white/60 hover:text-white'
            }`}
          >
            <Users className="w-4 h-4 text-[#EB0F2D]" />
            <span>Admissions Leads</span>
            <span className="ml-1.5 px-2 py-0.5 rounded-full bg-[#EB0F2D]/20 text-[#EB0F2D] text-[10px] font-bold">
              {leads.length}
            </span>
          </button>

          <button
            onClick={() => setActiveTab('news')}
            className={`flex items-center gap-2 py-3.5 px-4 text-xs font-bold uppercase tracking-wider border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'news'
                ? 'border-[#EB0F2D] text-white bg-white/5'
                : 'border-transparent text-white/60 hover:text-white'
            }`}
          >
            <Newspaper className="w-4 h-4 text-[#c5a059]" />
            <span>Gazette News</span>
            <span className="ml-1.5 px-2 py-0.5 rounded-full bg-white/10 text-white text-[10px] font-bold">
              {news.length}
            </span>
          </button>

          <button
            onClick={() => setActiveTab('personas')}
            className={`flex items-center gap-2 py-3.5 px-4 text-xs font-bold uppercase tracking-wider border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'personas'
                ? 'border-[#EB0F2D] text-white bg-white/5'
                : 'border-transparent text-white/60 hover:text-white'
            }`}
          >
            <Award className="w-4 h-4 text-emerald-400" />
            <span>Student Spotlights</span>
          </button>

          <button
            onClick={() => setActiveTab('stats')}
            className={`flex items-center gap-2 py-3.5 px-4 text-xs font-bold uppercase tracking-wider border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'stats'
                ? 'border-[#EB0F2D] text-white bg-white/5'
                : 'border-transparent text-white/60 hover:text-white'
            }`}
          >
            <BarChart3 className="w-4 h-4 text-blue-400" />
            <span>Campus Key Metrics</span>
          </button>

          <button
            onClick={() => setActiveTab('broadcast')}
            className={`flex items-center gap-2 py-3.5 px-4 text-xs font-bold uppercase tracking-wider border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'broadcast'
                ? 'border-[#EB0F2D] text-white bg-white/5'
                : 'border-transparent text-white/60 hover:text-white'
            }`}
          >
            <Bell className="w-4 h-4 text-amber-400" />
            <span>Urgent Marquee Alert</span>
            {announcement.enabled && (
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            )}
          </button>
        </div>

        {/* Tab Body Contents */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">

          {/* TAB 1: ADMISSIONS LEADS CRM */}
          {activeTab === 'leads' && (
            <div className="space-y-6">
              {/* Pipeline Metric Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <span className="text-[11px] uppercase tracking-wider text-white/50 block font-semibold">
                    Total Inquiries
                  </span>
                  <div className="text-2xl sm:text-3xl font-bold text-white mt-1">
                    {leads.length}
                  </div>
                  <span className="text-[10px] text-white/40 block mt-1">
                    Active admissions pipeline
                  </span>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <span className="text-[11px] uppercase tracking-wider text-amber-400 block font-semibold">
                    Tours Scheduled
                  </span>
                  <div className="text-2xl sm:text-3xl font-bold text-amber-400 mt-1">
                    {leads.filter((l) => l.status === 'Tour Scheduled').length}
                  </div>
                  <span className="text-[10px] text-white/40 block mt-1">
                    Campus visit walk-ins
                  </span>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <span className="text-[11px] uppercase tracking-wider text-blue-400 block font-semibold">
                    In Review / Docs
                  </span>
                  <div className="text-2xl sm:text-3xl font-bold text-blue-400 mt-1">
                    {leads.filter((l) => l.status === 'In Review' || l.status === 'Document Verification').length}
                  </div>
                  <span className="text-[10px] text-white/40 block mt-1">
                    Under academic screening
                  </span>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <span className="text-[11px] uppercase tracking-wider text-emerald-400 block font-semibold">
                    Enrolled / Admitted
                  </span>
                  <div className="text-2xl sm:text-3xl font-bold text-emerald-400 mt-1">
                    {leads.filter((l) => l.status === 'Admitted').length}
                  </div>
                  <span className="text-[10px] text-white/40 block mt-1">
                    Fee confirmed 2026-27
                  </span>
                </div>
              </div>

              {/* Action Toolbar */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3 flex-1">
                  <div className="relative flex-1 max-w-md">
                    <Search className="w-4 h-4 text-white/40 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="Search by student, parent, email, phone..."
                      value={leadSearch}
                      onChange={(e) => setLeadSearch(e.target.value)}
                      className="w-full pl-9 pr-4 py-2 bg-white/5 border border-white/15 rounded-xl text-xs text-white placeholder-white/40 focus:outline-none focus:border-[#EB0F2D]"
                    />
                  </div>

                  <select
                    value={leadStatusFilter}
                    onChange={(e) => setLeadStatusFilter(e.target.value)}
                    className="py-2 px-3 bg-white/5 border border-white/15 rounded-xl text-xs text-white focus:outline-none focus:border-[#EB0F2D]"
                  >
                    <option value="all" className="bg-[#001028]">All Statuses</option>
                    <option value="New" className="bg-[#001028]">New</option>
                    <option value="In Review" className="bg-[#001028]">In Review</option>
                    <option value="Tour Scheduled" className="bg-[#001028]">Tour Scheduled</option>
                    <option value="Document Verification" className="bg-[#001028]">Document Verification</option>
                    <option value="Admitted" className="bg-[#001028]">Admitted</option>
                    <option value="Declined" className="bg-[#001028]">Declined</option>
                  </select>
                </div>

                <button
                  onClick={() => setIsAddLeadOpen(true)}
                  className="flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-[#EB0F2D] hover:bg-[#c90b24] text-white text-xs font-bold tracking-wider uppercase transition-colors shadow-lg shadow-[#EB0F2D]/20"
                >
                  <Plus className="w-4 h-4" />
                  <span>Log Walk-in Lead</span>
                </button>
              </div>

              {/* Leads Table */}
              <div className="rounded-2xl border border-white/10 overflow-hidden bg-white/[0.02]">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-white/5 border-b border-white/10 text-white/60 uppercase font-semibold text-[10px] tracking-wider">
                      <tr>
                        <th className="py-3 px-4">Student & Grade</th>
                        <th className="py-3 px-4">Parent & Contact</th>
                        <th className="py-3 px-4">Pipeline Status</th>
                        <th className="py-3 px-4">Date / Source</th>
                        <th className="py-3 px-4">Counselor Notes</th>
                        <th className="py-3 px-4 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {filteredLeads.length === 0 ? (
                        <tr>
                          <td colSpan={6} className="py-8 text-center text-white/40">
                            No admissions leads match your current search or filter.
                          </td>
                        </tr>
                      ) : (
                        filteredLeads.map((lead) => {
                          const statusColors: Record<LeadStatus, string> = {
                            New: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
                            'In Review': 'bg-blue-500/20 text-blue-300 border-blue-500/30',
                            'Tour Scheduled': 'bg-amber-500/20 text-amber-300 border-amber-500/30',
                            'Document Verification': 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
                            Admitted: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
                            Declined: 'bg-red-500/20 text-red-300 border-red-500/30',
                          };

                          return (
                            <tr key={lead.id} className="hover:bg-white/[0.03] transition-colors">
                              <td className="py-3.5 px-4">
                                <div className="font-bold text-white text-sm">
                                  {lead.studentName}
                                </div>
                                <span className="text-xs text-[#c5a059] font-medium">
                                  {lead.gradeApplying}
                                </span>
                              </td>
                              <td className="py-3.5 px-4 space-y-1">
                                <div className="text-white/90 font-medium">
                                  {lead.parentName}
                                </div>
                                <div className="flex items-center gap-3 text-[11px] text-white/50">
                                  <a
                                    href={`tel:${lead.phone}`}
                                    className="hover:text-emerald-400 flex items-center gap-1"
                                  >
                                    <Phone className="w-3 h-3" />
                                    <span>{lead.phone}</span>
                                  </a>
                                  <a
                                    href={`mailto:${lead.email}`}
                                    className="hover:text-blue-400 flex items-center gap-1"
                                  >
                                    <Mail className="w-3 h-3" />
                                    <span>{lead.email}</span>
                                  </a>
                                </div>
                              </td>
                              <td className="py-3.5 px-4">
                                <select
                                  value={lead.status}
                                  onChange={(e) => {
                                    updateLeadStatus(lead.id, e.target.value as LeadStatus);
                                    showToast(`Status updated to ${e.target.value}`);
                                  }}
                                  className={`py-1 px-2.5 rounded-lg text-[11px] font-bold border focus:outline-none cursor-pointer ${
                                    statusColors[lead.status] || 'bg-white/10 text-white'
                                  }`}
                                >
                                  <option value="New" className="bg-[#001028] text-white">New</option>
                                  <option value="In Review" className="bg-[#001028] text-white">In Review</option>
                                  <option value="Tour Scheduled" className="bg-[#001028] text-white">Tour Scheduled</option>
                                  <option value="Document Verification" className="bg-[#001028] text-white">Document Verification</option>
                                  <option value="Admitted" className="bg-[#001028] text-white">Admitted</option>
                                  <option value="Declined" className="bg-[#001028] text-white">Declined</option>
                                </select>
                              </td>
                              <td className="py-3.5 px-4">
                                <div className="text-white/80">{lead.submissionDate}</div>
                                <span className="text-[10px] text-white/40 block">{lead.source}</span>
                              </td>
                              <td className="py-3.5 px-4 max-w-xs">
                                {editingNotesLeadId === lead.id ? (
                                  <div className="flex items-center gap-2">
                                    <input
                                      type="text"
                                      value={tempNotes}
                                      onChange={(e) => setTempNotes(e.target.value)}
                                      className="py-1 px-2 bg-white/10 rounded border border-white/20 text-xs text-white focus:outline-none w-full"
                                    />
                                    <button
                                      onClick={() => handleSaveNotes(lead.id)}
                                      className="p-1 rounded bg-emerald-600 hover:bg-emerald-500 text-white"
                                      title="Save notes"
                                    >
                                      <Save className="w-3.5 h-3.5" />
                                    </button>
                                  </div>
                                ) : (
                                  <div
                                    onClick={() => {
                                      setEditingNotesLeadId(lead.id);
                                      setTempNotes(lead.notes || '');
                                    }}
                                    className="cursor-pointer text-white/70 hover:text-white line-clamp-2 hover:bg-white/5 p-1 rounded transition-colors"
                                    title="Click to edit notes"
                                  >
                                    {lead.notes || <span className="italic text-white/30">Click to add counselor note...</span>}
                                  </div>
                                )}
                              </td>
                              <td className="py-3.5 px-4 text-right">
                                <button
                                  onClick={() => {
                                    if (window.confirm(`Delete lead record for ${lead.studentName}?`)) {
                                      deleteLead(lead.id);
                                      showToast('Lead deleted.');
                                    }
                                  }}
                                  className="p-1.5 rounded-lg bg-white/5 hover:bg-red-500/20 text-white/40 hover:text-red-400 transition-colors"
                                  title="Delete lead"
                                >
                                  <Trash2 className="w-3.5 h-3.5" />
                                </button>
                              </td>
                            </tr>
                          );
                        })
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: NEWS & GAZETTE CMS */}
          {activeTab === 'news' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-poppins text-lg font-bold text-white">
                    Homepage Gazette & Story Management
                  </h3>
                  <p className="text-xs text-white/60">
                    Publish, edit, or feature articles displayed on the homepage news grid in real-time.
                  </p>
                </div>
                <button
                  onClick={() => handleOpenNewsForm()}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#EB0F2D] hover:bg-[#c90b24] text-white text-xs font-bold tracking-wider uppercase transition-colors shadow-lg shadow-[#EB0F2D]/20"
                >
                  <Plus className="w-4 h-4" />
                  <span>Publish New Story</span>
                </button>
              </div>

              {/* News Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {news.map((item) => (
                  <div
                    key={item.id}
                    className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between group"
                  >
                    <div>
                      <div className="aspect-[16/9] rounded-xl overflow-hidden mb-3 relative bg-black/40">
                        <img
                          src={item.image || '/assets/isml/original_school_campus.jpg'}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-md text-[10px] font-bold text-[#c5a059]">
                          {item.category}
                        </div>
                        {item.featured && (
                          <div className="absolute top-2 right-2 px-2 py-0.5 rounded-md bg-[#EB0F2D] text-[10px] font-bold text-white">
                            Featured
                          </div>
                        )}
                      </div>

                      <div className="text-[11px] text-white/50 mb-1">{item.date}</div>
                      <h4 className="font-poppins font-bold text-sm text-white mb-2 line-clamp-2">
                        {item.title}
                      </h4>
                      <p className="text-xs text-white/70 line-clamp-2 leading-relaxed">
                        {item.excerpt || item.summary}
                      </p>
                    </div>

                    <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between">
                      <button
                        onClick={() => handleOpenNewsForm(item)}
                        className="flex items-center gap-1.5 text-xs text-white/70 hover:text-white font-medium"
                      >
                        <Edit3 className="w-3.5 h-3.5 text-[#c5a059]" />
                        <span>Edit Story</span>
                      </button>
                      <button
                        onClick={() => {
                          if (window.confirm(`Delete story "${item.title}"?`)) {
                            deleteNews(item.id);
                            showToast('News story removed from Gazette.');
                          }
                        }}
                        className="p-1.5 rounded-lg text-white/40 hover:text-red-400 hover:bg-red-500/10 transition-colors"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: STUDENT SPOTLIGHTS (PERSONAS) */}
          {activeTab === 'personas' && (
            <div className="space-y-6">
              <div>
                <h3 className="font-poppins text-lg font-bold text-white">
                  Student Spotlight & 3D Interactive Carousel
                </h3>
                <p className="text-xs text-white/60">
                  Update the 4 prominent student stories highlighted on the homepage interactive showcase.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {studentPersonas.map((persona) => (
                  <div
                    key={persona.id}
                    className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-4"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-xl overflow-hidden border border-white/20 flex-shrink-0">
                        <img
                          src={persona.image}
                          alt={persona.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <input
                          type="text"
                          value={persona.name}
                          onChange={(e) => updateStudentPersona(persona.id, { name: e.target.value })}
                          className="font-poppins font-bold text-lg text-white bg-transparent border-b border-transparent hover:border-white/20 focus:border-[#EB0F2D] focus:outline-none w-full"
                          title="Click to edit name"
                        />
                        <input
                          type="text"
                          value={persona.title}
                          onChange={(e) => updateStudentPersona(persona.id, { title: e.target.value })}
                          className="text-xs font-semibold text-[#EB0F2D] bg-transparent border-b border-transparent hover:border-white/20 focus:border-[#EB0F2D] focus:outline-none w-full"
                          title="Click to edit title"
                        />
                        <span className="text-[10px] text-white/40 uppercase tracking-wider block">
                          Category: {persona.category}
                        </span>
                      </div>
                    </div>

                    <div>
                      <label className="text-[10px] uppercase tracking-wider text-white/50 block mb-1">
                        Direct Student Quote
                      </label>
                      <textarea
                        rows={2}
                        value={persona.quote}
                        onChange={(e) => updateStudentPersona(persona.id, { quote: e.target.value })}
                        className="w-full p-2.5 rounded-xl bg-white/5 border border-white/10 text-xs text-white/90 focus:outline-none focus:border-[#EB0F2D]"
                      />
                    </div>

                    <div>
                      <label className="text-[10px] uppercase tracking-wider text-white/50 block mb-1">
                        Achievement & Role Tagline
                      </label>
                      <input
                        type="text"
                        value={persona.description}
                        onChange={(e) => updateStudentPersona(persona.id, { description: e.target.value })}
                        className="w-full p-2 rounded-xl bg-white/5 border border-white/10 text-xs text-[#c5a059] focus:outline-none focus:border-[#EB0F2D]"
                      />
                    </div>

                    <div className="flex justify-end pt-1">
                      <button
                        onClick={() => showToast(`Saved spotlight for ${persona.name}`)}
                        className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors"
                      >
                        <Save className="w-3.5 h-3.5" />
                        <span>Update Spotlight</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: CAMPUS KEY STATS */}
          {activeTab === 'stats' && (
            <div className="space-y-6">
              <div>
                <h3 className="font-poppins text-lg font-bold text-white">
                  Institutional Highlights & Key Statistics
                </h3>
                <p className="text-xs text-white/60">
                  Update numerical metrics displayed across the homepage, footer, and brochures.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {stats.map((stat, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3">
                    <label className="text-[10px] uppercase tracking-wider text-white/50 block">
                      Metric Label
                    </label>
                    <input
                      type="text"
                      value={stat.label}
                      onChange={(e) => updateStat(idx, { label: e.target.value })}
                      className="w-full p-2 rounded-xl bg-white/5 border border-white/10 text-xs text-white font-semibold focus:outline-none focus:border-[#EB0F2D]"
                    />

                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="text-[10px] uppercase tracking-wider text-white/50 block">
                          Value
                        </label>
                        <input
                          type="text"
                          value={stat.value}
                          onChange={(e) => updateStat(idx, { value: e.target.value })}
                          className="w-full p-2 rounded-xl bg-white/5 border border-white/10 text-xs text-[#EB0F2D] font-bold focus:outline-none focus:border-[#EB0F2D]"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] uppercase tracking-wider text-white/50 block">
                          Suffix / Unit
                        </label>
                        <input
                          type="text"
                          value={stat.suffix || ''}
                          onChange={(e) => updateStat(idx, { suffix: e.target.value })}
                          className="w-full p-2 rounded-xl bg-white/5 border border-white/10 text-xs text-white/80 focus:outline-none focus:border-[#EB0F2D]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-[10px] uppercase tracking-wider text-white/50 block">
                        Sublabel Note
                      </label>
                      <input
                        type="text"
                        value={stat.sublabel || ''}
                        onChange={(e) => updateStat(idx, { sublabel: e.target.value })}
                        className="w-full p-2 rounded-xl bg-white/5 border border-white/10 text-xs text-[#c5a059] focus:outline-none focus:border-[#EB0F2D]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: URGENT BROADCAST ALERT */}
          {activeTab === 'broadcast' && (
            <div className="space-y-6 max-w-2xl">
              <div>
                <h3 className="font-poppins text-lg font-bold text-white">
                  Urgent Broadcast Marquee Banner
                </h3>
                <p className="text-xs text-white/60">
                  Control the emergency or admissions announcement ticker at the top of the entire website.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-5">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-sm font-bold text-white block">
                      Enable Announcement Banner
                    </span>
                    <span className="text-xs text-white/50">
                      When active, this banner appears at the very top of all screens.
                    </span>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={announcement.enabled}
                      onChange={(e) => {
                        updateAnnouncement({ enabled: e.target.checked });
                        showToast(`Banner ${e.target.checked ? 'enabled' : 'disabled'}`);
                      }}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-white/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#EB0F2D]" />
                  </label>
                </div>

                <div>
                  <label className="text-[10px] uppercase tracking-wider text-white/50 block mb-1">
                    Badge Tagline
                  </label>
                  <input
                    type="text"
                    value={announcement.badge}
                    onChange={(e) => updateAnnouncement({ badge: e.target.value })}
                    className="w-full p-2.5 rounded-xl bg-white/5 border border-white/10 text-xs text-[#c5a059] font-bold focus:outline-none focus:border-[#EB0F2D]"
                  />
                </div>

                <div>
                  <label className="text-[10px] uppercase tracking-wider text-white/50 block mb-1">
                    Announcement Message
                  </label>
                  <textarea
                    rows={3}
                    value={announcement.message}
                    onChange={(e) => updateAnnouncement({ message: e.target.value })}
                    className="w-full p-2.5 rounded-xl bg-white/5 border border-white/10 text-xs text-white focus:outline-none focus:border-[#EB0F2D]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-[10px] uppercase tracking-wider text-white/50 block mb-1">
                      Action Button Label
                    </label>
                    <input
                      type="text"
                      value={announcement.linkText || ''}
                      onChange={(e) => updateAnnouncement({ linkText: e.target.value })}
                      className="w-full p-2 rounded-xl bg-white/5 border border-white/10 text-xs text-white focus:outline-none focus:border-[#EB0F2D]"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] uppercase tracking-wider text-white/50 block mb-1">
                      Type Style
                    </label>
                    <select
                      value={announcement.type}
                      onChange={(e) => updateAnnouncement({ type: e.target.value as any })}
                      className="w-full p-2 rounded-xl bg-white/5 border border-white/10 text-xs text-white focus:outline-none focus:border-[#EB0F2D]"
                    >
                      <option value="admissions" className="bg-[#001028]">Admissions (Crimson)</option>
                      <option value="urgent" className="bg-[#001028]">Urgent / Emergency (Amber)</option>
                      <option value="academic" className="bg-[#001028]">Academic Notice (Navy/Gold)</option>
                    </select>
                  </div>
                </div>

                {/* Banner Preview */}
                <div className="pt-4 border-t border-white/10">
                  <span className="text-[10px] uppercase tracking-wider text-white/40 block mb-2">
                    Live Preview
                  </span>
                  <div className="p-3 rounded-xl bg-[#EB0F2D]/20 border border-[#EB0F2D]/40 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded bg-[#EB0F2D] text-white font-bold text-[10px]">
                        {announcement.badge}
                      </span>
                      <span className="text-white/90">{announcement.message}</span>
                    </div>
                    {announcement.linkText && (
                      <span className="text-[#c5a059] font-bold underline cursor-pointer">
                        {announcement.linkText}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* CRM Footer */}
        <div className="px-6 py-3 border-t border-white/10 bg-black/40 flex items-center justify-between text-xs text-white/50">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Authenticated Admin Session &bull; Indian School Muladha CRM v2.6</span>
          </div>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold transition-colors"
          >
            Close Admin Portal
          </button>
        </div>
      </motion.div>

      {/* SUB-MODAL: LOG WALK-IN LEAD */}
      {isAddLeadOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="bg-[#001535] text-white w-full max-w-md rounded-2xl border border-white/20 p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-poppins font-bold text-base text-white">
                Log In-Person / Phone Admission Lead
              </h3>
              <button
                onClick={() => setIsAddLeadOpen(false)}
                className="p-1 rounded-lg text-white/50 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreateLead} className="space-y-3 text-xs">
              <div>
                <label className="text-[10px] uppercase tracking-wider text-white/50 block mb-1">
                  Student Name *
                </label>
                <input
                  type="text"
                  required
                  value={newLeadStudent}
                  onChange={(e) => setNewLeadStudent(e.target.value)}
                  placeholder="e.g. Zayan Al-Raisi"
                  className="w-full p-2.5 rounded-xl bg-white/5 border border-white/15 text-white focus:outline-none focus:border-[#EB0F2D]"
                />
              </div>

              <div>
                <label className="text-[10px] uppercase tracking-wider text-white/50 block mb-1">
                  Parent / Guardian Name *
                </label>
                <input
                  type="text"
                  required
                  value={newLeadParent}
                  onChange={(e) => setNewLeadParent(e.target.value)}
                  placeholder="e.g. Salim Al-Raisi"
                  className="w-full p-2.5 rounded-xl bg-white/5 border border-white/15 text-white focus:outline-none focus:border-[#EB0F2D]"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-[10px] uppercase tracking-wider text-white/50 block mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={newLeadPhone}
                    onChange={(e) => setNewLeadPhone(e.target.value)}
                    placeholder="+968 9xxx xxxx"
                    className="w-full p-2.5 rounded-xl bg-white/5 border border-white/15 text-white focus:outline-none focus:border-[#EB0F2D]"
                  />
                </div>
                <div>
                  <label className="text-[10px] uppercase tracking-wider text-white/50 block mb-1">
                    Grade Applying
                  </label>
                  <select
                    value={newLeadGrade}
                    onChange={(e) => setNewLeadGrade(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-white/5 border border-white/15 text-white focus:outline-none focus:border-[#EB0F2D]"
                  >
                    <option value="Kindergarten (KG I)" className="bg-[#001028]">KG I</option>
                    <option value="Kindergarten (KG II)" className="bg-[#001028]">KG II</option>
                    <option value="Grade 1" className="bg-[#001028]">Grade 1</option>
                    <option value="Grade 4" className="bg-[#001028]">Grade 4</option>
                    <option value="Grade 7" className="bg-[#001028]">Grade 7</option>
                    <option value="Grade 9" className="bg-[#001028]">Grade 9</option>
                    <option value="Grade 11 (Science)" className="bg-[#001028]">Grade 11 Science</option>
                    <option value="Grade 11 (Commerce)" className="bg-[#001028]">Grade 11 Commerce</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-[10px] uppercase tracking-wider text-white/50 block mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  value={newLeadEmail}
                  onChange={(e) => setNewLeadEmail(e.target.value)}
                  placeholder="parent@example.com"
                  className="w-full p-2.5 rounded-xl bg-white/5 border border-white/15 text-white focus:outline-none focus:border-[#EB0F2D]"
                />
              </div>

              <div>
                <label className="text-[10px] uppercase tracking-wider text-white/50 block mb-1">
                  Initial Notes
                </label>
                <textarea
                  rows={2}
                  value={newLeadNotes}
                  onChange={(e) => setNewLeadNotes(e.target.value)}
                  placeholder="Notes from front office / phone discussion..."
                  className="w-full p-2 rounded-xl bg-white/5 border border-white/15 text-white focus:outline-none focus:border-[#EB0F2D]"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsAddLeadOpen(false)}
                  className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-[#EB0F2D] hover:bg-[#c90b24] text-white font-bold"
                >
                  Add Lead to CRM
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* SUB-MODAL: PUBLISH / EDIT NEWS */}
      {isNewsFormOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="bg-[#001535] text-white w-full max-w-lg rounded-2xl border border-white/20 p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-poppins font-bold text-base text-white">
                {editingNewsId ? 'Edit Gazette Article' : 'Publish New Gazette Story'}
              </h3>
              <button
                onClick={() => setIsNewsFormOpen(false)}
                className="p-1 rounded-lg text-white/50 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveNews} className="space-y-3 text-xs">
              <div>
                <label className="text-[10px] uppercase tracking-wider text-white/50 block mb-1">
                  Article Headline *
                </label>
                <input
                  type="text"
                  required
                  value={newsTitle}
                  onChange={(e) => setNewsTitle(e.target.value)}
                  placeholder="e.g. ISML Students Win National CBSE Science Olympiad"
                  className="w-full p-2.5 rounded-xl bg-white/5 border border-white/15 text-white focus:outline-none focus:border-[#EB0F2D]"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-[10px] uppercase tracking-wider text-white/50 block mb-1">
                    Category Tag
                  </label>
                  <select
                    value={newsCategory}
                    onChange={(e) => setNewsCategory(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-white/5 border border-white/15 text-white focus:outline-none focus:border-[#EB0F2D]"
                  >
                    <option value="Admissions Open" className="bg-[#001028]">Admissions Open</option>
                    <option value="Campus Events" className="bg-[#001028]">Campus Events</option>
                    <option value="Eco Campus" className="bg-[#001028]">Eco Campus</option>
                    <option value="Academic Honors" className="bg-[#001028]">Academic Honors</option>
                    <option value="Sports & Athletics" className="bg-[#001028]">Sports & Athletics</option>
                    <option value="Science & STEM" className="bg-[#001028]">Science & STEM</option>
                  </select>
                </div>
                <div>
                  <label className="text-[10px] uppercase tracking-wider text-white/50 block mb-1">
                    Display Date
                  </label>
                  <input
                    type="text"
                    value={newsDate}
                    onChange={(e) => setNewsDate(e.target.value)}
                    placeholder="e.g. Sep 2026"
                    className="w-full p-2.5 rounded-xl bg-white/5 border border-white/15 text-white focus:outline-none focus:border-[#EB0F2D]"
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] uppercase tracking-wider text-white/50 block mb-1">
                  Summary / Excerpt *
                </label>
                <textarea
                  rows={3}
                  required
                  value={newsExcerpt}
                  onChange={(e) => setNewsExcerpt(e.target.value)}
                  placeholder="Brief synopsis shown on the card preview..."
                  className="w-full p-2.5 rounded-xl bg-white/5 border border-white/15 text-white focus:outline-none focus:border-[#EB0F2D]"
                />
              </div>

              <div>
                <label className="text-[10px] uppercase tracking-wider text-white/50 block mb-1">
                  Story Image Asset
                </label>
                <select
                  value={newsImage}
                  onChange={(e) => setNewsImage(e.target.value)}
                  className="w-full p-2.5 rounded-xl bg-white/5 border border-white/15 text-white focus:outline-none focus:border-[#EB0F2D]"
                >
                  <option value="/assets/isml/original_school_campus.jpg" className="bg-[#001028]">
                    Authentic 30-Acre Campus & Field (Original Photo)
                  </option>
                  <option value="/assets/isml/campus_hero_entrance.jpg" className="bg-[#001028]">
                    Campus Grand Entrance
                  </option>
                  <option value="/assets/isml/admission_poster.png" className="bg-[#001028]">
                    Admissions Poster 2026-27
                  </option>
                  <option value="/assets/isml/auditorium_events.jpg" className="bg-[#001028]">
                    Auditorium & Cultural Events
                  </option>
                  <option value="/assets/isml/green_campus.jpg" className="bg-[#001028]">
                    Green Campus & Organic Farm
                  </option>
                  <option value="/assets/isml/student_stem_robotics.jpg" className="bg-[#001028]">
                    STEM & Robotics Lab
                  </option>
                  <option value="/assets/isml/student_leader_speech.jpg" className="bg-[#001028]">
                    Leadership & Model UN
                  </option>
                </select>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <input
                  type="checkbox"
                  id="featuredToggle"
                  checked={newsFeatured}
                  onChange={(e) => setNewsFeatured(e.target.checked)}
                  className="rounded bg-white/10 text-[#EB0F2D] focus:ring-0"
                />
                <label htmlFor="featuredToggle" className="text-xs text-white/80 cursor-pointer">
                  Pin as Large Featured Story on Gazette Grid
                </label>
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsNewsFormOpen(false)}
                  className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-[#EB0F2D] hover:bg-[#c90b24] text-white font-bold"
                >
                  {editingNewsId ? 'Save Changes' : 'Publish Story'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
