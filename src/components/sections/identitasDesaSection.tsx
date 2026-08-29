import { identitasDesa } from "@/data";

export default function identitasDesaSection() {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto text-center">
      <h2 className="text-2xl font-serif mb-4">Identitas Desa</h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-12">
        Desa Petet, sebuah permata tersembunyi yang terletak di Kabupaten [Nama
        Kabupaten], menyajikan pesona alam yang asri dipadukan dengan kearifan
        lokal yang masih terjaga erat.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {identitasDesa.map((item, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center"
          >
            <span className="text-3xl font-bold text-[#1e3b2b] mb-2">
              {item.value}
            </span>
            <span className="text-sm text-gray-500 uppercase tracking-wider">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
