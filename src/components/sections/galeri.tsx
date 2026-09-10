import Image from "next/image";

const fotoKKNAtas = [
  "/images/kkn/kkn-1.jpg",
  "/images/kkn/kkn-2.jpg",
  "/images/kkn/kkn-3.jpg",
  "/images/kkn/kkn-4.jpg",
  "/images/kkn/kkn-5.jpg",
  "/images/kkn/kkn-6.jpg",
];

const fotoKKNBawah = [
  "/images/kkn/kkn-7.jpeg",
  "/images/kkn/kkn-8.jpeg",
  "/images/kkn/kkn-9.jpeg",
  "/images/kkn/kkn-10.jpeg",
  "/images/kkn/kkn-11.jpeg",
  "/images/kkn/kkn-12.jpeg",
];

export default function GaleriDesa() {
  return (
    <section id="galeri" className="py-20 bg-[#EFEFE6] overflow-hidden">
      <div className="max-w-7xl mx-auto text-center px-4 mb-12">
        <h2 className="text-2xl font-serif mb-4">Galeri Bersama KKN</h2>
        <p className="text-gray-600">
          Kebersamaan warga Padukuhan Petet dengan para mahasiswa KKN dalam
          setiap kegiatan, keseharian, dan momen berkesan selama pengabdian.
        </p>
      </div>

      <div className="space-y-6">
        {/* Baris atas: geser ke kiri */}
        <div className="relative flex overflow-hidden">
          <div className="flex gap-4 animate-marquee-left">
            {[...fotoKKNAtas, ...fotoKKNAtas].map((src, idx) => (
              <div
                key={idx}
                className="relative h-48 w-64 md:h-56 md:w-80 shrink-0 rounded-2xl overflow-hidden bg-gray-200"
              >
                <Image
                  src={src}
                  alt={`Kegiatan KKN ${idx + 1}`}
                  fill
                  sizes="(min-width: 768px) 320px, 256px"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Baris bawah: geser ke kanan */}
        <div className="relative flex overflow-hidden">
          <div className="flex gap-4 animate-marquee-right">
            {[...fotoKKNBawah, ...fotoKKNBawah].map((src, idx) => (
              <div
                key={idx}
                className="relative h-48 w-64 md:h-56 md:w-80 shrink-0 rounded-2xl overflow-hidden bg-gray-200"
              >
                <Image
                  src={src}
                  alt={`Momen KKN ${idx + 1}`}
                  fill
                  sizes="(min-width: 768px) 320px, 256px"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee-left {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
        .animate-marquee-left {
          animation: marquee-left 40s linear infinite;
        }
        .animate-marquee-right {
          animation: marquee-right 40s linear infinite;
        }
        .animate-marquee-left:hover,
        .animate-marquee-right:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
