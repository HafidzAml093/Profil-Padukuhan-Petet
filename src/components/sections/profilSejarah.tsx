"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const fotoSejarah = [
  "/images/sejarah/1.JPG",
  "/images/sejarah/2.JPG",
  "/images/sejarah/3.JPG",
  "/images/sejarah/4.JPG",
  "/images/sejarah/5.JPG",
  "/images/sejarah/6.JPG",
  "/images/sejarah/7.JPG",
];

export default function ProfilSejarahDesa() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % fotoSejarah.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="sejarah" className="py-20 px-4 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-xs font-bold text-amber-600 uppercase tracking-wider mb-3 block">
            Cerita Kami
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1e3b2b] mb-6">
            Profil & Sejarah Padukuhan Petet
          </h2>
          <p className="text-gray-600 mb-10 text-lg leading-relaxed">
            Berlokasi di bagian paling selatan Desa Ngargosari, Padukuhan Petet
            adalah harmoni antara kelestarian alam dan kearifan lokal yang terus
            dijaga. Setiap sudut dusun ini bercerita tentang keuletan warganya
            yang mayoritas berprofesi sebagai petani, mengolah tanah perbukitan
            dari generasi ke generasi.
          </p>

          <div className="space-y-8 relative">
            <div className="relative flex items-start gap-6">
              <span className="absolute left-1 top-4 h-full w-0.5 bg-[#1e3b2b]" />
              <div className="w-3 h-3 rounded-full bg-[#1e3b2b] ring-4 ring-white relative z-10 mt-1.5 shrink-0" />
              <div>
                <h4 className="font-bold text-[#1e3b2b]">Asal Usul Nama</h4>
                <p className="text-sm text-gray-600">
                  Nama &quot;Petet&quot; diambil dari pohon petet (petai cina)
                  yang di masa lampau banyak tumbuh subur dan liar di kawasan
                  dusun ini.
                </p>
              </div>
            </div>

            <div className="relative flex items-start gap-6">
              <span className="absolute left-1 top-4 h-full w-0.5 bg-[#1e3b2b]" />
              <div className="w-3 h-3 rounded-full bg-[#1e3b2b] ring-4 ring-white relative z-10 mt-1.5 shrink-0" />
              <div>
                <h4 className="font-bold text-[#1e3b2b]">Pusat Pertanian</h4>
                <p className="text-sm text-gray-600">
                  Memanfaatkan topografi wilayahnya, warga mengembangkan sistem
                  pertanian di tanah basah (sawah) maupun lahan miring (tegalan)
                  sebagai urat nadi ekonomi.
                </p>
              </div>
            </div>

            <div className="relative flex items-start gap-6">
              <div className="w-3 h-3 rounded-full bg-amber-600 ring-4 ring-white relative z-10 mt-1.5 shrink-0" />
              <div>
                <h4 className="font-bold text-amber-700">Potensi Masa Depan</h4>
                <p className="text-sm text-gray-600">
                  Mengembangkan potensi pariwisata berkelanjutan dengan
                  mengunggulkan daya tarik kejernihan Sungai Tinalah yang
                  berbatasan langsung dengan alam asri.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative rounded-3xl overflow-hidden h-125 shadow-sm min-h-100">
          {fotoSejarah.map((src, index) => (
            <Image
              key={src}
              src={src}
              alt="Pemandangan Alam dan Pertanian Desa"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className={`object-cover transition-opacity duration-1000 ease-in-out ${
                index === activeIndex ? "opacity-100" : "opacity-0"
              }`}
              priority={index === 0}
            />
          ))}

          {/* Indikator titik */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {fotoSejarah.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex ? "w-6 bg-white" : "w-2 bg-white/50"
                }`}
                aria-label={`Foto ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
