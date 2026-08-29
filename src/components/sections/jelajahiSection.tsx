import { jelajahi } from "@/data";
import { Clock, MapPin, Phone, Tag } from "lucide-react";

export default function jelajahiDesa() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-serif mb-4">Jelajahi Desa Petet</h2>
        <p className="text-gray-600 mb-10">
          Temukan keindahan alam, kekayaan budaya, dan kreasi lokal.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {jelajahi.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#F7F7F2] p-6 rounded-2xl text-center hover:bg-[#EFEFE6] transition cursor-pointer"
            >
              <item.icon className="w-8 h-8 mx-auto text-gray-500 mb-4" />
              <h4 className="font-bold text-gray-900 mb-1">{item.name}</h4>
              <p className="text-xs text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-[#F7F7F2] rounded-3xl p-8 md:p-12 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-bold text-amber-600 uppercase tracking-wider mb-2 block">
              UMKM Unggulan
            </span>
            <h3 className="text-3xl font-serif text-gray-900 mb-4">
              Pusat Kerajinan Gula Aren
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Mewarisi resep turun temurun, pengrajin kami mengolah nira pohon
              aren berkualitas menjadi gula aren murni dengan cita rasa khas dan
              legit. Proses pembuatan dilakukan secara tradisional untuk menjaga
              kualitas dan keaslian rasa.
            </p>

            <div className="space-y-4">
              <div className="flex gap-4">
                <MapPin className="w-5 h-5 text-gray-400 shrink-0" />
                <div>
                  <h5 className="font-bold text-sm text-gray-900">Lokasi</h5>
                  <p className="text-sm text-gray-600">
                    Padukuhan Karang Tengah, RT 02 / RW 04
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Clock className="w-5 h-5 text-gray-400 shrink-0" />
                <div>
                  <h5 className="font-bold text-sm text-gray-900">
                    Jam Operasional
                  </h5>
                  <p className="text-sm text-gray-600">
                    Senin - Sabtu: 07.00 - 15.00 WIB (Bisa melihat proses
                    pembuatan pagi hari)
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Phone className="w-5 h-5 text-gray-400 shrink-0" />
                <div>
                  <h5 className="font-bold text-sm text-gray-900">
                    Kontak Pemesanan
                  </h5>
                  <p className="text-sm text-gray-600">
                    +62 812 3456 7890 (Bapak Sukiman)
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Tag className="w-5 h-5 text-gray-400 shrink-0" />
                <div>
                  <h5 className="font-bold text-sm text-gray-900">
                    Harga & Produk
                  </h5>
                  <p className="text-sm text-gray-600">
                    Gula Cetak: Rp 25.000/kg | Gula Semut: Rp 35.000/kg
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="bg-gray-200 h-48 rounded-2xl flex items-center justify-center text-gray-400"
              >
                <span className="text-xs">Gallery Image {i}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
