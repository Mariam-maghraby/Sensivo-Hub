import { axiosInstance } from "../utils/apiUtils";

export interface ICredentials {
  username: string;
  password: string;
}

export const login = async (credentials: ICredentials): Promise<string> => {
  try {
    const response = await axiosInstance.post("auth/login", credentials);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Login failed");
  }
};
