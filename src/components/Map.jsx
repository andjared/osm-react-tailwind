import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import CustomMarker from "./CustomMarker";

export default function Map() {
  const [center, setCenter] = useState([44.79017158917864, 16.684265478827957]);
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await fetch("../data/properties.json");
    const data = await response.json();
    setData(data);
    return data;
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <MapContainer center={center} zoom={7.5} className="h-5/6 w-2/4 ">
      <TileLayer
        attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url={`https://api.mapbox.com/styles/v1/andja-z/clmz7sti002zy01r7eih71srx/tiles/256/{z}/{x}/{y}?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
      />
      //we can add cluster group for markers to display only number when zoomed
      out
      {data.map((property) => {
        const { geocode, id, popup } = property;
        return <CustomMarker geocode={geocode} key={id} popupText={popup} />;
      })}
    </MapContainer>
  );
}
