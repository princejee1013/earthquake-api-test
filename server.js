require('dotenv').config();
const express = require('express');
const app = express();
const earthquakeRoutes=require('./routes/earthquakeRoutes');


//middleware
app.use(express.json());

//routes
app.use('/api/earthquakes', earthquakeRoutes);

//health check endpoint
app.get('/', (req, res) => {
    res.send('Erthquake API is running');
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})
