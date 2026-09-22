export interface SchoolStage {
  id: string;
  name: string;
  years: string;
  tagline: string;
  description: string;
  image: string;
  age: string;
  linkText: string;
}

export interface AcademicStream {
  id: string;
  name: string;
  code: string;
  subjects: string[];
  pathways: string;
  facilities: string;
}

export interface Division {
  id: string;
  name: string;
  subtitle: string;
  ageRange: string;
  grades: string;
  image: string;
  description: string;
  highlights: string[];
  keyCompetencies: string[];
  color: string;
}

export interface CampusHotspot {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  x?: number;
  y?: number;
  features?: string[];
  quote?: string;
}

export interface StreamOption {
  id: string;
  name: string;
  code: string;
  description: string;
  coreSubjects: string[];
  electiveSubjects: string[];
  careerPathways: string[];
  iconName: string;
}

export interface StatItem {
  value: string;
  numericTarget?: number;
  prefix?: string;
  suffix?: string;
  label: string;
  sublabel?: string;
  detail?: string;
}

export interface NewsItem {
  id: string;
  title: string;
  category: string;
  date: string;
  summary?: string;
  excerpt?: string;
  readTime?: string;
  badge?: string;
  image?: string;
  featured?: boolean;
}

export interface FacultyMember {
  name: string;
  qualification: string;
  department: string;
  designation: string;
}

export interface SMCMember {
  name: string;
  designation: string;
  subcommittee?: string;
  qualification?: string;
}

export interface AgeCriteria {
  className: string;
  bornBetween: string;
  minAge: string;
  maxAge: string;
}

export interface BoardResultRecord {
  year: string;
  registered: number;
  passed: number;
  percentage: string;
  remarks: string;
}

export type LeadStatus = 'New' | 'In Review' | 'Tour Scheduled' | 'Document Verification' | 'Admitted' | 'Declined';

export interface AdmissionLead {
  id: string;
  studentName: string;
  parentName: string;
  email: string;
  phone: string;
  gradeApplying: string;
  academicYear: string;
  preferredDate?: string;
  notes?: string;
  status: LeadStatus;
  submissionDate: string;
  source: 'Website Visit Form' | 'Online Prospectus' | 'Walk-In' | 'Phone Enquiry';
  followUpDate?: string;
}

export interface StudentPersona {
  id: string;
  name: string;
  title: string;
  category: string;
  image: string;
  quote: string;
  description: string;
}

export interface UrgentAnnouncement {
  enabled: boolean;
  badge: string;
  message: string;
  linkText?: string;
  linkUrl?: string;
  type: 'admissions' | 'urgent' | 'academic';
}
