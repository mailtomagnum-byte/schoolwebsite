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
  principal: "Dr. Nayer Iqbal, M.Sc., B.Ed., Ph.D.",
  logo: "/assets/isml/logo.png",
  crest: "/assets/isml/crest.png"
};

export const STUDENT_PERSONAS = [
  {
    id: "science",
    name: "Aryan",
    title: "Expert Scientist",
    category: "STEM & Robotics",
    image: "/assets/isml/student_stem_robotics.jpg",
    quote: "Building autonomous systems in the ISML science lab gave me the confidence to present at the Oman Science Festival.",
    description: "CBSE Science Congress finalist & student president of the Innovation Club."
  },
  {
    id: "leadership",
    name: "Fatima",
    title: "Inspiring Leader",
    category: "Debate & Model UN",
    image: "/assets/isml/student_leader_speech.jpg",
    quote: "On our 30-acre campus, leadership is forged through collaboration, house captaincy, and community projects.",
    description: "Head Girl & Best Delegate at the Oman Inter-School Model United Nations."
  },
  {
    id: "scholar",
    name: "Rohan",
    title: "Academic Scholar",
    category: "CBSE Pre-University",
    image: "/assets/isml/campus_academic_quad.jpg",
    quote: "Every teacher invested in my curiosity, guiding me to top percentiles in CBSE Board examinations.",
    description: "98.6% CBSE Board aggregate holder with distinctions in Mathematics and Physics."
  },
  {
    id: "creative",
    name: "Ananya",
    title: "Creative Artist",
    category: "Fine Arts & Cultural",
    image: "/assets/isml/auditorium_events.jpg",
    quote: "Expressing creativity through stage drama, visual arts, and classical music made my school years memorable.",
    description: "First prize winner in Regional Youth Cultural Festival and Art Exhibition."
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
    tagline: "The formative spark of wonder & play",
    description: "Montessori-inspired, joyful play environments fostering emotional resilience, phonics, number sense, and natural discovery.",
    image: "/assets/isml/kg_park.jpg",
    age: "Ages 3 to 5",
    linkText: "Discover Kindergarten"
  },
  {
    id: "primary",
    name: "Primary Wing",
    years: "Grades 1 to 5",
    tagline: "Foundations of inquiry & conceptual growth",
    description: "Experiential inquiry-driven learning featuring language mastery (English, Hindi, Arabic), computational logic, and environmental science.",
    image: "/assets/isml/campus_hero_entrance.jpg",
    age: "Ages 6 to 10",
    linkText: "Explore Primary Wing"
  },
  {
    id: "middle",
    name: "Middle School Wing",
    years: "Grades 6 to 8",
    tagline: "Expanding horizons & analytical thinking",
    description: "Specialist laboratories in Physics, Chemistry, Biology, and Computer Science alongside Model UN, debates, and competitive athletics.",
    image: "/assets/isml/middle_wing.jpg",
    age: "Ages 11 to 13",
    linkText: "Explore Middle School"
  },
  {
    id: "senior",
    name: "Senior & Pre-University",
    years: "Grades 9 to 12",
    tagline: "Academic distinction & global university readiness",
    description: "Rigorous CBSE Board preparation in Science and Commerce streams with structured guidance for competitive exams and university admissions.",
    image: "/assets/isml/campus_academic_quad.jpg",
    age: "Ages 14 to 18",
    linkText: "Senior Pathways"
  }
];

export const FEATURE_BLOCKS = [
  {
    id: "academic",
    title: "Academic excellence",
    copy: "Students gain the knowledge, skills, qualifications and results to make their choices become reality. 100% CBSE pass rate with regional top percentiles.",
    linkText: "Be your best",
    image: "/assets/isml/campus_academic_quad.jpg",
    accent: "#EB0F2D"
  },
  {
    id: "sports-cocurricular",
    title: "Co-curricular life & eco campus",
    copy: "Over 35 sporting disciplines, botanical gardens, arts societies, orchestra, robotics guilds, and field expeditions on our extensive 30-acre campus.",
    linkText: "Find your passion",
    image: "/assets/isml/green_campus.jpg",
    accent: "#0F6EB6"
  },
  {
    id: "pastoral",
    title: "Pastoral care & community",
    copy: "A warm, supportive environment rooted in mutual respect, values, and student wellbeing, where every individual is known and empowered.",
    linkText: "Feel at home",
    image: "/assets/isml/canteen.jpg",
    accent: "#c5a059"
  }
];

export const HEAD_LEADERSHIP = {
  name: "Dr. Nayer Iqbal",
  title: "Principal & Head of Institution",
  qualifications: "M.Sc., B.Ed., Ph.D.",
  image: "/assets/isml/principal_leadership.jpg",
  quote: "Welcome to Indian School Muladha. Learn more about our ethos, our academic standards and the dedicated people helping our students to become confident, ethical global leaders.",
  linkText: "Meet our staff and management committee",
  description: "At Indian School Muladha, we believe that education is not merely the accumulation of facts, but the ignition of innate human potential. For over three decades, our 30-acre campus has stood as a beacon of academic distinction in South Batinah, nurturing generations of doctorates, engineers, diplomats, and responsible global citizens."
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
    date: "Sep 2026",
    category: "Admissions Open",
    title: "Registrations Open for Academic Session 2026-2027: KG to Grade XI",
    excerpt: "Parents invited to apply online, tour the 30-acre campus, meet educators, and discover our pre-university science & commerce academic pathways.",
    image: "/assets/isml/admission_poster.png",
    featured: true
  },
  {
    id: "news-2",
    date: "Aug 2026",
    category: "Campus Events",
    title: "ISML Celebrates Vibrant Annual Cultural Day & Academic Honors",
    excerpt: "Over 800 student performers showcased music, classical dance, and drama at the grand school auditorium before dignitaries and parents.",
    image: "/assets/isml/auditorium_events.jpg",
    featured: false
  },
  {
    id: "news-3",
    date: "Aug 2026",
    category: "Eco Campus",
    title: "Live Green Initiative: Students Lead Sustainable Farming on 30-Acre Grounds",
    excerpt: "Middle and Senior school eco-club students plant indigenous trees and automated drip irrigation systems promoting environmental stewardship.",
    image: "/assets/isml/green_campus.jpg",
    featured: false
  }
];

export const LATEST_NEWS: NewsItem[] = [
  {
    id: "1",
    title: "Registrations Open for Academic Session 2026-2027: KG to Grade XI",
    category: "Admissions",
    date: "Sep 2026",
    summary: "Parents invited to apply online, tour the campus, meet teachers, and explore our academic programs.",
    readTime: "3 min read",
    badge: "Admissions 2026-27"
  },
  {
    id: "2",
    title: "ISML Celebrates Annual Day & Academic Felicitations",
    category: "Campus",
    date: "Aug 2026",
    summary: "Annual cultural festival honoring top CBSE achievers and extracurricular champions in the auditorium.",
    readTime: "2 min read",
    badge: "Campus Festival"
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
    id: "main-gate",
    name: "Main Campus Gate & Promenade",
    category: "Campus",
    description: "Grand architectural entrance welcoming students to our 30-acre campus in Al Muladha.",
    image: "/assets/isml/main_gate.jpg",
    x: 48,
    y: 42,
    features: ["Security & Reception", "Promenade Walkway", "Administrative Wing"],
    quote: "A welcoming gateway for over 3,200 students arriving each morning."
  },
  {
    id: "senior-wing",
    name: "Senior Secondary Academic Complex",
    category: "Academics",
    description: "Spacious classrooms, science laboratories, and pre-university lecture halls for Grades 9 to 12.",
    image: "/assets/isml/senior_wing.jpg",
    x: 68,
    y: 35,
    features: ["Physics & Chem Labs", "Smart Board Classrooms", "Study Halls"],
    quote: "Where high academic rigor meets world-class teaching methodologies."
  },
  {
    id: "middle-wing",
    name: "Middle School Wing",
    category: "Academics",
    description: "Dedicated wing for Grades 6 to 8 fostering analytical problem-solving and peer collaboration.",
    image: "/assets/isml/middle_wing.jpg",
    x: 60,
    y: 45,
    features: ["Junior Science Lab", "Digital Learning Suites", "Library Access"],
    quote: "Empowering adolescents to discover their intellectual passions."
  },
  {
    id: "foundation-wing",
    name: "Foundation & Primary Wing",
    category: "Primary",
    description: "Vibrant activity-driven learning environment for Grades 1 to 5.",
    image: "/assets/isml/foundation_wing.jpg",
    x: 40,
    y: 55,
    features: ["Interactive Display Boards", "Mathematics Lab", "Storytelling Arenas"],
    quote: "Foundational wonder turning into lifelong curiosity."
  },
  {
    id: "kg-park",
    name: "Kindergarten Park & Activity Arena",
    category: "Early Years",
    description: "Lush outdoor play arena tailored for early motor development, sensory exploration, and games.",
    image: "/assets/isml/kg_park.jpg",
    x: 32,
    y: 72,
    features: ["Safety Play Turfs", "Sensory Discovery Zones", "Shaded Playgrounds"],
    quote: "Fostering joyful friendships and active play under the Oman sun."
  },
  {
    id: "green-campus",
    name: "Botanical Gardens & Eco Grounds",
    category: "Environment",
    description: "Extensive palm groves, landscaped flowerbeds, and sports pitches across the estate.",
    image: "/assets/isml/green_campus.jpg",
    x: 52,
    y: 28,
    features: ["Date Palm Groves", "Athletic Fields", "Eco Learning Pavilions"],
    quote: "A green, serene sanctuary cultivating environmental respect."
  },
  {
    id: "canteen",
    name: "Campus Canteen & Dining Pavilion",
    category: "Student Life",
    description: "Hygienic, modern dining hall providing nutritious meals and a vibrant communal hub for students and faculty.",
    image: "/assets/isml/canteen.jpg",
    x: 75,
    y: 60,
    features: ["Hygienic Kitchen", "Spacious Seating", "Healthy Refreshments"],
    quote: "Nourishing bodies and building community connections daily."
  },
  {
    id: "auditorium",
    name: "Grand School Auditorium & Cultural Hall",
    category: "Arts & Culture",
    description: "Full-scale theater hall hosting inter-school festivals, debate championships, and annual ceremonies.",
    image: "/assets/isml/auditorium_events.jpg",
    x: 45,
    y: 20,
    features: ["Acoustic Sound System", "Grand Stage", "Theater Lighting"],
    quote: "Where students discover the confidence of the spotlight."
  }
];

export const DIVISIONS: Division[] = [
  {
    id: "kindergarten",
    name: "Kindergarten",
    subtitle: "Early Years Foundation",
    ageRange: "Ages 3 - 5",
    grades: "KG I & KG II",
    image: "/assets/isml/kg_park.jpg",
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
    image: "/assets/isml/foundation_wing.jpg",
    description: "Building strong foundational competencies in languages, mathematics, and environmental science.",
    highlights: ["Experiential science", "Bilingual literacy", "Computational thinking"],
    keyCompetencies: ["Critical inquiry", "Team collaboration", "Mathematical reasoning"],
    color: "#0F6EB6"
  }
];
