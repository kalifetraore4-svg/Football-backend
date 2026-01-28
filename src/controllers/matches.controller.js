export const getCurrentMonthMatches = (req, res) => {
  const today = new Date();

  const matches = [];

  for (let i = -15; i <= 15; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);

    matches.push({
      id: `match-${i + 16}`,
      date: d.toISOString().split("T")[0],
      time: "18:00",
      league: {
        name: "Premier League",
        country: "England"
      },
      homeTeam: {
        name: "Arsenal",
        score: i < 0 ? 2 : null
      },
      awayTeam: {
        name: "Chelsea",
        score: i < 0 ? 1 : null
      },
      status:
        i < 0 ? "finished" : i === 0 ? "live" : "scheduled"
    });
  }

  res.json({
    success: true,
    count: matches.length,
    matches
  });
};
