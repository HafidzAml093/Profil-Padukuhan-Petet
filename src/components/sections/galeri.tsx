import { Play } from "lucide-react";

export default function galeriDesa() {
  return (
    <section className="py-20 px-4 bg-[#EFEFE6]">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl font-serif mb-4">Galeri Desa</h2>
        <p className="text-gray-600 mb-8">
          Pesona keindahan alam, kekayaan budaya, dan keseharian warga Desa
          Petet dalam tangkapan lensa.
        </p>

        <div className="flex justify-center gap-4 mb-10 flex-wrap">
          <button className="px-6 py-2 rounded-full bg-[#1e3b2b] text-white text-sm">
            Semua
          </button>
          <button className="px-6 py-2 rounded-full bg-white text-gray-600 text-sm hover:bg-gray-50">
            Alam
          </button>
          <button className="px-6 py-2 rounded-full bg-white text-gray-600 text-sm hover:bg-gray-50">
            Budaya
          </button>
          <button className="px-6 py-2 rounded-full bg-white text-gray-600 text-sm hover:bg-gray-50">
            Video
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {/* Generate 6 dummy gallery items */}
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className={`bg-gray-200 rounded-2xl flex items-center justify-center text-gray-400 relative overflow-hidden ${i === 3 ? "col-span-2 row-span-2 h-full" : "h-48 md:h-64"}`}
            >
              {i === 3 ? (
                <Play className="w-16 h-16 opacity-50" />
              ) : (
                <span className="w-8 h-8 border-2 border-gray-400 rounded-lg"></span>
              )}
            </div>
          ))}
        </div>
        <button className="px-8 py-3 rounded-full border-2 border-[#1e3b2b] text-[#1e3b2b] font-semibold hover:bg-[#1e3b2b] hover:text-white transition">
          Muat Lebih Banyak
        </button>
      </div>
    </section>
  );
}
