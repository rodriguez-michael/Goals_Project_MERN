const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI)

    //cyan and underline is from the colors package we installed
    console.log(`MongoDB Conencted: ${conn.connection.host}`.cyan.underline)
  }catch(err) {
    console.log(err)
    process.exit(1)
  }
}

module.exports = connectDB