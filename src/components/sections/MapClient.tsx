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
  // Batas atas (Utara) dinaikkan sedikit dari -7.6680 menjadi -7.6650
  // untuk memberi ruang bagi Popup agar tidak terpotong batas peta
  [-7.665, 110.159],
];

// Desain Map Pin Klasik
const createCustomMarker = (hexColor: string) => {
  const htmlContent = `
    <div class="marker-inner w-full h-full flex justify-center items-end transition-all duration-300 ease-out transform origin-bottom">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="${hexColor}" stroke="#ffffff" stroke-width="1.5" style="width: 36px; height: 36px; filter: drop-shadow(0px 4px 6px rgba(0,0,0,0.4));">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"></path>
        <circle cx="12" cy="9" r="3.5" fill="#ffffff" opacity="0.95"></circle>
      </svg>
    </div>
  `;

  return new L.DivIcon({
    html: htmlContent,
    className: "bg-transparent border-none",
    iconSize: [36, 36],
    iconAnchor: [18, 36],
    popupAnchor: [0, -18],
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
    <div className="relative w-full h-full">
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
                mouseover: (e) => {
                  e.target.openPopup();
                },
                mouseout: (e) => {
                  e.target.closePopup();
                },
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
              {/* Tambahkan autoPan={false} untuk mematikan auto-scroll pemicu glitch batas peta */}
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

      {/* Box Legenda */}
      <div className="absolute bottom-6 left-4 z-400 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-gray-200 max-h-[60%] overflow-y-auto w-48 transition-all pointer-events-auto">
        <h4 className="font-bold text-sm text-gray-800 border-b border-gray-200 pb-2 mb-3">
          Kategori UMKM
        </h4>
        <ul className="flex flex-col gap-2.5">
          {categories.map((cat, idx) => (
            <li key={idx} className="flex items-center gap-3">
              <span
                className="w-4 h-4 rounded-full shadow-sm shrink-0 border-2 border-white"
                style={{ backgroundColor: cat.color }}
              ></span>
              <span className="text-xs font-semibold text-gray-700 uppercase tracking-wide">
                {cat.jenis}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
