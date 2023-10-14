import { Request, Response } from "express";
import { GoogleTrendsService } from "../services/google-trends-service";

class GoogleTrendsController {
  public static async getInterestOverTime(req: Request, res: Response): Promise<void> {
    const { keyword, startTime, endTime, geo } = req.query;

    try {
      const data = await GoogleTrendsService.fetchInterestOverTime(keyword as string, startTime as unknown as Date, endTime as unknown as Date, geo as string);
      res.json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Controller Error: Failed to fetch interest over time data from Google Trends API" });
    }
  }

  public static async getInterestByRegion(req: Request, res: Response): Promise<void> {
    const { keyword, startTime, endTime, geo, resolution } = req.query;

    try {
      const data = await GoogleTrendsService.fetchInterestByRegion(keyword as string, startTime as unknown as Date, endTime as unknown as Date, geo as string, resolution as string);
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: "Controller Error: Failed to fetch interest by region data from Google Trends API" });
    }
  }

  public static async getDailyTrends(req: Request, res: Response): Promise<void> {
    const { geo, trendDate } = req.query;

    let parsedTrendDate: Date | undefined;
    if (trendDate) parsedTrendDate = new Date(trendDate as string);
    try {
      const data = await GoogleTrendsService.fetchDailyTrends(geo as string, parsedTrendDate);
      res.json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Controller Error: Failed to fetch daily trends data from Google Trends API" });
    }
  }
  public static async getRealTimeTrends(req: Request, res: Response): Promise<void> {
    const { geo, hl, timezone, category } = req.query;

    try {
      const data = await GoogleTrendsService.fetchRealTimeTrends(geo as string, hl as string, timezone as unknown as number, category as string);
      res.json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Controller Error: Failed to fetch real-time trends data from Google Trends API" });
    }
  }

  public static async getRelatedQueries(req: Request, res: Response): Promise<void> {
    const { keyword, startTime, endTime, geo, hl, timezone, category } = req.query;

    try {
      const data = await GoogleTrendsService.fetchRelatedQueries(keyword as string, startTime as unknown as Date, endTime as unknown as Date, geo as string, hl as string, timezone as unknown as number, category as unknown as number);

      res.json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Controller Error: Failed to fetch related queries data from Google Trends API" });
    }
  }

  public static async getRelatedTopics(req: Request, res: Response): Promise<void> {
    const { keyword, startTime, endTime, geo, hl, timezone, category } = req.query;

    try {
      const data = await GoogleTrendsService.fetchRelatedTopics(keyword as string, startTime as unknown as Date, endTime as unknown as Date, geo as string, hl as string, timezone as unknown as number, category as unknown as number);

      res.json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Controller Error: Failed to fetch related topics data from Google Trends API" });
    }
  }
}

export default GoogleTrendsController;

