/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { WoodbridgeHeader } from './components/WoodbridgeHeader';
import { WoodbridgeHero } from './components/WoodbridgeHero';
import { WoodbridgeStudentAnimation } from './components/WoodbridgeStudentAnimation';
import { WoodbridgeScrollingText } from './components/WoodbridgeScrollingText';
import { WoodbridgeTextAndLinksList } from './components/WoodbridgeTextAndLinksList';
import { WoodbridgeFeaturedStrip } from './components/WoodbridgeFeaturedStrip';
import { WoodbridgeFeaturedBlocks } from './components/WoodbridgeFeaturedBlocks';
import { WoodbridgeStaffStrip } from './components/WoodbridgeStaffStrip';
import { WoodbridgeNewsBlocks } from './components/WoodbridgeNewsBlocks';
import { WoodbridgeFooter } from './components/WoodbridgeFooter';
import { InteractiveProspectusModal } from './components/InteractiveProspectusModal';
import { AdmissionsModal } from './components/AdmissionsModal';
import { VirtualTourModal } from './components/VirtualTourModal';
import { VideoModal } from './components/VideoModal';

export default function App() {
  const [isAdmissionsOpen, setIsAdmissionsOpen] = useState(false);
  const [isProspectusOpen, setIsProspectusOpen] = useState(false);
  const [isVirtualTourOpen, setIsVirtualTourOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [selectedHotspotId, setSelectedHotspotId] = useState<string | undefined>(undefined);

  const handleOpenVirtualTour = (hotspotId?: string) => {
    setSelectedHotspotId(hotspotId);
    setIsVirtualTourOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#000F29] text-[#001028] font-poppins selection:bg-[#EB0F2D] selection:text-white antialiased overflow-x-hidden">
      
      {/* 1. Header (Menu toggle on left, Logo in center, Book a Visit / Search on right, Fullscreen drawer) */}
      <WoodbridgeHeader
        onOpenAdmissions={() => setIsAdmissionsOpen(true)}
        onOpenProspectus={() => setIsProspectusOpen(true)}
        onOpenVirtualTour={() => handleOpenVirtualTour()}
      />

      {/* Main Content Sections Clone of woodbridgeschool.org.uk */}
      <main id="main-content">
        
        {/* 2. Hero Section: "Discover Indian School Muladha" with dual animated bouncing down-arrows */}
        <WoodbridgeHero
          onOpenAdmissions={() => setIsAdmissionsOpen(true)}
          onOpenProspectus={() => setIsProspectusOpen(true)}
        />

        {/* 3. The Signature Student 3D Animation Panel: "Meet Aryan" -> Young Roboticist / Cricket Captain / Scholar */}
        <WoodbridgeStudentAnimation
          onOpenAdmissions={() => setIsAdmissionsOpen(true)}
        />

        {/* 4. Horizontal Kinetic Scrolling Marquee Lines with script calligraphy accents */}
        <WoodbridgeScrollingText />

        {/* 5. "Our students are our entire focus" with Stage Selector (Kindergarten to Senior Secondary) */}
        <WoodbridgeTextAndLinksList
          onOpenAdmissions={() => setIsAdmissionsOpen(true)}
          onOpenProspectus={() => setIsProspectusOpen(true)}
        />

        {/* 6. "Want to see for yourself?" with scrolling outline text "SET UP FOR LIFE" and Campus Film video button */}
        <WoodbridgeFeaturedStrip
          onOpenAdmissions={() => setIsAdmissionsOpen(true)}
          onOpenVirtualTour={() => handleOpenVirtualTour()}
          onWatchVideo={() => setIsVideoModalOpen(true)}
        />

        {/* 7. "Fresh thinking to help everyone learn and grow" 3 Featured Editorial Cards */}
        <WoodbridgeFeaturedBlocks
          onOpenAdmissions={() => setIsAdmissionsOpen(true)}
          onOpenProspectus={() => setIsProspectusOpen(true)}
        />

        {/* 8. "Meet the staff and management committee" Head of School Strip */}
        <WoodbridgeStaffStrip
          onOpenAdmissions={() => setIsAdmissionsOpen(true)}
        />

        {/* 9. Latest News and Stories Gazette Grid */}
        <WoodbridgeNewsBlocks
          onOpenAdmissions={() => setIsAdmissionsOpen(true)}
        />

      </main>

      {/* 10. Call-to-Action Strip & Footer */}
      <WoodbridgeFooter
        onOpenAdmissions={() => setIsAdmissionsOpen(true)}
        onOpenProspectus={() => setIsProspectusOpen(true)}
        onOpenVirtualTour={() => handleOpenVirtualTour()}
      />

      {/* Interactive Modals Suite */}
      <InteractiveProspectusModal
        isOpen={isProspectusOpen}
        onClose={() => setIsProspectusOpen(false)}
        onOpenAdmissions={() => setIsAdmissionsOpen(true)}
      />

      <AdmissionsModal
        isOpen={isAdmissionsOpen}
        onClose={() => setIsAdmissionsOpen(false)}
      />

      <VirtualTourModal
        isOpen={isVirtualTourOpen}
        onClose={() => setIsVirtualTourOpen(false)}
        initialHotspotId={selectedHotspotId}
      />

      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        onOpenAdmissions={() => setIsAdmissionsOpen(true)}
      />

    </div>
  );
}
