import { Car, Info, Users } from "lucide-react";

export default function attention() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-2xl font-serif mb-12">
          Sebelum Berkunjung
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-[#F9F9F6] p-8 rounded-3xl border border-gray-100">
            <Car className="w-8 h-8 text-[#1e3b2b] mb-4" />
            <h4 className="font-bold text-gray-900 mb-4">
              Logistik Perjalanan
            </h4>
            <ul className="space-y-4 text-sm text-gray-600">
              <li>
                <strong className="text-gray-900">Jarak:</strong> Sekitar 15 km
                dari pusat kota (30 menit berkendara).
              </li>
              <li>
                <strong className="text-gray-900">Transportasi:</strong> Dapat
                diakses dengan kendaraan pribadi (mobil/motor). Angkutan umum
                terbatas.
              </li>
              <li>
                <strong className="text-gray-900">Kondisi Jalan:</strong>{" "}
                Beraspal baik hingga ke pusat desa, beberapa jalan dusun berupa
                cor blok.
              </li>
            </ul>
          </div>
          <div className="bg-[#F9F9F6] p-8 rounded-3xl border border-gray-100">
            <Info className="w-8 h-8 text-[#1e3b2b] mb-4" />
            <h4 className="font-bold text-gray-900 mb-4">Fasilitas Umum</h4>
            <ul className="space-y-4 text-sm text-gray-600">
              <li>
                <strong className="text-gray-900">Parkir:</strong> Tersedia area
                parkir luas di dekat Balai Desa.
              </li>
              <li>
                <strong className="text-gray-900">Toilet Umum:</strong> Tersedia
                di titik-titik wisata dan balai desa (bersih & terawat).
              </li>
              <li>
                <strong className="text-gray-900">Tempat Ibadah:</strong> Masjid
                desa dan mushola di setiap padukuhan.
              </li>
            </ul>
          </div>
          <div className="bg-[#FFF4E5] p-8 rounded-3xl border border-orange-100">
            <Users className="w-8 h-8 text-amber-700 mb-4" />
            <h4 className="font-bold text-amber-900 mb-4">Etika Pengunjung</h4>
            <ul className="space-y-3 text-sm text-amber-800">
              <li className="flex items-start">
                <span className="mr-2">•</span> Berpakaian sopan saat
                mengunjungi situs budaya atau tempat ibadah.
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span> Jaga kebersihan, buang sampah
                pada tempat yang disediakan.
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span> Hormati privasi warga setempat;
                minta izin sebelum memotret orang.
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span> Dukung ekonomi lokal dengan
                membeli produk UMKM desa.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
