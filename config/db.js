const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      UseNewUrlParser: true,
      useUnifiedTopology: true,
    })

    console.log(`mongodb connected:${conn.connection.host}`.cyan.underline.bold)
  } catch (err) {
    console.log(`error:${err.message}`.red)
    process.exit(1)
  }
}

module.exports = connectDB
