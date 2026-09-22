import React from 'react';
import { motion } from 'motion/react';
import { Play, Calendar, Compass, ArrowRight } from 'lucide-react';

interface WoodbridgeFeaturedStripProps {
  onOpenAdmissions: () => void;
  onOpenVirtualTour: () => void;
  onWatchVideo: () => void;
}

export const WoodbridgeFeaturedStrip: React.FC<WoodbridgeFeaturedStripProps> = ({
  onOpenAdmissions,
  onOpenVirtualTour,
  onWatchVideo,
}) => {
  return (
    <section className="relative bg-[#000F29] text-white py-24 sm:py-36 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* Giant Horizontal Outline Background Text: EXACT Woodbridge School Style */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 pointer-events-none select-none overflow-hidden z-0 opacity-15">
        <div className="animate-marquee-left whitespace-nowrap text-[12vw] font-black uppercase font-poppins text-stroke-outline tracking-wider">
          <span>Set up for life &bull; Educate for Life &bull; Set up for life &bull; Educate for Life &bull; </span>
          <span>Set up for life &bull; Educate for Life &bull; Set up for life &bull; Educate for Life &bull; </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Heading & Copy */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs uppercase tracking-[0.25em] text-[#EB0F2D] font-bold block font-poppins">
              Visit Indian School Muladha
            </span>

            <h2 className="font-poppins text-3xl sm:text-5xl font-bold tracking-tight text-white leading-[1.12]">
              Want to see for yourself?
            </h2>

            <div className="text-base sm:text-lg text-[#cbd5e1] leading-relaxed space-y-4 font-light">
              <p>
                In addition to our open days, we welcome visits from parents and children looking for the right foundation for life ahead.
              </p>
              <p>
                We’ll be happy to show you around our 30-acre campus, introducing you to our faculty, laboratory complexes, athletic turfs, and the personalized support we offer every student.
              </p>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenAdmissions}
                className="px-7 py-3.5 rounded-full bg-[#EB0F2D] hover:bg-[#c90b24] text-white text-xs font-bold uppercase tracking-wider shadow-lg transition-all transform hover:-translate-y-0.5"
              >
                Book an Individual Visit
              </button>

              <button
                onClick={onOpenVirtualTour}
                className="px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-wider border border-white/20 transition-all flex items-center gap-2"
              >
                <Compass className="w-4 h-4 text-[#c5a059]" />
                <span>360° Virtual Tour</span>
              </button>
            </div>
          </div>

          {/* Right Column: Asymmetrical Photo Mosaic & Video Button */}
          <div className="lg:col-span-7">
            <div className="relative">
              
              {/* Main Feature / Video Card */}
              <div className="relative rounded-3xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.8)] border border-white/15 aspect-[16/10] group">
                <img
                  src="/src/assets/images/isml_campus_hero_1790079262969.jpg"
                  alt="Indian School Muladha Campus"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#000F29]/80 via-transparent to-black/20" />

                {/* Central Play Button */}
                <button
                  onClick={onWatchVideo}
                  className="absolute inset-0 m-auto w-20 h-20 rounded-full bg-[#EB0F2D] hover:bg-white text-white hover:text-[#000F29] flex items-center justify-center shadow-2xl transition-all transform hover:scale-110 group-hover:shadow-[0_0_40px_rgba(235,15,45,0.8)]"
                  aria-label="Play Campus Video"
                >
                  <Play className="w-8 h-8 fill-current ml-1" />
                </button>

                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white">
                  <div>
                    <span className="text-[11px] uppercase tracking-widest text-[#c5a059] font-bold block mb-1">
                      Campus Documentary Film
                    </span>
                    <h4 className="font-poppins text-lg font-bold">
                      A Day in the Life of Indian School Muladha
                    </h4>
                  </div>
                  <span className="text-xs bg-black/60 px-3 py-1.5 rounded-full border border-white/20 font-mono">
                    03:45
                  </span>
                </div>
              </div>

              {/* Overlapping Staggered Secondary Image 1 (Top Right) */}
              <div className="hidden sm:block absolute -top-8 -right-6 w-44 rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20 aspect-[3/4] rotate-3 hover:rotate-0 transition-transform duration-300">
                <img
                  src="/src/assets/images/student_robotics_1790080038518.jpg"
                  alt="Student in Robotics Lab"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Overlapping Staggered Secondary Image 2 (Bottom Left) */}
              <div className="hidden sm:block absolute -bottom-8 -left-6 w-48 rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20 aspect-[4/3] -rotate-3 hover:rotate-0 transition-transform duration-300">
                <img
                  src="/src/assets/images/student_cricket_1790080058803.jpg"
                  alt="Student Cricket Captain"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
