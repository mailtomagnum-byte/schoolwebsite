import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Award, GraduationCap } from 'lucide-react';
import { HEAD_LEADERSHIP } from '../data/schoolData';

interface WoodbridgeStaffStripProps {
  onOpenAdmissions: () => void;
}

export const WoodbridgeStaffStrip: React.FC<WoodbridgeStaffStripProps> = ({
  onOpenAdmissions,
}) => {
  return (
    <section id="staff" className="relative bg-[#001028] text-white py-24 sm:py-36 px-4 sm:px-6 lg:px-8 border-t border-white/10 overflow-hidden">
      
      {/* Decorative Heraldic Geometric Backing */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#EB0F2D]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Portrait & Caption */}
          <div className="lg:col-span-5 order-last lg:order-first">
            <div className="relative max-w-md mx-auto lg:mx-0">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-2 border-white/20 aspect-[3/4]">
                <img
                  src={HEAD_LEADERSHIP.image}
                  alt={HEAD_LEADERSHIP.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover filter brightness-[0.95] contrast-[1.02]"
                />
              </div>

              {/* Caption Tag */}
              <div className="mt-4 flex items-center justify-between px-2">
                <div>
                  <h4 className="font-poppins font-bold text-base text-white">
                    {HEAD_LEADERSHIP.name}
                  </h4>
                  <span className="text-xs text-[#c5a059] block">
                    {HEAD_LEADERSHIP.title}
                  </span>
                </div>
                <div className="text-[11px] text-white/50 text-right">
                  {HEAD_LEADERSHIP.qualifications.split(',')[0]}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Heading, Quote, & Ethos */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#EB0F2D] font-bold block mb-3 font-poppins">
                Institutional Leadership
              </span>
              <h2 className="font-poppins text-3xl sm:text-5xl font-bold tracking-tight text-white leading-[1.12]">
                Meet the staff and management committee
              </h2>
            </div>

            {/* Big Expressive Quote */}
            <div className="border-l-4 border-[#EB0F2D] pl-6 py-2">
              <blockquote className="font-poppins text-xl sm:text-2xl font-normal text-white leading-relaxed italic">
                "{HEAD_LEADERSHIP.quote}"
              </blockquote>
            </div>

            <p className="text-base text-[#cbd5e1] leading-relaxed font-light">
              {HEAD_LEADERSHIP.description}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenAdmissions}
                className="px-7 py-3.5 rounded-full bg-[#EB0F2D] hover:bg-[#c90b24] text-white text-xs font-bold uppercase tracking-wider shadow-lg transition-all transform hover:-translate-y-0.5 flex items-center gap-2"
              >
                <span>{HEAD_LEADERSHIP.linkText}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-2 text-xs text-white/60">
                <Award className="w-4 h-4 text-[#c5a059]" />
                <span>Over 140+ qualified international faculty</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
