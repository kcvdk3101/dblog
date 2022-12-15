import { NextFunction, Request, Response, Router } from 'express'

const router = Router()
router.get('/', async (req: Request, res: Response, next: NextFunction) => {
  const healthcheck = {
    uptime: process.uptime(),
    message: 'OK',
    timestamp: Date.now(),
  }
  try {
    res.send(healthcheck)
  } catch (error) {
    const hasError = error as string
    healthcheck.message = hasError
    res.status(503).send()
  }
})

// export router with all routes included
module.exports = router
