import { httpTerminator, server } from '../server'
import { logService } from '../services/log.service'

class ExitHandler {
  public async handleExit(code: number, timeout = 5000): Promise<void> {
    try {
      setTimeout(() => {
        logService.error(`Forcing a shutdown with code ${code}`)
        process.exit(code)
      }, timeout).unref()

      if (server.listening) {
        logService.info('Terminating HTTP connections')
        await httpTerminator.terminate()
      }

      logService.info(`Exiting gracefully with code ${code}`)
      process.exit(code)
    } catch (error) {
      logService.error(`Forcing exit with code ${code}`)
      process.exit(code)
    }
  }
}

export const exitHandler = new ExitHandler()
