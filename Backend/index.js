const express = require('express'); 
require('dotenv').config();
const connectTomongo = require('./database');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

// ✅ MongoDB connect
connectTomongo();

// ✅ Setup CORS properly
app.use(cors({
  origin: 'https://netfliex-iota.vercel.app',
  methods: ['GET', 'POST', 'OPTIONS'],
  credentials: true
}));

// ✅ Allow preflight requests
app.options('*', cors());

// ✅ Enable JSON parsing
app.use(express.json());

// ✅ Your API routes
app.use('/api', require('./routes/auth'));

// ✅ Test Route
app.get('/', (req, res) => {
  res.send('Hello from backend!');
});

// ✅ Start server
app.listen(port, () => {
  console.log(`Backend running on port ${port}`);
});
