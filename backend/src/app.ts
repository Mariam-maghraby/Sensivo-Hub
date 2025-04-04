import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { PORT, routeConfig } from "./config";
import authRoute from "./routers/auth.router";
import deviceRoute from "./routers/device.router";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from Express with TypeScript!");
});
app.use(`${routeConfig.v1ContextApi}/auth`, authRoute);
app.use(`${routeConfig.v1ContextApi}/device`, deviceRoute);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
