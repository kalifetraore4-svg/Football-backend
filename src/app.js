import cors from "cors";
import express from "express";

import matchesRoutes from "./routes/matches.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running");
});

app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

app.use("/api/matches", matchesRoutes);

export default app;
