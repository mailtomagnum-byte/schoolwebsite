import React from 'react';
import { SCROLLING_MARQUEE_LINES } from '../data/schoolData';

export const WoodbridgeScrollingText: React.FC = () => {
  return (
    <section className="bg-[#000F29] text-white py-16 sm:py-24 overflow-hidden border-y border-white/10 select-none">
      <div className="space-y-4 sm:space-y-6">
        
        {/* Line 1 - Scrolls Left */}
        <div className="overflow-hidden flex">
          <div className="animate-marquee-left flex items-center gap-6 sm:gap-10 text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white whitespace-nowrap">
            {SCROLLING_MARQUEE_LINES[0].items.map((item, idx) => (
              <span
                key={idx}
                className={
                  item.isStylised
                    ? 'font-stylised normal-case text-4xl sm:text-6xl md:text-7xl text-[#EB0F2D] px-2 font-normal'
                    : 'text-white/90 hover:text-white'
                }
              >
                {item.text}
              </span>
            ))}
            {/* Duplication for seamless continuous loop */}
            {SCROLLING_MARQUEE_LINES[0].items.map((item, idx) => (
              <span
                key={`dup-${idx}`}
                className={
                  item.isStylised
                    ? 'font-stylised normal-case text-4xl sm:text-6xl md:text-7xl text-[#EB0F2D] px-2 font-normal'
                    : 'text-white/90 hover:text-white'
                }
              >
                {item.text}
              </span>
            ))}
          </div>
        </div>

        {/* Line 2 - Scrolls Right */}
        <div className="overflow-hidden flex">
          <div className="animate-marquee-right flex items-center gap-6 sm:gap-10 text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white whitespace-nowrap">
            {SCROLLING_MARQUEE_LINES[1].items.map((item, idx) => (
              <span
                key={idx}
                className={
                  item.isStylised
                    ? 'font-stylised normal-case text-4xl sm:text-6xl md:text-7xl text-[#EB0F2D] px-2 font-normal'
                    : 'text-white/90 hover:text-white'
                }
              >
                {item.text}
              </span>
            ))}
            {/* Duplication for seamless continuous loop */}
            {SCROLLING_MARQUEE_LINES[1].items.map((item, idx) => (
              <span
                key={`dup-${idx}`}
                className={
                  item.isStylised
                    ? 'font-stylised normal-case text-4xl sm:text-6xl md:text-7xl text-[#EB0F2D] px-2 font-normal'
                    : 'text-white/90 hover:text-white'
                }
              >
                {item.text}
              </span>
            ))}
          </div>
        </div>

        {/* Line 3 - Scrolls Left */}
        <div className="overflow-hidden flex">
          <div className="animate-marquee-left flex items-center gap-6 sm:gap-10 text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white whitespace-nowrap">
            {SCROLLING_MARQUEE_LINES[2].items.map((item, idx) => (
              <span
                key={idx}
                className={
                  item.isStylised
                    ? 'font-stylised normal-case text-4xl sm:text-6xl md:text-7xl text-[#EB0F2D] px-2 font-normal'
                    : 'text-white/90 hover:text-white'
                }
              >
                {item.text}
              </span>
            ))}
            {/* Duplication for seamless continuous loop */}
            {SCROLLING_MARQUEE_LINES[2].items.map((item, idx) => (
              <span
                key={`dup-${idx}`}
                className={
                  item.isStylised
                    ? 'font-stylised normal-case text-4xl sm:text-6xl md:text-7xl text-[#EB0F2D] px-2 font-normal'
                    : 'text-white/90 hover:text-white'
                }
              >
                {item.text}
              </span>
            ))}
          </div>
        </div>

        {/* Line 4 - Scrolls Right */}
        <div className="overflow-hidden flex">
          <div className="animate-marquee-right flex items-center gap-6 sm:gap-10 text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white whitespace-nowrap">
            {SCROLLING_MARQUEE_LINES[3].items.map((item, idx) => (
              <span
                key={idx}
                className={
                  item.isStylised
                    ? 'font-stylised normal-case text-4xl sm:text-6xl md:text-7xl text-[#EB0F2D] px-2 font-normal'
                    : 'text-white/90 hover:text-white'
                }
              >
                {item.text}
              </span>
            ))}
            {/* Duplication for seamless continuous loop */}
            {SCROLLING_MARQUEE_LINES[3].items.map((item, idx) => (
              <span
                key={`dup-${idx}`}
                className={
                  item.isStylised
                    ? 'font-stylised normal-case text-4xl sm:text-6xl md:text-7xl text-[#EB0F2D] px-2 font-normal'
                    : 'text-white/90 hover:text-white'
                }
              >
                {item.text}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
