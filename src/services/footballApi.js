import axios from "axios";

const footballApi = axios.create({
  baseURL: "https://v3.football.api-sports.io",
  headers: {
    "x-apisports-key": process.env.FOOTBALL_API_KEY,
    "x-rapidapi-host": process.env.FOOTBALL_API_HOST
  }
});

export default footballApi;
