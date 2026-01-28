import express from "express";
import matchesRoutes from "./routes/matches.js";

const app = express();

app.use(express.json());
app.use("/api/matches", matchesRoutes);

export default app;
