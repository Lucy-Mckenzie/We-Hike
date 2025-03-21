import express from 'express'
import * as Path from 'node:path'
import cors from 'cors'

import docHikes from './routes/docHikes.ts'
import docHuts from './routes/docHuts.ts'
import reviews from './routes/reviews.ts'
import docAlerts from './routes/docAlerts.ts'

const server = express()

server.use(express.json())
server.use(cors({ origin: 'https://wehikenewzealand.com/' }))

server.use('/api/v1/tracks', docHikes)
server.use('/api/v2/huts', docHuts)
server.use('/api/v2/alerts', docAlerts)
server.use('/api/v1/reviews', reviews)

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('public')))
  server.use('/assets', express.static(Path.resolve('./dist/assets')))
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}

export default server
