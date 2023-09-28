import "leaflet/dist/leaflet.css";
import { startTransition, useState } from "react";

import { MapContainer, TileLayer } from "react-leaflet";

export default function Map() {
  const [center, setCenter] = useState([44.8, 15.8]);
  return (
    <MapContainer center={center} zoom={7.5} className="h-5/6 w-3/4 ">
      <TileLayer
        attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url={`https://api.mapbox.com/styles/v1/andja-z/clmz7sti002zy01r7eih71srx/tiles/256/{z}/{x}/{y}?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
      />
    </MapContainer>
  );
}

// mapbox://styles/andja-z/clmz7sti002zy01r7eih71srx
