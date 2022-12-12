import http from 'http'

import dotenv from 'dotenv'
import express, { Express, NextFunction, Request, Response } from 'express'
import mongoose from 'mongoose'

import { MONGO_URL } from './config/config'

dotenv.config()

const app: Express = express()
const port = process.env.PORT || 8000

// Connect to mongodb
mongoose.set('strictQuery', false)
mongoose
  .connect(MONGO_URL, {
    retryWrites: true,
    writeConcern: {
      w: 'majority',
    },
  })
  .then((response) => {
    console.log(
      `[server]: Server is connected to MongoDB with HOST: ${response.connection.host}`,
    )
  })
  .catch(() => {
    console.error(`[server]: Connection between Server and MongoDB is fail`)
  })

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.send('Express + Typescript Server connected')
})

app.listen(port, () => {
  console.log(`[server]: Server is running at https://localhost:${port}`)
})
