const express = require('express')
const dotenv = require('dotenv').config()
const colors = require('colors')
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const port = process.env.PORT

connectDB()

const app = express()

//middleware to send body in post request
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//goal routes
app.use('/api/goals', require('./routes/goalRoutes'))

//middleware to overite default express error handler
app.use(errorHandler)

//red is from the colors package we installed
app.listen(port, () => console.log(`Server started on port ${port}`.red))