const { fetchEarthquakeData } = require('../services/earthquakeService');
const cache = require('../config/cacheConfig');

const axios=require('axios');

const getEarthquakeData = async (req, res) => {
  try {
    // Retrieve data from USGS API
    const data = await fetchEarthquakeData(req.query);

    // Store in cache (use the cacheKey we set in the middleware)
    if (req.cacheKey) {
      cache.set(req.cacheKey, data);
    }

    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getEarthquakeById=async(req, res)=>{
    const {id} =req.params
    //check cache first 
    const cacheData=cache.get(id)
    if(cacheData){
        console.log(`Serving ID ${id} from cache`)
        return res.status(200).json(cacheData)
    }
    try {
        const response=await axios.get('https://earthquake.usgs.gov/fdsnws/event/1/query', {
            params:{
                eventid:id,
                format:'geojson'
            }
        })
        return res.status(200).json(response.data)
    } catch (error) {
        console.error('Error fetching by id:', error.message)
        return res.status(500).json(
            {
                error:'Failed to fetch eqrthquake by ID'
            }
        )
        
    }
}

module.exports = {
  getEarthquakeData,
  getEarthquakeById
};
