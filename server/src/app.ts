import cors from 'cors'
import express, { Express, Request, Response } from 'express'

import { HttpCode } from './enum/httpCode'
import { AppError } from './errors/appError'
import { router } from './routes/root.route'
import { logService } from './services/log.service'

const app: Express = express()
const port = process.env.PORT || 8000

app.use(cors())
app.use(router)

app.use('*', (req: Request, res: Response) => {
  throw new AppError({
    httpCode: HttpCode.NOT_FOUND,
    description: 'Page Not Found',
    isOperational: false,
  })
})

app.listen(port, () => {
  logService.info(`Server is running at http://localhost:${port}`)
})

export { app }
