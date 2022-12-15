import cors from 'cors'
import express, { Express, Request, Response } from 'express'

const app: Express = express()

app.use(cors())

app.get('/', (req: Request, res: Response) => {
  res.send('Express + Typescript Server connected')
})

export { app }
