# Google Trends API Documentation

This documentation provides an overview of the available routes for the Google Trends API.

## Base URL

The base URL for all API requests is: `http://localhost:3000/api`

## Routes

### GET /interest-over-time

Fetches the interest over time data for a given keyword.

- **URL:** `/interest-over-time`
- **Method:** GET

#### Parameters

| Name      | Type   | Description                |
| --------- | ------ | -------------------------- |
| `keyword` | string | The keyword to search for. |

#### Example

**Request:**

```http
GET /api/interest-over-time?keyword=technology
```

**Response:**

```json
{
  "default": {
    "timelineData": [
      {
        "time": "1072915200",
        "formattedTime": "Jan 2004",
        "formattedAxisTime": "Jan 1, 2004",
        "value": [26],
        "formattedValue": ["26"]
      }
      // More data...
    ],
    "averages": []
  }
}
```

