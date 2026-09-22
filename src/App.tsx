/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { WoodbridgeHeader } from './components/WoodbridgeHeader';
import { WoodbridgeHero } from './components/WoodbridgeHero';
import { WoodbridgeShieldMask } from './components/WoodbridgeShieldMask';
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
import { InternalPageViewer, InternalPageTab } from './components/InternalPageViewer';
import { CrmProvider, useCrm } from './context/CrmContext';
import { AdminCrmModal } from './components/AdminCrmModal';
import { ShieldCheck } from 'lucide-react';

function SchoolAppContent() {
  const [isAdmissionsOpen, setIsAdmissionsOpen] = useState(false);
  const [isProspectusOpen, setIsProspectusOpen] = useState(false);
  const [isVirtualTourOpen, setIsVirtualTourOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isCrmOpen, setIsCrmOpen] = useState(false);
  const [selectedHotspotId, setSelectedHotspotId] = useState<string | undefined>(undefined);
  const [internalPageTab, setInternalPageTab] = useState<InternalPageTab | null>(null);

  const { leads } = useCrm();
  const pendingLeadsCount = leads.filter(l => l.status === 'New').length;

  const handleOpenVirtualTour = (hotspotId?: string) => {
    setSelectedHotspotId(hotspotId);
    setIsVirtualTourOpen(true);
  };

  const handleOpenInternalPage = (tab: InternalPageTab) => {
    setInternalPageTab(tab);
  };

  return (
    <div className="min-h-screen bg-[#000F29] text-[#001028] font-poppins selection:bg-[#EB0F2D] selection:text-white antialiased overflow-x-clip">
      
      {/* 1. Header (Menu toggle on left, Logo in center, Book a Visit / Search on right, Fullscreen drawer, Admin CRM button) */}
      <WoodbridgeHeader
        onOpenAdmissions={() => setIsAdmissionsOpen(true)}
        onOpenProspectus={() => setIsProspectusOpen(true)}
        onOpenVirtualTour={() => handleOpenVirtualTour()}
        onOpenInternalPage={handleOpenInternalPage}
        onOpenCrm={() => setIsCrmOpen(true)}
      />

      {/* Main Content Sections Clone of woodbridgeschool.org.uk */}
      <main id="main-content">
        
        {/* 2. Hero Section: "Discover Indian School Muladha" with AI campus video background & internal page chips */}
        <WoodbridgeHero
          onOpenAdmissions={() => setIsAdmissionsOpen(true)}
          onOpenProspectus={() => setIsProspectusOpen(true)}
          onOpenInternalPage={handleOpenInternalPage}
          onWatchVideo={() => setIsVideoModalOpen(true)}
        />

        {/* 3. The 3D Shield Aperture Zoom Portal (Exact Woodbridge School block-shield-mask with authentic campus background) */}
        <WoodbridgeShieldMask
          onOpenVirtualTour={() => handleOpenVirtualTour()}
          onWatchVideo={() => setIsVideoModalOpen(true)}
        />

        {/* 4. The Signature Student 3D Animation Panel: Dynamic Student Personas from CRM */}
        <WoodbridgeStudentAnimation
          onOpenAdmissions={() => setIsAdmissionsOpen(true)}
        />

        {/* 5. Horizontal Kinetic Scrolling Marquee Lines with script calligraphy accents */}
        <WoodbridgeScrollingText />

        {/* 6. "Our students are our entire focus" with Stage Selector (Kindergarten to Senior Secondary) */}
        <WoodbridgeTextAndLinksList
          onOpenAdmissions={() => setIsAdmissionsOpen(true)}
          onOpenProspectus={() => setIsProspectusOpen(true)}
        />

        {/* 7. "Want to see for yourself?" with scrolling outline text "SET UP FOR LIFE" and Campus Film video button */}
        <WoodbridgeFeaturedStrip
          onOpenAdmissions={() => setIsAdmissionsOpen(true)}
          onOpenVirtualTour={() => handleOpenVirtualTour()}
          onWatchVideo={() => setIsVideoModalOpen(true)}
        />

        {/* 8. "Fresh thinking to help everyone learn and grow" 3 Featured Editorial Cards (Dynamic CRM Stats) */}
        <WoodbridgeFeaturedBlocks
          onOpenAdmissions={() => setIsAdmissionsOpen(true)}
          onOpenProspectus={() => setIsProspectusOpen(true)}
        />

        {/* 9. "Meet the staff and management committee" Head of School Strip */}
        <WoodbridgeStaffStrip
          onOpenAdmissions={() => setIsAdmissionsOpen(true)}
          onOpenInternalPage={handleOpenInternalPage}
        />

        {/* 10. Latest News and Stories Gazette Grid (Dynamic from CRM) */}
        <WoodbridgeNewsBlocks
          onOpenAdmissions={() => setIsAdmissionsOpen(true)}
          onOpenCrm={() => setIsCrmOpen(true)}
        />

      </main>

      {/* 11. Call-to-Action Strip & Footer */}
      <WoodbridgeFooter
        onOpenAdmissions={() => setIsAdmissionsOpen(true)}
        onOpenProspectus={() => setIsProspectusOpen(true)}
        onOpenVirtualTour={() => handleOpenVirtualTour()}
        onOpenInternalPage={handleOpenInternalPage}
        onOpenCrm={() => setIsCrmOpen(true)}
      />

      {/* Floating Quick Admin CRM Launcher button */}
      <button
        onClick={() => setIsCrmOpen(true)}
        className="fixed bottom-6 right-6 z-40 px-4 py-3 rounded-full bg-[#001028] text-white hover:bg-[#c5a059] hover:text-[#001028] shadow-[0_10px_35px_rgba(0,0,0,0.6)] border border-white/20 transition-all flex items-center gap-2.5 group hover:scale-105 active:scale-95"
        title="Open Indian School Muladha Admin CRM & CMS"
      >
        <div className="relative flex items-center justify-center">
          <ShieldCheck className="w-5 h-5 text-[#c5a059] group-hover:text-[#001028] transition-colors" />
          {pendingLeadsCount > 0 && (
            <span className="absolute -top-2 -right-2.5 w-4 h-4 rounded-full bg-[#EB0F2D] text-white text-[9px] font-bold flex items-center justify-center shadow">
              {pendingLeadsCount}
            </span>
          )}
        </div>
        <span className="text-xs font-bold uppercase tracking-wider hidden sm:inline">
          Admin CRM
        </span>
      </button>

      {/* School CRM Management Dashboard Modal */}
      <AdminCrmModal
        isOpen={isCrmOpen}
        onClose={() => setIsCrmOpen(false)}
      />

      {/* Complete Internal Documentation Modal (100% Data Parity with isml-oman.com) */}
      <InternalPageViewer
        isOpen={internalPageTab !== null}
        activeTab={internalPageTab || 'mandatory-disclosure'}
        onClose={() => setInternalPageTab(null)}
        onOpenAdmissions={() => {
          setInternalPageTab(null);
          setIsAdmissionsOpen(true);
        }}
        onOpenProspectus={() => {
          setInternalPageTab(null);
          setIsProspectusOpen(true);
        }}
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

export default function App() {
  return (
    <CrmProvider>
      <SchoolAppContent />
    </CrmProvider>
  );
}
