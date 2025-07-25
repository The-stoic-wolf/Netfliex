 const connectTomongo = require('./database')
 const express = require('express'); 
 require('dotenv').config();

const app = express()
const port = process.env.PORT || 5000;

 connectTomongo();

const cors = require('cors');
app.use(cors({
  origin: "https://netfliex-iota.vercel.app",  // ✅ yahan frontend ka origin likhna hai
  methods: ["GET", "POST"],
}));

//  app.options('*', cors()); // 👈 Allow preflight for all routes

 app.use(express.json());
 app.use('/api',require('./routes/auth'));

 app.get('/', (req, res) => {
  res.send('Hello from backend!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

