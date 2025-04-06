import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// Sample device locations (you can fetch these from an API or a database)
const devices = [
  { id: 1, name: "Device 1", lat: 51.505, lng: -0.09 },
  { id: 2, name: "Device 2", lat: 51.515, lng: -0.1 },
  { id: 3, name: "Device 3", lat: 51.525, lng: -0.11 },
];

export const DevicesMap = () => {
  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={13}
      style={{ width: "100%", height: "500px" }}>
      {/* TileLayer: You can use other tile layers or providers */}
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {/* Loop over the devices and display markers */}
      {devices.map((device) => (
        <Marker
          key={device.id}
          position={[device.lat, device.lng]} // Set marker position
        >
          <Popup>{device.name}</Popup> {/* Show device name in popup */}
        </Marker>
      ))}
    </MapContainer>
  );
};
