import { Briefcase, Building, GraduationCap, Users } from "lucide-react";

export default function demografiPetet() {
  return (
    <section className="py-16 px-4 bg-[#EFEFE6]">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-center text-xl font-serif mb-12">
          Demografi & Infrastruktur
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Box 1 */}
          <div className="bg-white p-6 rounded-2xl">
            <div className="flex items-center gap-2 mb-4 text-[#1e3b2b]">
              <Users className="w-5 h-5" />
              <h4 className="font-bold">Populasi</h4>
            </div>
            <div className="text-3xl font-bold mb-1">
              3.450{" "}
              <span className="text-sm font-normal text-gray-500">Jiwa</span>
            </div>
            <div className="flex justify-between text-xs text-gray-500 mt-4">
              <span>Laki-laki: 1.700</span>
              <span>Perempuan: 1.750</span>
            </div>
          </div>

          {/* Box 2 */}
          <div className="bg-white p-6 rounded-2xl">
            <div className="flex items-center gap-2 mb-4 text-[#1e3b2b]">
              <Briefcase className="w-5 h-5" />
              <h4 className="font-bold">Mata Pencaharian Utama</h4>
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span>Pertanian</span>
                <span className="font-bold">60%</span>
              </div>
              <div className="flex justify-between">
                <span>UMKM/Kerajinan</span>
                <span className="font-bold">25%</span>
              </div>
              <div className="flex justify-between">
                <span>Lainnya</span>
                <span className="font-bold">15%</span>
              </div>
            </div>
          </div>

          {/* Box 3 */}
          <div className="bg-white p-6 rounded-2xl">
            <div className="flex items-center gap-2 mb-4 text-[#1e3b2b]">
              <GraduationCap className="w-5 h-5" />
              <h4 className="font-bold">Fasilitas Pendidikan</h4>
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span>PAUD / TK</span>
                <span className="font-bold">3 Unit</span>
              </div>
              <div className="flex justify-between">
                <span>Sekolah Dasar</span>
                <span className="font-bold">2 Unit</span>
              </div>
              <div className="flex justify-between">
                <span>Pusat Belajar Komunitas</span>
                <span className="font-bold">1 Unit</span>
              </div>
            </div>
          </div>

          {/* Box 4 */}
          <div className="bg-white p-6 rounded-2xl relative overflow-hidden">
            <div className="flex items-center gap-2 mb-4 text-[#1e3b2b] relative z-10">
              <Building className="w-5 h-5" />
              <h4 className="font-bold">Infrastruktur</h4>
            </div>
            <div className="space-y-3 text-sm relative z-10">
              <div className="flex justify-between">
                <span>Jalan Desa Aspal/Cor</span>
                <span className="font-bold">85%</span>
              </div>
              <div className="flex justify-between">
                <span>Puskesmas Pembantu</span>
                <span className="font-bold">1 Unit</span>
              </div>
              <div className="flex justify-between">
                <span>Akses Internet/WiFi</span>
                <span className="font-bold">Tersedia</span>
              </div>
            </div>
            <span className="absolute -right-4 top-1/2 -translate-y-1/2 text-6xl font-black text-gray-50 opacity-50 transform rotate-90 origin-right">
              INFRA
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
