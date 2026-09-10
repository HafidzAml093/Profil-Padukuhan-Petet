"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const budayaData = [
  {
    title: "Merti Padukuhan",
    desc: "Rasa syukur warga atas kelimpahan bumi dan keselamatan dusun.",
    fotos: [
      "/images/budaya/merti-padukuhan-1.JPG",
      "/images/budaya/merti-padukuhan-2.JPG",
      "/images/budaya/merti-padukuhan-3.JPG",
      "/images/budaya/merti-padukuhan-4.JPG",
      "/images/budaya/merti-padukuhan-5.JPG",
      "/images/budaya/merti-padukuhan-6.JPG",
    ],
  },
  {
    title: "Bangilun",
    desc: "Kesenian tradisional yang diwariskan turun-temurun.",
    fotos: [
      "/images/budaya/bangilun-1.JPG",
      "/images/budaya/bangilun-2.JPG",
      "/images/budaya/bangilun-3.JPG",
      "/images/budaya/bangilun-4.JPG",
      "/images/budaya/bangilun-5.JPG",
    ],
  },
];

function BudayaCard({
  title,
  desc,
  fotos,
}: {
  title: string;
  desc: string;
  fotos: string[];
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % fotos.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [fotos.length]);

  return (
    <div className="relative rounded-3xl overflow-hidden h-80 group">
      {fotos.map((src, index) => (
        <Image
          key={src}
          src={src}
          alt={title}
          fill
          className={`object-cover transition-opacity duration-1000 ease-in-out group-hover:scale-105 ${
            index === activeIndex ? "opacity-100" : "opacity-0"
          }`}
          priority={index === 0}
        />
      ))}

      <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent flex flex-col justify-end p-8 text-white">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-gray-200">{desc}</p>
      </div>

      <div className="absolute top-4 right-4 flex gap-1.5 z-10">
        {fotos.map((_, index) => (
          <span
            key={index}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === activeIndex ? "w-5 bg-white" : "w-1.5 bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function KehidupanBudaya() {
  return (
    <section id="culture" className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1e3b2b] mb-4 text-center">
          Kehidupan Budaya
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {budayaData.map((budaya) => (
            <BudayaCard key={budaya.title} {...budaya} />
          ))}
        </div>
      </div>
    </section>
  );
}
