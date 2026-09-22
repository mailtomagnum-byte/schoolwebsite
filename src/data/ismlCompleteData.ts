import { FacultyMember, SMCMember, AgeCriteria, BoardResultRecord } from '../types';

export interface SMCMemberData {
  name: string;
  designation: string;
  subcommittee?: string;
  qualification?: string;
}

export const SMC_MEMBERS: SMCMemberData[] = [
  {
    name: "Mr. M.T. Musthafa",
    designation: "President",
    subcommittee: "Apex Governance & Strategic Oversight"
  },
  {
    name: "Dr. Ajeeb Palackal",
    designation: "Treasurer",
    subcommittee: "Chairperson, Finance Sub-Committee"
  },
  {
    name: "Ms. Ashifa Asif",
    designation: "Convenor",
    subcommittee: "Chairperson, Academic Sub-Committee"
  },
  {
    name: "Dr. Smitha Krishna Warrier",
    designation: "Committee Member",
    subcommittee: "Chairperson, ISSaham Oversight"
  },
  {
    name: "Mr. Shammer Ahammed",
    designation: "Committee Member",
    subcommittee: "Chairperson, Sports & Co-Curricular Sub-Committee"
  },
  {
    name: "Mr. Gaudam KP",
    designation: "Committee Member",
    subcommittee: "Chairperson, IT, Safe Transport & ISML Alumni Sub-Committee"
  },
  {
    name: "Dr. Faheem Ahmad",
    designation: "Committee Member",
    subcommittee: "Chairperson, Welfare, Health & Grievances Sub-Committee"
  },
  {
    name: "Mr. Musthafa Nayikkarimbil",
    designation: "Committee Member",
    subcommittee: "Chairperson, Purchase Sub-Committee"
  },
  {
    name: "Mr. Jithesh Kumar",
    designation: "Committee Member",
    subcommittee: "Chairperson, Infrastructure Sub-Committee"
  }
];

export interface MandatoryDisclosureData {
  generalInfo: {
    schoolName: string;
    affiliationNo: string;
    schoolCode: string;
    address: string;
    principalName: string;
    principalQualification: string;
    schoolEmail: string;
    contactDetails: string;
    website: string;
  };
  staffDetails: {
    principal: number;
    totalTeachers: number;
    pgt: number;
    tgt: number;
    prt: number;
    ntt: number;
    pet: number;
    ratio: string;
    specialEducator: number;
    counsellor: number;
  };
  infrastructure: {
    campusAreaSqMtr: string;
    classroomsCount: number;
    classroomSize: string;
    labsCount: number;
    labSize: string;
    internetSpeed: string;
    girlsToilets: number;
    boysToilets: number;
    inspectionVideoUrl: string;
  };
  classXResults: {
    year: string;
    registered: number;
    passed: number;
    percentage: string;
    remarks: string;
  }[];
  classXIIResults: {
    year: string;
    registered: number;
    passed: number;
    percentage: string;
    remarks: string;
  }[];
}

export const MANDATORY_DISCLOSURE: MandatoryDisclosureData = {
  generalInfo: {
    schoolName: "INDIAN SCHOOL MULADHA",
    affiliationNo: "6130007",
    schoolCode: "90170",
    address: "P.O. Box 42, Postal Code 314, Al Muladha, South Batinah Governorate, Sultanate of Oman",
    principalName: "Dr. Nayer Iqbal",
    principalQualification: "M.Sc., B.Ed., Ph.D.",
    schoolEmail: "ismloman@gmail.com",
    contactDetails: "+968 26811234 / +968 26811184",
    website: "https://isml-oman.com"
  },
  staffDetails: {
    principal: 1,
    totalTeachers: 93,
    pgt: 18,
    tgt: 31,
    prt: 34,
    ntt: 4,
    pet: 4,
    ratio: "1 : 1.5",
    specialEducator: 1,
    counsellor: 1
  },
  infrastructure: {
    campusAreaSqMtr: "40,000 SQ. MTR. (Total estate 30 Acres)",
    classroomsCount: 148,
    classroomSize: "48.5 SQ. MTR.",
    labsCount: 7,
    labSize: "60 SQ. METRE",
    internetSpeed: "High Speed Fiber Wi-Fi (100 Mbps+)",
    girlsToilets: 11,
    boysToilets: 11,
    inspectionVideoUrl: "https://youtu.be/B37ba-RiCrw"
  },
  classXResults: [
    { year: "2024-25", registered: 133, passed: 133, percentage: "100%", remarks: "All students cleared" },
    { year: "2023-24", registered: 99, passed: 99, percentage: "100%", remarks: "Cent percent pass" },
    { year: "2022-23", registered: 126, passed: 126, percentage: "100%", remarks: "Cent percent pass" },
    { year: "2021-22", registered: 129, passed: 129, percentage: "100%", remarks: "Cent percent pass" },
    { year: "2020-21", registered: 126, passed: 126, percentage: "100%", remarks: "Cent percent pass" },
    { year: "2019-20", registered: 144, passed: 144, percentage: "100%", remarks: "Cent percent pass" }
  ],
  classXIIResults: [
    { year: "2024-25", registered: 87, passed: 86, percentage: "98.85%", remarks: "Distinction cohort" },
    { year: "2023-24", registered: 82, passed: 82, percentage: "100%", remarks: "Cent percent pass" },
    { year: "2022-23", registered: 76, passed: 76, percentage: "100%", remarks: "Cent percent pass" },
    { year: "2021-22", registered: 98, passed: 98, percentage: "100%", remarks: "Cent percent pass" },
    { year: "2020-21", registered: 109, passed: 109, percentage: "100%", remarks: "Cent percent pass" },
    { year: "2019-20", registered: 115, passed: 115, percentage: "100%", remarks: "Cent percent pass" }
  ]
};

export interface AgeCriteriaRow {
  className: string;
  bornBetween: string;
  minAge: string;
  maxAge: string;
}

export const AGE_CRITERIA_2026_27: AgeCriteriaRow[] = [
  { className: "KG I (Balvatika I)", bornBetween: "April 1, 2022 – March 31, 2023", minAge: "3 Yrs", maxAge: "3.11 Yrs" },
  { className: "KG II (Balvatika II)", bornBetween: "April 1, 2021 – March 31, 2022", minAge: "4 Yrs", maxAge: "4.11 Yrs" },
  { className: "KG III (Balvatika III)", bornBetween: "April 1, 2020 – March 31, 2021", minAge: "5 Yrs", maxAge: "5.11 Yrs" },
  { className: "Class I", bornBetween: "April 1, 2019 – March 31, 2020", minAge: "6 Yrs", maxAge: "6.11 Yrs" },
  { className: "Class II", bornBetween: "April 1, 2018 – March 31, 2019", minAge: "7 Yrs", maxAge: "7.11 Yrs" },
  { className: "Class III", bornBetween: "April 1, 2017 – March 31, 2018", minAge: "8 Yrs", maxAge: "8.11 Yrs" },
  { className: "Class IV", bornBetween: "April 1, 2016 – March 31, 2017", minAge: "9 Yrs", maxAge: "9.11 Yrs" },
  { className: "Class V", bornBetween: "April 1, 2015 – March 31, 2016", minAge: "10 Yrs", maxAge: "10.11 Yrs" },
  { className: "Class VI", bornBetween: "April 1, 2014 – March 31, 2015", minAge: "11 Yrs", maxAge: "11.11 Yrs" },
  { className: "Class VII", bornBetween: "April 1, 2013 – March 31, 2014", minAge: "12 Yrs", maxAge: "12.11 Yrs" },
  { className: "Class VIII", bornBetween: "April 1, 2012 – March 31, 2013", minAge: "13 Yrs", maxAge: "13.11 Yrs" },
  { className: "Class IX", bornBetween: "April 1, 2011 – March 31, 2012", minAge: "14 Yrs", maxAge: "14.11 Yrs" },
  { className: "Class X", bornBetween: "April 1, 2010 – March 31, 2011", minAge: "15 Yrs", maxAge: "15.11 Yrs" },
  { className: "Class XI", bornBetween: "April 1, 2009 – March 31, 2010", minAge: "16 Yrs", maxAge: "16.11 Yrs" },
  { className: "Class XII", bornBetween: "April 1, 2008 – March 31, 2009", minAge: "17 Yrs", maxAge: "17.11 Yrs" }
];

export interface FacultyRecord {
  name: string;
  qualification: string;
  department: string;
  designation: string;
}

export const FACULTY_MEMBERS: FacultyRecord[] = [
  { name: "DR NAYER IQBAL", qualification: "M.Sc., B.Ed., Ph.D.", department: "SCIENCE", designation: "PRINCIPAL" },
  { name: "Mrs. J. Anita Rose Margalin", qualification: "M.Sc., B.Ed., MBA", department: "COMPUTER SCIENCE", designation: "VICE PRINCIPAL" },
  { name: "Mr. JAILAL V.C", qualification: "B.Sc (Electronics), MCA", department: "COMPUTER SCIENCE", designation: "SENIOR COORDINATOR (IX-XII)" },
  { name: "Mrs. SHEEJA A JALEEL", qualification: "M.Sc, B.Ed", department: "SCIENCE", designation: "MIDDLE COORDINATOR (VI-VIII)" },
  { name: "Mrs. JEBA PRIYADHARSHINI", qualification: "M.Sc, B.Ed", department: "SCIENCE", designation: "COORDINATOR (III-V)" },
  { name: "Mrs. A. DHANAPACKIAM", qualification: "M.A, B.Ed, M.Phil", department: "ENGLISH", designation: "COORDINATOR (I & II)" },
  { name: "Mrs. PREETHA DILEEP", qualification: "B.A, PPTTC, PGDCA", department: "KINDERGARTEN", designation: "KG IN-CHARGE" },
  { name: "Mr. PRAJITH T.P", qualification: "M.Com, M.Phil, B.Ed, SET", department: "COMMERCE", designation: "HOD COMMERCE & PGT" },
  { name: "Mr. ABDUL RAHMAN K", qualification: "M.Sc, B.Ed, PGDCA", department: "MATHEMATICS", designation: "HOD MATHEMATICS & PGT" },
  { name: "Mrs. ANCY JACOB", qualification: "M.Sc, B.Ed, M.Phil", department: "SCIENCE", designation: "HOD SCIENCE & PGT BIOLOGY" },
  { name: "Mrs. MINI SIVADAS", qualification: "M.Sc, B.Ed", department: "SCIENCE", designation: "PGT CHEMISTRY" },
  { name: "Mr. VISHNU SAJEEV", qualification: "M.Sc, B.Ed", department: "SCIENCE", designation: "PGT PHYSICS" },
  { name: "Mrs. JASMINE BEGUM", qualification: "M.A, B.Ed", department: "ENGLISH", designation: "HOD ENGLISH & PGT" },
  { name: "Mr. MOHAMMED ABDUL MAJEED", qualification: "M.A, B.Ed, M.Phil", department: "SOCIAL SCIENCE", designation: "HOD SOCIAL SCIENCE & TGT" },
  { name: "Mr. VINOD KUMAR", qualification: "M.A, B.Ed", department: "HINDI", designation: "HOD HINDI & PGT" },
  { name: "Mr. SUBAIR P", qualification: "M.A, B.Ed", department: "MALAYALAM", designation: "HOD MALAYALAM & TGT" },
  { name: "Mr. ANAS MOHAMED", qualification: "M.A, B.Ed", department: "ARABIC", designation: "HOD ARABIC & TGT" },
  { name: "Mr. RADHAKRISHNAN K", qualification: "M.P.Ed, NIS", department: "PHYSICAL EDUCATION", designation: "HOD PHYSICAL EDUCATION" },
  { name: "Mrs. SMITHA BIJU", qualification: "M.P.Ed", department: "PHYSICAL EDUCATION", designation: "PET TEACHER" },
  { name: "Mr. SANJAY JADHAV", qualification: "M.A, B.Ed", department: "FINE ARTS", designation: "ART INSTRUCTOR" },
  { name: "Mr. ANOOP VIJAYAN", qualification: "M.Music", department: "PERFORMING ARTS", designation: "MUSIC TEACHER" },
  { name: "Mrs. REENA THOMAS", qualification: "M.Sc, B.Ed", department: "MATHEMATICS", designation: "TGT MATHEMATICS" },
  { name: "Mr. RAJESH K.R", qualification: "M.Sc, B.Ed", department: "SCIENCE", designation: "TGT SCIENCE" },
  { name: "Mrs. DEEPA SURESH", qualification: "M.A, B.Ed", department: "ENGLISH", designation: "TGT ENGLISH" },
  { name: "Mrs. BINDU HARIDAS", qualification: "M.A, B.Ed", department: "SOCIAL SCIENCE", designation: "TGT SOCIAL SCIENCE" },
  { name: "Mrs. SABINA KHAN", qualification: "B.Sc, B.Ed", department: "SCIENCE", designation: "PRT SCIENCE" },
  { name: "Mrs. RESHMA NAIR", qualification: "B.A, B.Ed", department: "ENGLISH", designation: "PRT ENGLISH" },
  { name: "Mrs. KAVITHA MANOJ", qualification: "B.Sc, B.Ed", department: "MATHEMATICS", designation: "PRT MATHEMATICS" },
  { name: "Mrs. MANJU PILLAI", qualification: "M.A (Special Education), B.Ed", department: "STUDENT SUPPORT", designation: "SPECIAL EDUCATOR" },
  { name: "Mrs. FARZANA PARVEEN", qualification: "M.A (Clinical Psychology), PGDGC", department: "STUDENT SUPPORT", designation: "WELLNESS COUNSELLOR" },
  { name: "Mr. PRASANTH P.K", qualification: "M.L.I.Sc", department: "LIBRARY", designation: "LIBRARIAN" }
];

export interface FeeItem {
  classLevel: string;
  tuitionFeePerTerm: number;
  totalTuitionAnnual: number;
  termCount: number;
  computerFeePerTerm: number;
  examFeePerTerm: number;
  annualEstimateOMR: number;
}

export const FEE_TABLE_DATA: FeeItem[] = [
  { classLevel: "KG I & KG II (Balvatika)", tuitionFeePerTerm: 42, totalTuitionAnnual: 168, termCount: 4, computerFeePerTerm: 0, examFeePerTerm: 2, annualEstimateOMR: 176 },
  { classLevel: "Class I – Class II", tuitionFeePerTerm: 45, totalTuitionAnnual: 180, termCount: 4, computerFeePerTerm: 3, examFeePerTerm: 3, annualEstimateOMR: 204 },
  { classLevel: "Class III – Class V", tuitionFeePerTerm: 48, totalTuitionAnnual: 192, termCount: 4, computerFeePerTerm: 4, examFeePerTerm: 3, annualEstimateOMR: 220 },
  { classLevel: "Class VI – Class VIII", tuitionFeePerTerm: 52, totalTuitionAnnual: 208, termCount: 4, computerFeePerTerm: 5, examFeePerTerm: 4, annualEstimateOMR: 244 },
  { classLevel: "Class IX – Class X", tuitionFeePerTerm: 58, totalTuitionAnnual: 232, termCount: 4, computerFeePerTerm: 6, examFeePerTerm: 5, annualEstimateOMR: 276 },
  { classLevel: "Class XI – Class XII (Commerce)", tuitionFeePerTerm: 68, totalTuitionAnnual: 272, termCount: 4, computerFeePerTerm: 8, examFeePerTerm: 6, annualEstimateOMR: 328 },
  { classLevel: "Class XI – Class XII (Science)", tuitionFeePerTerm: 72, totalTuitionAnnual: 288, termCount: 4, computerFeePerTerm: 10, examFeePerTerm: 6, annualEstimateOMR: 352 }
];

export const GENERAL_FEE_RULES = [
  "Tuition fee is payable in four quarterly installments: Term 1 (April-June), Term 2 (July-September), Term 3 (October-December), Term 4 (January-March).",
  "Admission Fee of OMR 25.000 is payable at the time of initial admission (non-refundable).",
  "Refundable Caution Deposit of OMR 50.000 per student is payable at the time of initial admission, refundable upon withdrawal after clearance.",
  "Fee payments can be made online via School ERP Portal, Bank Muscat transfer, or at the school fee counter during banking hours (7:30 AM to 1:30 PM).",
  "Bus transport charges are calculated based on pickup zone across South Batinah (Muladha, Suwaiq, Khabourah, Rustaq, Musannah, Barka) and billed quarterly."
];

export const CAREER_VACANCIES = [
  {
    role: "PGT - Physics (Senior Secondary)",
    minQualification: "Post Graduate in Physics with B.Ed. Minimum 3 to 5 years teaching experience in CBSE senior secondary classes.",
    status: "Open for 2026-27",
    department: "Science"
  },
  {
    role: "PGT - Accountancy & Business Studies",
    minQualification: "M.Com with B.Ed. Strong familiarity with CBSE Grade 11 & 12 curriculum and project evaluations.",
    status: "Open for 2026-27",
    department: "Commerce"
  },
  {
    role: "TGT - Mathematics & Robotics",
    minQualification: "B.Sc/M.Sc in Mathematics with B.Ed. Aptitude for hands-on STEAM and laboratory pedagogy.",
    status: "Open for 2026-27",
    department: "Mathematics"
  },
  {
    role: "PRT - English & Social Sciences",
    minQualification: "B.A/M.A in English with B.Ed. Excellent communication and child-centric pedagogical skills.",
    status: "Open for 2026-27",
    department: "Primary"
  },
  {
    role: "KG Educator / Nursery Trained Teacher (NTT)",
    minQualification: "Degree with NTT/PPTTC certification. Creative storytelling, music, and activity facilitation skills.",
    status: "Open for 2026-27",
    department: "Early Years"
  }
];

export const TENDER_NOTICES = [
  {
    title: "Tender for Supply of Science Laboratory Equipment & Consumables (2026-27)",
    refNo: "ISML/TND/LAB/2026/01",
    closingDate: "October 15, 2026",
    status: "Active"
  },
  {
    title: "Annual Canteen & Refreshment Pavilion Catering Services (2026-27)",
    refNo: "ISML/TND/CAN/2026/02",
    closingDate: "October 20, 2026",
    status: "Active"
  },
  {
    title: "Campus CCTV & Digital Security Infrastructure Maintenance Contract",
    refNo: "ISML/TND/IT/2026/03",
    closingDate: "November 05, 2026",
    status: "Active"
  }
];
