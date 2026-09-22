import React from 'react';
import { motion } from 'motion/react';
import { Calendar, ArrowRight, Bell } from 'lucide-react';
import { LATEST_NEWS_WOODBRIDGE } from '../data/schoolData';

interface WoodbridgeNewsBlocksProps {
  onOpenAdmissions: () => void;
}

export const WoodbridgeNewsBlocks: React.FC<WoodbridgeNewsBlocksProps> = ({
  onOpenAdmissions,
}) => {
  const featuredItem = LATEST_NEWS_WOODBRIDGE[0];
  const stackedItems = LATEST_NEWS_WOODBRIDGE.slice(1);

  return (
    <section id="news" className="bg-[#FFF7EE] text-[#001028] py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-black/5">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[#EB0F2D] font-bold block mb-3 font-poppins">
              Gazette & Updates
            </span>
            <h2 className="font-poppins text-3xl sm:text-5xl font-bold tracking-tight text-[#001028]">
              Latest news and stories
            </h2>
          </div>

          <a
            href="https://isml-oman.com"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#EB0F2D] hover:text-[#001028] transition-colors"
          >
            <span>View All School Circulars</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Featured + Stacked News Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Featured Large News Story (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl overflow-hidden shadow-xl border border-black/5 flex flex-col group hover:-translate-y-1 transition-all duration-300">
            <div className="aspect-[16/10] overflow-hidden relative">
              <img
                src={featuredItem.image}
                alt={featuredItem.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-4 left-4 px-3.5 py-1 rounded-full bg-[#EB0F2D] text-white text-[11px] font-bold uppercase tracking-wider shadow-md">
                {featuredItem.category}
              </span>
            </div>

            <div className="p-8 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs text-[#19273D]/60 mb-3 font-medium">
                  <Calendar className="w-3.5 h-3.5 text-[#EB0F2D]" />
                  <span>{featuredItem.date}</span>
                </div>

                <h3 className="font-poppins text-2xl sm:text-3xl font-bold text-[#001028] mb-4 group-hover:text-[#EB0F2D] transition-colors leading-snug">
                  {featuredItem.title}
                </h3>

                <p className="text-sm sm:text-base text-[#19273D]/80 leading-relaxed font-light mb-6">
                  {featuredItem.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-black/5 flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#EB0F2D] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Read Full Gazette Story &rarr;
                </span>
              </div>
            </div>
          </div>

          {/* Stacked Secondary News Stories (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {stackedItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-6 shadow-md border border-black/5 hover:border-[#EB0F2D]/50 transition-all flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-[#19273D]/60 mb-2 font-medium">
                    <span className="text-[#EB0F2D] font-bold uppercase tracking-wider text-[10px]">
                      {item.category}
                    </span>
                    <span>{item.date}</span>
                  </div>

                  <h4 className="font-poppins text-lg font-bold text-[#001028] mb-2 group-hover:text-[#EB0F2D] transition-colors">
                    {item.title}
                  </h4>

                  <p className="text-xs text-[#19273D]/70 leading-relaxed line-clamp-2 font-light mb-4">
                    {item.excerpt}
                  </p>
                </div>

                <div className="flex items-center text-xs font-bold text-[#001028] group-hover:text-[#EB0F2D] transition-colors">
                  <span>Learn more</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            ))}

            {/* Quick Admissions Notice Box */}
            <div className="p-6 rounded-2xl bg-[#001028] text-white shadow-xl flex items-center justify-between gap-4 mt-auto">
              <div className="space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#c5a059] block">
                  Admissions 2025-26
                </span>
                <p className="text-sm font-semibold text-white">
                  Limited seats available in Science & Commerce.
                </p>
              </div>
              <button
                onClick={onOpenAdmissions}
                className="px-4 py-2 rounded-full bg-[#EB0F2D] hover:bg-[#c90b24] text-white text-xs font-bold uppercase tracking-wider whitespace-nowrap shadow-md"
              >
                Apply
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
