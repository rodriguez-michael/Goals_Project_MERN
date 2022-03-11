const express = require('express')
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware')
const port = process.env.PORT

const app = express()

//middleware to send body in post request
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//goal routes
app.use('/api/goals', require('./routes/goalRoutes'))

//middleware to overite default express error handler
app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))