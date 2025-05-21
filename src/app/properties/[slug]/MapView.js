// MapView.js
import React, { Suspense, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix for default marker icons not showing
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

const MapView = ({ property }) => {
  const [markerPosition, setMarkerPosition] = useState([
    property.latitude,
    property.longitude,
  ]);

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <Suspense fallback={<p>Loading map...</p>}>
        <MapContainer
          center={markerPosition}
          zoom={13}
          scrollWheelZoom={false}
          style={{ height: "100%", width: "100%" }}
        >
          {/* FASTER TILE SERVER */}
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>'
            url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
          />

          {/* DYNAMIC MARKER */}
          <Marker position={markerPosition}>
            <Popup>
             <img src={property?.xl_picture_url} width="100%" /> <br /> <h3>{property.name}</h3>.
            </Popup>
          </Marker>

          {/* Optional: Click to move marker
          <ClickHandler setMarkerPosition={setMarkerPosition} /> */}
        </MapContainer>
      </Suspense>
    </div>
  );
};

// Optional feature: move marker on map click
const ClickHandler = ({ setMarkerPosition }) => {
  useMapEvents({
    click(e) {
      setMarkerPosition([e.latlng.lat, e.latlng.lng]);
    },
  });
  return null;
};

export default MapView;