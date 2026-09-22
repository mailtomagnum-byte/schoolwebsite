import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { FEATURE_BLOCKS } from '../data/schoolData';

interface WoodbridgeFeaturedBlocksProps {
  onOpenAdmissions: () => void;
  onOpenProspectus: () => void;
}

export const WoodbridgeFeaturedBlocks: React.FC<WoodbridgeFeaturedBlocksProps> = ({
  onOpenAdmissions,
  onOpenProspectus,
}) => {
  return (
    <section id="features" className="bg-[#FFF7EE] text-[#001028] py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Intro Heading */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#EB0F2D] font-bold block mb-3 font-poppins">
            Holistic Education
          </span>
          <h2 className="font-poppins text-3xl sm:text-5xl font-bold tracking-tight text-[#001028] leading-[1.15]">
            Fresh thinking to help everyone learn and grow
          </h2>
        </div>

        {/* 3 Featured Blocks Grid matching Woodbridge School */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURE_BLOCKS.map((block, idx) => (
            <div
              key={block.id}
              className="bg-white rounded-3xl overflow-hidden shadow-lg border border-black/5 hover:border-[#EB0F2D]/50 transition-all duration-300 flex flex-col group hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Image Frame with Border */}
              <div className="aspect-[16/10] overflow-hidden relative">
                <img
                  src={block.image}
                  alt={block.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
              </div>

              {/* Card Container & Copy */}
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-poppins text-2xl font-bold text-[#001028] mb-3 group-hover:text-[#EB0F2D] transition-colors">
                    {block.title}
                  </h3>
                  <p className="text-sm text-[#19273D]/80 leading-relaxed font-normal mb-6">
                    {block.copy}
                  </p>
                </div>

                <div className="pt-4 border-t border-black/5 flex items-center justify-between">
                  <button
                    onClick={onOpenProspectus}
                    className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#001028] group-hover:text-[#EB0F2D] transition-colors"
                  >
                    <span>{block.linkText}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#EB0F2D]" />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
