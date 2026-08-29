import { komunitas } from "@/data";
import { Quote } from "lucide-react";

export default function ceritaDesa() {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <h2 className="text-center text-2xl font-serif mb-12">
        Cerita dari Desa
      </h2>
      <div className="grid md:grid-cols-2 gap-12 mb-24">
        <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 relative">
          <Quote className="absolute top-8 left-8 w-12 h-12 text-gray-100" />
          <p className="text-xl font-serif text-gray-800 leading-relaxed relative z-10 mb-8 italic">
            &quot;Lahir dan besar di desa ini, saya melihat bagaimana tradisi
            tidak pernah menjadi penghalang kemajuan, melainkan pondasi yang
            kuat. Kami bangga bisa menjaga peninggalan leluhur sambil terus
            belajar hal baru.&quot;
          </p>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-[#1e3b2b] rounded-full"></div>
            <div>
              <h4 className="font-bold text-gray-900">Bapak Mulyono</h4>
              <p className="text-sm text-gray-500">Ketua Adat Desa Petet</p>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <div className="bg-[#FFF4E5] p-6 rounded-2xl flex gap-6 items-start">
            <div className="w-12 h-12 bg-orange-200 rounded-full shrink-0"></div>
            <div>
              <p className="text-gray-800 italic mb-2">
                &quot;Gula aren buatan desa kami kini bisa dinikmati hingga ke
                kota berkat pendampingan dari desa. Rasanya tetap otentik.&quot;
              </p>
              <p className="text-sm font-bold text-gray-900">
                - Ibu Siti, Pengrajin Gula
              </p>
            </div>
          </div>
          <div className="bg-[#F0F4CC] p-6 rounded-2xl flex gap-6 items-start">
            <div className="w-12 h-12 bg-lime-200 rounded-full shrink-0"></div>
            <div>
              <p className="text-gray-800 italic mb-2">
                &quot;Kami generasi muda difasilitasi untuk mengembangkan
                sanggar seni agar budaya kami tidak hilang tergerus zaman.&quot;
              </p>
              <p className="text-sm font-bold text-gray-900">
                - Budi, Pemuda Desa
              </p>
            </div>
          </div>
        </div>
      </div>

      <h3 className="text-center text-xl font-serif mb-4 text-gray-500">
        Komunitas Penggerak
      </h3>
      <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
        Keberhasilan Desa Petet tak lepas dari peran aktif berbagai kelompok
        masyarakat yang saling bersinergi.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {komunitas.map((kom, idx) => (
          <div
            key={idx}
            className="bg-white p-8 rounded-3xl text-center shadow-sm border border-gray-50"
          >
            <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto flex items-center justify-center mb-4 text-[#1e3b2b]">
              <kom.icon className="w-8 h-8" />
            </div>
            <h4 className="font-bold text-gray-900 mb-2">{kom.name}</h4>
            <p className="text-sm text-gray-500">{kom.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
