// Dependencies
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')

// import config
const config = require('./config/database')

// connect to Database
mongoose.connect(config.database, { useNewUrlParser: true, useUnifiedTopology: true })

// on Connection
mongoose.connection.on('connected', () => {
  console.log('Connected to databae :' + config.database)
})

// on error
mongoose.connection.on('error', (err) => {
  console.log('Connected error :' + err)
})

// init Node Express app
const app = express()

// import the controller
const test = require('./routes/test')
const accounts = require('./routes/accounts')
const dashboard = require('./routes/dashboard')

// Port Number  
// 3000
const port = process.env.PORT || 4100

// CORS Middlware : it take care of request access
app.use(cors())

// Set Static Folder
// app.use(express.static(path.join(__dirname, 'public')));

// Body Parser Middleware : it maps the request body to an object
app.use(bodyParser.json())


// Assign Middleware (controller) for route Path
app.use('/test', test)
app.use('/accounts', accounts)
app.use('/dashboard', dashboard)

// Index Route
app.get('*', (req, res) => {
  res.send("Invalid Endpoint")
})

// to redirect all other roots to index.html
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public/index.html'));
// });

// Start Server
app.listen(port, () => {
  console.log('Server started on port ' + port)
})