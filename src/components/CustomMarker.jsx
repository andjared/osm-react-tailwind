import { Marker, Popup } from "react-leaflet";
import { divIcon } from "leaflet";

export default function CustomMarker({ geocode, popupText, price }) {
  const iconMarkup = `<span className="inline-block text-center ">$${price}</span>`;
  const customIcon = new divIcon({
    html: iconMarkup,
    className: "marker-icon", //to set custom styles
  });

  return (
    <Marker position={geocode} icon={customIcon}>
      <Popup>
        <h2>{popupText}</h2>
      </Popup>
    </Marker>
  );
}
