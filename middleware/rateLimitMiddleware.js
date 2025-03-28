const rateLimit=require('express-rate-limit');
require('dotenv').config();

const rateLimitWindow=process.env.RATE_LIMIT_WINDOW || 15;
const rateLimitMax=process.env.RATE_LIMIT_MAX || 100;

const apiLimiter=rateLimit({
    windowMs:rateLimitWindow*60*1000, //conert minutes to milliseconds
    max:rateLimitMax,
    message:{
        error:'Too many requests, please try again later.'
    }
})

module.exports=apiLimiter;
