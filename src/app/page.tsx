import React from "react";
import Navbar from "@/components/layout/navbar";
import SponsorBanner from "@/components/sections/sponsorBanner";
import HeroSections from "@/components/sections/heroSections";
import IdentitasDesaSection from "@/components/sections/identitasDesaSection";
import VisiMisiSection from "@/components/sections/visiMisiSection";
import PetaDesa from "@/components/sections/petaDesa";
export default function DesaProfile() {
  return (
    <div className="min-h-screen bg-[#F7F7F2] text-gray-800 font-sans">
      {/* 1. NAVBAR */}
      <Navbar />
      {/* 2. SPONSOR BANNER */}
      <SponsorBanner />
      {/* 3. HERO SECTION */}
      <HeroSections />
      {/* 4. IDENTITAS DESA */}
      <IdentitasDesaSection />
      {/* 5. VISI MISI & CORE VALUES */}
      <VisiMisiSection />
      {/* 6. PROFIL & SEJARAH */}

      {/* 7. DEMOGRAFI & INFRASTRUKTUR */}

      {/* 8. STATUS DESA MANDIRI BUDAYA */}

      {/* 9. KEHIDUPAN BUDAYA & AGENDA KEGIATAN */}

      {/* 10. BERITA DESA */}

      {/* 11. GALERI DESA */}

      {/* 12. CERITA DARI DESA & KOMUNITAS */}

      {/* 13. JELAJAHI DESA PETET (UMKM) */}

      {/* 14. PETA DESA */}
      <PetaDesa />
      {/* 15. SEBELUM BERKUNJUNG */}

      {/* 16. HUBUNGI PENGELOLA */}

      {/* 17. FOOTER */}
    </div>
  );
}
