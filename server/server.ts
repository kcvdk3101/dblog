import dotenv from 'dotenv'
import express, { Express, NextFunction, Request, Response } from 'express'

dotenv.config()

const app: Express = express()
const port = process.env.PORT ?? 8000

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.send('Express + Typescript Server connected')
})

app.listen(port, () => {
  console.log(`[server]: Server is running at https://localhost:${port}`)
})
