import axios from "axios";
import express from "express";

const router = express.Router();

router.get("/live", async (req, res) => {
  try {
    const apiKey = process.env.FOOTBALL_DATA_API_KEY;

    if (!apiKey) {
      return res.status(500).json({ error: "API key manquante" });
    }

    const response = await axios.get(
      "https://api.football-data.org/v4/matches?status=LIVE",
      {
        headers: {
          "X-Auth-Token": apiKey,
        },
        timeout: 10000,
      }
    );

    res.json({
      source: "football-data",
      count: response.data.matches.length,
      matches: response.data.matches,
    });
  } catch (error) {
    console.error(error.response?.data || error.message);
    res.status(500).json({ error: "Erreur récupération matchs live" });
  }
});

export default router;
