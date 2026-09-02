import Link from "next/link";
import { FaInstagram, FaWhatsapp, FaFacebook, FaTiktok } from "react-icons/fa";

const socials = [
  {
    href: "https://www.instagram.com/hafeedz_aml/#",
    icon: FaInstagram,
    label: "Instagram",
  },
  { href: "https://wa.me/62...", icon: FaWhatsapp, label: "WhatsApp" },
  { href: "https://facebook.com/...", icon: FaFacebook, label: "Facebook" },
  { href: "https://tiktok.com/...", icon: FaTiktok, label: "TikTok" },
];

const footerLinks = [
  { href: "#", label: "Contact" },
  { href: "#", label: "Privacy Policy" },
  { href: "#", label: "Tourism Guide" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
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

        <div className="flex justify-center gap-3 mb-10">
          {socials.map((social) => {
            const Icon = social.icon;
            return (
              <Link
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-gray-500 hover:bg-[#1e3b2b] hover:text-white transition-colors duration-300"
              >
                <Icon className="w-4 h-4" />
              </Link>
            );
          })}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-300 gap-4">
          <div className="font-serif text-xl font-bold text-[#1e3b2b]">
            Padukuhan Petet
          </div>
          <div className="flex gap-6 text-sm text-gray-500">
            {footerLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="hover:text-amber-600 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="text-sm text-gray-500 text-center md:text-right">
            © {year} Padukuhan Petet. KKN UIMY Yogyakarta.
          </div>
        </div>
      </div>
    </footer>
  );
}
