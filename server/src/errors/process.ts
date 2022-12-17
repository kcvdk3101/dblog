import { errorHandler } from '../middlewares/errorHandler'
import { logService } from '../services/log.service'

process.on('unhandledRejection', (error: Error) => {
  logService.error(`Unhandled Rejection: ${error.message || error}`)
  throw new Error(error.message)
})

process.on('uncaughtException', (error: Error) => {
  logService.error(`Uncaught Exception: ${error.message}`)
  errorHandler.handleError(error)
})
