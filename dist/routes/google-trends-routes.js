"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var google_trends_controller_1 = __importDefault(require("../controllers/google-trends-controller"));
var router = express_1.default.Router();
// Routes for Google Trends data
/**
 * @swagger
 * /api/interest-by-region:
 *   get:
 *     description: Get interest by region for a keyword in a specific time frame.
 *     parameters:
 *       - in: query
 *         name: keyword
 *         schema:
 *           type: string
 *         required: true
 *         description: Keyword to search for.
 *       - in: query
 *         name: startTime
 *         schema:
 *           type: string
 *           format: date-time
 *         description: Start time of the search period.
 *       - in: query
 *         name: endTime
 *         schema:
 *           type: string
 *           format: date-time
 *         description: End time of the search period.
 *       - in: query
 *         name: geo
 *         schema:
 *           type: string
 *         description: Geographic area for search.
 *       - in: query
 *         name: resolution
 *         schema:
 *           type: string
 *         description: Resolution for the geographic area.
 *     responses:
 *       200:
 *         description: Success
 */
router.get("/interest-by-region", google_trends_controller_1.default.getInterestByRegion);
/**
 * @swagger
 * /api/interest-over-time:
 *   get:
 *     description: Get interest over time for a keyword in a specific time frame.
 *     parameters:
 *       - in: query
 *         name: keyword
 *         schema:
 *           type: string
 *         required: true
 *         description: Keyword to search for.
 *       - in: query
 *         name: startTime
 *         schema:
 *           type: string
 *           format: date-time
 *         description: Start time of the search period.
 *       - in: query
 *         name: endTime
 *         schema:
 *           type: string
 *           format: date-time
 *         description: End time of the search period.
 *       - in: query
 *         name: geo
 *         schema:
 *           type: string
 *         description: Geographic area for search.
 *     responses:
 *       200:
 *         description: Success
 */
router.get("/interest-over-time", google_trends_controller_1.default.getInterestOverTime);
/**
 * @swagger
 * /api/real-time:
 *   get:
 *     description: Get real-time trend data for a specific geographic area.
 *     parameters:
 *       - in: query
 *         name: geo
 *         schema:
 *           type: string
 *         required: true
 *         description: Geographic area for search.
 *     responses:
 *       200:
 *         description: Success
 */
router.get("/real-time", google_trends_controller_1.default.getRealTimeTrends);
/**
 * @swagger
 * /api/related-queries:
 *   get:
 *     description: Get related queries for a keyword in a specific time frame.
 *     parameters:
 *       - in: query
 *         name: keyword
 *         schema:
 *           type: string
 *         required: true
 *         description: Keyword to search for.
 *       - in: query
 *         name: startTime
 *         schema:
 *           type: string
 *           format: date-time
 *         description: Start time of the search period.
 *       - in: query
 *         name: endTime
 *         schema:
 *           type: string
 *           format: date-time
 *         description: End time of the search period.
 *       - in: query
 *         name: geo
 *         schema:
 *           type: string
 *         description: Geographic area for search.
 *     responses:
 *       200:
 *         description: Success
 */
router.get("/related-queries", google_trends_controller_1.default.getRelatedQueries);
/**
 * @swagger
 * /api/related-topics:
 *   get:
 *     description: Get related topics for a keyword in a specific time frame.
 *     parameters:
 *       - in: query
 *         name: keyword
 *         schema:
 *           type: string
 *         required: true
 *         description: Keyword to search for.
 *       - in: query
 *         name: startTime
 *         schema:
 *           type: string
 *           format: date-time
 *         description: Start time of the search period.
 *       - in: query
 *         name: endTime
 *         schema:
 *           type: string
 *           format: date-time
 *         description: End time of the search period.
 *       - in: query
 *         name: geo
 *         schema:
 *           type: string
 *         description: Geographic area for search.
 *     responses:
 *       200:
 *         description: Success
 */
router.get("/related-topics", google_trends_controller_1.default.getRelatedTopics);
/**
 * @swagger
 * /api/daily-trends:
 *   get:
 *     description: Get daily trends for a specific geographic area.
 *     parameters:
 *       - in: query
 *         name: geo
 *         schema:
 *           type: string
 *         required: true
 *         description: Geographic area for search.
 *     responses:
 *       200:
 *         description: Success
 */
router.get("/daily-trends", google_trends_controller_1.default.getDailyTrends);
exports.default = router;
