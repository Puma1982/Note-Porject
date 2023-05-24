const mongoose = require('mongoose'); //This line imports the Mongoose library, which is a popular Object-Document Mapping (ODM) library for MongoDB in Node.js.
mongoose.set('strictQuery', false);
//This line sets the 'strictQuery' option of Mongoose to false. By default, Mongoose's strict mode is enabled, which means it throws an error if you try to query MongoDB with fields that are not defined in the schema. By setting strictQuery to false, you disable this behavior and allow querying with undefined fields.

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