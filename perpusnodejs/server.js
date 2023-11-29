const express = require(`express`);

/** create object that instances of express */ 
const app = express();

/** define port of server */ 
const PORT = 8000;

/** load library cors */ 
const cors = require(`cors`);

/** open CORS policy */ 
app.use(cors());

/** define all routes */
const memberRoute = require(`./routes/member.route`);

/** define prefix for each route */ 
app.use(`/member`, memberRoute);

app.listen(PORT,()=>{
    console.log('connect server ')
})
