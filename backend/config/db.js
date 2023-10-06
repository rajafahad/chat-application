const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB connection is successfull : ${conn.connection.host}`);
  } catch (error) {
    console.log(`Mongodb connection error => ${error}`);
    process.exit();
  }
};
module.exports = connectDB;
