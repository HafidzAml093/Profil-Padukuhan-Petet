import React from "react";
import Image from "next/image";

export default function heroSections() {
  return (
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
          Padukuhan Petet
        </h1>
        <p className="text-xl md:text-2xl font-light tracking-wide">
          Warisan Tradisi dalam Kehidupan Modern
        </p>
      </div>
    </section>
  );
}
