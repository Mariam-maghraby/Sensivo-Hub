import { useQuery } from "@tanstack/react-query";
import { DeviceDetailsGrid } from "../components/DeviceDetails";
import { fetchDeviceDetails } from "../utils/fetchHelpers";
import { useParams } from "react-router-dom";

export const DeviceDetailsPage = () => {
  const { id } = useParams(); // Get the device ID from the URL parameters

  const {
    data: device,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["deviceDetails", id], // include id in the key for caching to change when id changes
    queryFn: () => fetchDeviceDetails(id!),
    enabled: !!id, // ensures query runs only when id is defined
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;
  return (
    <div>
      <h1>Device Details Page</h1>
      <DeviceDetailsGrid
        device={
          device || {
            id: "1",
            name: "Device 1",
            status: "Active",
            totalPowerConsumption: "23 kw",
            lat: 25.24314,
            lng: 55.32663,
            temperature: "22.5",
            humidity: "60",
          }
        }
      />
    </div>
  );
};
