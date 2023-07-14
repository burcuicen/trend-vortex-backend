import { parseArrayValues, trendDateChecker } from "../utils";

import { GoogleAPI } from "../services/google-api-service";
export class GoogleTrendsService {
  private static async googleAPIErrorHandler(result: any, method: any) {
    let counterRequest = 0;
    let finalResult = result;
    while (typeof finalResult === "string") {
      counterRequest++;
      finalResult = await method;
      if (counterRequest > 10) throw new Error();
    }
    return finalResult;
  }

  // Method to fetch interest over time data
  public static async fetchInterestOverTime(keyword: string, startTime?: Date, endTime?: Date, geo?: string): Promise<any> {
    try {
      const queryResult = parseArrayValues(keyword);

      const options: any = { keyword: queryResult };

      if (startTime) options.startTime = startTime;

      if (endTime) options.endTime = endTime;

      if (geo) options.geo = geo;

      let results = await GoogleAPI.fetchInterestOverTimeFromGoogle(options);
      await this.googleAPIErrorHandler(results, GoogleAPI.fetchInterestOverTimeFromGoogle(options));
      if (results) return results;
    } catch (error: any) {
      throw new Error("Google Trends API Error: Failed to fetch interest over time data from Google Trends API");
    }
  }

  // Method to fetch interest by region data
  public static async fetchInterestByRegion(keyword: string, startTime?: Date, endTime?: Date, geo?: string, resolution?: string): Promise<any> {
    try {
      const queryResult = parseArrayValues(keyword);

      const options: any = { keyword: queryResult };
      if (startTime) options.startTime = startTime;
      if (endTime) options.endTime = endTime;
      if (geo) options.geo = geo;
      if (resolution) options.resolution = resolution;

      let results = await GoogleAPI.fetchInterestByRegionFromGoogle(options);

      results = await this.googleAPIErrorHandler(results, GoogleAPI.fetchInterestByRegionFromGoogle(options));

      if (results) return results;
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
      const results = await GoogleAPI.fetchDailyTrendsFromGoogle(options);
      await this.googleAPIErrorHandler(results, GoogleAPI.fetchDailyTrendsFromGoogle(options));

      if (results) return results;
    } catch (error) {
      throw new Error("Google Trends API Error: Failed to fetch daily trends data from Google Trends API");
    }
  }
  public static async fetchRealTimeTrends(geo: string, hl?: string, timezone?: number, category?: string): Promise<any> {
    try {
      const options: any = { geo };
      if (hl) options.hl = hl;
      if (timezone) options.timezone = timezone;
      if (category) options.category = category;
      const results = await GoogleAPI.fetchRealTimeTrendsFromGoogle(options);
      await this.googleAPIErrorHandler(results, GoogleAPI.fetchRealTimeTrendsFromGoogle(options));

      if (results) return results;
    } catch (error) {
      throw new Error("Google Trends API Error: Failed to fetch real-time trends data from Google Trends API");
    }
  }

  // Method to fetch related queries data
  public static async fetchRelatedQueries(keyword: string, startTime?: Date, endTime?: Date, geo?: string, hl?: string, timezone?: number, category?: number): Promise<any> {
    try {
      const options = { keyword, startTime, endTime, geo, hl, timezone, category };
      const results = await GoogleAPI.fetchRelatedQueriesFromGoogle(options);
      await this.googleAPIErrorHandler(results, GoogleAPI.fetchRelatedQueriesFromGoogle(options));

      if (results) return results;
    } catch (error) {
      throw new Error("Google Trends API Error: Failed to fetch related queries data from Google Trends API");
    }
  }

  // Method to fetch related topics data
  public static async fetchRelatedTopics(keyword: string, startTime?: Date, endTime?: Date, geo?: string, hl?: string, timezone?: number, category?: number): Promise<any> {
    try {
      const options = { keyword, startTime, endTime, geo, hl, timezone, category };
      const results = await GoogleAPI.fetchRelatedTopicsFromGoogle(options);
      await this.googleAPIErrorHandler(results, GoogleAPI.fetchRelatedTopicsFromGoogle(options));

      if (results) return results;
    } catch (error) {
      throw new Error("Google Trends API Error: Failed to fetch related topics data from Google Trends API");
    }
  }
}

