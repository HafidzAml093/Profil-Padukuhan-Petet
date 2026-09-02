// src/components/sections/MapClient.tsx
"use client";

import React, { useMemo } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { umkmGeoJSON } from "@/data";

const centerPosition: [number, number] = [-7.6725, 110.1542];
const petetBounds: L.LatLngBoundsLiteral = [
  [-7.678, 110.145],
  [-7.665, 110.159],
];

// Marker baru: pin solid dengan outline tebal + lingkaran dalam bertingkat
// biar tidak flat/transparan di tengah, lebih "berisi" dan modern.
const createCustomMarker = (hexColor: string) => {
  const htmlContent = `
    <div class="marker-inner w-full h-full flex justify-center items-end transition-all duration-300 ease-out transform origin-bottom">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 46" style="width: 40px; height: 46px; filter: drop-shadow(0px 5px 6px rgba(0,0,0,0.45));">
        <path
          d="M20 1C10.6 1 3 8.6 3 18c0 12.5 17 26 17 26s17-13.5 17-26C37 8.6 29.4 1 20 1z"
          fill="${hexColor}"
          stroke="#ffffff"
          stroke-width="3.5"
        />
        <circle cx="20" cy="18" r="9" fill="#ffffff" />
        <circle cx="20" cy="18" r="5.5" fill="${hexColor}" />
      </svg>
    </div>
  `;

  return new L.DivIcon({
    html: htmlContent,
    className: "bg-transparent border-none",
    iconSize: [40, 46],
    iconAnchor: [20, 46],
    popupAnchor: [0, -22],
  });
};

export default function MapClient() {
  const categories = useMemo(() => {
    const uniqueCategories: { jenis: string; color: string }[] = [];
    umkmGeoJSON.features.forEach((feature) => {
      const jenis = feature.properties["Jenis UMKM"];
      const color = feature.properties["icon-color"];
      if (!uniqueCategories.find((c) => c.jenis === jenis)) {
        uniqueCategories.push({ jenis, color: color || "#ef4444" });
      }
    });
    return uniqueCategories;
  }, []);

  return (
    // isolate: mengunci seluruh stacking context peta + legenda di dalam
    // komponen ini, supaya z-index internal (leaflet panes, legenda, dst)
    // tidak pernah bisa menembus elemen di luar komponen (mis. Navbar).
    <div className="relative isolate flex flex-col md:block w-full">
      {/* 1. KOTAK PETA */}
      <div className="relative w-full h-[50vh] md:h-[70vh] bg-gray-200 rounded-xl overflow-hidden shadow-2xl border border-gray-300 z-0">
        <MapContainer
          center={centerPosition}
          zoom={17}
          minZoom={16}
          maxBounds={petetBounds}
          maxBoundsViscosity={1.0}
          style={{ height: "100%", width: "100%", zIndex: 10 }}
          scrollWheelZoom={true}
        >
          <TileLayer
            url="https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}"
            attribution="&copy; Google Maps"
          />

          {umkmGeoJSON.features.map((feature, index) => {
            const lng = feature.geometry.coordinates[0];
            const lat = feature.geometry.coordinates[1];
            const {
              name,
              deskripsi,
              "Jenis UMKM": jenis,
              Kontak,
              "icon-color": iconColor,
            } = feature.properties;

            return (
              <Marker
                key={index}
                position={[lat, lng]}
                icon={createCustomMarker(iconColor || "#ef4444")}
                eventHandlers={{
                  mouseover: (e) => e.target.openPopup(),
                  mouseout: (e) => e.target.closePopup(),
                  popupopen: (e) => {
                    const innerElement = e.target
                      .getElement()
                      ?.querySelector(".marker-inner");
                    if (innerElement) {
                      innerElement.classList.add("-translate-y-4", "opacity-0");
                    }
                  },
                  popupclose: (e) => {
                    const innerElement = e.target
                      .getElement()
                      ?.querySelector(".marker-inner");
                    if (innerElement) {
                      innerElement.classList.remove(
                        "-translate-y-4",
                        "opacity-0",
                      );
                    }
                  },
                }}
              >
                <Popup
                  autoPan={false}
                  className="custom-popup pointer-events-none"
                >
                  <div className="p-1 min-w-45">
                    <h3 className="font-bold text-lg text-gray-800 leading-tight mb-2">
                      {name}
                    </h3>
                    <div className="flex items-center gap-2 mb-3">
                      <span
                        className="px-2.5 py-1 rounded-md text-[10px] font-bold text-white uppercase tracking-wider"
                        style={{ backgroundColor: iconColor || "#ef4444" }}
                      >
                        {jenis}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed mb-3">
                      {deskripsi}
                    </p>
                    <div className="bg-gray-50 rounded-lg p-2 mt-2 border border-gray-100 flex items-center gap-2">
                      <span className="text-lg">📞</span>
                      <span className="text-sm font-semibold text-gray-700">
                        {Kontak || "Tidak tersedia"}
                      </span>
                    </div>
                  </div>
                </Popup>
              </Marker>
            );
          })}
        </MapContainer>
      </div>

      {/* 2. KOTAK LEGENDA (Responsif: Bawah di Mobile, Overlay Absolute di Desktop) */}
      <div
        className="
        mt-4 w-full bg-white p-5 rounded-2xl shadow-sm border border-gray-200 pointer-events-auto transition-all
        md:mt-0 md:absolute md:bottom-6 md:left-6 md:z-400 md:w-56 md:max-h-[60%] md:overflow-y-auto md:bg-white/95 md:backdrop-blur-md md:shadow-xl
      "
      >
        <h4 className="font-bold text-sm text-gray-800 border-b border-gray-100 md:border-gray-200 pb-3 mb-4 uppercase tracking-wider">
          Legenda UMKM
        </h4>

        <ul className="flex flex-wrap md:flex-col gap-3 md:gap-2.5">
          {categories.map((cat, idx) => (
            <li
              key={idx}
              className="flex items-center gap-2.5 bg-[#F7F7F2] md:bg-transparent px-3.5 md:px-0 py-2 md:py-1 rounded-lg border border-gray-200 md:border-none"
            >
              <span
                className="w-4 h-4 md:w-3.5 md:h-3.5 rounded-full shadow-sm shrink-0 border md:border-none border-gray-300"
                style={{ backgroundColor: cat.color }}
              ></span>
              <span className="text-xs font-bold text-gray-700 uppercase tracking-wide">
                {cat.jenis}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
