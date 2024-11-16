import express from 'express'
import * as Path from 'node:path'
import cors from 'cors'

import tracksServer from './routes/tracksServer'
import reviews from './routes/reviews'

const server = express()

server.use(express.json())
server.use(cors())
// server.use(express.static(Path.join(__dirname, 'public')))

server.use('/api/v1/tracks', tracksServer)
server.use('/api/v1/reviews', reviews)

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('public')))
  server.use('/assets', express.static(Path.resolve('./dist/assets')))
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}

export default server
