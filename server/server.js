const express = require('express')
const path = require('path')

const countryRoutes = require('./routes/countries')
const cityRoutes = require('./routes/city')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/countries', countryRoutes)
server.use('/api/v1/cities', cityRoutes)

server.get('*', (req, res) => {
  res.sendFile(path.resolve('server/public/index.html'))
})

module.exports = server
