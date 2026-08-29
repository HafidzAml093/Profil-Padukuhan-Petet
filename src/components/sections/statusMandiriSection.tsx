import { statusMandiri } from "@/data";

export default function statusDesa() {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto text-center">
      <h2 className="text-2xl font-serif mb-4">Status: Desa Mandiri Budaya</h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-12">
        Desa Petet telah diakui sebagai &apos;Desa Mandiri Budaya&apos;, sebuah
        komitmen untuk mengelola potensi desa secara mandiri dengan menjadikan
        kebudayaan sebagai ruh pembangunan.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statusMandiri.map((status, idx) => (
          <div
            key={idx}
            className="bg-white p-8 rounded-3xl flex flex-col items-center text-center shadow-sm"
          >
            <div
              className={`w-16 h-16 rounded-full ${status.bg} ${status.color} flex items-center justify-center mb-6`}
            >
              <status.icon className="w-8 h-8" />
            </div>
            <h4 className="font-bold text-gray-900 mb-2">{status.title}</h4>
            <p className="text-sm text-gray-500">{status.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
