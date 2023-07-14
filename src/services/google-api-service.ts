const googleTrends = require("google-trends-api");

export class GoogleAPI {
  public static async fetchInterestOverTimeFromGoogle(options: any): Promise<any> {
    try {
      const results = await googleTrends.interestOverTime(options);

      if (results) return JSON.parse(results);
    } catch (error: any) {
      return error.message as string;
    }
  }
  public static async fetchInterestByRegionFromGoogle(options: any): Promise<any> {
    try {
      const results = await googleTrends.interestByRegion(options);

      if (results) return JSON.parse(results);
    } catch (error: any) {
      return error.message as string;
    }
  }
  public static async fetchDailyTrendsFromGoogle(options: any): Promise<any> {
    try {
      const results = await googleTrends.dailyTrends(options);

      if (results) return JSON.parse(results);
    } catch (error: any) {
      return error.message as string;
    }
  }
  public static async fetchRealTimeTrendsFromGoogle(options: any): Promise<any> {
    try {
      const results = await googleTrends.realTimeTrends(options);

      if (results) return JSON.parse(results);
    } catch (error: any) {
      return error.message as string;
    }
  }
  public static async fetchRelatedQueriesFromGoogle(options: any): Promise<any> {
    try {
      const results = await googleTrends.relatedQueries(options);

      if (results) return JSON.parse(results);
    } catch (error: any) {
      return error.message as string;
    }
  }
  public static async fetchRelatedTopicsFromGoogle(options: any): Promise<any> {
    try {
      const results = await googleTrends.relatedTopics(options);

      if (results) return JSON.parse(results);
    } catch (error: any) {
      return error.message as string;
    }
  }
}

