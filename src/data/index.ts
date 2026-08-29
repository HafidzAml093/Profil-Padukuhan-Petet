import {
  Users,
  Briefcase,
  HeartHandshake,
  Leaf,
  Home,
  Music,
  Mountain,
  ShoppingBag,
} from "lucide-react";

export const identitasDesa = [
  { label: "Luas Wilayah", value: "1.250 Ha" },
  { label: "Padukuhan", value: "5" },
  { label: "Rukun Warga (RW)", value: "12" },
  { label: "Rukun Tetangga (RT)", value: "36" },
];

export const statusMandiri = [
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

export const agendaKegiatan = [
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

export const beritaDesa = [
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

export const komunitas = [
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

export const jelajahi = [
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
