import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer } from "react-leaflet";

export default function Map() {
  return (
    <MapContainer center={[44.12002775845974, 15.232276147257753]} zoom={8} className="h-5/6 w-3/4 ">
        <TileLayer attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"></TileLayer>
    </MapContainer>
  )
}
