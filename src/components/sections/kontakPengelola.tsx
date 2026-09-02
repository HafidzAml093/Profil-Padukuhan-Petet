import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { FaInstagram, FaWhatsapp, FaFacebook, FaTiktok } from "react-icons/fa";
import Link from "next/link";

const socials = [
  { href: "https://instagram.com/...", icon: FaInstagram, label: "Instagram" },
  { href: "https://wa.me/62...", icon: FaWhatsapp, label: "WhatsApp" },
  { href: "https://facebook.com/...", icon: FaFacebook, label: "Facebook" },
  { href: "https://tiktok.com/...", icon: FaTiktok, label: "TikTok" },
];

export default function KontakPengelola() {
  return (
    <section id="kontak" className="py-20 px-4 bg-[#EFEFE6]">
      <div className="max-w-4xl mx-auto text-center mb-10">
        <span className="text-xs font-bold text-amber-600 uppercase tracking-wider mb-3 block">
          Layanan Masyarakat
        </span>
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1e3b2b] mb-4">
          Hubungi Pengelola Desa
        </h2>
        <p className="text-gray-600">
          Informasi lebih lanjut mengenai kunjungan wisata, kerjasama, atau
          layanan masyarakat.
        </p>
      </div>

      <div className="max-w-5xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 grid md:grid-cols-2 gap-12">
        <div>
          <h4 className="font-bold text-gray-900 mb-6 text-lg">
            Kantor Kepala Desa
          </h4>
          <div className="space-y-4 text-gray-600 text-sm">
            <div className="flex gap-4 items-start">
              <MapPin className="w-5 h-5 shrink-0 text-amber-600" />
              <p>
                Jl. Utama Desa Petet No. 1, Kec. [Nama Kecamatan],
                <br />
                Kab. [Nama Kabupaten]
              </p>
            </div>
            <div className="flex gap-4 items-center">
              <Mail className="w-5 h-5 shrink-0 text-amber-600" />
              <p>pemdes@petet.desa.id</p>
            </div>
            <div className="flex gap-4 items-center">
              <Clock className="w-5 h-5 shrink-0 text-amber-600" />
              <p>Senin - Jumat: 08.00 - 15.00 WIB</p>
            </div>
          </div>

          <div className="flex gap-3 mt-8">
            {socials.map((social) => {
              const Icon = social.icon;
              return (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-[#F7F7F2] flex items-center justify-center text-gray-600 hover:bg-[#1e3b2b] hover:text-white transition-colors duration-300"
                >
                  <Icon className="w-4 h-4" />
                </Link>
              );
            })}
          </div>
        </div>

        <div>
          <h4 className="font-bold text-gray-900 mb-6 text-lg">
            Saluran Siaga & Informasi
          </h4>
          <div className="space-y-4">
            <div className="group bg-[#F7F7F2] p-4 rounded-xl flex items-center gap-4 border-2 border-transparent hover:border-gray-200 transition-all duration-300">
              <div className="w-11 h-11 shrink-0 rounded-lg bg-white flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <Phone className="w-5 h-5 text-[#1e3b2b]" />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">
                  Informasi Wisata & Reservasi
                </p>
                <p className="font-bold text-gray-900">
                  +62 811 2233 4455 (Budi)
                </p>
              </div>
            </div>
            <div className="group bg-[#F7F7F2] p-4 rounded-xl flex items-center gap-4 border-2 border-transparent hover:border-gray-200 transition-all duration-300">
              <div className="w-11 h-11 shrink-0 rounded-lg bg-white flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <Phone className="w-5 h-5 text-rose-600" />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">
                  Puskesmas / Darurat
                </p>
                <p className="font-bold text-gray-900">+62 822 3344 5566</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
