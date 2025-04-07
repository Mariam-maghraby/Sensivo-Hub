import { DevicesTable } from "../components/DevicesTable";
import { DevicesMap } from "../components/DevicesMap";
import PowerConsumptionChart from "../components/PowerConsumptionChart";
import { fetchDevicesData } from "../utils/fetchHelpers";
import { useQuery } from "@tanstack/react-query";

export const HomePage = () => {
  const {
    data: devices,
    error,
    isLoading,
  } = useQuery({ queryKey: ["devices"], queryFn: fetchDevicesData });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;
  return (
    <div>
      <DevicesTable devices={devices!} />
      <DevicesMap devices={devices!} />
      <PowerConsumptionChart devices={devices!} />
    </div>
  );
};
