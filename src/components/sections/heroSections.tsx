import React from "react";

export default function HeroSection() {
  return (
    <section className="relative h-[80vh] w-full flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0 bg-black">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-full opacity-60" // Opacity diatur agar teks di atasnya tetap terbaca
        >
          <source src="/Videos/petet-bg.mp4" type="video/mp4" />
          Browser Anda tidak mendukung tag video.
        </video>
      </div>

      {/* Konten Hero */}
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="font-serif text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg">
          Padukuhan Petet
        </h1>
        <p className="text-xl md:text-2xl font-light tracking-wide drop-shadow-md">
          Pusat UMKM & Keindahan Alam Kulonprogo
        </p>
      </div>
    </section>
  );
}
