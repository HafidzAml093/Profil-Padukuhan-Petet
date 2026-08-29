export default function Footer() {
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
  );
}
