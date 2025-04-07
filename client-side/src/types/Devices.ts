import { PowerConsumptionPerMonth } from "./PowerConsumptionPerMonth";

export type Device = {
  id: string;
  temperature: string;
  humidity: string;
  lat: number;
  lng: number;
  name: string;
  status: string;
  totalPowerConsumption: string;
  totalPowerConsumptionPerMonth?: PowerConsumptionPerMonth;
}
