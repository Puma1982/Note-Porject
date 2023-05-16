const mongoose = require('mongoose');
//To fixe all the warnings in terminal

mongoose.set('strictQuery', false);


//CONNECT TO DB

const connectDB = async() => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`Database Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
  }
}
module.exports = connectDB;