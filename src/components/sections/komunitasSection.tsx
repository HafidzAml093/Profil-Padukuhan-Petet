import React from "react";
import { komunitasDesa } from "@/data";

export default function KomunitasSection() {
  return (
    <section id="komunitas" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <span className="text-xs font-bold text-amber-600 uppercase tracking-wider mb-3 block text-center">
          Kelembagaan Desa
        </span>
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1e3b2b] mb-4 text-center">
          Komunitas Padukuhan Petet
        </h2>
        <p className="text-gray-600 mb-16 max-w-2xl mx-auto text-center">
          Berbagai paguyuban dan organisasi kemasyarakatan yang menjadi pilar
          penggerak kerukunan, kesejahteraan, dan kemajuan desa.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {komunitasDesa.map((komunitas, index) => {
            const IconComponent = komunitas.icon;

            return (
              <div
                key={index}
                className="group bg-[#F7F7F2] p-8 rounded-2xl border-2 border-transparent shadow-sm hover:shadow-xl hover:border-gray-200 hover:-translate-y-1.5 transition-all duration-300"
              >
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${komunitas.bg} transition-transform duration-300 group-hover:scale-110`}
                >
                  <IconComponent className={`w-7 h-7 ${komunitas.color}`} />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {komunitas.nama}
                </h3>

                <p className="text-gray-600 leading-relaxed text-sm">
                  {komunitas.deskripsi}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
