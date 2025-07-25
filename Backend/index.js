 const connectTomongo = require('./database')
 const express = require('express'); 
 require('dotenv').config();
 const cors = require('cors');

const app = express()
const port = process.env.port || 5000;

 connectTomongo();

 app.use(cors({
  origin : "*",
  methods : ['GET','POST']
 }));
 app.use(express.json());
 app.use('/api',require('./routes/auth'));

 app.get('/', (req, res) => {
  res.send('Hello from backend!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

