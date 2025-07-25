const mongoose = require('mongoose');
require('dotenv').config();

const connectTomongo = async ()=>{
   try {
     await mongoose.connect(process.env.MONGO_URI)
     console.log('connected successfully');
   } catch (error) {
     console.log('something went wrong',error);
   }
}

module.exports = connectTomongo;