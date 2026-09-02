import { Briefcase, Building, GraduationCap, Users } from "lucide-react";

export default function DemografiPetet() {
  return (
    <section id="demografi" className="py-20 px-4 bg-[#EFEFE6]">
      <div className="max-w-7xl mx-auto">
        <span className="text-xs font-bold text-amber-600 uppercase tracking-wider mb-3 block text-center">
          Data Wilayah
        </span>
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1e3b2b] mb-4 text-center">
          Demografi & Infrastruktur
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto text-center">
          Gambaran umum kependudukan, mata pencaharian, dan fasilitas yang
          tersedia di Padukuhan Petet.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Box 1 */}
          <div className="group bg-white p-6 rounded-2xl border-2 border-transparent shadow-sm hover:shadow-xl hover:border-gray-200 hover:-translate-y-1.5 transition-all duration-300">
            <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 bg-amber-50 transition-transform duration-300 group-hover:scale-110">
              <Users className="w-5 h-5 text-amber-600" />
            </div>
            <h4 className="font-bold text-gray-900 mb-3">Populasi</h4>
            <div className="text-3xl font-serif font-bold text-[#1e3b2b] mb-1">
              3.450{" "}
              <span className="text-sm font-sans font-normal text-gray-500">
                Jiwa
              </span>
            </div>
            <div className="flex justify-between text-xs text-gray-500 mt-4 pt-4 border-t border-gray-100">
              <span>Laki-laki: 1.700</span>
              <span>Perempuan: 1.750</span>
            </div>
          </div>

          {/* Box 2 */}
          <div className="group bg-white p-6 rounded-2xl border-2 border-transparent shadow-sm hover:shadow-xl hover:border-gray-200 hover:-translate-y-1.5 transition-all duration-300">
            <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 bg-amber-50 transition-transform duration-300 group-hover:scale-110">
              <Briefcase className="w-5 h-5 text-amber-600" />
            </div>
            <h4 className="font-bold text-gray-900 mb-4">
              Mata Pencaharian Utama
            </h4>
            <div className="space-y-3 text-sm text-gray-600">
              <div className="flex justify-between">
                <span>Pertanian</span>
                <span className="font-bold text-gray-900">60%</span>
              </div>
              <div className="flex justify-between">
                <span>UMKM/Kerajinan</span>
                <span className="font-bold text-gray-900">25%</span>
              </div>
              <div className="flex justify-between">
                <span>Lainnya</span>
                <span className="font-bold text-gray-900">15%</span>
              </div>
            </div>
          </div>

          {/* Box 3 */}
          <div className="group bg-white p-6 rounded-2xl border-2 border-transparent shadow-sm hover:shadow-xl hover:border-gray-200 hover:-translate-y-1.5 transition-all duration-300">
            <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 bg-amber-50 transition-transform duration-300 group-hover:scale-110">
              <GraduationCap className="w-5 h-5 text-amber-600" />
            </div>
            <h4 className="font-bold text-gray-900 mb-4">
              Fasilitas Pendidikan
            </h4>
            <div className="space-y-3 text-sm text-gray-600">
              <div className="flex justify-between">
                <span>PAUD / TK</span>
                <span className="font-bold text-gray-900">3 Unit</span>
              </div>
              <div className="flex justify-between">
                <span>Sekolah Dasar</span>
                <span className="font-bold text-gray-900">2 Unit</span>
              </div>
              <div className="flex justify-between">
                <span>Pusat Belajar Komunitas</span>
                <span className="font-bold text-gray-900">1 Unit</span>
              </div>
            </div>
          </div>

          {/* Box 4 */}
          <div className="group bg-white p-6 rounded-2xl border-2 border-transparent shadow-sm hover:shadow-xl hover:border-gray-200 hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden">
            <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 bg-amber-50 transition-transform duration-300 group-hover:scale-110 relative z-10">
              <Building className="w-5 h-5 text-amber-600" />
            </div>
            <h4 className="font-bold text-gray-900 mb-4 relative z-10">
              Infrastruktur
            </h4>
            <div className="space-y-3 text-sm text-gray-600 relative z-10">
              <div className="flex justify-between">
                <span>Jalan Desa Aspal/Cor</span>
                <span className="font-bold text-gray-900">85%</span>
              </div>
              <div className="flex justify-between">
                <span>Puskesmas Pembantu</span>
                <span className="font-bold text-gray-900">1 Unit</span>
              </div>
              <div className="flex justify-between">
                <span>Akses Internet/WiFi</span>
                <span className="font-bold text-gray-900">Tersedia</span>
              </div>
            </div>
            <span className="absolute -right-4 top-1/2 -translate-y-1/2 text-6xl font-black text-gray-50 opacity-70 transform rotate-90 origin-right pointer-events-none select-none">
              INFRA
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
