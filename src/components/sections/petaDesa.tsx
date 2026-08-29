import { MapPin } from "lucide-react";

export default function Peta() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-2xl font-serif mb-12">
          Peta Desa Wisata
        </h2>
        <div className="w-full h-125 bg-[#EAE8E3] rounded-3xl relative overflow-hidden flex flex-col justify-end p-6">
          {/* Map Placeholder Graphic Concept */}
          <div className="absolute inset-0 flex items-center justify-center opacity-30">
            <div
              className="w-full h-full"
              style={{
                backgroundImage:
                  "radial-gradient(#1e3b2b 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }}
            ></div>
          </div>

          {/* Map Pins */}
          <div className="absolute top-1/4 left-1/3 flex flex-col items-center">
            <MapPin className="w-8 h-8 text-rose-600 fill-white" />
            <span className="text-xs font-bold mt-1 bg-white/80 px-2 py-1 rounded">
              Balai Desa
            </span>
          </div>
          <div className="absolute top-1/2 left-1/4 flex flex-col items-center">
            <MapPin className="w-8 h-8 text-amber-600 fill-white" />
            <span className="text-xs font-bold mt-1 bg-white/80 px-2 py-1 rounded">
              UMKM Gula Aren
            </span>
          </div>
          <div className="absolute bottom-1/3 right-1/3 flex flex-col items-center">
            <MapPin className="w-8 h-8 text-blue-600 fill-white" />
            <span className="text-xs font-bold mt-1 bg-white/80 px-2 py-1 rounded">
              Area Parkir
            </span>
          </div>
          <div className="absolute top-1/3 right-1/4 flex flex-col items-center">
            <MapPin className="w-8 h-8 text-green-600 fill-white" />
            <span className="text-xs font-bold mt-1 bg-white/80 px-2 py-1 rounded">
              Situs Budaya
            </span>
          </div>

          <p className="text-xs text-gray-500 relative z-10">
            *Peta ilustratif. Gunakan Google Maps untuk navigasi akurat.
          </p>
        </div>
      </div>
    </section>
  );
}
