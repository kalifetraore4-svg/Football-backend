import express from "express";
import matchesRoutes from "./routes/matches.js";

const app = express();
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.use(express.json());
app.use("/api/matches", matchesRoutes);

export default app;
