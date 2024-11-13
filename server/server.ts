import express from 'express'
import * as Path from 'node:path'
import cors, { CorsOptions } from 'cors'

import tracksServer from './routes/tracksServer'
import reviews from './routes/reviews'

const server = express()

server.use(express.json())
server.use(cors('*' as CorsOptions))

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
