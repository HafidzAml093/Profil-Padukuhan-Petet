import React from "react";
import { MapPin } from "lucide-react"; // Pastikan lucide-react sudah terinstall
import Image from "next/image";

// Data UMKM yang diambil dari referensi peta
const umkmData = [
  {
    id: 1,
    pemilik: "NURYADI",
    jenis: "Kerajinan Bambu",
    kontak: "0812-XXXX-XXXX",
    top: "35%",
    left: "25%",
  },
  {
    id: 2,
    pemilik: "MITRO",
    jenis: "Produksi Tempe",
    kontak: "0813-XXXX-XXXX",
    top: "42%",
    left: "40%",
  },
  {
    id: 3,
    pemilik: "IZZA",
    jenis: "Taylor / Penjahit",
    kontak: "0815-XXXX-XXXX",
    top: "55%",
    left: "38%",
  },
  // Tambahkan data UMKM lainnya di sini, sesuaikan top dan left (persentase dari ujung kiri atas gambar)
];

export default function PetaDesa() {
  return (
    <section className="py-16 bg-[#F7F7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-[#1e3b2b]">
            Peta UMKM Padukuhan Petet
          </h2>
          <p className="text-gray-600 mt-2">
            Arahkan kursor ke titik biru untuk melihat detail UMKM.
          </p>
        </div>

        {/* Kontainer Peta */}
        <div className="relative w-full aspect-video bg-gray-800 rounded-xl overflow-hidden shadow-2xl border border-gray-300">
          {/* Gambar Peta Satelit */}
          <Image
            src="/images/map-petet.png"
            alt="Peta Satelit Padukuhan Petet"
            fill
            className="object-cover w-full h-full"
          />

          {/* Render Titik Koordinat & Popup */}
          {umkmData.map((umkm) => (
            <div
              key={umkm.id}
              className="absolute group cursor-pointer"
              style={{
                top: umkm.top,
                left: umkm.left,
                transform: "translate(-50%, -50%)",
              }}
            >
              {/* Ikon Marker (Mirip gaya Google My Maps) */}
              <div className="relative flex items-center justify-center">
                <MapPin className="text-blue-500 w-8 h-8 drop-shadow-md group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-200 fill-blue-500/20" />
                <div className="absolute w-2 h-2 bg-white rounded-full top-2.5"></div>
              </div>

              {/* Popup Hover Card */}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-52 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20">
                <div className="bg-white text-gray-800 text-sm rounded-lg shadow-xl p-4 border border-gray-100">
                  <p className="font-bold text-[#1e3b2b] border-b border-gray-100 pb-2 mb-2">
                    {umkm.pemilik}
                  </p>
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded w-fit">
                      {umkm.jenis}
                    </span>
                    <span className="text-xs font-medium text-gray-500 mt-1">
                      📞 {umkm.kontak}
                    </span>
                  </div>
                  {/* Panah bawah popup */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-white"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
