"use client";

import "leaflet/dist/leaflet.css";
import { useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

import L from "leaflet";

const customIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconSize: [25, 41], // Tamanho do ícone
  iconAnchor: [12, 41], // Ancoragem do ícone
  popupAnchor: [1, -34], // Ancoragem do popup
  shadowSize: [41, 41], // Tamanho da sombra (opcional)
});

export default function Map() {
  const [mapPosition, setMapPosition] = useState<[number, number]>([
    -23.9618, -46.3322,
  ]);

  return (
    <div className="flex-1 h-full bg-gray-800 relative">
      <MapContainer
        center={mapPosition}
        zoom={13}
        scrollWheelZoom={true}
        className="h-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={mapPosition} icon={customIcon}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
