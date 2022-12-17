import { errorHandler } from '../middlewares/errorHandler'
import { exitHandler } from '../middlewares/exitHandler'
import { logService } from '../services/log.service'

process.on('unhandledRejection', (error: Error) => {
  logService.error(`Unhandled Rejection: ${error.message || error}`)
  throw new Error(error.message)
})

process.on('uncaughtException', (error: Error) => {
  logService.error(`Uncaught Exception: ${error.message}`)
  errorHandler.handleError(error)
})

process.on('SIGTERM', () => {
  logService.error(
    `Process ${process.pid} received SIGTERM: Exiting with code 0`,
  )
  exitHandler.handleExit(0)
})

process.on('SIGINT', () => {
  logService.error(
    `Process ${process.pid} received SIGINT: Exiting with code 0`,
  )
  exitHandler.handleExit(0)
})
