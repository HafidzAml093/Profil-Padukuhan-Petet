import Image from "next/image";
export default function ProfilSejarahDesa() {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-serif text-[#1e3b2b] mb-6">
            Profil & Sejarah
          </h2>
          <p className="text-gray-600 mb-10 text-lg leading-relaxed">
            Berakar dalam tradisi luhur, Desa Petet adalah harmoni antara masa
            lalu yang dihormati dan masa depan yang berkelanjutan. Setiap sudut
            desa ini bercerita tentang keuletan, kebersamaan, dan kearifan lokal
            yang terus dijaga dari generasi ke generasi.
          </p>
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-2.5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-linear-to-b before:from-transparent before:via-gray-300 before:to-transparent">
            <div className="relative flex items-start gap-6">
              <div className="absolute left-0 h-full w-0.5 bg-[#1e3b2b] ml-1"></div>
              <div className="w-3 h-3 rounded-full bg-[#1e3b2b] ring-4 ring-white relative z-10 mt-1.5"></div>
              <div>
                <h4 className="font-bold text-[#1e3b2b]">Awal Mula</h4>
                <p className="text-sm text-gray-600">
                  Didirikan oleh leluhur sebagai pusat pertanian yang subur.
                </p>
              </div>
            </div>
            <div className="relative flex items-start gap-6">
              <div className="w-3 h-3 rounded-full bg-amber-600 ring-4 ring-white relative z-10 mt-1.5"></div>
              <div>
                <h4 className="font-bold text-amber-700">Era Modern</h4>
                <p className="text-sm text-gray-600">
                  Transformasi menuju desa wisata berkelanjutan dengan tetap
                  menjaga nilai otentik.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-3xl overflow-hidden h-125">
          {/* Placeholder Pengrajin dari Unsplash */}
          <Image
            src="https://images.unsplash.com/photo-1604944436577-4b77ee4e5559?auto=format&fit=crop&q=80"
            alt="Sejarah Desa"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
