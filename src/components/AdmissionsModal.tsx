import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  GraduationCap, 
  CheckCircle, 
  Sparkles, 
  MapPin, 
  Calendar, 
  User, 
  Mail, 
  Phone, 
  Bus, 
  ArrowRight, 
  ArrowLeft,
  Clock,
  ShieldCheck
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { SCHOOL_INFO, SENIOR_STREAMS } from '../data/schoolData';
import { Crest3D } from './Crest3D';
import { useCrm } from '../context/CrmContext';

interface AdmissionsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdmissionsModal: React.FC<AdmissionsModalProps> = ({
  isOpen,
  onClose,
}) => {
  const { addLead } = useCrm();
  const [step, setStep] = useState<number>(1);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [appId, setAppId] = useState<string>('');

  // Form states
  const [studentName, setStudentName] = useState('');
  const [grade, setGrade] = useState('KG I');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('Male');
  const [selectedStream, setSelectedStream] = useState('science');
  const [busRoute, setBusRoute] = useState('Al Muladha / Musannah');
  const [parentName, setParentName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [visitDate, setVisitDate] = useState('');

  if (!isOpen) return null;

  const isSeniorGrade = grade === 'Grade 11' || grade === 'Grade 12';

  const busRoutes = [
    "Al Muladha & Surrounding Corridors",
    "Barka City & Al Rumais",
    "Al Musannah & Tareef",
    "Al Suwaiq & Al Khabourah",
    "Rustaq & Al Hazm",
    "Wudam Al Sahil Coastal",
    "Self-Transport / Private"
  ];

  const gradesList = [
    "KG I", "KG II",
    "Grade 1", "Grade 2", "Grade 3", "Grade 4", "Grade 5",
    "Grade 6", "Grade 7", "Grade 8",
    "Grade 9", "Grade 10",
    "Grade 11", "Grade 12"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedId = `ISML-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    setAppId(generatedId);

    // Automatically synchronize into CRM Admissions Pipeline
    addLead({
      studentName: studentName || 'Applicant Student',
      parentName: parentName || 'Parent / Guardian',
      email: email || 'parent@mail.com',
      phone: phone || '+968 9000 0000',
      gradeApplying: isSeniorGrade ? `${grade} (${selectedStream.toUpperCase()})` : grade,
      academicYear: '2026-2027',
      preferredDate: visitDate || new Date().toISOString().split('T')[0],
      notes: `Bus route: ${busRoute}. DOB: ${dob || 'N/A'}. Gender: ${gender}. Ref code: ${generatedId}`,
      status: 'New',
      source: 'Website Visit Form',
    });

    setIsSubmitted(true);

    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.5 }
    });
  };

  const handleReset = () => {
    setStep(1);
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 20 }}
        className="relative w-full max-w-2xl bg-[#0b1322] border-2 border-[#c5a059]/40 rounded-3xl shadow-[0_30px_90px_rgba(0,0,0,0.9)] overflow-hidden flex flex-col max-h-[92vh]"
      >
        {/* Header */}
        <div className="p-4 sm:px-6 bg-[#060a12] border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Crest3D size="sm" showMotto={false} interactive={false} />
            <div>
              <h3 className="font-serif text-base sm:text-lg font-bold text-white">
                Admissions Portal • Session 2025-2026
              </h3>
              <p className="text-[10px] text-[#dfb875] tracking-wider uppercase font-display">
                Indian School Muladha, Sultanate of Oman
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-white/70 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress Indicator (if not submitted) */}
        {!isSubmitted && (
          <div className="px-6 py-3 bg-[#080e18] border-b border-white/5 flex items-center justify-between text-xs">
            <div className={`flex items-center gap-1.5 ${step >= 1 ? 'text-[#dfb875] font-semibold' : 'text-white/40'}`}>
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[11px] ${step >= 1 ? 'bg-[#c5a059] text-[#09101d] font-bold' : 'bg-white/10'}`}>1</span>
              <span>Candidate</span>
            </div>
            <div className="w-8 h-0.5 bg-white/10" />
            <div className={`flex items-center gap-1.5 ${step >= 2 ? 'text-[#dfb875] font-semibold' : 'text-white/40'}`}>
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[11px] ${step >= 2 ? 'bg-[#c5a059] text-[#09101d] font-bold' : 'bg-white/10'}`}>2</span>
              <span>Academic & Transit</span>
            </div>
            <div className="w-8 h-0.5 bg-white/10" />
            <div className={`flex items-center gap-1.5 ${step >= 3 ? 'text-[#dfb875] font-semibold' : 'text-white/40'}`}>
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[11px] ${step >= 3 ? 'bg-[#c5a059] text-[#09101d] font-bold' : 'bg-white/10'}`}>3</span>
              <span>Parent / Review</span>
            </div>
          </div>
        )}

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1">
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8"
            >
              <div className="w-16 h-16 rounded-full bg-[#10b981]/20 border border-[#10b981]/40 flex items-center justify-center mx-auto mb-4 text-[#10b981]">
                <CheckCircle className="w-8 h-8" />
              </div>

              <span className="text-xs uppercase tracking-[0.2em] text-[#c5a059] font-display font-semibold block mb-1">
                Application Successfully Registered
              </span>
              <h2 className="font-serif text-3xl font-bold text-white mb-2">
                Welcome to the ISML Family
              </h2>
              <p className="text-sm text-[#cbd5e1] font-light max-w-md mx-auto mb-6">
                Your preliminary registration for <strong>{studentName || 'Candidate'}</strong> applying for <strong>{grade}</strong> has been received by our Admissions Directorate.
              </p>

              <div className="p-5 rounded-2xl bg-[#070c16] border border-[#c5a059]/40 max-w-sm mx-auto mb-6 text-left">
                <div className="flex items-center justify-between text-xs pb-2 border-b border-white/10 mb-2">
                  <span className="text-white/60">Application Reference:</span>
                  <span className="font-mono font-bold text-[#dfb875]">{appId}</span>
                </div>
                <div className="flex items-center justify-between text-xs pb-2 border-b border-white/10 mb-2">
                  <span className="text-white/60">Grade Applied:</span>
                  <span className="font-semibold text-white">{grade}</span>
                </div>
                <div className="flex items-center justify-between text-xs pb-2 border-b border-white/10 mb-2">
                  <span className="text-white/60">Selected Route:</span>
                  <span className="text-white text-right">{busRoute.split('&')[0]}</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-white/60">Next Step:</span>
                  <span className="text-[#10b981] font-medium">Entrance Assessment Call</span>
                </div>
              </div>

              <p className="text-xs text-white/50 max-w-md mx-auto mb-6">
                An acknowledgment SMS and official email have been dispatched to <strong>{email || 'your email'}</strong>. Our admissions officer will contact you within 24 hours.
              </p>

              <button
                onClick={handleReset}
                className="px-8 py-3 rounded-xl bg-[#c5a059] hover:bg-[#dfb875] text-[#09101d] font-bold text-xs uppercase tracking-wider transition-colors shadow-lg"
              >
                Close & Return to Portal
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Step 1: Candidate Basic Information */}
              {step === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-4"
                >
                  <h4 className="font-serif text-lg font-bold text-white border-b border-white/10 pb-2 flex items-center gap-2">
                    <User className="w-4 h-4 text-[#c5a059]" />
                    <span>Candidate Information</span>
                  </h4>

                  <div>
                    <label className="block text-xs font-semibold text-white/80 uppercase tracking-wider mb-1.5">
                      Student Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={studentName}
                      onChange={(e) => setStudentName(e.target.value)}
                      placeholder="e.g. Aryan Sharma"
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/15 focus:border-[#c5a059] text-white text-sm focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-white/80 uppercase tracking-wider mb-1.5">
                        Grade Applying For *
                      </label>
                      <select
                        value={grade}
                        onChange={(e) => setGrade(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#09111c] border border-white/15 focus:border-[#c5a059] text-white text-sm focus:outline-none"
                      >
                        {gradesList.map((g) => (
                          <option key={g} value={g}>{g}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-white/80 uppercase tracking-wider mb-1.5">
                        Date of Birth *
                      </label>
                      <input
                        type="date"
                        required
                        value={dob}
                        onChange={(e) => setDob(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#09111c] border border-white/15 focus:border-[#c5a059] text-white text-sm focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-white/80 uppercase tracking-wider mb-1.5">
                      Gender
                    </label>
                    <div className="flex gap-4">
                      {['Male', 'Female'].map((gen) => (
                        <label key={gen} className="flex items-center gap-2 text-xs text-white/80 cursor-pointer">
                          <input
                            type="radio"
                            name="gender"
                            value={gen}
                            checked={gender === gen}
                            onChange={() => setGender(gen)}
                            className="text-[#c5a059] focus:ring-[#c5a059]"
                          />
                          <span>{gen}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 flex justify-end">
                    <button
                      type="button"
                      disabled={!studentName}
                      onClick={() => setStep(2)}
                      className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                        studentName
                          ? 'bg-[#c5a059] text-[#09101d] hover:bg-[#dfb875]'
                          : 'bg-white/10 text-white/30 cursor-not-allowed'
                      }`}
                    >
                      <span>Continue to Next Step</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Step 2: Stream Selection (if 11/12) and Bus Transit */}
              {step === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-4"
                >
                  <h4 className="font-serif text-lg font-bold text-white border-b border-white/10 pb-2 flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-[#c5a059]" />
                    <span>Academic Stream & Transportation</span>
                  </h4>

                  {isSeniorGrade && (
                    <div className="p-4 rounded-2xl bg-white/[0.04] border border-[#c5a059]/30">
                      <label className="block text-xs font-semibold text-[#dfb875] uppercase tracking-wider mb-2">
                        Select Senior Secondary Stream (CBSE) *
                      </label>
                      <div className="space-y-2">
                        {SENIOR_STREAMS.map((str) => (
                          <label
                            key={str.id}
                            className={`flex items-center justify-between p-3 rounded-xl border cursor-pointer transition-all ${
                              selectedStream === str.id
                                ? 'bg-[#c5a059]/15 border-[#c5a059] text-white'
                                : 'bg-black/20 border-white/10 text-white/70 hover:border-white/20'
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <input
                                type="radio"
                                name="stream"
                                value={str.id}
                                checked={selectedStream === str.id}
                                onChange={() => setSelectedStream(str.id)}
                                className="text-[#c5a059]"
                              />
                              <div>
                                <span className="font-bold text-xs block text-white">{str.name}</span>
                                <span className="text-[10px] text-white/50">{str.code}</span>
                              </div>
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>
                  )}

                  <div>
                    <label className="block text-xs font-semibold text-white/80 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                      <Bus className="w-3.5 h-3.5 text-[#c5a059]" />
                      <span>School Bus Route / Neighborhood in Oman *</span>
                    </label>
                    <select
                      value={busRoute}
                      onChange={(e) => setBusRoute(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#09111c] border border-white/15 focus:border-[#c5a059] text-white text-sm focus:outline-none"
                    >
                      {busRoutes.map((route) => (
                        <option key={route} value={route}>{route}</option>
                      ))}
                    </select>
                    <p className="text-[11px] text-white/50 mt-1">
                      Our modern GPS-tracked, AC buses cover Barka, Muladha, Musannah, Suwaiq, and Rustaq.
                    </p>
                  </div>

                  <div className="pt-4 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white/70 hover:text-white"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>Back</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#c5a059] text-[#09101d] font-bold text-xs uppercase tracking-wider hover:bg-[#dfb875] transition-all"
                    >
                      <span>Continue to Guardian Details</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Guardian Details & Schedule Visit */}
              {step === 3 && (
                <motion.div
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-4"
                >
                  <h4 className="font-serif text-lg font-bold text-white border-b border-white/10 pb-2 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#c5a059]" />
                    <span>Parent / Guardian & Campus Visit</span>
                  </h4>

                  <div>
                    <label className="block text-xs font-semibold text-white/80 uppercase tracking-wider mb-1.5">
                      Parent / Guardian Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={parentName}
                      onChange={(e) => setParentName(e.target.value)}
                      placeholder="e.g. Dr. Rajesh Sharma"
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/15 focus:border-[#c5a059] text-white text-sm focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-white/80 uppercase tracking-wider mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="parent@example.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/15 focus:border-[#c5a059] text-white text-sm focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-white/80 uppercase tracking-wider mb-1.5">
                        GSM Phone Number (Oman) *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+968 9876 5432"
                        className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/15 focus:border-[#c5a059] text-white text-sm focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-white/80 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#c5a059]" />
                      <span>Preferred Date for Campus Assessment & Tour</span>
                    </label>
                    <input
                      type="date"
                      value={visitDate}
                      onChange={(e) => setVisitDate(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#09111c] border border-white/15 focus:border-[#c5a059] text-white text-sm focus:outline-none"
                    />
                  </div>

                  <div className="pt-4 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white/70 hover:text-white"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>Back</span>
                    </button>

                    <button
                      type="submit"
                      disabled={!parentName || !email || !phone}
                      className={`flex items-center gap-2 px-8 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all shadow-xl ${
                        parentName && email && phone
                          ? 'bg-gradient-to-r from-[#8b1528] to-[#ab1932] text-white hover:scale-105'
                          : 'bg-white/10 text-white/30 cursor-not-allowed'
                      }`}
                    >
                      <Sparkles className="w-4 h-4 text-[#dfb875]" />
                      <span>Submit Application</span>
                    </button>
                  </div>
                </motion.div>
              )}

            </form>
          )}
        </div>

      </motion.div>
    </div>
  );
};
