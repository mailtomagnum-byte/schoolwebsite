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
