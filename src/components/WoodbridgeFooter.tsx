import React from 'react';
import { ArrowUp, MapPin, Phone, Mail, ExternalLink, ShieldCheck, Heart } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

interface WoodbridgeFooterProps {
  onOpenAdmissions: () => void;
  onOpenProspectus: () => void;
  onOpenVirtualTour: () => void;
}

export const WoodbridgeFooter: React.FC<WoodbridgeFooterProps> = ({
  onOpenAdmissions,
  onOpenProspectus,
  onOpenVirtualTour,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#000F29] text-white border-t border-white/10">
      
      {/* CTA Newsletter Strip - Exact Woodbridge Style */}
      <div className="bg-[#001028] py-16 px-4 sm:px-6 lg:px-8 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[#EB0F2D] font-bold block mb-2 font-poppins">
              Stay Connected
            </span>
            <h3 className="font-poppins text-2xl sm:text-4xl font-bold text-white">
              Subscribe to the Indian School Muladha Gazette
            </h3>
            <p className="text-sm text-[#cbd5e1] font-light mt-1">
              Receive term circulars, science symposium invitations, and admission deadlines.
            </p>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you for subscribing to Indian School Muladha updates.");
            }}
            className="flex w-full lg:w-auto max-w-md gap-3"
          >
            <input
              type="email"
              required
              placeholder="Enter your email address..."
              className="flex-1 px-5 py-3 rounded-full bg-white/10 border border-white/20 text-white text-xs placeholder-white/40 focus:outline-none focus:border-[#EB0F2D]"
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-full bg-[#EB0F2D] hover:bg-[#c90b24] text-white text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap shadow-lg"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Main Footer Links & Information */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/10">
          
          {/* Col 1: School Identity (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 relative flex-shrink-0 bg-white/10 rounded-2xl p-1.5 border border-white/20 shadow-md">
                <img
                  src="/assets/isml/crest.png"
                  alt="Indian School Muladha Crest"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h4 className="font-poppins font-bold text-lg text-white uppercase tracking-wider">
                  Indian School Muladha
                </h4>
                <p className="text-xs text-[#c5a059] uppercase tracking-widest font-semibold">
                  Sultanate of Oman • Estd. 1991
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#cbd5e1] font-light leading-relaxed">
              A premier CBSE co-educational day school in South Batinah established under the aegis of the Board of Directors for Indian Schools in Oman and the Embassy of India, Muscat.
            </p>

            <div className="space-y-2 text-xs text-white/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#EB0F2D] flex-shrink-0 mt-0.5" />
                <span>{SCHOOL_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#EB0F2D] flex-shrink-0" />
                <span>{SCHOOL_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#EB0F2D] flex-shrink-0" />
                <span>{SCHOOL_INFO.email}</span>
              </div>
            </div>
          </div>

          {/* Col 2: Educational Stages (2 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h5 className="font-poppins text-xs font-bold uppercase tracking-[0.2em] text-[#c5a059] border-b border-white/10 pb-2">
              School Stages
            </h5>
            <ul className="space-y-2.5 text-xs text-white/70">
              <li>
                <a href="#stages" className="hover:text-[#EB0F2D] transition-colors">
                  Early Years & Kindergarten (KG I & II)
                </a>
              </li>
              <li>
                <a href="#stages" className="hover:text-[#EB0F2D] transition-colors">
                  Primary Wing (Grades 1 to 5)
                </a>
              </li>
              <li>
                <a href="#stages" className="hover:text-[#EB0F2D] transition-colors">
                  Middle School (Grades 6 to 8)
                </a>
              </li>
              <li>
                <a href="#stages" className="hover:text-[#EB0F2D] transition-colors">
                  Secondary & Senior Secondary (9-12)
                </a>
              </li>
              <li>
                <a href="#stages" className="hover:text-[#EB0F2D] transition-colors">
                  Senior Science & Commerce Streams
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Admissions & Visits (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h5 className="font-poppins text-xs font-bold uppercase tracking-[0.2em] text-[#c5a059] border-b border-white/10 pb-2">
              Admissions & Visits
            </h5>
            <ul className="space-y-2.5 text-xs text-white/70">
              <li>
                <button onClick={onOpenAdmissions} className="hover:text-[#EB0F2D] transition-colors text-left">
                  Apply for Admissions 2025-26
                </button>
              </li>
              <li>
                <button onClick={onOpenProspectus} className="hover:text-[#EB0F2D] transition-colors text-left">
                  Download Digital Prospectus
                </button>
              </li>
              <li>
                <button onClick={onOpenVirtualTour} className="hover:text-[#EB0F2D] transition-colors text-left">
                  Interactive 3D Virtual Tour
                </button>
              </li>
              <li>
                <button onClick={onOpenAdmissions} className="hover:text-[#EB0F2D] transition-colors text-left">
                  Book an Individual Campus Tour
                </button>
              </li>
              <li>
                <a href="https://isml-oman.com" target="_blank" rel="noreferrer" className="hover:text-[#EB0F2D] transition-colors flex items-center gap-1">
                  <span>Parent Portal & Fee System</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Affiliation & Governance (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h5 className="font-poppins text-xs font-bold uppercase tracking-[0.2em] text-[#c5a059] border-b border-white/10 pb-2">
              Accreditation
            </h5>
            <div className="space-y-3 text-xs text-white/70">
              <p>
                <strong className="text-white block font-medium">CBSE Affiliation:</strong>
                No. 6130009
              </p>
              <p>
                <strong className="text-white block font-medium">School Code:</strong>
                90076
              </p>
              <p className="text-[11px] text-white/50 pt-2 border-t border-white/10">
                Approved by Ministry of Education, Sultanate of Oman.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar with Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <div className="flex flex-wrap items-center gap-2 text-center sm:text-left">
            <span>© {new Date().getFullYear()} Indian School Muladha, Sultanate of Oman. All Rights Reserved.</span>
            <span>•</span>
            <span>Redesigned in the Architectural Heritage of Woodbridge School</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-[#EB0F2D] text-white transition-colors"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
