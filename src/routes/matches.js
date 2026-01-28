import express from "express";
import footballApi from "../services/footballApi.js";

const router = express.Router();

router.get("/live", async (req, res) => {
  try {
    const response = await footballApi.get("/fixtures", {
      params: { live: "all" }
    });

    res.json(response.data.response);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "API Football error" });
  }
});

export default router;
