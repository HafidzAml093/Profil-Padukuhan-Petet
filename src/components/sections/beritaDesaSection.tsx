import { beritaDesa } from "@/data";
import { ChevronRight, Clock } from "lucide-react";

export default function beritaAcara() {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <div className="flex justify-between items-end mb-10">
        <h2 className="text-2xl font-serif">Berita Desa</h2>
        <a
          href="#"
          className="text-[#1e3b2b] flex items-center hover:underline text-sm font-semibold"
        >
          Lihat Semua <ChevronRight className="w-4 h-4 ml-1" />
        </a>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {beritaDesa.map((berita, idx) => (
          <div
            key={idx}
            className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 group"
          >
            <div className="h-48 bg-gray-200 w-full flex items-center justify-center text-gray-400 group-hover:bg-gray-300 transition">
              {/* Image Placeholder */}
              <span className="w-10 h-10 border-2 border-gray-400 rounded-lg flex items-center justify-center">
                <div className="w-5 h-0.5 bg-gray-400 mb-1"></div>
              </span>
            </div>
            <div className="p-6">
              <div className="text-xs font-bold text-amber-700 uppercase mb-2">
                {berita.category}
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-900">
                {berita.title}
              </h3>
              <p className="text-gray-500 text-sm mb-4 line-clamp-2">
                {berita.desc}
              </p>
              <div className="text-xs text-gray-400 flex items-center">
                <Clock className="w-3 h-3 mr-1" /> {berita.date}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
