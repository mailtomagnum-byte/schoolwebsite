import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { SCHOOL_STAGES_LIST } from '../data/schoolData';

interface WoodbridgeTextAndLinksListProps {
  onOpenAdmissions: () => void;
  onOpenProspectus: () => void;
}

export const WoodbridgeTextAndLinksList: React.FC<WoodbridgeTextAndLinksListProps> = ({
  onOpenAdmissions,
  onOpenProspectus,
}) => {
  const [activeStageIndex, setActiveStageIndex] = useState(0);

  return (
    <section id="stages" className="bg-[#FFF7EE] text-[#001028] py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading, Copy, and Dynamic Feature Image */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#EB0F2D] font-bold block mb-3 font-poppins">
                The Journey with Your Children
              </span>
              <h2 className="font-poppins text-3xl sm:text-5xl font-bold tracking-tight text-[#001028] leading-[1.15] mb-6">
                Our students are our entire focus
              </h2>
              <div className="text-base sm:text-lg text-[#19273D]/80 leading-relaxed space-y-4 font-normal">
                <p>
                  At Indian School Muladha each child gets a framework for success, a roadmap for where they want to go and the right support at every stage of their development.
                </p>
                <p>
                  From their very first steps in Kindergarten to CBSE Senior Secondary board triumphs, we nurture self-discipline, academic distinction, and emotional intelligence.
                </p>
              </div>
            </div>

            {/* Dynamic Stage Display Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] group border-4 border-white">
              <img
                src={SCHOOL_STAGES_LIST[activeStageIndex].image}
                alt={SCHOOL_STAGES_LIST[activeStageIndex].name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#001028]/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#c5a059] block mb-1">
                  {SCHOOL_STAGES_LIST[activeStageIndex].age}
                </span>
                <h4 className="font-poppins text-xl font-bold">
                  {SCHOOL_STAGES_LIST[activeStageIndex].name}
                </h4>
                <p className="text-xs text-white/80 line-clamp-1 font-light">
                  {SCHOOL_STAGES_LIST[activeStageIndex].tagline}
                </p>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-4">
              <button
                onClick={onOpenAdmissions}
                className="px-6 py-3 rounded-full bg-[#EB0F2D] hover:bg-[#c90b24] text-white text-xs font-bold uppercase tracking-wider shadow-md transition-all"
              >
                Apply for Admission
              </button>
              <button
                onClick={onOpenProspectus}
                className="px-6 py-3 rounded-full bg-transparent hover:bg-black/5 text-[#001028] text-xs font-bold uppercase tracking-wider border border-[#001028]/30 transition-all"
              >
                Download Guide
              </button>
            </div>
          </div>

          {/* Right Column: Stages List Cards (Woodbridge list items) */}
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#19273D]/60 block mb-2">
              Select Educational Stage:
            </span>

            {SCHOOL_STAGES_LIST.map((stage, idx) => {
              const isSelected = activeStageIndex === idx;
              return (
                <div
                  key={stage.id}
                  onClick={() => setActiveStageIndex(idx)}
                  className={`p-5 sm:p-6 rounded-2xl border transition-all duration-300 cursor-pointer flex items-center gap-5 sm:gap-6 ${
                    isSelected
                      ? 'bg-white border-[#EB0F2D] shadow-xl scale-[1.02]'
                      : 'bg-white/60 hover:bg-white border-black/5 hover:border-black/15 shadow-sm'
                  }`}
                >
                  {/* Thumbnail Image */}
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden flex-shrink-0 relative">
                    <img
                      src={stage.image}
                      alt={stage.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                    {isSelected && (
                      <div className="absolute inset-0 bg-[#EB0F2D]/20 border-2 border-[#EB0F2D]" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h3 className="font-poppins text-lg sm:text-xl font-bold text-[#001028]">
                        {stage.name}
                      </h3>
                      <span className="text-[11px] font-bold text-[#EB0F2D] uppercase tracking-wider">
                        {stage.age}
                      </span>
                    </div>

                    <div className="text-xs sm:text-sm text-[#19273D]/80 mb-2">
                      <strong className="text-[#001028] font-semibold">{stage.years}: </strong>
                      {stage.tagline}
                    </div>

                    <p className="text-xs text-[#19273D]/70 line-clamp-2 font-light">
                      {stage.description}
                    </p>

                    <div className="mt-3 flex items-center gap-1 text-xs font-bold text-[#EB0F2D]">
                      <span>{stage.linkText}</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
