import React from "react";
import {
  MapPin,
  Clock,
  Phone,
  Tag,
  CheckCircle2,
  Building,
  Users,
  Briefcase,
  GraduationCap,
  Wifi,
  HeartHandshake,
  Leaf,
  Zap,
  ChevronRight,
  Play,
  Quote,
  Home,
  Music,
  Mountain,
  ShoppingBag,
  Car,
  Info,
  Mail,
} from "lucide-react";
import Image from "next/image";

// ==========================================
// DATA STATIS (PENGGANTI DATABASE)
// Nanti bisa dipisah ke file data.json
// ==========================================

const identitasDesa = [
  { label: "Luas Wilayah", value: "1.250 Ha" },
  { label: "Padukuhan", value: "5" },
  { label: "Rukun Warga (RW)", value: "12" },
  { label: "Rukun Tetangga (RT)", value: "36" },
];

const statusMandiri = [
  {
    title: "Desa Budaya",
    desc: "Pelestarian adat istiadat, seni tradisi, dan ritus lokal.",
    icon: Home,
    color: "text-amber-700",
    bg: "bg-amber-100",
  },
  {
    title: "Desa Preneur",
    desc: "Pemberdayaan ekonomi melalui UMKM dan industri kreatif.",
    icon: Briefcase,
    color: "text-orange-700",
    bg: "bg-orange-100",
  },
  {
    title: "Desa Wisata",
    desc: "Pengembangan pariwisata berkelanjutan berbasis komunitas.",
    icon: Mountain,
    color: "text-green-700",
    bg: "bg-green-100",
  },
  {
    title: "Desa Prima",
    desc: "Pemberdayaan perempuan dalam peran sosial dan ekonomi.",
    icon: Users,
    color: "text-rose-700",
    bg: "bg-rose-100",
  },
];

const agendaKegiatan = [
  {
    date: "15 AGU",
    title: "Festival Budaya Desa",
    desc: "Pertunjukan seni tari, wayang kulit, dan pasar rakyat.",
  },
  {
    date: "22 SEP",
    title: "Pelatihan UMKM",
    desc: "Workshop pengemasan produk dan pemasaran digital untuk warga.",
  },
  {
    date: "05 OKT",
    title: "Rembuk Warga",
    desc: "Pertemuan bulanan membahas rencana pembangunan desa.",
  },
  {
    date: "10 NOV",
    title: "Gotong Royong Bersih Desa",
    desc: "Kegiatan rutin membersihkan lingkungan dan fasilitas umum.",
  },
];

const beritaDesa = [
  {
    date: "12 Jul 2024",
    category: "Pembangunan",
    title: "Peresmian Balai Warga Baru",
    desc: "Fasilitas baru untuk mendukung kegiatan komunitas dan pertemuan rutin desa.",
  },
  {
    date: "05 Jun 2024",
    category: "Penghargaan",
    title: "Juara 1 Desa Wisata Terbersih",
    desc: "Desa Petet kembali meraih penghargaan tingkat kabupaten dalam kebersihan lingkungan.",
  },
  {
    date: "28 Mei 2024",
    category: "Program Desa",
    title: "Bantuan Bibit Tanaman Obat",
    desc: "Pemerintah desa membagikan bibit Toga kepada setiap rumah tangga untuk kemandirian kesehatan.",
  },
];

const komunitas = [
  {
    name: "Karang Taruna",
    desc: "Pemuda pemudi yang aktif dalam kegiatan sosial, olahraga, dan pengembangan potensi desa.",
    icon: Users,
  },
  {
    name: "Kelompok Tani",
    desc: "Mengelola sumber daya alam dan pertanian secara berkelanjutan untuk ketahanan pangan.",
    icon: Leaf,
  },
  {
    name: "Sanggar Seni",
    desc: "Wadah pelestarian kesenian tradisional seperti tari, gamelan, dan kerajinan tangan.",
    icon: Music,
  },
  {
    name: "PKK & Posyandu",
    desc: "Menggerakkan pemberdayaan kesejahteraan keluarga dan kesehatan dasar masyarakat.",
    icon: HeartHandshake,
  },
];

const jelajahi = [
  {
    name: "Situs Budaya",
    desc: "Jejak sejarah peninggalan leluhur.",
    icon: Home,
  },
  {
    name: "Seni Tradisional",
    desc: "Pertunjukan tari dan musik gamelan.",
    icon: Music,
  },
  {
    name: "Wisata Alam",
    desc: "Trekking sawah dan bukit hijau.",
    icon: Mountain,
  },
  {
    name: "Produk Lokal",
    desc: "Oleh-oleh khas karya warga desa.",
    icon: ShoppingBag,
  },
];

// ==========================================
// KOMPONEN UTAMA (HALAMAN)
// ==========================================

export default function DesaProfile() {
  return (
    <div className="min-h-screen bg-[#F7F7F2] text-gray-800 font-sans">
      {/* 1. NAVBAR */}
      <nav className="sticky top-0 z-50 bg-[#F7F7F2]/90 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="shrink-0 flex items-center">
              <span className="font-serif text-2xl font-bold text-[#1e3b2b]">
                Desa Petet
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-600 hover:text-[#1e3b2b]">
                History
              </a>
              <a href="#" className="text-gray-600 hover:text-[#1e3b2b]">
                Culture
              </a>
              <a href="#" className="text-gray-600 hover:text-[#1e3b2b]">
                UMKM
              </a>
              <a href="#" className="text-gray-600 hover:text-[#1e3b2b]">
                Map
              </a>
            </div>
            <div>
              <button className="bg-[#1e3b2b] text-white px-6 py-2 rounded-full hover:bg-[#2c533e] transition">
                Visit Us
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* 2. SPONSOR BANNER */}
      <div className="bg-[#EFEFE6] py-3 text-center text-sm text-gray-500 uppercase tracking-widest">
        Platinum Sponsor <br />
        <span className="font-semibold">[Sponsor Logo/Name]</span>
      </div>

      {/* 3. HERO SECTION */}
      <section className="relative h-[80vh] w-full flex items-center justify-center">
        {/* Placeholder background image dari Unsplash (sawah/desa) */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&q=80"
            alt="Pemandangan Desa"
            fill
            priority
            className="object-cover brightness-75"
          />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-4">
            Desa Petet
          </h1>
          <p className="text-xl md:text-2xl font-light tracking-wide">
            Warisan Tradisi dalam Kehidupan Modern
          </p>
        </div>
      </section>

      {/* 4. IDENTITAS DESA */}
      <section className="py-20 px-4 max-w-7xl mx-auto text-center">
        <h2 className="text-2xl font-serif mb-4">Identitas Desa</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Desa Petet, sebuah permata tersembunyi yang terletak di Kabupaten
          [Nama Kabupaten], menyajikan pesona alam yang asri dipadukan dengan
          kearifan lokal yang masih terjaga erat.
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

      {/* 5. VISI MISI & CORE VALUES */}
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
                    <span className="text-gray-700 leading-relaxed">
                      {misi}
                    </span>
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

      {/* 6. PROFIL & SEJARAH */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-serif text-[#1e3b2b] mb-6">
              Profil & Sejarah
            </h2>
            <p className="text-gray-600 mb-10 text-lg leading-relaxed">
              Berakar dalam tradisi luhur, Desa Petet adalah harmoni antara masa
              lalu yang dihormati dan masa depan yang berkelanjutan. Setiap
              sudut desa ini bercerita tentang keuletan, kebersamaan, dan
              kearifan lokal yang terus dijaga dari generasi ke generasi.
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

      {/* 7. DEMOGRAFI & INFRASTRUKTUR */}
      <section className="py-16 px-4 bg-[#EFEFE6]">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-center text-xl font-serif mb-12">
            Demografi & Infrastruktur
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Box 1 */}
            <div className="bg-white p-6 rounded-2xl">
              <div className="flex items-center gap-2 mb-4 text-[#1e3b2b]">
                <Users className="w-5 h-5" />
                <h4 className="font-bold">Populasi</h4>
              </div>
              <div className="text-3xl font-bold mb-1">
                3.450{" "}
                <span className="text-sm font-normal text-gray-500">Jiwa</span>
              </div>
              <div className="flex justify-between text-xs text-gray-500 mt-4">
                <span>Laki-laki: 1.700</span>
                <span>Perempuan: 1.750</span>
              </div>
            </div>

            {/* Box 2 */}
            <div className="bg-white p-6 rounded-2xl">
              <div className="flex items-center gap-2 mb-4 text-[#1e3b2b]">
                <Briefcase className="w-5 h-5" />
                <h4 className="font-bold">Mata Pencaharian Utama</h4>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span>Pertanian</span>
                  <span className="font-bold">60%</span>
                </div>
                <div className="flex justify-between">
                  <span>UMKM/Kerajinan</span>
                  <span className="font-bold">25%</span>
                </div>
                <div className="flex justify-between">
                  <span>Lainnya</span>
                  <span className="font-bold">15%</span>
                </div>
              </div>
            </div>

            {/* Box 3 */}
            <div className="bg-white p-6 rounded-2xl">
              <div className="flex items-center gap-2 mb-4 text-[#1e3b2b]">
                <GraduationCap className="w-5 h-5" />
                <h4 className="font-bold">Fasilitas Pendidikan</h4>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span>PAUD / TK</span>
                  <span className="font-bold">3 Unit</span>
                </div>
                <div className="flex justify-between">
                  <span>Sekolah Dasar</span>
                  <span className="font-bold">2 Unit</span>
                </div>
                <div className="flex justify-between">
                  <span>Pusat Belajar Komunitas</span>
                  <span className="font-bold">1 Unit</span>
                </div>
              </div>
            </div>

            {/* Box 4 */}
            <div className="bg-white p-6 rounded-2xl relative overflow-hidden">
              <div className="flex items-center gap-2 mb-4 text-[#1e3b2b] relative z-10">
                <Building className="w-5 h-5" />
                <h4 className="font-bold">Infrastruktur</h4>
              </div>
              <div className="space-y-3 text-sm relative z-10">
                <div className="flex justify-between">
                  <span>Jalan Desa Aspal/Cor</span>
                  <span className="font-bold">85%</span>
                </div>
                <div className="flex justify-between">
                  <span>Puskesmas Pembantu</span>
                  <span className="font-bold">1 Unit</span>
                </div>
                <div className="flex justify-between">
                  <span>Akses Internet/WiFi</span>
                  <span className="font-bold">Tersedia</span>
                </div>
              </div>
              <span className="absolute -right-4 top-1/2 -translate-y-1/2 text-6xl font-black text-gray-50 opacity-50 transform rotate-90 origin-right">
                INFRA
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 8. STATUS DESA MANDIRI BUDAYA */}
      <section className="py-20 px-4 max-w-7xl mx-auto text-center">
        <h2 className="text-2xl font-serif mb-4">
          Status: Desa Mandiri Budaya
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Desa Petet telah diakui sebagai &apos;Desa Mandiri Budaya&apos;,
          sebuah komitmen untuk mengelola potensi desa secara mandiri dengan
          menjadikan kebudayaan sebagai ruh pembangunan.
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

      {/* 9. KEHIDUPAN BUDAYA & AGENDA KEGIATAN */}
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
                <p className="text-gray-200">
                  Rasa syukur atas kelimpahan bumi.
                </p>
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
                  <h4 className="font-bold text-gray-900 mb-1">
                    {agenda.title}
                  </h4>
                  <p className="text-sm text-gray-600">{agenda.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. BERITA DESA */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-10">
          <h2 className="text-2xl font-serif">Berita Desa</h2>
          <a
            href="#"
            className="text-[#1e3b2b] flex items-center hover:underline text-sm font-semibold"
          >
            Lihat Semua <ChevronRight className="w-4 h-4 ml-1" />
          </a>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {beritaDesa.map((berita, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 group"
            >
              <div className="h-48 bg-gray-200 w-full flex items-center justify-center text-gray-400 group-hover:bg-gray-300 transition">
                {/* Image Placeholder */}
                <span className="w-10 h-10 border-2 border-gray-400 rounded-lg flex items-center justify-center">
                  <div className="w-5 h-0.5 bg-gray-400 mb-1"></div>
                </span>
              </div>
              <div className="p-6">
                <div className="text-xs font-bold text-amber-700 uppercase mb-2">
                  {berita.category}
                </div>
                <h3 className="font-bold text-lg mb-2 text-gray-900">
                  {berita.title}
                </h3>
                <p className="text-gray-500 text-sm mb-4 line-clamp-2">
                  {berita.desc}
                </p>
                <div className="text-xs text-gray-400 flex items-center">
                  <Clock className="w-3 h-3 mr-1" /> {berita.date}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 11. GALERI DESA */}
      <section className="py-20 px-4 bg-[#EFEFE6]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl font-serif mb-4">Galeri Desa</h2>
          <p className="text-gray-600 mb-8">
            Pesona keindahan alam, kekayaan budaya, dan keseharian warga Desa
            Petet dalam tangkapan lensa.
          </p>

          <div className="flex justify-center gap-4 mb-10 flex-wrap">
            <button className="px-6 py-2 rounded-full bg-[#1e3b2b] text-white text-sm">
              Semua
            </button>
            <button className="px-6 py-2 rounded-full bg-white text-gray-600 text-sm hover:bg-gray-50">
              Alam
            </button>
            <button className="px-6 py-2 rounded-full bg-white text-gray-600 text-sm hover:bg-gray-50">
              Budaya
            </button>
            <button className="px-6 py-2 rounded-full bg-white text-gray-600 text-sm hover:bg-gray-50">
              Video
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {/* Generate 6 dummy gallery items */}
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className={`bg-gray-200 rounded-2xl flex items-center justify-center text-gray-400 relative overflow-hidden ${i === 3 ? "col-span-2 row-span-2 h-full" : "h-48 md:h-64"}`}
              >
                {i === 3 ? (
                  <Play className="w-16 h-16 opacity-50" />
                ) : (
                  <span className="w-8 h-8 border-2 border-gray-400 rounded-lg"></span>
                )}
              </div>
            ))}
          </div>
          <button className="px-8 py-3 rounded-full border-2 border-[#1e3b2b] text-[#1e3b2b] font-semibold hover:bg-[#1e3b2b] hover:text-white transition">
            Muat Lebih Banyak
          </button>
        </div>
      </section>

      {/* 12. CERITA DARI DESA & KOMUNITAS */}
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
                  kota berkat pendampingan dari desa. Rasanya tetap
                  otentik.&quot;
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
                  sanggar seni agar budaya kami tidak hilang tergerus
                  zaman.&quot;
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

      {/* 13. JELAJAHI DESA PETET (UMKM) */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-serif mb-4">Jelajahi Desa Petet</h2>
          <p className="text-gray-600 mb-10">
            Temukan keindahan alam, kekayaan budaya, dan kreasi lokal.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {jelajahi.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#F7F7F2] p-6 rounded-2xl text-center hover:bg-[#EFEFE6] transition cursor-pointer"
              >
                <item.icon className="w-8 h-8 mx-auto text-gray-500 mb-4" />
                <h4 className="font-bold text-gray-900 mb-1">{item.name}</h4>
                <p className="text-xs text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-[#F7F7F2] rounded-3xl p-8 md:p-12 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-bold text-amber-600 uppercase tracking-wider mb-2 block">
                UMKM Unggulan
              </span>
              <h3 className="text-3xl font-serif text-gray-900 mb-4">
                Pusat Kerajinan Gula Aren
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Mewarisi resep turun temurun, pengrajin kami mengolah nira pohon
                aren berkualitas menjadi gula aren murni dengan cita rasa khas
                dan legit. Proses pembuatan dilakukan secara tradisional untuk
                menjaga kualitas dan keaslian rasa.
              </p>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <MapPin className="w-5 h-5 text-gray-400 shrink-0" />
                  <div>
                    <h5 className="font-bold text-sm text-gray-900">Lokasi</h5>
                    <p className="text-sm text-gray-600">
                      Padukuhan Karang Tengah, RT 02 / RW 04
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Clock className="w-5 h-5 text-gray-400 shrink-0" />
                  <div>
                    <h5 className="font-bold text-sm text-gray-900">
                      Jam Operasional
                    </h5>
                    <p className="text-sm text-gray-600">
                      Senin - Sabtu: 07.00 - 15.00 WIB (Bisa melihat proses
                      pembuatan pagi hari)
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Phone className="w-5 h-5 text-gray-400 shrink-0" />
                  <div>
                    <h5 className="font-bold text-sm text-gray-900">
                      Kontak Pemesanan
                    </h5>
                    <p className="text-sm text-gray-600">
                      +62 812 3456 7890 (Bapak Sukiman)
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Tag className="w-5 h-5 text-gray-400 shrink-0" />
                  <div>
                    <h5 className="font-bold text-sm text-gray-900">
                      Harga & Produk
                    </h5>
                    <p className="text-sm text-gray-600">
                      Gula Cetak: Rp 25.000/kg | Gula Semut: Rp 35.000/kg
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="bg-gray-200 h-48 rounded-2xl flex items-center justify-center text-gray-400"
                >
                  <span className="text-xs">Gallery Image {i}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 14. PETA DESA */}
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

      {/* 15. SEBELUM BERKUNJUNG */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-2xl font-serif mb-12">
            Sebelum Berkunjung
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#F9F9F6] p-8 rounded-3xl border border-gray-100">
              <Car className="w-8 h-8 text-[#1e3b2b] mb-4" />
              <h4 className="font-bold text-gray-900 mb-4">
                Logistik Perjalanan
              </h4>
              <ul className="space-y-4 text-sm text-gray-600">
                <li>
                  <strong className="text-gray-900">Jarak:</strong> Sekitar 15
                  km dari pusat kota (30 menit berkendara).
                </li>
                <li>
                  <strong className="text-gray-900">Transportasi:</strong> Dapat
                  diakses dengan kendaraan pribadi (mobil/motor). Angkutan umum
                  terbatas.
                </li>
                <li>
                  <strong className="text-gray-900">Kondisi Jalan:</strong>{" "}
                  Beraspal baik hingga ke pusat desa, beberapa jalan dusun
                  berupa cor blok.
                </li>
              </ul>
            </div>
            <div className="bg-[#F9F9F6] p-8 rounded-3xl border border-gray-100">
              <Info className="w-8 h-8 text-[#1e3b2b] mb-4" />
              <h4 className="font-bold text-gray-900 mb-4">Fasilitas Umum</h4>
              <ul className="space-y-4 text-sm text-gray-600">
                <li>
                  <strong className="text-gray-900">Parkir:</strong> Tersedia
                  area parkir luas di dekat Balai Desa.
                </li>
                <li>
                  <strong className="text-gray-900">Toilet Umum:</strong>{" "}
                  Tersedia di titik-titik wisata dan balai desa (bersih &
                  terawat).
                </li>
                <li>
                  <strong className="text-gray-900">Tempat Ibadah:</strong>{" "}
                  Masjid desa dan mushola di setiap padukuhan.
                </li>
              </ul>
            </div>
            <div className="bg-[#FFF4E5] p-8 rounded-3xl border border-orange-100">
              <Users className="w-8 h-8 text-amber-700 mb-4" />
              <h4 className="font-bold text-amber-900 mb-4">
                Etika Pengunjung
              </h4>
              <ul className="space-y-3 text-sm text-amber-800">
                <li className="flex items-start">
                  <span className="mr-2">•</span> Berpakaian sopan saat
                  mengunjungi situs budaya atau tempat ibadah.
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span> Jaga kebersihan, buang sampah
                  pada tempat yang disediakan.
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span> Hormati privasi warga
                  setempat; minta izin sebelum memotret orang.
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span> Dukung ekonomi lokal dengan
                  membeli produk UMKM desa.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 16. HUBUNGI PENGELOLA */}
      <section className="py-20 px-4 bg-[#EFEFE6]">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <h2 className="text-2xl font-serif mb-4">Hubungi Pengelola Desa</h2>
          <p className="text-gray-600">
            Informasi lebih lanjut mengenai kunjungan wisata, kerjasama, atau
            layanan masyarakat.
          </p>
        </div>
        <div className="max-w-5xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-sm grid md:grid-cols-2 gap-12">
          <div>
            <h4 className="font-bold text-gray-900 mb-6 text-lg">
              Kantor Kepala Desa
            </h4>
            <div className="space-y-4 text-gray-600 text-sm">
              <div className="flex gap-4 items-start">
                <MapPin className="w-5 h-5 shrink-0 text-gray-400" />
                <p>
                  Jl. Utama Desa Petet No. 1, Kec. [Nama Kecamatan],
                  <br />
                  Kab. [Nama Kabupaten]
                </p>
              </div>
              <div className="flex gap-4 items-center">
                <Mail className="w-5 h-5 shrink-0 text-gray-400" />
                <p>pemdes@petet.desa.id</p>
              </div>
              <div className="flex gap-4 items-center">
                <Clock className="w-5 h-5 shrink-0 text-gray-400" />
                <p>Senin - Jumat: 08.00 - 15.00 WIB</p>
              </div>
            </div>

            <div className="flex gap-4 mt-8">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#1e3b2b] hover:text-white transition"
              >
                <span className="font-bold text-sm">Wa</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#1e3b2b] hover:text-white transition"
              >
                <span className="font-bold text-sm">Ig</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#1e3b2b] hover:text-white transition"
              >
                <span className="font-bold text-sm">Fb</span>
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-6 text-lg">
              Saluran Siaga & Informasi
            </h4>
            <div className="space-y-4">
              <div className="bg-[#F7F7F2] p-4 rounded-xl flex items-center gap-4">
                <Phone className="w-8 h-8 text-[#1e3b2b] p-1.5 bg-white rounded-lg" />
                <div>
                  <p className="text-xs text-gray-500 font-semibold uppercase">
                    Informasi Wisata & Reservasi
                  </p>
                  <p className="font-bold text-gray-900">
                    +62 811 2233 4455 (Budi)
                  </p>
                </div>
              </div>
              <div className="bg-[#F7F7F2] p-4 rounded-xl flex items-center gap-4">
                <Phone className="w-8 h-8 text-rose-600 p-1.5 bg-white rounded-lg" />
                <div>
                  <p className="text-xs text-gray-500 font-semibold uppercase">
                    Puskesmas / Darurat
                  </p>
                  <p className="font-bold text-gray-900">+62 822 3344 5566</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 17. FOOTER */}
      <footer className="bg-[#EFEFE6] py-12 px-4 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h5 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">
              Didukung Oleh
            </h5>
            <div className="flex flex-wrap justify-center gap-8 text-gray-400 font-semibold text-sm">
              <span>[Sponsor 1]</span>
              <span>[Sponsor 2]</span>
              <span>[Sponsor 3]</span>
              <span>[Sponsor 4]</span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-300 gap-4">
            <div className="font-serif text-xl font-bold text-[#1e3b2b]">
              Desa Petet
            </div>
            <div className="flex gap-6 text-sm text-gray-500">
              <a href="#" className="hover:text-gray-900">
                Contact
              </a>
              <a href="#" className="hover:text-gray-900">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-gray-900">
                Tourism Guide
              </a>
            </div>
            <div className="text-sm text-gray-500">
              © 2024 Desa Petet. Preserving Heritage, Empowering Future.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
