import { Building, CheckCircle2 } from "lucide-react";

export default function visiMisi() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12">
        <div className="md:col-span-7 space-y-8">
          <div>
            <h3 className="text-xl font-serif mb-4 text-gray-500">Visi</h3>
            <blockquote className="text-2xl font-serif text-[#1e3b2b] border-l-4 border-[#1e3b2b] pl-6 italic">
              &quot;Terwujudnya Desa Petet yang Mandiri, Berbudaya, dan
              Sejahtera melalui Pembangunan Berkelanjutan yang Bertumpu pada
              Kearifan Lokal.&quot;
            </blockquote>
          </div>
          <div>
            <h3 className="text-xl font-serif mb-4 text-gray-500">Misi</h3>
            <ul className="space-y-4">
              {[
                "Melestarikan dan mengembangkan seni, budaya, dan tradisi lokal.",
                "Meningkatkan kualitas sumber daya manusia melalui pendidikan dan kesehatan.",
                "Mendorong pertumbuhan ekonomi kerakyatan berbasis potensi desa dan UMKM.",
                "Membangun infrastruktur yang mendukung konektivitas dan kesejahteraan warga.",
              ].map((misi, i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-[#1e3b2b] mr-3 shrink-0 mt-0.5" />
                  <span className="text-gray-700 leading-relaxed">{misi}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="md:col-span-5 bg-[#F7F7F2] rounded-3xl p-8 relative overflow-hidden">
          <Building className="absolute -bottom-10 -right-10 w-64 h-64 text-gray-200/50" />
          <h3 className="text-xl font-serif mb-6 relative z-10">
            Nilai Inti (Core Values)
          </h3>
          <div className="space-y-6 relative z-10">
            <div>
              <h4 className="font-bold text-gray-900">Gotong Royong</h4>
              <p className="text-sm text-gray-600">
                Kerjasama kolektif untuk tujuan bersama.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-gray-900">Harmoni Alam</h4>
              <p className="text-sm text-gray-600">
                Menjaga keseimbangan dengan lingkungan hidup.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-gray-900">Inovasi Tradisi</h4>
              <p className="text-sm text-gray-600">
                Mengadaptasi budaya untuk masa depan tanpa kehilangan akar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
