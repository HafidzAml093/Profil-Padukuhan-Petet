import { identitasDesa } from "@/data";

export default function IdentitasDesaSection() {
  return (
    <section id="identitas" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <span className="text-xs font-bold text-amber-600 uppercase tracking-wider mb-3 block">
          Profil Desa
        </span>
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1e3b2b] mb-4">
          Identitas Desa
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Desa Petet, sebuah permata tersembunyi yang terletak di Kabupaten{" "}
          [Nama Kabupaten], menyajikan pesona alam yang asri dipadukan dengan
          kearifan lokal yang masih terjaga erat.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {identitasDesa.map((item, idx) => (
            <div
              key={idx}
              className="group bg-[#F7F7F2] p-6 rounded-2xl border-2 border-transparent shadow-sm hover:shadow-xl hover:border-gray-200 hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center justify-center"
            >
              <span className="text-3xl md:text-4xl font-serif font-bold text-[#1e3b2b] mb-2 transition-transform duration-300 group-hover:scale-110">
                {item.value}
              </span>
              <span className="text-xs md:text-sm text-gray-500 uppercase tracking-wider text-center">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
