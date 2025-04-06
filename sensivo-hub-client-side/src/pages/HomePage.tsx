import { TableScrollArea } from "../components/DevicesTable";
import { DevicesMap } from "../components/DevicesMap";
import PowerConsumptionChart from "../components/PowerConsumptionChart";

export const HomePage = () => {
  return (
    <div>
      <TableScrollArea />
      <DevicesMap />
      <PowerConsumptionChart />
    </div>
  );
};
