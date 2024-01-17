const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')
const morgan = require('morgan')
const mongoose = require('mongoose')

const connectDB = require('./config/db')

dotenv.config({ path: './config/config.env' })
connectDB()

const transactions = require('./routes/transactions')

const app = express()
app.use(express.json())

app.use('/api/v1/transactions', transactions)

// Create Expense Schema
// const expenseSchema = new mongoose.Schema({
//   amount: Number,
//   category: String,
// })

// const Expense = mongoose.model('Expense', expenseSchema)

// // Middleware

// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: true }))

const PORT = process.env.PORT || 5001

// Start Server
app.listen(PORT, () => {
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow
      .bold
  )
})
