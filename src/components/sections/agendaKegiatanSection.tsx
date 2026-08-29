import { agendaKegiatan } from "@/data";
import Image from "next/image";

export default function agendaDesa() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-2xl font-serif mb-12">
          Kehidupan Budaya
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="relative rounded-3xl overflow-hidden h-80 group">
            <Image
              src="https://images.unsplash.com/photo-1590059530514-ce096b797b5e?auto=format&fit=crop&q=80"
              alt="Upacara"
              fill
              className="object-cover transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent flex flex-col justify-end p-8 text-white">
              <h3 className="text-2xl font-bold mb-2">Upacara Panen</h3>
              <p className="text-gray-200">Rasa syukur atas kelimpahan bumi.</p>
            </div>
          </div>
          <div className="relative rounded-3xl overflow-hidden h-80 group">
            <Image
              src="https://images.unsplash.com/photo-1605382685714-c11929d2153f?auto=format&fit=crop&q=80"
              alt="Seni Ukir"
              fill
              className="object-cover transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent flex flex-col justify-end p-8 text-white">
              <h3 className="text-2xl font-bold mb-2">Seni Ukir</h3>
              <p className="text-gray-200">Keterampilan yang diwariskan.</p>
            </div>
          </div>
        </div>

        <h3 className="text-center text-xl font-serif mb-8 text-gray-500">
          Agenda Kegiatan
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {agendaKegiatan.map((agenda, idx) => (
            <div
              key={idx}
              className="flex gap-6 bg-[#F7F7F2] p-6 rounded-2xl items-center"
            >
              <div className="bg-[#E5AA70] text-white p-4 rounded-xl text-center min-w-20">
                <div className="text-2xl font-bold leading-none">
                  {agenda.date.split(" ")[0]}
                </div>
                <div className="text-xs uppercase mt-1">
                  {agenda.date.split(" ")[1]}
                </div>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">{agenda.title}</h4>
                <p className="text-sm text-gray-600">{agenda.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
