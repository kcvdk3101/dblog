import dotenv from 'dotenv'
import express, { Express, Request, Response } from 'express'

import { connectDatabase } from './src/services/database.service'
import { logService } from './src/services/log.service'

dotenv.config()

const app: Express = express()
const port = process.env.PORT || 8000

// Connect to MongoDB
connectDatabase()

app.get('/', (req: Request, res: Response) => {
  res.send('Express + Typescript Server connected')
})

app.listen(port, () => {
  logService.Info(`Server is running at https://localhost:${port}`)
})
