import { parseArrayValues, trendDateChecker } from "../utils";

const googleTrends = require("google-trends-api");

class GoogleTrendsService {
  // Method to fetch interest over time data
  public static async fetchInterestOverTime(keyword: string, startTime?: Date, endTime?: Date, geo?: string): Promise<any> {
    try {
      const queryResult = parseArrayValues(keyword);

      const options: any = { keyword: queryResult };

      if (startTime) options.startTime = startTime;

      if (endTime) options.endTime = endTime;

      if (geo) options.geo = geo;

      const results = await googleTrends.interestOverTime(options);

      if (results) return JSON.parse(results);
    } catch (error) {
      throw new Error("Google Trends API Error: Failed to fetch interest over time data from Google Trends API");
    }
  }

  // Method to fetch interest by region data
  public static async fetchInterestByRegion(keyword: string): Promise<any> {
    try {
      const results = await googleTrends.interestByRegion({ keyword });

      if (results) return JSON.parse(results);
    } catch (error) {
      throw new Error("Google Trends API Error: Failed to fetch interest by region data from Google Trends API");
    }
  }
  //Method to fetch daily trends data
  public static async fetchDailyTrends(geo: string, trendDate?: Date): Promise<any> {
    try {
      const options: any = { geo };
      if (trendDate) {
        trendDateChecker(trendDate);
        options.trendDate = trendDate;
      }
      const results = await googleTrends.dailyTrends(options);

      if (results) return JSON.parse(results);
    } catch (error) {
      throw new Error("Google Trends API Error: Failed to fetch daily trends data from Google Trends API");
    }
  }

  // Method to fetch related queries data
  public static async fetchRelatedQueries(keyword: string): Promise<any> {
    try {
      const results = await googleTrends.relatedQueries({ keyword });
      if (results) return JSON.parse(results);
    } catch (error) {
      throw new Error("Google Trends API Error: Failed to fetch related queries data from Google Trends API");
    }
  }

  // Method to fetch related topics data
  public static async fetchRelatedTopics(keyword: string): Promise<any> {
    try {
      const results = await googleTrends.relatedTopics({ keyword });

      if (results) return JSON.parse(results);
    } catch (error) {
      throw new Error("Google Trends API Error: Failed to fetch related topics data from Google Trends API");
    }
  }
}

export default GoogleTrendsService;

