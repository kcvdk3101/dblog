import cors from 'cors'
import express, { Express, Request, Response } from 'express'

import { NotFoundError } from './errors/notFoundError'
import { router } from './routes/root.route'
import { logService } from './services/log.service'

const app: Express = express()

app.use(cors())
app.use(router)

app.use('*', (req: Request, res: Response) => {
  const error = new NotFoundError()
  logService.error(error.message)
  return res.status(error.statusCode).json(error.serializeErrors())
})

export { app }
