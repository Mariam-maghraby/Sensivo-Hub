import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { PORT, routeConfig } from "./config";
import authRoute from "./routers/auth.router";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  console.log("auth: Hello from Express with TypeScript!");
  res.send("Hello from Express with TypeScript!");
});
app.use(`${routeConfig.v1ContextApi}/auth`, authRoute);
// app.use(`${routeConfig.v1ContextApi}/devices`, devicesRoute);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
