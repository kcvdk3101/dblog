import cors from 'cors'
import express, { Express, Request, Response } from 'express'

import { HttpCode } from './enum/httpCode'
import { AppError } from './errors/appError'
import { router } from './routes/root.route'

const app: Express = express()

app.use(cors())
app.use(router)

app.use('*', (req: Request, res: Response) => {
  throw new AppError({
    httpCode: HttpCode.NOT_FOUND,
    description: 'Page Not Found',
    isOperational: false,
  })
})

export { app }
