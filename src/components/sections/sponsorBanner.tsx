import Image from "next/image";

export default function SponsorBanner() {
  return (
    <div className="bg-[#F7F7F2] pb-8 pt-2">
      <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-[#1e3b2b]/70">
        Platinum Sponsor
      </p>

      <div className="mt-4 flex justify-center px-4">
        <div className="group rounded-2xl bg-white px-8 py-5 shadow-sm ring-1 ring-[#1e3b2b]/10 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:ring-[#1e3b2b]/20">
          <Image
            src="/images/logo/sponsor-a.png"
            alt="Sponsor A"
            width={180}
            height={64}
            className="h-14 w-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
}
