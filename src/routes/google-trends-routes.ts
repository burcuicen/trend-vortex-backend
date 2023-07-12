import express from "express";
import GoogleTrendsController from "../controllers/google-trends-controller";

const router = express.Router();

// Routes for Google Trends data
router.get("/interest-by-region", GoogleTrendsController.getInterestByRegion);
router.get("/interest-over-time", GoogleTrendsController.getInterestOverTime);
router.get("/real-time", GoogleTrendsController.getRealTimeTrends);
router.get("/related-queries", GoogleTrendsController.getRelatedQueries);
router.get("/related-topics", GoogleTrendsController.getRelatedTopics);
router.get("/daily-trends", GoogleTrendsController.getDailyTrends);

export default router;

