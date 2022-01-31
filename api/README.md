# Data API

## Function async getPrices()

Returns array of prices:

```json
// Array of 23 to 25 items. Each representing the prices for one hour.
[
  "hour": Number,
  "prices": {
    "SE1": Float,
    "SE2": Float,
    "SE3": Float,
    "SE4": Float
  },
  // ...
]
```

## Prisområden
- SE1: Prisområde Luleå
- SE2: Prisområde Sundsvall
- SE3: Prisområde Stockholm
- SE4: Prisområde Malmö
