# Earthquake API: Caching & Rate Limiting Backend

This backend service wraps the USGS Earthquake API, providing:
- Earthquake listings with filtering
- Earthquake detail by ID
- Caching (to reduce API calls)
- Rate limiting (to prevent abuse)

---

## Features

- **GET /api/earthquakes**
  - Query Params: `starttime`, `endtime`, `minmagnitude`, etc.
  - Caches repeated queries.

- **GET /api/earthquakes/:id**
  - Fetches single event by ID.
  - Uses cache if ID was previously fetched.

---

## Setup

```bash
git clone https://github.com/your-username/earthquake-api.git
cd earthquake-api
npm install
cp .env.example .env
node server.js
