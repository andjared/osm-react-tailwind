import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import CustomMarker from "./CustomMarker";

export default function Map() {
  const [center, setCenter] = useState([44.359, 15.876]);
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await fetch("properties.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const data = await response.json();
    setData(data);
    return data;
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <MapContainer center={center} zoom={7.5} className="h-5/6 w-5/6 md:w-2/4">
      <TileLayer
        attribution="© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>"
        url={`https://api.mapbox.com/styles/v1/andja-z/clmz7sti002zy01r7eih71srx/tiles/256/{z}/{x}/{y}?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
      />
      {data.length > 0 &&
        data.map((property) => {
          const { geocode, id, popup, price } = property;
          return (
            <CustomMarker
              geocode={geocode}
              key={id}
              popupText={popup}
              price={price}
            />
          );
        })}
    </MapContainer>
  );
}
