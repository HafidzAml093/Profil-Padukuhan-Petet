import { Clock, Mail, MapPin, Phone } from "lucide-react";

export default function kontakPengelola() {
  return (
    <section className="py-20 px-4 bg-[#EFEFE6]">
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h2 className="text-2xl font-serif mb-4">Hubungi Pengelola Desa</h2>
        <p className="text-gray-600">
          Informasi lebih lanjut mengenai kunjungan wisata, kerjasama, atau
          layanan masyarakat.
        </p>
      </div>
      <div className="max-w-5xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-sm grid md:grid-cols-2 gap-12">
        <div>
          <h4 className="font-bold text-gray-900 mb-6 text-lg">
            Kantor Kepala Desa
          </h4>
          <div className="space-y-4 text-gray-600 text-sm">
            <div className="flex gap-4 items-start">
              <MapPin className="w-5 h-5 shrink-0 text-gray-400" />
              <p>
                Jl. Utama Desa Petet No. 1, Kec. [Nama Kecamatan],
                <br />
                Kab. [Nama Kabupaten]
              </p>
            </div>
            <div className="flex gap-4 items-center">
              <Mail className="w-5 h-5 shrink-0 text-gray-400" />
              <p>pemdes@petet.desa.id</p>
            </div>
            <div className="flex gap-4 items-center">
              <Clock className="w-5 h-5 shrink-0 text-gray-400" />
              <p>Senin - Jumat: 08.00 - 15.00 WIB</p>
            </div>
          </div>

          <div className="flex gap-4 mt-8">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#1e3b2b] hover:text-white transition"
            >
              <span className="font-bold text-sm">Wa</span>
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#1e3b2b] hover:text-white transition"
            >
              <span className="font-bold text-sm">Ig</span>
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#1e3b2b] hover:text-white transition"
            >
              <span className="font-bold text-sm">Fb</span>
            </a>
          </div>
        </div>
        <div>
          <h4 className="font-bold text-gray-900 mb-6 text-lg">
            Saluran Siaga & Informasi
          </h4>
          <div className="space-y-4">
            <div className="bg-[#F7F7F2] p-4 rounded-xl flex items-center gap-4">
              <Phone className="w-8 h-8 text-[#1e3b2b] p-1.5 bg-white rounded-lg" />
              <div>
                <p className="text-xs text-gray-500 font-semibold uppercase">
                  Informasi Wisata & Reservasi
                </p>
                <p className="font-bold text-gray-900">
                  +62 811 2233 4455 (Budi)
                </p>
              </div>
            </div>
            <div className="bg-[#F7F7F2] p-4 rounded-xl flex items-center gap-4">
              <Phone className="w-8 h-8 text-rose-600 p-1.5 bg-white rounded-lg" />
              <div>
                <p className="text-xs text-gray-500 font-semibold uppercase">
                  Puskesmas / Darurat
                </p>
                <p className="font-bold text-gray-900">+62 822 3344 5566</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
