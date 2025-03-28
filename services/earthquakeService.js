const axios=require('axios');

const USGS_BASE_URL='https://earthquake.usgs.gov/fdsnws/event/1/query';

async function fetchEarthquakeData(queryParams){
    try {
        //merging default and user-defined query params
        const defaultParams={
            format:'geojson',
        }
        const params={...defaultParams, ...queryParams};

        //making the external API request
        const response=await axios.get(USGS_BASE_URL, {params})
        return response.data
    } catch (error) {
        console.error('Error fetching earthquake data', error)
        throw new Error('Failed to fetch data from USGS')
;        
    }
}

module.exports={
fetchEarthquakeData
}