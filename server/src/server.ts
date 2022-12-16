import dotenv from 'dotenv'

import { app } from './app'
import { connectDatabase } from './services/database.service'
import { logService } from './services/log.service'

dotenv.config()

const port = process.env.PORT || 8000

/**
 * Connect to MongoDB
 */
connectDatabase()

/**
 * Start server
 */
export const server = app.listen(port, () => {
  logService.info(`Server is running at http://localhost:${port}`)
})
