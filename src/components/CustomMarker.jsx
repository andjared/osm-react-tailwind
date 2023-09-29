import { Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import markerIcon from "../assets/icons/markerIcon.png";

const customIcon = new Icon({
  iconUrl: markerIcon,
  iconSize: [24, 24],
});

export default function CustomMarker({ geocode, popupText }) {
  console.log(popupText);
  return (
    <Marker position={geocode} icon={customIcon}>
      <Popup>
        <h2>{popupText}</h2>
      </Popup>
    </Marker>
  );
}
