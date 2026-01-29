import axios from "axios";
import express from "express";

const router = express.Router();

// Matchs par date (soccer)
router.get("/by-date", async (req, res) => {
  try {
    const { date } = req.query;

    if (!date) {
      return res.status(400).json({ error: "date manquante" });
    }

    // TheSportsDB attend YYYY-MM-DD
    const url = `https://www.thesportsdb.com/api/v1/json/3/eventsday.php`;

    const response = await axios.get(url, {
      params: {
        d: date,
        s: "Soccer",
      },
      timeout: 10000,
    });

    const events = response.data?.events || [];

    res.json({
      source: "thesportsdb",
      date,
      count: events.length,
      matches: events,
    });
  } catch (err) {
    console.error("TheSportsDB error:", err.message);
    res.status(500).json({ error: "Erreur récupération matchs" });
  }
});

export default router;
