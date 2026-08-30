// src/components/sections/MapClient.tsx
"use client";

import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { umkmGeoJSON } from "@/data";

const centerPosition: [number, number] = [-7.672, 110.154];
const petetBounds: L.LatLngBoundsLiteral = [
  [-7.685, 110.145],
  [-7.66, 110.165],
];

const createCustomMarker = (hexColor: string) => {
  const svgIcon = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="${hexColor}" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: 36px; height: 36px; filter: drop-shadow(0px 4px 4px rgba(0,0,0,0.3));">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
      <circle cx="12" cy="10" r="3" fill="white"></circle>
    </svg>
  `;

  return new L.DivIcon({
    html: svgIcon,
    className: "bg-transparent border-none",
    iconSize: [36, 36],
    iconAnchor: [18, 36],
    popupAnchor: [0, -32],
  });
};

export default function MapClient() {
  return (
    <MapContainer
      center={centerPosition}
      zoom={16}
      minZoom={15}
      maxBounds={petetBounds}
      maxBoundsViscosity={1.0}
      style={{ height: "100%", width: "100%", zIndex: 10 }}
      scrollWheelZoom={true}
    >
      {/* 
        TAMPILAN SATELIT HYBRID 
        lyrs=y memunculkan citra satelit sekaligus nama jalan/tempat.
        Jika murni satelit tanpa teks sama sekali, gunakan lyrs=s
      */}
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
              // Membuka popup saat kursor masuk ke area marker (Desktop)
              mouseover: (e) => {
                e.target.openPopup();
              },
              // Menutup popup saat kursor keluar (Desktop)
              mouseout: (e) => {
                e.target.closePopup();
              },
              // Tetap mendukung klik untuk perangkat layar sentuh (Mobile)
              click: (e) => {
                e.target.openPopup();
              },
            }}
          >
            {/* Menambahkan pointer-events-none agar saat kursor mengenai popup, popup tidak berkedip/tertutup otomatis */}
            <Popup className="custom-popup pointer-events-none">
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
  );
}
