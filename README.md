# Trend Vortex Backend Documentation

This project provides a Node.js service for interacting with the Google Trends API. It allows you to fetch various types of data such as interest over time, interest by region, daily trends, real-time trends, related queries, and related topics.

## Base URL

The base URL for all API requests is: `https://trend-vortex-backend.azurewebsites.net/api`
The swagger documentation for the API can be found at: `https://trend-vortex-backend.azurewebsites.net/api-docs/`


## API Routes

### GET /interest-by-region

Fetches interest data by region.

Parameters:

- `keyword` (required): The search term or keyword to retrieve interest data for.
- `startTime` (optional): The start date of the time range to retrieve data for. Format: `YYYY-MM-DD`.
- `endTime` (optional): The end date of the time range to retrieve data for. Format: `YYYY-MM-DD`.
- `geo` (optional): The geographic location to retrieve data for. For example, `US` for United States.
- `resolution` (optional): The level of geographic granularity. Possible values: `CITY`, `COUNTRY`, `REGION`.

### GET /interest-over-time

Fetches interest data over time.

Parameters:

- `keyword` (required): The search term or keyword to retrieve interest data for.
- `startTime` (optional): The start date of the time range to retrieve data for. Format: `YYYY-MM-DD`.
- `endTime` (optional): The end date of the time range to retrieve data for. Format: `YYYY-MM-DD`.
- `geo` (optional): The geographic location to retrieve data for. For example, `US` for United States.

### GET /real-time

Fetches real-time trending data.

Parameters:

- `geo` (required): The geocode for a country. For example, `US` for United States or `FR` for France.
- `hl` (optional): Preferred language code for results. Defaults to English.
- `timezone` (optional): Preferred timezone. Defaults to the timezone difference from UTC to the current locale.
- `category` (optional): A string corresponding to a particular category to query within. Possible values: `all`, `e` (Entertainment), `b` (Business), `t` (Science/Tech), `m` (Health), `s` (Sports), `h` (Top Stories).

### GET /related-queries

Fetches related queries for a keyword.

Parameters:

- `keyword` (required): The search term or keyword to retrieve related queries for.
- `startTime` (optional): The start date of the time range to retrieve data for. Format: `YYYY-MM-DD`.
- `endTime` (optional): The end date of the time range to retrieve data for. Format: `YYYY-MM-DD`.
- `geo` (optional): The geographic location to retrieve data for. For example, `US` for United States.
- `hl` (optional): Preferred language code for results. Defaults to English.
- `timezone` (optional): Preferred timezone. Defaults to the timezone difference from UTC to the current locale.
- `category` (optional): A number corresponding to a particular category to query within. See the category wiki for a complete list.

### GET /related-topics

Fetches related topics for a keyword.

Parameters:

- `keyword` (required): The search term or keyword to retrieve related topics for.
- `startTime` (optional): The start date of the time range to retrieve data for. Format: `YYYY-MM-DD`.
- `endTime` (optional): The end date of the time range to retrieve data for. Format: `YYYY-MM-DD`.
- `geo` (optional): The geographic location to retrieve data for. For example, `US` for United States.
- `hl` (optional): Preferred language code for results. Defaults to English.
- `timezone` (optional): Preferred timezone. Defaults to the timezone difference from UTC to the current locale.
- `category` (optional): A number corresponding to a particular category to query within. See the category wiki for a complete list.

### GET /daily-trends

Fetches daily trending stories.

Parameters:

- `geo` (required): The geocode for a country. For example, `US` for United States or `FR` for France.
- `trendDate` (optional): The specific date to retrieve trending stories for. Format: `YYYY-MM-DD`.

