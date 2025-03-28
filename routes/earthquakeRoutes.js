const express = require('express');
const router = express.Router();

const { getEarthquakeData, getEarthquakeById } = require('../controllers/earthquakeConroller');
const checkCache = require('../middleware/cacheMiddlewear');
const apiLimiter = require('../middleware/rateLimitMiddleware');

// Apply rate limiting to all routes here
router.use(apiLimiter);

// GET /api/earthquakes
router.get('/', checkCache, getEarthquakeData);
router.get('/:id', getEarthquakeById)

module.exports = router;
