import {
  Users,
  Briefcase,
  HeartHandshake,
  Leaf,
  Home,
  Music,
  Mountain,
  ShoppingBag,
  Heart,
  Tractor,
  Sprout,
  Utensils,
  Scissors,
  Coffee,
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

export const dataJendelaUMKM = [
  {
    id: "gula-aren",
    name: "Gula Aren Bpk. Rukimin",
    category: "Produksi Gula Aren",
    shortDesc: "100% murni tanpa pengawet buatan.",
    icon: Coffee,
    fullTitle: "Gula Aren Alami Bapak Rukimin",
    fullDesc:
      "Kemurnian dari Padukuhan Petet. Gula aren tradisional yang diolah 100% secara manual tanpa campuran bahan kimia. Memiliki warna alami kecokelatan dengan tekstur empuk dan aroma karamel yang mendalam hasil dari pemanasan tungku kayu bakar.",
    location: "Padukuhan Petet RT 20, Kapanewon Samigaluh, Kulon Progo",
    hours: "Senin - Sabtu (Buka setiap hari pasaran)",
    contact: "Bapak Rukimin (Bisa via WhatsApp)",
    price: "Gula Aren Cetak: Rp 25.000 / kilogram (Kapasitas maks 2kg/hari)",
  },
  {
    id: "geblek-toyo",
    name: "Geblek Mas Toyo",
    category: "Kuliner Tradisional",
    shortDesc: "Cita rasa autentik sejak 1987.",
    icon: Utensils,
    fullTitle: "Geblek Mas Toyo: Autentik Sejak 1987",
    fullDesc:
      "Dirintis oleh Mbah Ngatiyem, usaha keluarga ini mempertahankan keaslian rasa menggunakan teknik khusus perpaduan ampas dan pati singkong lokal. Menghasilkan tekstur geblek yang renyah di luar, kenyal di dalam, dan tidak cepat keras meski disimpan.",
    location: "Dusun Petet, Yogyakarta, Indonesia",
    hours: "Tersedia Eceran & Partai Besar (Sistem Made to Order)",
    contact: "WhatsApp Geblek Mas Toyo",
    price: "Mulai dari Rp 1.000 / 3 buah",
  },
  {
    id: "nuryadi-craft",
    name: "Nuryadi Craft",
    category: "Kriya Bambu",
    shortDesc: "Menjaga warisan, menganyam masa depan.",
    icon: Scissors,
    fullTitle: "Keunggulan Kriya Nuryadi",
    fullDesc:
      "Dedikasi puluhan tahun Mbah Nuryadi dalam melestarikan seni kriya bambu tradisional dengan ketelitian tangan murni (100% Handmade). Menghasilkan anyaman berkualitas turun-temurun yang adaptif dengan harga yang merakyat.",
    location: "Padukuhan Petet, Kulon Progo",
    hours: "Senin - Minggu",
    contact: "Bapak Nuryadi (Pemesanan via WhatsApp)",
    price: "Bervariasi tergantung jenis dan ukuran anyaman",
  },
  {
    id: "tempe-jemu",
    name: "Jemu Tempe",
    category: "Produksi Tempe",
    shortDesc: "Tempe kedelai segar produksi lokal.",
    icon: ShoppingBag,
    fullTitle: "Pusat Produksi Jemu Tempe Kedelai",
    fullDesc:
      "Memproduksi tempe kedelai berkualitas tinggi dengan proses fermentasi yang terjaga kebersihannya. Menjadi pemasok utama kebutuhan protein nabati harian bagi warga sekitar dan pasar lokal Padukuhan Petet.",
    location: "Padukuhan Petet, Samigaluh",
    hours: "Setiap Hari (Produksi Pagi Hari)",
    contact: "0838-5322-3954",
    price: "Harga grosir dan eceran menyesuaikan ukuran",
  },
];

// src/data/index.ts

export const umkmGeoJSON = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [110.1552285, -7.669961, 0] },
      properties: {
        name: "NURYADI BAMBU",
        "icon-color": "#1a237e",
        deskripsi: "kerajinan bambu",
        "Jenis UMKM": "KERAJINAN",
        Kontak: "083821995681",
      },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [110.154866, -7.6702548, 0] },
      properties: {
        name: "MITRO TEMPE",
        "icon-color": "#0288d1",
        deskripsi: "pembuatan tempe",
        "Jenis UMKM": "PRODUKSI TEMPE",
        Kontak: "083156986891",
      },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [110.1554095, -7.6713334, 0] },
      properties: {
        name: "Jemu Tempe",
        "icon-color": "#0288d1",
        deskripsi: "Produksi Tempe Kedelai",
        "Jenis UMKM": "PRODUKSI TEMPE",
        Kontak: "083853223954",
      },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [110.154916, -7.6701255, 0] },
      properties: {
        name: "IZZA TAYLOR",
        "icon-color": "#f57c00",
        deskripsi: "PENJAHIT",
        "Jenis UMKM": "JASA",
        Kontak: "083147851411",
      },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [110.1554332, -7.6707583, 0] },
      properties: {
        name: "Rumah simbah Leginem",
        "icon-color": "#0f9d58",
        deskripsi: "Krupuk singkong(krecek)",
        "Jenis UMKM": "TOKO",
        Kontak: "087733206034",
      },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [110.1554077, -7.6711094, 0] },
      properties: {
        name: "Warung mbak Midah",
        "icon-color": "#0f9d58",
        deskripsi: "Warung klontong",
        "Jenis UMKM": "TOKO",
        Kontak: "",
      },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [110.1508609, -7.6703066, 0] },
      properties: {
        name: "SENIYAH TEMPE",
        "icon-color": "#0288d1",
        deskripsi: "PEMBUATAN TEMPE",
        "Jenis UMKM": "PRODUKSI TEMPE",
        Kontak: "083839551576",
      },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [110.15522, -7.6706909, 0] },
      properties: {
        name: "Dul Pete",
        "icon-color": "#e65100",
        deskripsi: "Jual beli petai",
        "Jenis UMKM": "PERTANIAN",
        Kontak: "083159571170",
      },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [110.1524122, -7.6725079, 0] },
      properties: {
        name: "SIMANIS GENDIS JAWA",
        "icon-color": "#fbc02d",
        deskripsi: "PRODUKSI GULA AREN",
        "Jenis UMKM": "GULA AREN",
        Kontak: "085729590466",
      },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [110.1541951, -7.67297, 0] },
      properties: {
        name: "GITO GATI FARM",
        "icon-color": "#c2185b",
        deskripsi: "pengembangbiakan kambing etawa",
        "Jenis UMKM": "PETERNAKAN",
        Kontak: "087839695500",
      },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [110.1552244, -7.6714976, 0] },
      properties: {
        name: "Rumah bapak Siswo Sutrisno",
        "icon-color": "#f57c00",
        deskripsi: "Jasa pembuatan kusen dan pintu",
        "Jenis UMKM": "JASA",
        Kontak: "0859166235243",
      },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [110.1574645, -7.6748453, 0] },
      properties: {
        name: "GULA AREN RUKIMIN",
        "icon-color": "#fbc02d",
        deskripsi: "INDUSTRI PEMBUATAN GULA AREN",
        "Jenis UMKM": "GULA AREN",
        Kontak: "083111702350",
      },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [110.1552232, -7.6744067, 0] },
      properties: {
        name: "GEBLEK MAS TOYO",
        "icon-color": "#3949ab",
        deskripsi: "PEMBUATAN GEBLEK",
        "Jenis UMKM": "PRODUKSI GEBLEK",
        Kontak: "085740982218",
      },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [110.1554391, -7.6708845, 0] },
      properties: {
        name: "Rumah bapak Sukiman",
        "icon-color": "#f57c00",
        deskripsi: "Jasa Pertukangan",
        "Jenis UMKM": "JASA",
        Kontak: "087733206034",
      },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [110.1558987, -7.6701609, 0] },
      properties: {
        name: "Rumah Rohmatul",
        "icon-color": "#e65100",
        deskripsi: "Jual beli petai",
        "Jenis UMKM": "PERTANIAN",
        Kontak: "08174118060",
      },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [110.1522888, -7.6722893, 0] },
      properties: {
        name: "BENGKEL MORO DADI",
        "icon-color": "#f57c00",
        deskripsi: "BENGKEL MOTOR",
        "Jenis UMKM": "JASA",
        Kontak: "",
      },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [110.1534983, -7.6765938, 0] },
      properties: {
        name: "BONIRAH",
        "icon-color": "#e65100",
        deskripsi: "JUAL BELI HASIL. PERTANIAN",
        "Jenis UMKM": "PERTANIAN",
        Kontak: "",
      },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [110.1537025, -7.6706442, 0] },
      properties: {
        name: "Rumah Jumari",
        "icon-color": "#c2185b",
        deskripsi: "Ternak ayam kampung",
        "Jenis UMKM": "PETERNAKAN",
        Kontak: "083877377493",
      },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [110.1541127, -7.6701962, 0] },
      properties: {
        name: "Rumah bpk Khusnul Anwari",
        "icon-color": "#0f9d58",
        deskripsi: "Penyediaan Pulsa dan token listrik",
        "Jenis UMKM": "TOKO",
        Kontak: "082137727937",
      },
    },
  ],
};

export const komunitasDesa = [
  {
    nama: "Karang Taruna",
    deskripsi:
      "Wadah pemuda-pemudi Padukuhan Petet untuk berkreasi, berinovasi, dan berkegiatan sosial di lingkungan masyarakat.",
    icon: Users,
    color: "text-blue-600",
    bg: "bg-blue-100",
  },
  {
    nama: "PKK",
    deskripsi:
      "Pemberdayaan Kesejahteraan Keluarga yang menjadi penggerak wanita dalam pembangunan dan kesejahteraan keluarga.",
    icon: Heart,
    color: "text-pink-600",
    bg: "bg-pink-100",
  },
  {
    nama: "Kelompok Ternak Karya Mandiri",
    deskripsi:
      "Komunitas peternak yang berfokus pada pengembangbiakan, perawatan, dan pengelolaan hasil ternak secara mandiri.",
    icon: Tractor,
    color: "text-amber-600",
    bg: "bg-amber-100",
  },
  {
    nama: "Kelompok Tani Sido Maju",
    deskripsi:
      "Paguyuban petani Padukuhan Petet yang saling bersinergi untuk memajukan hasil pertanian dan kesejahteraan anggota.",
    icon: Leaf,
    color: "text-green-600",
    bg: "bg-green-100",
  },
  {
    nama: "KWT Tunas Asri",
    deskripsi:
      "Kelompok Wanita Tani yang aktif bergerak dalam pemanfaatan pekarangan dan pengembangan potensi hasil bumi rumahan.",
    icon: Sprout,
    color: "text-emerald-600",
    bg: "bg-emerald-100",
  },
];
