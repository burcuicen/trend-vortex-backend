import { parseArrayValues, trendDateChecker } from "../utils";
import { GoogleAPI } from "../services/google-api-service";

export class GoogleTrendsService {
  private static async googleAPIErrorHandler(method: any, options: any) {
    let counterRequest = 0;
    let result = await method(options);
    while (typeof result === "string") {
      counterRequest++;
      result = await method(options);
      if (counterRequest > 10) throw new Error();
    }
    return result;
  }

  private static async fetch(options: any, method: any) {
    try {
      let results = await this.googleAPIErrorHandler(method, options);
      if (results) return results;
    } catch (error: any) {
      throw new Error(`Google Trends API Error: Failed to fetch data from Google Trends API`);
    }
  }

  public static async fetchInterestOverTime(keyword: string, startTime?: Date, endTime?: Date, geo?: string): Promise<any> {
    const queryResult = parseArrayValues(keyword);
    const options: any = { keyword: queryResult };
    if (startTime) options.startTime = startTime;
    if (endTime) options.endTime = endTime;
    if (geo) options.geo = geo;

    return this.fetch(options, GoogleAPI.fetchInterestOverTimeFromGoogle);
  }

  public static async fetchInterestByRegion(keyword: string, startTime?: Date, endTime?: Date, geo?: string, resolution?: string): Promise<any> {
    const queryResult = parseArrayValues(keyword);
    const options: any = { keyword: queryResult };
    if (startTime) options.startTime = startTime;
    if (endTime) options.endTime = endTime;
    if (geo) options.geo = geo;
    if (resolution) options.resolution = resolution;

    return this.fetch(options, GoogleAPI.fetchInterestByRegionFromGoogle);
  }

  public static async fetchDailyTrends(geo: string, trendDate?: Date): Promise<any> {
    const options: any = { geo };
    if (trendDate) {
      trendDateChecker(trendDate);
      options.trendDate = trendDate;
    }

    return this.fetch(options, GoogleAPI.fetchDailyTrendsFromGoogle);
  }

  public static async fetchRealTimeTrends(geo: string, hl?: string, timezone?: number, category?: string): Promise<any> {
    const options: any = { geo };
    if (hl) options.hl = hl;
    if (timezone) options.timezone = timezone;
    if (category) options.category = category;

    return this.fetch(options, GoogleAPI.fetchRealTimeTrendsFromGoogle);
  }

  public static async fetchRelatedQueries(keyword: string, startTime?: Date, endTime?: Date, geo?: string, hl?: string, timezone?: number, category?: number): Promise<any> {
    const options = { keyword, startTime, endTime, geo, hl, timezone, category };

    return this.fetch(options, GoogleAPI.fetchRelatedQueriesFromGoogle);
  }

  public static async fetchRelatedTopics(keyword: string, startTime?: Date, endTime?: Date, geo?: string, hl?: string, timezone?: number, category?: number): Promise<any> {
    const options = { keyword, startTime, endTime, geo, hl, timezone, category };

    return this.fetch(options, GoogleAPI.fetchRelatedTopicsFromGoogle);
  }
}

