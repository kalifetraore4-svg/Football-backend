import axios from "axios";
import express from "express";

const router = express.Router();

router.get("/by-date", async (req, res) => {
  try {
    const { date } = req.query;

    if (!date) {
      return res.status(400).json({ error: "date manquante" });
    }

    const response = await axios.get(
      "https://api.football-data.org/v4/matches",
      {
        headers: {
          "X-Auth-Token": process.env.FOOTBALL_DATA_API_KEY,
        },
        params: {
          dateFrom: date,
          dateTo: date,
        },
      }
    );

    const matches = response.data?.matches || [];

    res.json({
      date,
      count: matches.length,
      matches,
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Erreur récupération matchs" });
  }
});

export default router;
