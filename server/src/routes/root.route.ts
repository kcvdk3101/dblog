import {
  NextFunction,
  Request,
  Response,
  Router,
  json,
  urlencoded,
} from 'express'

import { errorHandler } from '../middlewares/errorHandler'
import { healthCheckRouter } from '../services/healthcheck.service'
import { logService } from '../services/log.service'

const router = Router()

router.use((req: Request, res: Response, next: NextFunction) => {
  logService.info(`Url:${req.url}`)

  res.on('finish', () => {
    logService.info(`Url:${req.url} - Status:${req.statusCode}`)
  })

  next()
})

router.use(urlencoded({ extended: true }))
router.use(json())

/**
 * Rules of API
 */
router.use((req: Request, res: Response, next: NextFunction) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization',
  )

  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE')
    return res.status(200).json()
  }

  next()
})

router.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  errorHandler.handleError(err, res)
})

/**
 * All routes
 */
router.get('/', (req: Request, res: Response) => {
  res.send('Express + Typescript Server connected')
})

/**
 * Health check
 */
healthCheckRouter(router)

export { router }
