import React, { createContext, useContext, useState, useEffect } from 'react';
import { AdmissionLead, LeadStatus, NewsItem, StatItem, StudentPersona, UrgentAnnouncement } from '../types';
import { KEY_STATS, LATEST_NEWS_WOODBRIDGE, STUDENT_PERSONAS } from '../data/schoolData';

const STORAGE_KEYS = {
  LEADS: 'isml_crm_leads',
  NEWS: 'isml_crm_news',
  PERSONAS: 'isml_crm_personas',
  STATS: 'isml_crm_stats',
  ANNOUNCEMENT: 'isml_crm_announcement',
};

// Seed default admissions leads for the CRM
const DEFAULT_LEADS: AdmissionLead[] = [
  {
    id: 'lead-1',
    studentName: 'Aarav Sharma',
    parentName: 'Rajesh Sharma',
    email: 'rajesh.sharma@example.com',
    phone: '+968 9123 4567',
    gradeApplying: 'Grade 11 (Science)',
    academicYear: '2026-2027',
    preferredDate: '2026-09-28',
    notes: 'Interested in Physics & Computer Science stream. Father works in Sohar Port.',
    status: 'Tour Scheduled',
    submissionDate: '2026-09-20',
    source: 'Website Visit Form',
    followUpDate: '2026-09-27'
  },
  {
    id: 'lead-2',
    studentName: 'Haya Al-Balushi',
    parentName: 'Tariq Al-Balushi',
    email: 'tariq.balushi@omantel.net.om',
    phone: '+968 9876 5432',
    gradeApplying: 'Kindergarten (KG I)',
    academicYear: '2026-2027',
    preferredDate: '2026-10-02',
    notes: 'Needs transportation from Muladha South. Inquiring about phonics curriculum.',
    status: 'In Review',
    submissionDate: '2026-09-21',
    source: 'Website Visit Form',
  },
  {
    id: 'lead-3',
    studentName: 'Devika Nair',
    parentName: 'Sunita Nair',
    email: 'sunita.nair@health.gov.om',
    phone: '+968 9456 7890',
    gradeApplying: 'Grade 9',
    academicYear: '2026-2027',
    preferredDate: '2026-09-25',
    notes: 'Relocating from Salalah. Previous CBSE aggregate 92%. Transfer Certificate verified.',
    status: 'Document Verification',
    submissionDate: '2026-09-18',
    source: 'Online Prospectus',
  },
  {
    id: 'lead-4',
    studentName: 'Mohammed Zaid',
    parentName: 'Farida Zaid',
    email: 'zaid.family@gmail.com',
    phone: '+968 9333 1122',
    gradeApplying: 'Grade 6',
    academicYear: '2026-2027',
    preferredDate: '2026-09-19',
    notes: 'Interview cleared by Vice Principal. First term fee paid via bank transfer.',
    status: 'Admitted',
    submissionDate: '2026-09-15',
    source: 'Walk-In',
  },
  {
    id: 'lead-5',
    studentName: 'Ananya Pillai',
    parentName: 'Suresh Pillai',
    email: 'suresh.pillai@oilgas.om',
    phone: '+968 9555 7788',
    gradeApplying: 'Grade 1',
    academicYear: '2026-2027',
    preferredDate: '2026-10-05',
    notes: 'Newly arrived in Barka. Requested school bus route details.',
    status: 'New',
    submissionDate: '2026-09-22',
    source: 'Website Visit Form',
  }
];

const DEFAULT_ANNOUNCEMENT: UrgentAnnouncement = {
  enabled: true,
  badge: 'ADMISSIONS 2026-27',
  message: 'Admissions Open: Schedule your individual 30-acre campus walkthrough & entrance assessment today.',
  linkText: 'Book a Visit',
  type: 'admissions',
};

interface CrmContextType {
  leads: AdmissionLead[];
  addLead: (lead: Omit<AdmissionLead, 'id' | 'submissionDate' | 'status'> & { status?: LeadStatus }) => string;
  updateLeadStatus: (id: string, status: LeadStatus) => void;
  updateLeadNotes: (id: string, notes: string) => void;
  deleteLead: (id: string) => void;
  news: NewsItem[];
  addNews: (item: Omit<NewsItem, 'id'>) => void;
  updateNews: (id: string, item: Partial<NewsItem>) => void;
  deleteNews: (id: string) => void;
  studentPersonas: StudentPersona[];
  updateStudentPersona: (id: string, persona: Partial<StudentPersona>) => void;
  stats: StatItem[];
  updateStat: (index: number, stat: Partial<StatItem>) => void;
  announcement: UrgentAnnouncement;
  updateAnnouncement: (announcement: Partial<UrgentAnnouncement>) => void;
  resetToDefaultSeed: () => void;
}

const CrmContext = createContext<CrmContextType | undefined>(undefined);

export const CrmProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // 1. Leads
  const [leads, setLeads] = useState<AdmissionLead[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.LEADS);
      return saved ? JSON.parse(saved) : DEFAULT_LEADS;
    } catch {
      return DEFAULT_LEADS;
    }
  });

  // 2. News
  const [news, setNews] = useState<NewsItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.NEWS);
      return saved ? JSON.parse(saved) : LATEST_NEWS_WOODBRIDGE;
    } catch {
      return LATEST_NEWS_WOODBRIDGE;
    }
  });

  // 3. Student Personas
  const [studentPersonas, setStudentPersonas] = useState<StudentPersona[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.PERSONAS);
      return saved ? JSON.parse(saved) : STUDENT_PERSONAS;
    } catch {
      return STUDENT_PERSONAS;
    }
  });

  // 4. Stats
  const [stats, setStats] = useState<StatItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.STATS);
      return saved ? JSON.parse(saved) : KEY_STATS;
    } catch {
      return KEY_STATS;
    }
  });

  // 5. Urgent Broadcast Announcement
  const [announcement, setAnnouncement] = useState<UrgentAnnouncement>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.ANNOUNCEMENT);
      return saved ? JSON.parse(saved) : DEFAULT_ANNOUNCEMENT;
    } catch {
      return DEFAULT_ANNOUNCEMENT;
    }
  });

  // Synchronize to localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.LEADS, JSON.stringify(leads));
  }, [leads]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.NEWS, JSON.stringify(news));
  }, [news]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.PERSONAS, JSON.stringify(studentPersonas));
  }, [studentPersonas]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.STATS, JSON.stringify(stats));
  }, [stats]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.ANNOUNCEMENT, JSON.stringify(announcement));
  }, [announcement]);

  // Lead CRUD
  const addLead = (leadData: Omit<AdmissionLead, 'id' | 'submissionDate' | 'status'> & { status?: LeadStatus }): string => {
    const newId = `lead-${Date.now().toString().slice(-6)}`;
    const today = new Date().toISOString().split('T')[0];
    const newLead: AdmissionLead = {
      ...leadData,
      id: newId,
      status: leadData.status || 'New',
      submissionDate: today,
    };
    setLeads((prev) => [newLead, ...prev]);
    return newId;
  };

  const updateLeadStatus = (id: string, status: LeadStatus) => {
    setLeads((prev) =>
      prev.map((lead) => (lead.id === id ? { ...lead, status } : lead))
    );
  };

  const updateLeadNotes = (id: string, notes: string) => {
    setLeads((prev) =>
      prev.map((lead) => (lead.id === id ? { ...lead, notes } : lead))
    );
  };

  const deleteLead = (id: string) => {
    setLeads((prev) => prev.filter((lead) => lead.id !== id));
  };

  // News CRUD
  const addNews = (item: Omit<NewsItem, 'id'>) => {
    const newItem: NewsItem = {
      ...item,
      id: `news-${Date.now()}`,
    };
    setNews((prev) => [newItem, ...prev]);
  };

  const updateNews = (id: string, updatedFields: Partial<NewsItem>) => {
    setNews((prev) =>
      prev.map((item) => (item.id === id ? { ...item, ...updatedFields } : item))
    );
  };

  const deleteNews = (id: string) => {
    setNews((prev) => prev.filter((item) => item.id !== id));
  };

  // Persona updates
  const updateStudentPersona = (id: string, updatedFields: Partial<StudentPersona>) => {
    setStudentPersonas((prev) =>
      prev.map((p) => (p.id === id ? { ...p, ...updatedFields } : p))
    );
  };

  // Stats updates
  const updateStat = (index: number, updatedFields: Partial<StatItem>) => {
    setStats((prev) =>
      prev.map((s, idx) => (idx === index ? { ...s, ...updatedFields } : s))
    );
  };

  // Announcement update
  const updateAnnouncement = (updated: Partial<UrgentAnnouncement>) => {
    setAnnouncement((prev) => ({ ...prev, ...updated }));
  };

  // Reset to default seed
  const resetToDefaultSeed = () => {
    setLeads(DEFAULT_LEADS);
    setNews(LATEST_NEWS_WOODBRIDGE);
    setStudentPersonas(STUDENT_PERSONAS);
    setStats(KEY_STATS);
    setAnnouncement(DEFAULT_ANNOUNCEMENT);
    localStorage.removeItem(STORAGE_KEYS.LEADS);
    localStorage.removeItem(STORAGE_KEYS.NEWS);
    localStorage.removeItem(STORAGE_KEYS.PERSONAS);
    localStorage.removeItem(STORAGE_KEYS.STATS);
    localStorage.removeItem(STORAGE_KEYS.ANNOUNCEMENT);
  };

  return (
    <CrmContext.Provider
      value={{
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
      }}
    >
      {children}
    </CrmContext.Provider>
  );
};

export const useCrm = () => {
  const context = useContext(CrmContext);
  if (!context) {
    throw new Error('useCrm must be used within a CrmProvider');
  }
  return context;
};
