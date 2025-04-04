export class Device {
  id: string;
  temperature: string;
  humidity: string;
  lat: number;
  lng: number;
  name: string;
  status: string;
  totalPowerConsumption: string;

  constructor(
    id: string,
    temperature: string,
    humidity: string,
    lat: number,
    lng: number,
    name: string,
    status: string,
    totalPowerConsumption: string,
  ) {
    this.id = id;
    this.temperature = temperature;
    this.humidity = humidity;
    this.lat = lat;
    this.lng = lng;
    this.name = name;
    this.status = status;
    this.totalPowerConsumption = totalPowerConsumption;
  }
}

export type PowerConsumptionPerMonth = {
  jan: string;
  feb: string;
  march: string;
  april: string;
  may: string;
  june: string;
  july: string;
  august: string;
  september: string;
  october: string;
  november: string;
  december: string;
};

export class DeviceDetails extends Device {
  totalPowerConsumptionPerMonth: PowerConsumptionPerMonth;

  constructor(
    id: string,
    temperature: string,
    humidity: string,
    lat: number,
    lng: number,
    name: string,
    status: string,
    totalPowerConsumption: string,
    totalPowerConsumptionPerMonth: PowerConsumptionPerMonth,
  ) {
    super(
      id,
      temperature,
      humidity,
      lat,
      lng,
      name,
      status,
      totalPowerConsumption,
    );
    this.totalPowerConsumptionPerMonth = totalPowerConsumptionPerMonth;
  }
}
