import { Request, Response, Router } from 'express'

/**
 *
 * @param {Router} router Router
 * @returns {void}
 */
export function healthCheckRouter(router: Router): void {
  router.get('/healthcheck', async (req: Request, res: Response) => {
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
}
