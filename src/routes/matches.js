import axios from "axios";
import express from "express";

const router = express.Router();

router.get("/api/matches/live", async (req, res) => {
  try {
    const apiKey = process.env.SPORTMONKS_API_KEY;

    if (!apiKey) {
      return res.status(500).json({ error: "SPORTMONKS_API_KEY manquante" });
    }

    const url = "https://api.sportmonks.com/v3/football/livescores/inplay";

    const response = await axios.get(url, {
      params: {
        api_token: apiKey,
        include:
          "participants;scores;periods;events;league.country;round",
      },
      timeout: 10000,
    });

    const matches = response.data?.data || [];

    res.json({
      source: "sportmonks",
      count: matches.length,
      matches,
    });
  } catch (error) {
    console.error("SportMonks error:", error?.response?.data || error.message);
    res.status(500).json({
      error: "Impossible de récupérer les matchs en live",
    });
  }
});

export default router;
