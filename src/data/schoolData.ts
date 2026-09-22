import { SchoolStage, AcademicStream, CampusHotspot, NewsItem, Division, StatItem } from '../types';

export const SCHOOL_INFO = {
  name: "Indian School Muladha",
  tagline: "Inspiring Excellence, Nurturing Values, Shaping Global Leaders",
  motto: "Knowledge is Supreme Light",
  established: 1991,
  affiliationNo: "6130009",
  schoolCode: "90076",
  board: "Central Board of Secondary Education (CBSE), New Delhi",
  curriculum: "CBSE Curriculum with STEAM & AI Integration",
  governance: "Under the Aegis of Board of Directors for Indian Schools in Oman & Embassy of India, Muscat",
  address: "Al Muladha, South Batinah Governorate, Sultanate of Oman",
  phone: "+968 2681 1234 / 2681 1888",
  fax: "+968 2681 1444",
  email: "ismloman@gmail.com",
  admissionsEmail: "admissions@isml-oman.com",
  website: "https://isml-oman.com",
  principal: "Dr. Rajesh Sharma"
};

export const STUDENT_PERSONAS = [
  {
    id: "robotics",
    name: "Aryan",
    title: "Young Roboticist",
    category: "STEM & Innovation",
    image: "/src/assets/images/student_robotics_1790080038518.jpg",
    quote: "Building autonomous rovers in the ISML MakerSpace gave me the confidence to compete globally.",
    description: "National Science Congress finalist and captain of the school's robotics guild."
  },
  {
    id: "cricket",
    name: "Aryan",
    title: "Cricket Captain",
    category: "Athletics & Sports",
    image: "/src/assets/images/student_cricket_1790080058803.jpg",
    quote: "On our 30-acre grounds, leadership isn't just taught in textbooks — it's forged on the field.",
    description: "Opening batsman and captain of the Oman Inter-School Under-19 tournament squad."
  },
  {
    id: "scholar",
    name: "Aryan",
    title: "Olympiad Scholar",
    category: "Academic Excellence",
    image: "/src/assets/images/student_scholar_1790080077912.jpg",
    quote: "Every teacher here invested in my curiosity, guiding me to top percentiles in CBSE and international math.",
    description: "98.4% CBSE Board aggregate holder with admission offers from top global universities."
  }
];

export const SCROLLING_MARQUEE_LINES = [
  {
    line: 1,
    items: [
      { text: "Leadership.", isStylised: false },
      { text: "Ambition.", isStylised: false },
      { text: "Character.", isStylised: true },
      { text: "Self-Belief.", isStylised: false },
      { text: "Leadership.", isStylised: false },
      { text: "Ambition.", isStylised: false },
      { text: "Character.", isStylised: true },
      { text: "Self-Belief.", isStylised: false },
    ]
  },
  {
    line: 2,
    items: [
      { text: "Confident.", isStylised: false },
      { text: "Responsible.", isStylised: false },
      { text: "Evolve.", isStylised: false },
      { text: "Kindness.", isStylised: true },
      { text: "Confident.", isStylised: false },
      { text: "Responsible.", isStylised: false },
      { text: "Evolve.", isStylised: false },
      { text: "Kindness.", isStylised: true },
    ]
  },
  {
    line: 3,
    items: [
      { text: "Inspiring.", isStylised: false },
      { text: "Community.", isStylised: true },
      { text: "Determination.", isStylised: false },
      { text: "Opportunities.", isStylised: false },
      { text: "Inspiring.", isStylised: false },
      { text: "Community.", isStylised: true },
      { text: "Determination.", isStylised: false },
      { text: "Opportunities.", isStylised: false },
    ]
  },
  {
    line: 4,
    items: [
      { text: "Excellence.", isStylised: true },
      { text: "Inclusion.", isStylised: false },
      { text: "Engaged.", isStylised: false },
      { text: "Curious.", isStylised: false },
      { text: "Excellence.", isStylised: true },
      { text: "Inclusion.", isStylised: false },
      { text: "Engaged.", isStylised: false },
      { text: "Curious.", isStylised: false },
    ]
  }
];

export const SCHOOL_STAGES_LIST: SchoolStage[] = [
  {
    id: "kindergarten",
    name: "Early Years & Kindergarten",
    years: "KG I & KG II",
    tagline: "The formative spark of curiosity",
    description: "Montessori-inspired, play-based early foundation building social emotional resilience, phonics, and hands-on discovery.",
    image: "/src/assets/images/isml_library_arts_1790079295028.jpg",
    age: "Ages 3 to 5",
    linkText: "Discover Kindergarten"
  },
  {
    id: "primary",
    name: "Primary Wing",
    years: "Grades 1 to 5",
    tagline: "Foundations of inquiry & wonder",
    description: "Engaging inquiry-driven curriculum with bilingual focus (English, Hindi, Arabic), mental math, robotics, and creative arts.",
    image: "/src/assets/images/isml_stem_lab_1790079279748.jpg",
    age: "Ages 6 to 10",
    linkText: "Explore Primary"
  },
  {
    id: "middle",
    name: "Middle School",
    years: "Grades 6 to 8",
    tagline: "Expanding horizons & critical thought",
    description: "Specialist labs in Physics, Chemistry, Biology, and Computer Science alongside Model UN, debates, and competitive athletics.",
    image: "/src/assets/images/isml_campus_hero_1790079262969.jpg",
    age: "Ages 11 to 13",
    linkText: "Explore Middle School"
  },
  {
    id: "senior",
    name: "Senior & Pre-University",
    years: "Grades 9 to 12",
    tagline: "Academic mastery & global university readiness",
    description: "Rigorous CBSE Board preparation in Science and Commerce streams with dedicated competitive coaching for IIT-JEE, NEET, and SAT.",
    image: "/src/assets/images/isml_sports_grounds_1790079309666.jpg",
    age: "Ages 14 to 18",
    linkText: "Senior Secondary Pathways"
  }
];

export const FEATURE_BLOCKS = [
  {
    id: "academic",
    title: "Academic excellence",
    copy: "Students gain the knowledge, skills, qualifications and results to make their choices become reality. 100% CBSE pass rate with state toppers.",
    linkText: "Be your best",
    image: "/src/assets/images/student_scholar_1790080077912.jpg",
    accent: "#EB0F2D"
  },
  {
    id: "sports-cocurricular",
    title: "Co-curricular life & sports",
    copy: "Over 35 sporting disciplines, arts societies, orchestra, robotics guilds, and field expeditions on our extensive 30-acre campus.",
    linkText: "Find your passion",
    image: "/src/assets/images/student_cricket_1790080058803.jpg",
    accent: "#0F6EB6"
  },
  {
    id: "pastoral",
    title: "Pastoral care & values",
    copy: "A warm, family-oriented environment rooted in Indian cultural heritage and mutual respect, where every individual is known and supported.",
    linkText: "Feel at home",
    image: "/src/assets/images/isml_campus_hero_1790079262969.jpg",
    accent: "#c5a059"
  }
];

export const HEAD_LEADERSHIP = {
  name: "Dr. Rajesh Sharma",
  title: "Principal & Head of Institution",
  qualifications: "M.Sc., M.Ed., Ph.D., Recipient of CBSE National Best Teacher Award",
  image: "/src/assets/images/head_portrait_1790080093386.jpg",
  quote: "Welcome to Indian School Muladha. Learn more about our ethos, our standards and the people helping students to become the best versions of themselves.",
  linkText: "Meet our staff and management committee",
  description: "At Indian School Muladha, we believe that education is not merely the accumulation of facts, but the ignition of innate human potential. For over three decades, our campus has stood as a beacon of academic excellence in South Batinah, nurturing generations of doctorates, engineers, diplomats, and ethical entrepreneurs."
};

export const KEY_STATS: StatItem[] = [
  { label: "Campus Estate", value: "30", suffix: "Acres", sublabel: "Oasis in South Batinah", detail: "Sprawling estate" },
  { label: "CBSE Board Pass Rate", value: "100", suffix: "%", sublabel: "Consistently across 34 years", detail: "Excellence" },
  { label: "Students Thriving", value: "3,200", suffix: "+", sublabel: "Kindergarten to Grade XII", detail: "Enrolled" },
  { label: "Faculty Excellence", value: "140", suffix: "+", sublabel: "Specialist educators", detail: "Mentors" },
  { label: "Co-Curricular Clubs", value: "35", suffix: "+", sublabel: "Robotics, Sports, Arts, MUN", detail: "Clubs" }
];

export const LATEST_NEWS_WOODBRIDGE = [
  {
    id: "news-1",
    date: "18 Sep 2026",
    category: "Academic Triumph",
    title: "ISML Scholars Clinch Top Honors at Oman Inter-School Science Quest 2026",
    excerpt: "Senior Secondary physics and AI researchers from Indian School Muladha secure 1st place with an innovative seawater desalination automated model.",
    image: "/src/assets/images/student_robotics_1790080038518.jpg",
    featured: true
  },
  {
    id: "news-2",
    date: "12 Sep 2026",
    category: "Sports & Athletics",
    title: "Muladha Victorious in South Batinah CBSE Athletic Meet",
    excerpt: "School cricket, badminton, and track teams bag 14 gold medals at the regional inter-school athletic championships.",
    image: "/src/assets/images/student_cricket_1790080058803.jpg",
    featured: false
  },
  {
    id: "news-3",
    date: "04 Sep 2026",
    category: "Admissions & Open Day",
    title: "Registrations Open for Academic Session 2025-2026: KG to Grade XI",
    excerpt: "Parents invited to tour the campus, meet teachers, and discover our pre-university science & commerce academic pathways.",
    image: "/src/assets/images/isml_campus_hero_1790079262969.jpg",
    featured: false
  }
];

export const LATEST_NEWS: NewsItem[] = [
  {
    id: "1",
    title: "ISML Scholars Clinch Top Honors at Oman Inter-School Science Quest 2026",
    category: "Achievement",
    date: "18 Sep 2026",
    summary: "Senior Secondary physics researchers from Indian School Muladha secure 1st place with an automated seawater desalination model.",
    readTime: "3 min read",
    badge: "National Triumph"
  },
  {
    id: "2",
    title: "Muladha Victorious in South Batinah CBSE Athletic Meet",
    category: "Sports",
    date: "12 Sep 2026",
    summary: "School cricket, badminton, and track teams bag 14 gold medals at the regional inter-school championships.",
    readTime: "2 min read",
    badge: "14 Gold Medals"
  }
];

export const SENIOR_STREAMS: AcademicStream[] = [
  {
    id: "science",
    name: "Senior Science Stream",
    code: "PCMB / PCMC",
    subjects: ["Physics", "Chemistry", "Mathematics", "Biology / Computer Science", "English Core"],
    pathways: "Medicine, AI & Robotics, Engineering (IIT/NIT), Biotechnology",
    facilities: "3 Advanced Research Labs & Makerspace"
  },
  {
    id: "commerce",
    name: "Senior Commerce Stream",
    code: "Commerce & Applied Math",
    subjects: ["Accountancy", "Business Studies", "Economics", "Applied Mathematics / Informatics Practices", "English Core"],
    pathways: "Chartered Accountancy, Investment Banking, Global Economics, Business Management",
    facilities: "FinTech Simulation & Bloomberg Terminal Corner"
  }
];

export const CAMPUS_HOTSPOTS: CampusHotspot[] = [
  {
    id: "hero-quad",
    name: "Main Academic Quadrangle",
    category: "Academics",
    description: "Collegiate landscaped courtyard flanked by native date palms and shaded arcades.",
    image: "/src/assets/images/isml_campus_hero_1790079262969.jpg",
    x: 48,
    y: 42,
    features: ["Assembly Pavilion", "Administrative Wing", "Honor Roll Hall"],
    quote: "A welcoming heart for school assemblies, cultural festivals, and community celebrations."
  },
  {
    id: "stem-lab",
    name: "Dr. A.P.J. Abdul Kalam STEM & AI Lab",
    category: "Innovation",
    description: "State-of-the-art robotics workshops, 3D printers, IoT prototyping stations, and high-performance computing clusters.",
    image: "/src/assets/images/student_robotics_1790080038518.jpg",
    x: 68,
    y: 35,
    features: ["3D Printing Array", "AI Robotics Arenas", "IoT Prototyping"],
    quote: "Where students turn theoretical physics and algorithm design into functional prototypes."
  },
  {
    id: "sports-ground",
    name: "30-Acre Olympic Athletic Turf & Cricket Oval",
    category: "Athletics",
    description: "Lush natural turf cricket oval with floodlights, FIFA-specification football pitch, basketball court, and 400m running track.",
    image: "/src/assets/images/isml_sports_grounds_1790079309666.jpg",
    x: 32,
    y: 72,
    features: ["Natural Grass Cricket Oval", "Floodlit Tennis Courts", "FIFA Football Pitch"],
    quote: "Nurturing fitness, team spirit, and championship caliber in every student."
  },
  {
    id: "library",
    name: "Rabindranath Tagore Digital Library",
    category: "Arts",
    description: "Housing over 25,000 volumes, international academic journals, quiet study carrels, and digital archives.",
    image: "/src/assets/images/isml_library_arts_1790079295028.jpg",
    x: 52,
    y: 28,
    features: ["25,000 Volumes", "Digital Research Pods", "Quiet Reading Carrels"],
    quote: "A sanctuary of knowledge fostering independent critical thinking and research rigor."
  }
];

export const DIVISIONS: Division[] = [
  {
    id: "kindergarten",
    name: "Kindergarten",
    subtitle: "Early Years Foundation",
    ageRange: "Ages 3 - 5",
    grades: "KG I & KG II",
    image: "/src/assets/images/isml_library_arts_1790079295028.jpg",
    description: "A joyful world of sensory discovery and emotional development where early inquiry begins.",
    highlights: ["Play-based phonics", "Sensory math", "Creative storytelling"],
    keyCompetencies: ["Social confidence", "Motor skill coordination", "Multilingual curiosity"],
    color: "#c5a059"
  },
  {
    id: "primary",
    name: "Primary Wing",
    subtitle: "Foundational Inquiry",
    ageRange: "Ages 6 - 10",
    grades: "Grades 1 - 5",
    image: "/src/assets/images/isml_stem_lab_1790079279748.jpg",
    description: "Building strong foundational competencies in languages, mathematics, and environmental science.",
    highlights: ["Experiential science", "Bilingual literacy", "Computational thinking"],
    keyCompetencies: ["Critical inquiry", "Team collaboration", "Mathematical reasoning"],
    color: "#0F6EB6"
  }
];
