import express from "express";
import { getCurrentMonthMatches } from "../controllers/matches.controller.js";

const router = express.Router();

router.get("/current-month", getCurrentMonthMatches);

export default router;
