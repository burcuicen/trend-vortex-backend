# Google Trends API Documentation

This documentation provides an overview of the available routes for the Google Trends API.

## Base URL

The base URL for all API requests is: `http://localhost:3000/api`

## API Routes

### 1. GET /interest-by-region

Fetches interest data by region.

Parameters:
- `keyword` (required): The search term or keyword to retrieve interest data for.
- `startTime` (optional): The start date of the time range to retrieve data for. Format: `YYYY-MM-DD`.
- `endTime` (optional): The end date of the time range to retrieve data for. Format: `YYYY-MM-DD`.
- `geo` (optional): The geographic location to retrieve data for. For example, `US` for United States.
- `resolution` (optional): The level of geographic granularity. Possible values: `CITY`, `COUNTRY`, `REGION`.

### 2. GET /interest-over-time

Fetches interest data over time.

Parameters:
- `keyword` (required): The search term or keyword to retrieve interest data for.
- `startTime` (optional): The start date of the time range to retrieve data for. Format: `YYYY-MM-DD`.
- `endTime` (optional): The end date of the time range to retrieve data for. Format: `YYYY-MM-DD`.
- `geo` (optional): The geographic location to retrieve data for. For example, `US` for United States.

### 3. GET /real-time

Fetches real-time trending data.

Parameters:
- `geo` (required): The geocode for a country. For example, `US` for United States or `FR` for France.
- `hl` (optional): Preferred language code for results. Defaults to English.
- `timezone` (optional): Preferred timezone. Defaults to the timezone difference from UTC to the current locale.
- `category` (optional): A string corresponding to a particular category to query within. Possible values: `all`, `e` (Entertainment), `b` (Business), `t` (Science/Tech), `m` (Health), `s` (Sports), `h` (Top Stories).

### 4. GET /related-queries

Fetches related queries for a keyword.

Parameters:
- `keyword` (required): The search term or keyword to retrieve related queries for.
- `startTime` (optional): The start date of the time range to retrieve data for. Format: `YYYY-MM-DD`.
- `endTime` (optional): The end date of the time range to retrieve data for. Format: `YYYY-MM-DD`.
- `geo` (optional): The geographic location to retrieve data for. For example, `US` for United States.
- `hl` (optional): Preferred language code for results. Defaults to English.
- `timezone` (optional): Preferred timezone. Defaults to the timezone difference from UTC to the current locale.
- `category` (optional): A number corresponding to a particular category to query within. See the category wiki for a complete list.

### 5. GET /related-topics

Fetches related topics for a keyword.

Parameters:
- `keyword` (required): The search term or keyword to retrieve related topics for.
- `startTime` (optional): The start date of the time range to retrieve data for. Format: `YYYY-MM-DD`.
- `endTime` (optional): The end date of the time range to retrieve data for. Format: `YYYY-MM-DD`.
- `geo` (optional): The geographic location to retrieve data for. For example, `US` for United States.
- `hl` (optional): Preferred language code for results. Defaults to English.
- `timezone` (optional): Preferred timezone. Defaults to the timezone difference from UTC to the current locale.
- `category` (optional): A number corresponding to a particular category to query within. See the category wiki for a complete list.

### 6. GET /daily-trends

Fetches daily trending stories.

Parameters:
- `geo` (required): The geocode for a country. For example, `US` for United States or `FR` for France.
- `trendDate` (optional): The specific date to retrieve trending stories for. Format: `YYYY-MM-DD`.

## License

This project is licensed under the [MIT License](LICENSE).
