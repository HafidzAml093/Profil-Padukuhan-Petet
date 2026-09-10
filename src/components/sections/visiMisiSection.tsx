import { Building, CheckCircle2 } from "lucide-react";

export default function VisiMisi() {
  return (
    <section id="visi-misi" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <span className="text-xs font-bold text-amber-600 uppercase tracking-wider mb-3 block">
          Arah Pembangunan
        </span>
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1e3b2b] mb-12">
          Visi & Misi
        </h2>

        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-7 space-y-10">
            <div>
              <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">
                Visi
              </h3>
              <blockquote className="text-2xl font-serif text-[#1e3b2b] border-l-4 border-amber-600 pl-6 italic leading-relaxed">
                &quot;Terwujudnya Padukuhan Petet yang Harmonis, Mandiri, dan
                Sejahtera melalui Pertanian dan Pariwisata Berkelanjutan yang
                Menjunjung Tinggi Nilai Religius.&quot;
              </blockquote>
            </div>
            <div>
              <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">
                Misi
              </h3>
              <ul className="space-y-4">
                {[
                  "Menjaga keharmonisan dan sinergi antarwarga sebagai kunci utama keberlanjutan desa.",
                  "Meningkatkan kesejahteraan ekonomi warga melalui sektor pertanian sawah dan tegalan yang produktif.",
                  "Mengembangkan potensi wisata alam Sungai Tinalah secara berkelanjutan dengan konsep yang ramah muslim.",
                  "Melestarikan nilai-nilai gotong royong dan menjaga kelestarian lingkungan alam sekitar.",
                ].map((misi, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-amber-600 mr-3 shrink-0 mt-0.5" />
                    <span className="text-gray-700 leading-relaxed">
                      {misi}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="md:col-span-5 bg-[#F7F7F2] rounded-3xl p-8 relative overflow-hidden border border-gray-100">
            <Building className="absolute -bottom-10 -right-10 w-64 h-64 text-gray-200/50" />
            <h3 className="text-xl font-serif font-bold text-[#1e3b2b] mb-6 relative z-10">
              Nilai Inti (Core Values)
            </h3>
            <div className="space-y-6 relative z-10">
              <div>
                <h4 className="font-bold text-gray-900">
                  Keharmonisan & Sinergi
                </h4>
                <p className="text-sm text-gray-600">
                  Menjaga kerukunan dan kerja sama kolektif antarwarga sebagai
                  pondasi keberlanjutan.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Agamis & Berbudaya</h4>
                <p className="text-sm text-gray-600">
                  Mengedepankan nilai-nilai religius dalam kehidupan sehari-hari
                  masyarakat.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Kelestarian Alam</h4>
                <p className="text-sm text-gray-600">
                  Menjaga keseimbangan pemanfaatan kekayaan alam untuk pertanian
                  dan pariwisata.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
