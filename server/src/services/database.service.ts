import mongoose from 'mongoose'

import { MONGO_URL } from '../configs/config'
import { logService } from './log.service'

export const connectDatabase = async () => {
  mongoose.set('strictQuery', false)
  await mongoose
    .connect(MONGO_URL, {
      retryWrites: true,
      writeConcern: {
        w: 'majority',
      },
    })
    .then(() => {
      logService.Success('Connected to MongoDB')
    })
    .catch(() => {
      logService.Error('Connection between Server and MongoDB is fail')
    })
}
