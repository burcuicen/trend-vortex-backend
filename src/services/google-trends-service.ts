const googleTrends = require("google-trends-api");

class GoogleTrendsService {
  // Method to fetch interest over time data
  public static async fetchInterestOverTime(keyword: string): Promise<any> {
    try {
      let keywords = [] as string[];
      const isArray = keyword.startsWith('Array(') && keyword.endsWith(')')
      if(isArray) {
        const innerKeywords = keyword.substring(6, keyword.length - 1);
        keywords = innerKeywords.split(',').map((k) => k.trim());
      }
      const query = isArray ? { keyword: keywords } : { keyword };

      const results = await googleTrends.interestOverTime(query);

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

