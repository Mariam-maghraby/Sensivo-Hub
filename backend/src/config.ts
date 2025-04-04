import dotenv from "dotenv";

if (process.env.DOTENV_PATH) {
  dotenv.config({ path: process.env.DOTENV_PATH });
}

const contextApi = "/api";
export const routeConfig = {
  v1ContextApi: `${contextApi}/v1`,
};

const config = {
  port: parseInt(process.env.PORT as string),
};

export const PORT = config.port || 5000;

export default config;