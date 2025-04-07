import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Device } from "../types/Devices";

export const DevicesMap: React.FC<{
  devices: Device[];
}> = ({ devices }) => {
  return (
    <MapContainer
      center={[25.24314, 55.32663]}
      zoom={13}
      style={{ width: "100%", height: "500px" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {/* Loop over the devices and display markers */}
      {devices?.map((device) => (
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
