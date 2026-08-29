export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-[#F7F7F2]/90 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="shrink-0 flex items-center">
            <span className="font-serif text-2xl font-bold text-[#1e3b2b]">
              Padukuhan Petet
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
  );
}
