 const connectTomongo = require('./database')
 const express = require('express'); 
 require('dotenv').config();
 const cors = require('cors');

const app = express()
const port = process.env.PORT || 5000;

 connectTomongo();

 app.use(cors({
  origin : "https://netfliex-iota.vercel.app",
  methods : ['GET','POST','OPTIONS'],
  credentials: true
 }));
 app.options('*', cors()); // 👈 Allow preflight for all routes

 app.use(express.json());
 app.use('/api',require('./routes/auth'));

 app.get('/', (req, res) => {
  res.send('Hello from backend!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

