const express = require('express')
const dotenv = require('dotenv').config()
const PORT = process.env.PORT || 5000
const cors = require('cors')
const app = express()
const connectDB = require('./config/db')

const path = require('path')
app.use(cors())
connectDB()

app.use(express.json({extended: true}))
app.use('/api/', require('./routes/main'))
app.use('/api/auth', require('./routes/auth'))

app.listen(PORT, () => {
    console.log(`Server START : ${PORT}`)}
)