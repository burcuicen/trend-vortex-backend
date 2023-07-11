import { Request, Response } from "express";
import GoogleTrendsService from "../services/google-trends-service";

class GoogleTrendsController {
  public static async getInterestOverTime(req: Request, res: Response): Promise<void> {
    const { keyword } = req.query;

    try {
      const data = await GoogleTrendsService.fetchInterestOverTime(keyword as string);
      res.json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Controller Error: Failed to fetch interest over time data from Google Trends API" });
    }
  }

  public static async getInterestByRegion(req: Request, res: Response): Promise<void> {
    const { keyword } = req.query;

    try {
      const data = await GoogleTrendsService.fetchInterestByRegion(keyword as string);
      res.json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Controller Error: Failed to fetch interest by region data from Google Trends API" });
    }
  }

  public static async getRelatedQueries(req: Request, res: Response): Promise<void> {
    const { keyword } = req.query;

    try {
      const data = await GoogleTrendsService.fetchRelatedQueries(keyword as string);
      res.json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Controller Error: Failed to fetch related queries data from Google Trends API" });
    }
  }

  public static async getRelatedTopics(req: Request, res: Response): Promise<void> {
    const { keyword } = req.query;

    try {
      const data = await GoogleTrendsService.fetchRelatedTopics(keyword as string);
      res.json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Controller Error: Failed to fetch related topics data from Google Trends API" });
    }
  }
}

export default GoogleTrendsController;

