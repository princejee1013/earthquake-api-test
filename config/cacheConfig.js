const NodeCache = require('node-cache');
require('dotenv').config();

const cacheTTL = process.env.CACHE_TTL || 60;

const cache = new NodeCache({ stdTTL: cacheTTL, checkperiod: cacheTTL/2 });

module.exports = cache;
