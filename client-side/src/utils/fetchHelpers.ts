import { Device } from "../types/Devices";
import { axiosInstance, setAuthHeader } from "./apiUtils";

export const fetchDevicesData = async (): Promise<Device[]> => {
  const token = localStorage.getItem("jwtToken");
  setAuthHeader(token!);
  const response = await axiosInstance.get("/device"); // API request to fetch devices
  return response.data;
};

export const fetchDeviceDetails = async (id: string): Promise<Device> => {
  const token = localStorage.getItem("jwtToken");
  setAuthHeader(token!);
  const response = await axiosInstance.get(`/device/${id}`); // API request to fetch device details by ID
  return response.data;
};