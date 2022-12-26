import './errors/process'

import http from 'http'

import { config } from 'dotenv'
import { createHttpTerminator } from 'http-terminator'

import { app } from './app'
import { connectDatabase } from './services/database.service'

config()

/**
 * Connect to MongoDB
 */
connectDatabase()

export const server = http.createServer(app)
export const httpTerminator = createHttpTerminator({ server })
