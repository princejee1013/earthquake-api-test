const cache=require('../config/cacheConfig');

//we build cache key based on the request query parameters to ensure each querry is cached separately

const checkCache=(req, res, next)=>{
    const cacheKey=JSON.stringify(req.query) || 'default';
    const cacheData=cache.get(cacheKey);
    if(cacheData){
        console.log('Serving from cache');
        return res.status(200).json(cacheData);

    }
    
    req.cacheKey=cacheKey;
    next();

};

module.exports=checkCache;




