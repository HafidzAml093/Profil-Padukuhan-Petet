import React from "react";
import Navbar from "@/components/layout/navbar";
import SponsorBanner from "@/components/sections/sponsorBanner";
import HeroSections from "@/components/sections/heroSections";
import IdentitasDesaSection from "@/components/sections/identitasDesaSection";
import VisiMisiSection from "@/components/sections/visiMisiSection";
import PetaDesa from "@/components/sections/petaDesa";
import DemografiPetet from "@/components/sections/Demografi";
import ProfilSejarahDesa from "@/components/sections/profilSejarah";
import KontakPengelola from "@/components/sections/kontakPengelola";
import Footer from "@/components/layout/footer";
import KomunitasSection from "@/components/sections/komunitasSection";
import JelajahiDesa from "@/components/sections/jelajahiSection";
import AgendaDesa from "@/components/sections/agendaKegiatanSection";
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
      <ProfilSejarahDesa />
      {/* 7. DEMOGRAFI & INFRASTRUKTUR */}
      <DemografiPetet />
      {/* 8. STATUS DESA MANDIRI BUDAYA */}
      {/* 9. KEHIDUPAN BUDAYA & AGENDA KEGIATAN */}
      <AgendaDesa /> {/*Masih harus di fix*/}
      {/* 10. BERITA DESA */}
      {/* 11. GALERI DESA */}
      {/* 12. CERITA DARI DESA & KOMUNITAS */}
      <KomunitasSection />
      {/* 13. JELAJAHI DESA PETET (UMKM) */}
      <JelajahiDesa />
      {/* 14. PETA DESA */}
      <PetaDesa />
      {/* 15. SEBELUM BERKUNJUNG */}
      {/* 16. HUBUNGI PENGELOLA */}
      <KontakPengelola />
      {/* 17. FOOTER */}
      <Footer />
    </div>
  );
}
